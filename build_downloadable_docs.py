import re
import os
import subprocess

def md_to_html(md_text):
    lines = md_text.splitlines()
    html_lines = []
    in_code_block = False
    code_lang = ""
    code_buf = []
    in_table = False
    table_buf = []

    def flush_table():
        nonlocal in_table, table_buf
        if not table_buf:
            in_table = False
            return ""
        out = ['<div class="table-responsive"><table>']
        # Header
        header_cols = [c.strip() for c in table_buf[0].split('|')[1:-1]]
        out.append('<thead><tr>')
        for c in header_cols:
            out.append(f'<th>{inline_format(c)}</th>')
        out.append('</tr></thead><tbody>')
        
        # Rows (skip separator if present)
        start_row = 1
        if len(table_buf) > 1 and re.match(r'^\s*\|?\s*:?-+:?\s*\|', table_buf[1]):
            start_row = 2
            
        for row in table_buf[start_row:]:
            cols = [c.strip() for c in row.split('|')[1:-1]]
            out.append('<tr>')
            for c in cols:
                out.append(f'<td>{inline_format(c)}</td>')
            out.append('</tr>')
            
        out.append('</tbody></table></div>')
        in_table = False
        table_buf = []
        return '\n'.join(out)

    def inline_format(text):
        # Escape html entities
        text = text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        # Backtick emphasis rendered as clean bold text (no code boxes)
        text = re.sub(r'`([^`]+)`', r'<strong>\1</strong>', text)
        # Bold: **bold**
        text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)
        # Italic: *italic*
        text = re.sub(r'\*([^*]+)\*', r'<em>\1</em>', text)
        # Links: [text](url)
        text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', text)
        return text

    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Code block fences
        if line.startswith('```'):
            if in_code_block:
                # End of code block
                html_lines.append(f'<pre><code class="language-{code_lang}">' + '\n'.join(code_buf) + '</code></pre>')
                in_code_block = False
                code_buf = []
            else:
                if in_table:
                    html_lines.append(flush_table())
                in_code_block = True
                code_lang = line[3:].strip()
                code_buf = []
            i += 1
            continue
            
        if in_code_block:
            # Escape HTML in code block
            escaped = line.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
            code_buf.append(escaped)
            i += 1
            continue
            
        # Table lines
        if line.strip().startswith('|') and line.strip().endswith('|'):
            if not in_table:
                in_table = True
                table_buf = []
            table_buf.append(line.strip())
            i += 1
            continue
        else:
            if in_table:
                html_lines.append(flush_table())

        stripped = line.strip()
        if not stripped:
            i += 1
            continue
            
        # Headers
        if stripped.startswith('# '):
            html_lines.append(f'<h1>{inline_format(stripped[2:])}</h1>')
        elif stripped.startswith('## '):
            html_lines.append(f'<h2>{inline_format(stripped[3:])}</h2>')
        elif stripped.startswith('### '):
            html_lines.append(f'<h3>{inline_format(stripped[4:])}</h3>')
        elif stripped.startswith('#### '):
            html_lines.append(f'<h4>{inline_format(stripped[5:])}</h4>')
        elif stripped.startswith('##### '):
            html_lines.append(f'<h5>{inline_format(stripped[6:])}</h5>')
        elif stripped == '---':
            html_lines.append('<hr />')
        elif stripped.startswith('- ') or stripped.startswith('* '):
            # Check indentation for nested lists
            indent = len(line) - len(line.lstrip())
            css_class = 'nested-li' if indent >= 2 else ''
            html_lines.append(f'<li class="{css_class}">{inline_format(stripped[2:])}</li>')
        elif re.match(r'^\d+\.\s', stripped):
            indent = len(line) - len(line.lstrip())
            num_match = re.match(r'^(\d+\.)\s+(.*)', stripped)
            step_num = num_match.group(1)
            content = num_match.group(2)
            css_class = 'step-item nested-step' if indent >= 2 else 'step-item'
            html_lines.append(f'<div class="{css_class}"><span class="step-num">{step_num}</span><span>{inline_format(content)}</span></div>')
        else:
            html_lines.append(f'<p>{inline_format(stripped)}</p>')
            
        i += 1
        
    if in_table:
        html_lines.append(flush_table())
        
    return '\n'.join(html_lines)


def build_full_html(body_html):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CollabCRM People Training Module - Developer Flow & Field Specification</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {{
      --primary: #2563eb;
      --primary-hover: #1d4ed8;
      --slate-50: #f8fafc;
      --slate-100: #f1f5f9;
      --slate-200: #e2e8f0;
      --slate-300: #cbd5e1;
      --slate-600: #475569;
      --slate-700: #334155;
      --slate-800: #1e293b;
      --slate-900: #0f172a;
    }}
    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}
    body {{
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: #f8fafc;
      color: var(--slate-800);
      line-height: 1.65;
      font-size: 14.5px;
      padding-bottom: 80px;
    }}
    /* Top Toolbar */
    .top-toolbar {{
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--slate-200);
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }}
    .toolbar-title {{
      font-weight: 700;
      font-size: 14px;
      color: var(--slate-900);
      display: flex;
      align-items: center;
      gap: 8px;
    }}
    .toolbar-actions {{
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }}
    .btn {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.15s ease-in-out;
      border: 1px solid transparent;
    }}
    .btn-primary {{
      background-color: var(--primary);
      color: #ffffff;
    }}
    .btn-primary:hover {{
      background-color: var(--primary-hover);
      box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
    }}
    .btn-secondary {{
      background-color: #ffffff;
      color: var(--slate-700);
      border-color: var(--slate-300);
    }}
    .btn-secondary:hover {{
      background-color: var(--slate-50);
      color: var(--slate-900);
    }}
    /* Main Container */
    .container {{
      max-width: 980px;
      margin: 32px auto;
      background: #ffffff;
      border: 1px solid var(--slate-200);
      border-radius: 12px;
      padding: 48px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }}
    /* Typography */
    h1 {{
      font-size: 26px;
      font-weight: 800;
      color: var(--slate-900);
      margin-bottom: 16px;
      letter-spacing: -0.02em;
      border-bottom: 2px solid var(--slate-100);
      padding-bottom: 12px;
    }}
    h2 {{
      font-size: 20px;
      font-weight: 700;
      color: var(--slate-900);
      margin-top: 36px;
      margin-bottom: 14px;
      letter-spacing: -0.01em;
      border-bottom: 1px solid var(--slate-200);
      padding-bottom: 8px;
    }}
    h3 {{
      font-size: 16px;
      font-weight: 700;
      color: var(--slate-800);
      margin-top: 24px;
      margin-bottom: 10px;
    }}
    h4 {{
      font-size: 14.5px;
      font-weight: 600;
      color: var(--slate-700);
      margin-top: 18px;
      margin-bottom: 8px;
    }}
    p {{
      margin-bottom: 14px;
      color: var(--slate-700);
    }}
    hr {{
      border: 0;
      border-top: 1px solid var(--slate-200);
      margin: 32px 0;
    }}
    li {{
      margin-left: 24px;
      margin-bottom: 6px;
      color: var(--slate-700);
    }}
    li.nested-li {{
      margin-left: 48px;
    }}
    .step-item {{
      display: flex;
      align-items: baseline;
      gap: 8px;
      margin-left: 12px;
      margin-bottom: 6px;
      color: var(--slate-700);
    }}
    .step-item.nested-step {{
      margin-left: 36px;
    }}
    .step-num {{
      font-weight: 700;
      color: var(--slate-900);
      min-width: 20px;
    }}
    code {{
      font-family: 'JetBrains Mono', Consolas, monospace;
      font-size: 12.5px;
      background-color: #f1f5f9;
      color: #0f172a;
      padding: 2px 6px;
      border-radius: 4px;
      border: 1px solid #e2e8f0;
    }}
    pre {{
      background-color: #0f172a;
      color: #f8fafc;
      padding: 16px;
      border-radius: 8px;
      overflow-x: auto;
      margin: 16px 0 20px 0;
      font-size: 12.5px;
      font-family: 'JetBrains Mono', Consolas, monospace;
      line-height: 1.5;
    }}
    pre code {{
      background: transparent;
      color: inherit;
      padding: 0;
      border: none;
    }}
    /* Tables */
    .table-responsive {{
      overflow-x: auto;
      margin: 18px 0 24px 0;
      border: 1px solid var(--slate-200);
      border-radius: 8px;
    }}
    table {{
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 13.5px;
    }}
    th {{
      background-color: #f8fafc;
      color: var(--slate-700);
      font-weight: 700;
      padding: 10px 14px;
      border-bottom: 1px solid var(--slate-200);
    }}
    td {{
      padding: 10px 14px;
      border-bottom: 1px solid var(--slate-100);
      color: var(--slate-700);
    }}
    tr:last-child td {{
      border-bottom: none;
    }}
    tr:nth-child(even) td {{
      background-color: #fcfdfe;
    }}
    strong {{
      font-weight: 600;
      color: var(--slate-900);
    }}
    /* Print Styles */
    @page {{
      size: A4;
      margin: 14mm 15mm;
    }}
    @media print {{
      .top-toolbar {{
        display: none !important;
      }}
      body {{
        background: #ffffff;
        padding-bottom: 0;
      }}
      .container {{
        border: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        max-width: 100%;
      }}
      h1, h2, h3, h4 {{
        page-break-after: avoid;
      }}
      table, pre {{
        page-break-inside: avoid;
      }}
    }}
  </style>
</head>
<body>
  <div class="top-toolbar">
    <div class="toolbar-title">
      <span>📋</span>
      <span>CollabCRM Training Module — Developer Specification</span>
    </div>
    <div class="toolbar-actions">
      <a href="/DEVELOPER_FLOW_AND_FIELD_SPECIFICATION.pdf" download class="btn btn-primary" title="Download Official PDF">
        <span>📥</span>
        <span>Download PDF</span>
      </a>
      <a href="/docs/DEVELOPER_FLOW_AND_FIELD_SPECIFICATION.md" download class="btn btn-secondary" title="Download Raw Markdown">
        <span>📄</span>
        <span>Download Markdown</span>
      </a>
      <button onclick="window.print()" class="btn btn-secondary" title="Print or Save via Browser Dialog">
        <span>🖨️</span>
        <span>Print</span>
      </button>
      <a href="/" class="btn btn-secondary" title="Return to Live Application">
        <span>🌐</span>
        <span>Open Prototype</span>
      </a>
    </div>
  </div>

  <main class="container">
    {body_html}
  </main>
</body>
</html>
"""

def main():
    md_path = "docs/DEVELOPER_FLOW_AND_FIELD_SPECIFICATION.md"
    with open(md_path, "r", encoding="utf-8") as f:
        md_text = f.read()

    body_html = md_to_html(md_text)
    full_html = build_full_html(body_html)

    # 1. Write HTML files
    html_target_root = "developer-specification.html"
    html_target_docs = "docs/DEVELOPER_FLOW_AND_FIELD_SPECIFICATION.html"
    
    with open(html_target_root, "w", encoding="utf-8") as f:
        f.write(full_html)
    with open(html_target_docs, "w", encoding="utf-8") as f:
        f.write(full_html)
        
    print(f"Generated HTML: {html_target_root} ({os.path.getsize(html_target_root)} bytes)")

    # 2. Copy markdown to root for clean download URL
    with open("DEVELOPER_FLOW_AND_FIELD_SPECIFICATION.md", "w", encoding="utf-8") as f:
        f.write(md_text)

    # 3. Generate PDF using headless Chrome
    pdf_target_root = "developer-specification.pdf"
    pdf_target_docs = "docs/DEVELOPER_FLOW_AND_FIELD_SPECIFICATION.pdf"
    pdf_target_cap = "DEVELOPER_FLOW_AND_FIELD_SPECIFICATION.pdf"

    print("Compiling PDF with headless Google Chrome...")
    subprocess.run([
        "/usr/bin/google-chrome",
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_target_root}",
        html_target_root
    ], check=True)
    
    # Copy PDF to other target names
    with open(pdf_target_root, "rb") as f_in:
        pdf_bytes = f_in.read()
    with open(pdf_target_docs, "wb") as f_out:
        f_out.write(pdf_bytes)
    with open(pdf_target_cap, "wb") as f_out:
        f_out.write(pdf_bytes)

    print(f"Generated PDF: {pdf_target_root} ({len(pdf_bytes)} bytes)")
    print(f"Generated PDF: {pdf_target_docs} ({len(pdf_bytes)} bytes)")
    print("Done!")

if __name__ == "__main__":
    main()
