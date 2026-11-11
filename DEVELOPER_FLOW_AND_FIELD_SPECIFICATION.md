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
   - **Config Hub**: Provides quick navigation to **Training Config** (General Settings & Training Categories) and **Roles & Permissions** (Roles Table, Add Role modal, and Role Permission Matrix).

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
   - **Training Management (Training Programmes)**: Full course catalogue, lifecycle status filters (All, Published, Draft, Archived), search, independent Availability Status (Active / Inactive) toggle, View action to open **Programme Detail**, and `+ Create Programme` action.
   - **Assignments**: Central assignment register with the **ASSIGNED SCOPE** column (Employee, Department, Designation), **41 Total** assignment count, and 5-page pagination (10 items per page). Clicking a record opens **Assignment Details**.
   - **Progress**: Dual-mode tracking (1. Employee-wise Training Completion vs 2. Departmental Compliance Audit), 4 summary cards (Active Learners, Total Assignments, Completed, Avg Score), and CSV export.
   - **Certificates**: Expandable master-detail table defaulting to **collapsed** employee rows with expand/collapse chevrons, plain-text earned programmes, clickable certificate preview, and a right-aligned **Actions** column directly under **All Records**.
3. **Config Hub**:
   - **Config Flyout**: Compact left drawer panel offering quick access to **Training Config** and **Roles**.
   - **Training Config**: Tabbed settings for **General Settings** (5 module access permission toggles) and **Training Categories** (master category table and Add Category modal with duplicate validation).
   - **Roles & Permissions**: 11-role access control table (Sr. Business Analyst, Senior Recruiter, CEO, Project Manager, BDE, Admin/HR, Employee, Team leader, Management, Recruiter, BDM), `+ Add Role` slideover modal, and interactive Role Permission Matrix.
*(Note: The legacy Reports drawer item has been removed.)*

---

### Flow 3: Training Management (Create / Edit Programme Flow)
- Accessed via **Training Programmes > + Create Programme** or **Edit Programme**.
- Features an **Auto-Fill Demo** button to populate sample data.
- Structured across three core sections:
  1. **Core Programme Details**: Programme Name, Training Category, Difficulty Level, Expected Duration.
  2. **Learning Resources Builder**: Dynamic resource list (Video/YouTube, PDF Document, External Link, Article).
  3. **Assessment & Questions Builder**: Enable Assessment toggle, Assessment Title, Passing Score, Max Attempts, Description, and dynamic multi-format question builder.
- Header Actions: **Auto-Fill Demo**, **Cancel**, **Save as Draft**, and **Publish Programme** (or **Update & Publish**).

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
- **Dynamic State Integration**: Newly created and published programmes from Admin/HR view automatically populate in the employee's training list. **Archived programmes are excluded from all employee views** (Employee Dashboard, My Training, Employee Course Detail, and Employee Profile Training History).
- **Inactive Programme Read-Only Handling**:
  - Programmes marked **Inactive** (including programmes **Completed** first and then set to **Inactive**) remain visible in **My Training** with an **Inactive** status pill.
  - Opening an **Inactive** programme shows an **Inactive warning banner** and disables all actions inside (Start Learning, Mark Complete, external resource links, assessment inputs/selects/checkboxes/radios, Submit Assessment, Retake Assessment, and certificate download).
- **Employee Training History (Employee Profile > Training History)**: Displays enrollment metrics (Total Enrolled, Completed & Passed, In Progress, Certificates Earned), a compact **+ Assign New Training** button, and non-archived training records.
- **3-Tab Course Learning Layout**:
  - **Tab 1 — 1. Overview**: Progress bar, completed modules counter, course summary, and learning objectives.
  - **Tab 2 — 2. Learning Resources**: Resource checklist with external link openers, completion toggles, and mandatory indicators (disabled if programme is Inactive).
  - **Tab 3 — 3. Assessment & Questions**:
    - **Header**: Clean title **3. Assessment & Questions** (without any Unlocked tag).
    - **When Assessment Toggle is OFF**:
      - Inside Tab 3: Renders a clean empty container ("No Assessment Configured — Assessment is disabled for this training programme. Learners achieve completion upon reviewing all mandatory learning resources"). No questions, no scoring inputs, and no submit button are shown.
      - Left Sidebar: Passing Assessment Score displays **N/A (Assessment Disabled)**. Action button displays **Start Learning Modules →** or **Programme Completed ✓** (never prompts to take an assessment).
      - Tab 2 Navigation: Bottom button displays **All Modules Completed ✓**.
    - **When Assessment Toggle is ON**:
      - Inside Tab 3: Renders the exact question types, marks, mandatory indicators, and options configured by Admin/HR.
      - Left Sidebar: Passing Assessment Score displays **80% (Strictly > 80% to pass)**. Action button displays **Take Assessment →** (or **Download Certificate** upon passing).
      - Result Status: Displays unified **Completed** badge when assessment passes and programme completes.

---

## SECTION 2: FORM FIELD VALUES & VALIDATION SPECIFICATIONS

### 1. Create Training Programme Form (Training Management > Create Programme)

#### Section 1: Core Programme Details
- **Programme Name:**
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

- **Expected Duration (Hours):**
  - Mandatory: Yes (`*`)
  - Type: Numeric (Integer)
  - Max. Value: 200
  - Min. Value: 1
  - Default value: 4
  - Validation: Positive integer; decimals or negative values not permitted.

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
  - Default value: 80
  - Validation: Benchmark passing percentage (Strictly > 80% to pass).

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

- **Marks:**
  - Mandatory: Yes
  - Type: Numeric (Integer)
  - Max. Value: 50
  - Min. Value: 1
  - Default value: 2
  - Validation: Must be greater than 0.

- **Mandatory Question:**
  - Mandatory: Yes
  - Type: Checkbox / Toggle
  - Default value: Checked / Active

- **Question Options & Correct Answers:**
  - **Single Selection (Radio), Multiple Selection (Checkbox), and Dropdown Selection**: Minimum 2 options required, each with Option Text. Single selection and dropdown require one selected Correct Answer; multiple selection requires at least one selected Correct Answer.
  - **Short Text Answer**: Minimum 1 accepted keyword/phrase required for automated case-insensitive grading.
  - **True / False**: Correct answer selection (True or False).
  - **Long Text Answer**: Expected Answer / Evaluation Reference summary for manual reviewer grading.
  - **Question Actions**: Duplicate and Delete (question reorder buttons are removed).

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
  - Allowed Values: Project, Business analyst, Recruitment & HR, CPA Firms, Admin (plus dynamic departments from employee records)

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
  - Default value: Project
  - Allowed Values: Project, Business analyst, CPA Firms, Recruitment & HR

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

### 4. Global Training Configuration (Config > Training Config)

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

#### Training Categories Tab
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
  - Middle column: Programme Name (plain-text format, no dropdowns or passed badges).
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
| **Passing Score Display** | 80% (Strictly > 80% to pass) | N/A (Assessment Disabled) |
| **Tab 2 Navigation Button** | "Proceed to Assessment →" | "All Modules Completed ✓" |
| **Completion Criteria** | 100% Mandatory Resources + Passing Score on Assessment | 100% Mandatory Resources Reviewed |

### 4.2 Supported Question Formats
1. **Short Text Answer**: Single-line text input with case-insensitive accepted keyword evaluation.
2. **Long Text Answer**: Multi-line textarea for detailed subjective responses evaluated by reviewer.
3. **Single Selection (Radio)**: Radio group allowing one option selection.
4. **Multiple Selection (Checkbox)**: Checkbox group supporting multiple selections.
5. **Dropdown Selection**: Standard select menu with "-- Select Answer --" placeholder and option values.
6. **True / False**: Dual toggle buttons/radios for binary verification.
7. **Marks & Mandatory Indicators**: Every question displays its designated marks and mandatory indicator.

### 4.3 Assignments Register Specifications
- **Scope Column Header**: **ASSIGNED SCOPE** (displays Employee, Department, or Designation assignment scope).
- **Total Record Count**: **41 Total** assignments.
- **Pagination**: Complete 5-page pagination (10 items per page with Previous/Next and page number controls).

### 4.4 Training Programmes Catalogue, Archive & Availability Status Architecture
- **Strict Separation of Statuses**:
  - **Publication Status (Status ↕)**: Reflects the editorial lifecycle stage (**Published**, **Draft**, or **Archived**).
    - **Published**: Emerald badge. Visible across management and employee portals.
    - **Draft**: Amber badge. Management authoring only (Availability Status stays locked to Inactive until published).
    - **Archived**: Slate badge. Visible only on the Management side and excluded everywhere on the Employee side.
  - **Availability Status (Active / Inactive)**: Independent operational availability toggle in the catalogue table and Programme Detail sidebar.
    - Toggle ON / Right: **Active**.
    - Toggle OFF / Left: **Inactive**.
  - **Archive vs. Inactive Independence Rule**:
    - Archiving a programme changes only Publication Status to **Archived** and preserves Availability Status (Active stays Active; Inactive stays Inactive).
    - Restoring an archived programme changes Publication Status back to **Published** while preserving Availability Status.
  - **Started Learner Lock (Deactivation Guard)**:
    - Once any employee has started working on a programme (In Progress, Under Review, Submitted for Review, Changes Requested, or Overdue with progress started), that programme cannot be made **Inactive**. Attempting deactivation is blocked with a validation error.
    - Once all learners have finished (Completed at 100%) or before any learner starts (Not Started at 0%), setting **Inactive** is permitted.
  - **Inactive Action Lock**:
    - **Management (Programme Detail)**: Displays an Inactive warning banner and disables + Assign Programme, Assign Programme, + Add Module, and Open Resource while Inactive. Archive/Restore and the Catalogue Availability Toggle remain enabled for administration.
    - **Employee (My Training & Course Detail)**: Programmes completed first and then set to Inactive remain visible in My Training (with Completed + Inactive pills) in strict read-only mode; all interactive controls inside are disabled.
- **Catalogue Table Column Structure (8 Columns)**:
  1. **No.**
  2. **Programme Name ↕** (Programme title and version badge)
  3. **Level ↕** (Beginner / Intermediate / Expert badge)
  4. **Duration ↕** (Expected hours)
  5. **Enrolled ↕** (Learner enrollment count)
  6. **Status ↕** (Publication Status badge: Published, Draft, or Archived)
  7. **Active / Inactive** (Centered Availability Status toggle switch)
  8. **Actions** (Right-aligned View and Edit action buttons)
- **Programme Detail View (Management)**:
  - **General Info Tab**: Displays a 3-card summary row (**Status** showing Published/Draft/Archived + Active/Inactive, **Expected Duration**, **Passing Score**) with clean icon-to-text spacing, followed by detailed programme metadata.
  - **Curriculum & Modules Tab**: Displays learning resources in a structured table (Module, Resource Title, Type, Resource URL, Requirement, Action).
  - **Enrolled Employees & Status History Tabs**: Tracks learner progress and complete audit history for Availability and Publication transitions (Archive / Restore modal with Confirm button).
