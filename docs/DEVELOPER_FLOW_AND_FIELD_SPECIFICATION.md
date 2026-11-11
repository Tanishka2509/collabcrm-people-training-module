# CollabCRM People Training Module - Flow & Field Specification

## Document Overview
This document specifies the complete user navigation flows, screen transitions, form fields, allowed values, validation rules, and behavioral rules for the **CollabCRM People & Training Module**. Every screen, field, allowed value, and interaction described below matches the live system.

---

## SECTION 1: SYSTEM NAVIGATION & SCREEN FLOWS

### Overall Navigation Flow
1. **Application Root (CollabCRM Enterprise Suite)** opens to the **Top Global Navigation Bar** and the **Left Collapsible Navigation Drawer**.
2. **Role Switching Flow (Top Navigation)**:
   - Users can switch between the **Admin / HR Operations View** and the **Employee Learning Portal**.
   - Selecting Employee View navigates directly to **My Training**, where learners open the **3-Tab Course Learning Portal** (`1. Overview`, `2. Learning Resources`, `3. Assessment & Questions`).
3. **Left Navigation Drawer Flow**:
   - **Employees**: Opens the Employee Directory, Employee Profile (with Training History tab), and the Add Employee modal.
   - **Training Hub**: Provides access to Dashboard, Training Management (Training Programmes Catalogue), Assignments, Progress Tracker, and Certificates.
     - From **Training Programmes**: Users can open **Create / Edit Programme** or click View to open **Programme Detail** (General Info, Curriculum & Modules, Enrolled Employees, Status History).
     - From **Assignments**: Users can open the **Assign Training Slideover Modal** or click any record to open **Assignment Details**.
     - From **Certificates**: Users can expand employee rows and open the **Verified Certificate Modal** (signed by Khushi Bhatt, Head of HR).
   - **Config Hub**: Provides quick navigation to **Training Categories** (master category table & Add Category modal) and **Roles & Permissions** (Roles Table, Add Role modal, and Role Permission Matrix).

---

### Flow 1: Top Navigation & Role Switching
- **Global Header**: Contains company branding (CollabCRM People), global search (Search employees, programmes), notifications bell, and the Active User Profile indicator (`Tanya Kapoor - Business Analyst • Employee` or `Ishdeep Anand - Admin • Management`).
- **Role Switching**: Clicking the user badge switches between **Admin/HR View** and **Employee User Role View**. Switching to an Employee role redirects directly to the Employee Dashboard and personal learning workflows.

---

### Flow 2: Navigation Drawer Structure
The left collapsible sidebar provides access to:
1. **Employees**: Complete employee directory with profile cards and the Add Employee modal.
2. **Training Hub**:
   - **Dashboard**: Real-time metrics (Active Learners, Total Assignments, Completion Rate, Average Score), urgent review queue, and performance analytics.
   - **Training Management (Training Programmes)**: Full course catalogue, publication status filters (`All`, `Published`, `Draft`), search, `Status ↕` column (`Published` / `Draft` badges), View & Edit actions, and `+ Add Training` action. (`Archived` status has been removed; once published, only `Active` / `Inactive` toggling can be performed inside Programme Detail.)
   - **Assignments**: Central assignment register with the **ASSIGNED SCOPE** column (Employee, Department, Designation), **41 Total** assignment count, and 5-page pagination (10 items per page). Clicking a record opens **Assignment Details**.
   - **Progress**: Dual-mode tracking (1. Employee-wise Training Completion vs 2. Departmental Compliance Audit), 4 summary cards (Active Learners, Total Assignments, Completed, Avg Score), and CSV export.
   - **Certificates**: Expandable master-detail table defaulting to **collapsed** employee rows with expand/collapse chevrons, plain-text earned programmes, clickable certificate preview, and a right-aligned **Actions** column directly under **All Records**.
3. **Config Hub**:
   - **Config Flyout**: Compact left drawer panel offering quick access to **Training Categories** and **Roles**.
   - **Training Categories**: Master category table and **Add Category** action button placed directly in the top **Training Config** banner header (without extra sub-tab or duplicate table card header rows).
   - **Roles & Permissions**: 11-role access control table (Sr. Business Analyst, Senior Recruiter, CEO, Project Manager, BDE, Admin/HR, Employee, Team leader, Management, Recruiter, BDM), `+ Add Role` slideover modal, and interactive Role Permission Matrix.
*(Note: The legacy Reports drawer item has been removed.)*

---

### Flow 3: Training Management (Create / Edit Programme Flow)
- Accessed via **Training Management > + Add Training** or **Edit Programme**.
- Features an **Auto-Fill Demo** button to populate sample data.
- Structured across three core sections:
  1. **Core Programme Details**: Training Name, Training Category, Difficulty Level, Duration, Learning Objectives, and **Completion Requirements** (multi-select checkbox dropdown with options `Watch all required videos`, `Pass the assessment`, `Submit any required documents`, and `Get approval from the manager`; checkboxes toggle directly without `Clear`/`Done` buttons and the menu closes on outside click).
  2. **Learning Resources Builder**: Dynamic resource list (Video/YouTube, PDF Document, External Link, Article).
  3. **Assessment & Questions Builder**: Enable Assessment toggle, Assessment Title, Passing Score (`Passing Score (%) *` without any `(Strictly > 80% to pass)` text), Max Assessment Attempts, Assessment Description, manual **Total Marks** numeric text field (`Total Marks:`, empty by default), and dynamic multi-format question builder with manual per-question **Marks** (empty by default), live mismatch validation against `Total Marks`, and bordered SVG-icon **Duplicate** / **Delete** buttons.
- Header Actions: **Auto-Fill Demo**, **Cancel**, **Publish Programme** (or **Update & Publish** / **Save Changes**), and text-only **Save as Draft** dropdown option (no floppy disk icon).

---

### Flow 4: Assign Training Slideover Modal Flow
- Accessed via **+ Assign Training** button in Header, Training Programmes, or Assignments table.
- Configurable targeting parameters:
  - Bound **Training Programme** display field (shows selected or first programme).
  - Multi-select **Department** filter with **Select All / Deselect All** and dynamic count.
  - Multi-select **Designation** filter with **Select All / Deselect All**.
  - Multi-select **Employee (s)** list with **Select All / Deselect All** shortcut and reactive count.
  - Mandatory **Start Date** and optional **End Date**.
- Action Buttons: **Auto-Fill**, **Cancel**, and **Assign Training**.

---

### Flow 5: Certificates Verification Flow
- **Master-Detail Expandable Table**:
  - Defaults to **collapsed** employee rows; expanding a row reveals child sub-rows for additional certificates earned by that employee.
  - Master row displays Employee Name, Department/Role, Primary Earned Programme, and an expand/collapse toggle chevron.
  - Plain-text format for programme names (no dropdowns or passed badges inside the cell). Clicking a certificate card or the view icon opens the verified certificate modal.
  - **Right-Aligned Actions**: The **Actions** column header and eye icon buttons are aligned to the far right edge, positioned directly below the **All Records** category filter.
- **Certificate Modal**:
  - Displays the official certificate of appreciation with centered **CollabCRM** brand header, gold seal icon, and dark-navy corner accent.
  - Dynamically bound to the exact completed programme and learner name.
  - **Authorized Signatory**: Configured strictly as **Khushi Bhatt, Head of HR**.

---

### Flow 6: Employee User Role Learning Portal Flow
- Accessed by switching user to **Tanya Kapoor** or navigating to **Training > My Training**.
- **Dynamic State Integration**: Newly created and published programmes from Admin/HR view automatically populate in the employee's training list. **Draft programmes are excluded from all employee views** (Employee Dashboard, My Training, Employee Course Detail, and Employee Profile Training History).
- **Inactive Programme Read-Only Handling**:
  - Programmes marked **Inactive** (including programmes **Completed** first and then set to **Inactive**) remain visible in **My Training** with an **Inactive** status pill.
  - Opening an **Inactive** programme shows an **Inactive warning banner** and disables all actions inside (Start Learning, Mark Complete, external resource links, assessment inputs/selects/checkboxes/radios, Submit Assessment, Retake Assessment, and certificate download).
- **Training History (Employee Profile > Training History)**: Displays enrollment metrics (Total Enrolled, Completed & Passed, In Progress, Certificates Earned), a compact **+ Assign New Training** button, and assigned training records.
- **3-Tab Course Learning Layout**:
  - **Tab 1 — 1. Overview**: Progress bar, completed modules counter, course summary, learning objectives, and configured **Completion Requirements** checklist (e.g., Watch all required videos, Pass the assessment, Submit any required documents, Get approval from the manager — once all required steps are completed, the training is marked **Completed**).
  - **Tab 2 — 2. Learning Resources**: Resource checklist with external link openers and completion toggles (disabled if programme is Inactive).
  - **Tab 3 — 3. Assessment & Questions**:
    - **Header**: Clean title **3. Assessment & Questions** (without any Unlocked tag).
    - **When Assessment Toggle is OFF**:
      - Inside Tab 3: Renders a clean empty container ("No Assessment Configured — Assessment is disabled for this training programme. Learners achieve completion upon completing all configured requirements"). No questions, no scoring inputs, and no submit button are shown.
      - Left Sidebar: Passing Assessment Score displays **N/A (Assessment Disabled)**. Action button displays **Start Learning Modules →** or **Programme Completed ✓** (never prompts to take an assessment).
      - Tab 2 Navigation: Bottom button displays **All Modules Completed ✓**.
    - **When Assessment Toggle is ON**:
      - Inside Tab 3: Renders the exact question types, marks, and options configured by Admin/HR (without per-question Mandatory checkboxes or labels).
      - Left Sidebar: Passing Assessment Score displays **80%** (clean percentage without extra strictly-greater-than hint). Action button displays **Take Assessment →** (or **Download Certificate** upon passing and completing all required steps).
      - Result Status: Displays unified **Completed** badge when assessment passes and programme completes.

---

## SECTION 2: FORM FIELD VALUES & VALIDATION SPECIFICATIONS

### 1. Create Training Programme Form (Training Management > Create Programme)

#### Section 1: Core Programme Details
- **Training Name:**
  - Mandatory: Yes (`*`)
  - Type: Alphanumeric Text Input
  - Max. Length: 120
  - Min. Length: 3
  - Default value: Empty
  - Validation: Cannot be blank or whitespace-only. Must be unique across active programmes.

- **Training Category:**
  - Mandatory: Yes (`*`)
  - Type: Dropdown (Single Select)
  - Default value: Recruitment & HR Operations
  - Allowed Values:
    - Recruitment & HR Operations
    - Engineering & Tech Architecture
    - Sales & Business Development
    - Governance & Compliance
    - Product & Design

- **Difficulty Level:**
  - Mandatory: Yes (`*`)
  - Type: Dropdown (Single Select)
  - Default value: Intermediate
  - Allowed Values:
    - Beginner
    - Intermediate
    - Expert

- **Duration * (`Expected Duration (Hours)`):**
  - Mandatory: Yes (`*`)
  - Type: Numeric (Integer)
  - Max. Value: 200
  - Min. Value: 1
  - Default value: Empty (Placeholder: `e.g. 4`)
  - Validation: Positive integer; decimals or negative values not permitted.

- **Completion Requirements:**
  - Mandatory: No (Optional)
  - Type: Multi-select Checkbox Dropdown (closes on outside click or header re-click; no `Clear` or `Done` footer buttons)
  - Default value: Empty (Placeholder: `Select completion requirements...`)
  - Allowed Values:
    1. `Watch all required videos`
    2. `Pass the assessment`
    3. `Submit any required documents`
    4. `Get approval from the manager`
  - Behavior: Controls what the employee must complete to finish the training. Once all selected required steps are completed, the training status transitions to **Completed**.

---

#### Section 2: Learning Resources (YouTube, External Courses, Websites, Videos, PDFs, Docs) *
- **Resource Type:**
  - Mandatory: Yes
  - Type: Dropdown (Single Select)
  - Default value: Video / YouTube
  - Allowed Values:
    - Video / YouTube
    - PDF Document
    - External Link
    - Article

- **Resource Title:**
  - Mandatory: Yes
  - Type: Alphanumeric Text Input
  - Max. Length: 150
  - Min. Length: 2
  - Default value: Empty in newly added rows (Pre-populated starter rows: "Module 1: Architecture Video Lecture", "Module 2: Implementation Playbook & Guidelines")
  - Validation: Clear module identifier required.

- **Resource URL:**
  - Mandatory: Yes
  - Type: URL Input
  - Max. Length: 500
  - Min. Length: 8
  - Default value: Empty in newly added rows (Placeholder: `https://...`)
  - Validation: Must be a valid web link starting with http:// or https://.

---

#### Section 3: Assessment & Questions Builder
- **Enable Assessment Toggle:**
  - Mandatory: Yes
  - Type: Toggle Switch (Active / Inactive)
  - Default value: Active

- **Assessment Title:**
  - Mandatory: Yes (`*`, when Enable Assessment is Active)
  - Type: Alphanumeric Text Input
  - Max. Length: 120
  - Min. Length: 3
  - Default value: Final Training Assessment

- **Passing Score (%):**
  - Mandatory: Yes (`*`, when Enable Assessment is Active)
  - Type: Numeric (Integer)
  - Max. Value: 100
  - Min. Value: 1
  - Default value: Empty on create (`Auto-Fill Demo` populates `80`)
  - Validation: Benchmark passing percentage (clean label `Passing Score (%) *` without extra `(Strictly > 80% to pass)` helper text).

- **Total Marks (`Questions List` Header):**
  - Mandatory: Yes (when Enable Assessment is Active)
  - Type: Numeric Text Input (`inputMode: numeric`)
  - Default value: Empty (`""`, placeholder: `e.g. 100`; never auto-calculated or auto-filled from question marks)
  - Validation: Must be greater than `0`; user enters target Total Marks manually. Once all added questions have marks `> 0` and `questionsMarksSum !== Number(Total Marks)`, an inline error (`Total question marks (X) do not match Total Marks (Y).`) is displayed and save/publish is blocked. When equal, a `Matched ✓` pill is displayed.

- **Max Assessment Attempts:**
  - Mandatory: Yes (`*`, when Enable Assessment is Active)
  - Type: Numeric (Integer)
  - Max. Value: 10
  - Min. Value: 1
  - Default value: 3
  - Validation: Maximum attempts permitted before supervisor intervention.

- **Assessment Description:**
  - Mandatory: No (Optional)
  - Type: Multi-line Textarea
  - Max. Length: 500
  - Default value: Complete the following questions to evaluate your understanding of this training.

- **Question Statement:**
  - Mandatory: Yes (`*`)
  - Type: Alphanumeric / Multi-line Textarea
  - Max. Length: 1000
  - Min. Length: 5
  - Default value: Empty

- **Question Type:**
  - Mandatory: Yes (`*`)
  - Type: Dropdown (Single Select)
  - Default value: Single Selection (Radio) for newly added questions (default starter assessment includes 6 questions covering all 6 formats)
  - Allowed Values:
    1. Short Text Answer
    2. Long Text Answer
    3. Single Selection (Radio)
    4. Multiple Selection (Checkbox)
    5. Dropdown Selection
    6. True / False

- **Marks (Per Question):**
  - Mandatory: Yes
  - Type: Numeric Text Input (`inputMode: numeric`)
  - Min. Value: 1
  - Default value: Empty (`""`, placeholder: `0` — marks are entered manually per question and never auto-filled or auto-distributed)
  - Validation: Must be greater than 0; sum of all question marks must equal configured `Total Marks`.

- **Mandatory Question:**
  - Mandatory: Yes
  - Type: Checkbox / Toggle
  - Default value: Checked / Active

- **Question Options & Correct Answers:**
  - **Single Selection (Radio), Multiple Selection (Checkbox), and Dropdown Selection**: Minimum 2 options required, each with Option Text. Single selection and dropdown require one selected Correct Answer; multiple selection requires at least one selected Correct Answer.
  - **Short Text Answer (`Configured Accepted Answers (Evaluated case-insensitively with trimmed whitespace):`)**: Minimum 1 accepted keyword/phrase required (`Enter accepted correct answer...`, without extra example hints).
  - **True / False**: Clean `Answer Option:` / Correct Answer selection (`True` or `False`).
  - **Long Text Answer**: Expected Answer / Evaluation Reference summary for manual reviewer grading.
  - **Question Actions**: Clean bordered **Duplicate** and **Delete** pill buttons with SVG icons (`8px` gap). (Question reorder buttons are removed.)

---

### 2. Assign Training Form (Assignments > + Assign Training)

- **Training Programme:**
  - Mandatory: Yes (`*`)
  - Type: Read-only Programme Display Box (bound to selected or first programme)
  - Default value: First programme (e.g. CollabCRM Recruitment & Client Portal Workflows)

- **Department:**
  - Mandatory: No (Optional targeting filter)
  - Type: Multi-select Dropdown with Select All / Deselect All
  - Default value: All Departments
  - Allowed Values: Business Analysis, Game, Collab, Web, Data analytics (plus dynamic departments from employee records)

- **Designation:**
  - Mandatory: No (Optional targeting filter)
  - Type: Multi-select Dropdown with Select All / Deselect All
  - Default value: All Designations
  - Allowed Values: Executive, Sr. Executive, Business analyst, Team leader, Manager, AVP (plus dynamic designations from employee records)

- **Employee (s):**
  - Mandatory: Yes (`*`)
  - Type: Multi-select Dropdown with Select All / Deselect All
  - Default value: Primary selected employee (first employee in directory)
  - Validation: Must have at least 1 employee selected before assignment submission. Displays reactive selected count.

- **Start Date:**
  - Mandatory: Yes (`*`)
  - Type: Date Picker
  - Default value: 2026-11-04
  - Validation: Required.

- **End Date:**
  - Mandatory: No (Optional completion deadline)
  - Type: Date Picker
  - Default value: 2026-12-01
  - Validation: Must be on or after Start Date.

- **Form Actions:** Auto-Fill, Cancel, Assign Training.

---

### 3. Add Employee Form (Employees > + Add New Employee)

- **First Name:**
  - Mandatory: Yes (`*`)
  - Type: Text Input (Alphabetic)
  - Max. Length: 50
  - Min. Length: 2
  - Default value: Empty

- **Last Name:**
  - Mandatory: Yes (`*`)
  - Type: Text Input (Alphabetic)
  - Max. Length: 50
  - Min. Length: 2
  - Default value: Empty

- **Company Email:**
  - Mandatory: Yes (`*`)
  - Type: Email Input
  - Max. Length: 100
  - Default value: Empty
  - Validation: Must be a valid corporate email format (user@domain.com).

- **Department:**
  - Mandatory: No (Optional select)
  - Type: Dropdown (Single Select)
  - Default value: Business Analysis
  - Allowed Values: Business Analysis, Game, Collab, Web, Data analytics

- **Status:**
  - Mandatory: No (Optional select)
  - Type: Dropdown (Single Select)
  - Default value: Confirmed
  - Allowed Values: Confirmed, Intern, Probation, Notice Period

- **Designation:**
  - Mandatory: No
  - Type: Text Input
  - Default value: Empty

- **Reporting Manager:**
  - Mandatory: No
  - Type: Text Input
  - Default value: Empty

- **Auto-Generated Profile Defaults on Save:**
  - Company Mobile: +1 9005049999 (or +1 9887654321 via Auto-Fill)
  - Employee Code: Automatically generated
  - Joining Date: 04-Nov-2026
  - Account Status: Active
- **Form Actions:** Auto-Fill, Cancel, Save Employee.

---

### 4. Global Training Configuration (Config > Training Categories)

#### General Settings Tab
- **Enable / Disable Training Module:**
  - Mandatory: Yes
  - Type: Toggle Switch (Active / Inactive)
  - Default value: Active
  - Description: Master switch to enable or disable the entire Training module access for employees across the portal.

- **Allow Training Creation:**
  - Mandatory: Yes
  - Type: Toggle Switch
  - Default value: Active
  - Description: Permit authorized roles to author and create new training programs.

- **Allow Training Editing:**
  - Mandatory: Yes
  - Type: Toggle Switch
  - Default value: Active
  - Description: Allow modification of existing published and draft training programs.

- **Allow Training Archiving:**
  - Mandatory: Yes
  - Type: Toggle Switch
  - Default value: Inactive
  - Description: Enable archiving of obsolete or retired training courses.

- **Enable Training Preview:**
  - Mandatory: Yes
  - Type: Toggle Switch
  - Default value: Active
  - Description: Allow creators and reviewers to preview interactive course modules.

#### Training Categories Management
- **Categories Table Columns:** Category Name, Description, Status, Created By & Date, Modified By, Actions (Edit icon + Active/Inactive toggle).
- **Pre-configured Categories (9 Default Entries):** Engineering & Architecture, Sales & Business Development, Recruitment & HR Operations, Security, Privacy & Compliance, Leadership & Management, Product Design & UX, Customer Success & Support, DevOps & Cloud Operations, Artificial Intelligence & ML.
- **Add Training Category Modal (+ Add Category):**
  - **Category Name:** Mandatory (`*`), Text Input (Alphanumeric). Validation: Case-insensitive unique check against all existing categories; duplicate category names are rejected with an alert.
  - **Description:** Optional Multi-line Textarea. Default value on save if blank: "New training category description."
  - **Status:** Mandatory, Toggle Switch, default Active.
  - **Quick Action:** Auto-Fill button populates sample category details.

---

### 5. Role-Based Access Control (Config > Roles)
- **Roles Table Columns:** No., Role, Status, Employees, Remarks, Created By & Date, Modified By, Actions (View, Edit, Delete).
- **Standardized System Roles (11 Configured Roles):**
  1. Sr. Business Analyst (8 employees)
  2. Senior Recruiter (5 employees)
  3. CEO (3 employees)
  4. Project Manager (25 employees)
  5. BDE (1 employee)
  6. Admin/HR (50 employees)
  7. Employee (51 employees)
  8. Team leader (20 employees)
  9. Management (7 employees)
  10. Recruiter (1 employee)
  11. BDM (0 employees)
- **Add Role Slideover Modal (+ Add Role):**
  - **Title:** Mandatory (`*`), Text Input.
  - **Clone Role:** Optional Dropdown to copy permissions from an existing role.
  - **Remarks:** Optional Textarea, max length 255 characters.
  - **Status:** Toggle Switch, default Active.
- **Role Permission Matrix:**
  - Columns: Module, Status, View Default, Global, Add, Edit, Delete.
  - Training Module permissions: Training Module (parent), Training Programs Library, Training Assignments, Employee Progress Tracking, Training Reviews & Evaluations, Certificate Generation & Issuance, Training Analytics & Reports.

---

### 6. Certificate Verification & Credential Specifications
- **Certificate ID:** Structured format (`TRN-YYYY-Serial`, e.g. TRN-2026-0027, TRN-2026-0032).
- **Authorized Signatory:** Configured strictly as **Khushi Bhatt, Head of HR**.
- **Issued Date:** Day-Month-Year format (e.g. 27-Jan-2026).
- **Master-Detail Table Layout:**
  - Left columns: No. (1, 2, 3...), Employee Avatar & Name, Department / Role.
  - Middle column: Training Name (plain-text format, no dropdowns or passed badges).
  - Far-right column: Actions header and eye icon buttons aligned to the right directly beneath All Records.

---

## SECTION 3: TRAINING LIFECYCLE & STATE TRANSITION FLOW

1. **Assigned**: Training is assigned to an Employee, Department, or Designation.
2. **In Progress**: Learner opens the assigned course and begins reviewing the learning resources.
3. **Completion Path (Assessment Disabled)**: Once 100% of mandatory learning modules are marked complete, status transitions directly to **Completed**.
4. **Completion Path (Assessment Enabled)**: Learner submits the assessment (**Assessment Taken**).
   - **Pass**: When score is strictly greater than 80% passing threshold, status transitions to **Completed**.
   - **Retake**: When score is 80% or less and attempts remain, status returns to **In Progress** for another attempt.
5. **Certificate Issued**: Upon reaching **Completed**, the system generates the authenticated certificate signed by **Khushi Bhatt, Head of HR**.
6. **Overdue**: If the target due date passes without completing modules or passing the assessment, status becomes **Overdue**.

---

## SECTION 4: ASSESSMENT & PORTAL BEHAVIORAL SPECIFICATIONS

### 4.1 Assessment Toggle Behavior Matrix
| System Component | Assessment Toggle: ON (Active) | Assessment Toggle: OFF (Inactive) |
| :--- | :--- | :--- |
| **Tab 3 Header** | 3. Assessment & Questions | 3. Assessment & Questions |
| **Tab 3 Content** | Renders full evaluation card, attempt counter, passing criteria, and all configured questions | Empty State Container: "No Assessment Configured" message with icon; no questions, no scoring inputs, no submit button |
| **Left Sidebar Action Button** | "Take Assessment →" (or "Download Certificate" when passed) | "Start Learning Modules →" (or "Programme Completed ✓" when all modules done) |
| **Passing Score Display** | 80% | N/A (Assessment Disabled) |
| **Tab 2 Navigation Button** | "Proceed to Assessment →" | "All Modules Completed ✓" |
| **Completion Criteria** | All configured Completion Requirements satisfied (e.g. Videos + Passing Score on Assessment + Required Docs + Manager Approval) | All configured non-assessment Completion Requirements satisfied |

### 4.2 Supported Question Formats
1. **Short Text Answer**: Single-line text input with case-insensitive accepted keyword evaluation.
2. **Long Text Answer**: Multi-line textarea for detailed subjective responses evaluated by reviewer.
3. **Single Selection (Radio)**: Radio group allowing one option selection.
4. **Multiple Selection (Checkbox)**: Checkbox group supporting multiple selections.
5. **Dropdown Selection**: Standard select menu with "-- Select Answer --" placeholder and option values.
6. **True / False**: Dual toggle buttons/radios for binary verification.
7. **Question Marks**: Every question displays its designated marks (the per-question Mandatory checkbox and tag have been removed from Create/Edit Programme, Programme Detail, and Employee Assessment).

### 4.3 Assignments Register Specifications
- **Scope Column Header**: **ASSIGNED SCOPE** (displays Employee, Department, or Designation assignment scope).
- **Total Record Count**: **41 Total** assignments.
- **Pagination**: Complete 5-page pagination (10 items per page with Previous/Next and page number controls).
- **Assignment Details View (`View Assignment`)**: Follows the two-column Employee Profile layout (Left learner sidebar with Status pill, Avatar, Name, Role, Department pill, Assigned Training, Assigned/Due dates; Right `General Info` tab with Top 3-box summary strip, `Assignment Information` grid, and `Assigned Learning Modules & Assessment` text rows).

### 4.4 Training Programmes Catalogue & Availability Status Architecture
- **Publication & Availability Status Rules (No `Archived` Status)**:
  - **Publication Status (`Status ↕`)**: Strictly **Published** or **Draft** (`Archived` status and archiving actions are removed).
    - **Published**: Emerald badge in the catalogue table. Visible on Management side; Active published programmes are assignable and usable on Employee side.
    - **Draft**: Amber badge. Management authoring only (Availability Status stays locked to Inactive until published and hidden from Employee side).
  - **Active / Inactive Only After Publish**: Once a programme is **Published**, only **Active** / **Inactive** transitions can be performed via the compact toggle switch placed at the top-right of the **Programme Detail** left sidebar card.
  - **Started Learner Lock (Deactivation Guard)**:
    - Once any employee has started working on a programme (In Progress, Under Review, Submitted for Review, Changes Requested, or Overdue with progress started), that programme cannot be made **Inactive**. Attempting deactivation is blocked with a validation error.
    - Once all learners have finished (Completed at 100%) or before any learner starts (Not Started at 0%), setting **Inactive** is permitted.
  - **Inactive Action Lock**:
    - **Management (Programme Detail)**: Displays an Inactive warning banner and disables `+ Assign Programme`, `Assign Programme`, `+ Add Resource`, and curriculum View action while Inactive. The sidebar availability toggle remains enabled for administration.
    - **Employee (My Training & Course Detail)**: Programmes completed first and then set to Inactive remain visible in My Training (with Completed + Inactive pills) in strict read-only mode; all interactive controls inside are disabled.
- **Catalogue Table Column Structure (7 Columns)**:
  1. **No.**
  2. **Training Name ↕** (Programme title and version pill)
  3. **Level ↕** (Beginner / Intermediate / Expert badge)
  4. **Duration ↕** (Expected hours)
  5. **Enrolled ↕** (Consistent enrolled learner count matching Programme Detail's Enrolled Employees list)
  6. **Status ↕** (`Published` or `Draft` badge — no `Archived` or extra `Active` pill)
  7. **Actions** (Right-aligned View and Edit action buttons)
- **Programme Detail View (Management)**:
  - **Left Sidebar**: Displays publication badge (`Published` / `Draft`) on the top-left and the **Active / Inactive** toggle switch on the top-right, followed by Programme Title, Category, Difficulty Level, `Assign Programme` button, and core summary metrics (**Expected Duration**, **Passing Assessment Score** as clean `80%`, **Department**, **Enrolled Learners**).
  - **General Info Tab (Right Panel)**: Displays all programme details not shown on the left sidebar — **Learning Objectives**, **Completion Requirements & Assessment Criteria**, and the **Assessment & Questions** section (Assessment Enabled/Disabled state, Assessment Title, Description, Total Marks, Max Attempts, and the full Questions List with question type, marks, and configured options/answers when present) cleanly without duplicating the sidebar summary details.
  - **Curriculum & Modules Tab**: Displays learning resources in a structured table (heading **Curriculum & Modules**, `+ Add Resource` button, and columns Module, Resource Title, Type, Resource URL, Action with eye View icon linking directly to the resource).
  - **Enrolled Employees & Status History Tabs**: Tracks enrolled learners (clean full-width learner search bar without extra `ENROLLED EMPLOYEES` count heading) with exact count consistency against the Training Management listing, plus audit history for `Active` / `Inactive` availability transitions (clean full-width status history search bar without redundant `Availability Status Audit History` title or `Programme ID` header).
  - **Uniform Employee Column Standard**: Across all employee-centric tables (Employees Directory, Assignments, Programme Detail > Enrolled Employees, Progress, and Certificates), the employee identity column uses the uniform **Employee Name** label (`Employee Name ↕` where sortable).

### 4.5 System Typography Standard
- **Uniform Sans-Serif Typography**: Every text element across the entire system (headings, tables, labels, duration metrics, version badges, IDs, percentages, URLs, modals, and certificates) consistently uses the exact same **Sans-Serif** font family (`--font-sans`), with no monospace or serif font overrides.
