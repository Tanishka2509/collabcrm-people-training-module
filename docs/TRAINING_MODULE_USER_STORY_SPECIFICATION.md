# User Story & Acceptance Criteria: CollabCRM People Training Module

**Module Name:** Training Module  
**Parent Module:** People  
**Version:** 2.0  
**Last Updated:** November 2026  

---

## 1. High-Level Scope & Navigation
1. **Module Activation & Access:**
   - **Navigation:** `People > Training Module`
2. **Sub-Modules (Side Panel Navigation):**
   - a. **Dashboard**
   - b. **Training Management**
   - c. **Assignments**
   - d. **Training Progress** *(Dual Mode: Employee-wise & Programme-wise)*
   - e. **Certificates**
   - f. **Reports**
3. **Cross-Module Integrations:**
   - **People > Employees > Employee Profile Detail Screen:**
     - Tab: `Training History`
     - Tab: `My Certificates`
   - **Config Module:**
     - `Config > Training Config`
     - `Config > Roles` (Training Role permissions matrix)

---

## 2. User Stories & Acceptance Criteria

### Story 1: Training Module Setup & Side Panel Sub-Modules
**User Type:** Company Admin / HR Manager / People Ops  

**Acceptance Criteria:**
1. **Navigation:** User navigates to `People > Training Module`.
2. When the user clicks on `Training Module`, the side panel drawer displays the following sub-modules:
   - **Dashboard**
   - **Training Management**
   - **Assignments**
   - **Training Progress**
   - **Certificates**
   - **Reports**
3. The sidebar navigation title for progress tracking must be displayed as **Training Progress** on a single line, adhering to CollabCRM naming and UI standards.
4. Clicking any sub-module updates the active workspace view immediately without a full page reload.

---

### Story 2: Training Dashboard & KPI Analytics
**User Type:** Company Admin / HR Manager  

**Acceptance Criteria:**
1. **Navigation:** `People > Training Module > Dashboard`.
2. The Dashboard displays top-level metric overview cards:
   - **Total Programmes** (Count of all active and draft training programmes).
   - **Active Enrollments** (Count of learners currently enrolled).
   - **Overdue Assignments** (Learners who have passed the due date without completion).
   - **Average Completion Rate (%)** (Calculated percentage across all active assignments).
3. The Dashboard includes visual analytics widgets:
   - Department-wise Completion Distribution.
   - Status Breakdown (Not Started, In Progress, Submitted, Completed, Overdue).
   - Recent Certification Activity feed.

---

### Story 3: Training Management (Curriculum & Programme Builder)
**User Type:** Company Admin / Training Manager  

**Acceptance Criteria:**
1. **Navigation:** `People > Training Module > Training Management`.
2. Default view displays the **Training Programmes Catalogue** in tabular format with the following columns:
   1. `No.` (Sequential serial index)
   2. `Programme Name ↕` (Name with version pill badge, e.g., `v1.0`)
   3. `Level ↕` (Beginner, Intermediate, Advanced)
   4. `Duration ↕` (Hours)
   5. `Enrolled ↕` (Count of currently enrolled learners)
   6. `Status ↕` (Active / Draft badge)
   7. `Actions` (Status toggle switch, View Programme icon, Edit Programme icon)
3. Header controls include:
   - Filter buttons: `All`, `Published`, `Draft`.
   - Search input: Filter by programme name, category, or code.
   - Filter dropdown button.
   - Primary Action Button: `+ Create Programme`.
4. Clicking `+ Create Programme` opens the Programme Builder screen (`Training Programmes › Create Programme`):
   - Header contains: `Auto-Fill Demo`, `Cancel`, and `Publish Programme` (with dropdown option `Save Draft`).
   - The form is divided into the following sections:
     - **Section 1. CORE PROGRAMME DETAILS**:
       - Programme Name *
       - Training Category *
       - Difficulty Level *
       - Expected Duration (Hours) *
       *(Note: Passing Assessment Score is configured within the Assessment section and is excluded from Section 1. Per-Programme Configuration & Limits is removed).*
     - **Section 2. LEARNING RESOURCES (YOUTUBE, EXTERNAL COURSES, WEBSITES, VIDEOS, PDFS, DOCS) \***:
       - User can add multiple curriculum resources via `+ Add Learning Resource`.
       - Each resource item contains:
         1. Resource Type dropdown (Video / YouTube, PDF Document, External Course / Website, Interactive Assessment / Sandbox).
         2. Resource Module Name / Title.
         3. Resource URL / Link (https://...).
         4. Delete resource button (`X`).
     - **Section 3. ASSESSMENT & QUESTIONS**:
       - `Enable Assessment` toggle switch (default: ON).
       - Top configuration row:
         1. `Assessment Title *`
         2. `Passing Score (%) *` (Default: 80%)
         3. `Max Assessment Attempts *` (Default: 3)
       - `Assessment Description`: Placed **full-width directly below** the 3 fields above.
       *(Note: Checkboxes for "Shuffle Questions" and "Show Result After Submission" are removed).*
       - Question Builder section (`QUESTIONS LIST` with questions count and total marks summary):
         - `+ Add Question` button.
         - For each question:
           1. Question identifier badge (`Question 1`, `Question 2`, etc.).
           2. `Marks` numeric input (default: 2).
           3. `Mandatory` checkbox.
           4. `Question Statement *` input.
           5. Options list with radio/checkbox selectors, option text input, and correct answer indicator.
           6. Actions: Duplicate question, Delete question.
5. Clicking `Publish Programme`:
   - Validates all mandatory fields.
   - Saves programme with status `Published` and auto-increments version (e.g. `v1.0`).
   - Returns to the Training Management catalogue.

---

### Story 4: Training Assignments Listing & Inspection
**User Type:** Company Admin / HR Manager  

**Acceptance Criteria:**
1. **Navigation:** `People > Training Module > Assignments`.
2. Displays all assigned trainings in tabular format.
   *(Note: The top-right `+ Assign Training` button is removed; assignments are driven via automated rule workflows, department onboarding, or programme roster assignment).*
3. Header controls include:
   - Total assignments badge (e.g., `41 Total`).
   - Search input: Filter employee name, email, or training title.
   - Department dropdown filter: `All Departments`, `Engineering`, `Recruitment & HR`, `Sales & BD`, `Business Analyst`, etc.
   - Assignment status dropdown filter: `All Assignments`, `Mandatory`, `Elective`, `Overdue`.
4. Table columns:
   1. `EMPLOYEE` (Learner avatar with initials, full name, job title/designation).
   2. `DEPARTMENT` (Assigned employee department).
   3. `ASSIGNED TRAINING` (Programme title, difficulty level, duration).
   4. `ASSIGNED DATE` (Formatted date, e.g., `2026-10-01`).
   5. `DUE DATE` (Target completion date).
   6. `TYPE` (Badge: `Mandatory` in rose or `Elective` in slate).
   7. `PROGRESS` (Numeric completion percentage with colored progress bar).
   8. `ACTIONS` (Contains **only** the `View Assignment Details` eye icon; Reassign and Delegate Reviewer icons are removed).
5. Clicking the `View Assignment Details` icon opens the assignment detail inspection modal:
   - Displays learner profile, curriculum progress, resource checklist, assessment results, and current status.

---

### Story 5: Training Progress (Dual-Mode Tracker)
**User Type:** Company Admin / HR Manager / Department Lead  

**Acceptance Criteria:**
1. **Navigation:** `People > Training Module > Training Progress`.
2. Header displays:
   - Title: **Training Progress**
   - Subtitle: *Granular employee and programme progress tracking and completion analytics across all enrollments.*
   - **View Mode Switcher**: A segmented control toggle with two options:
     - **Employee-wise**
     - **Programme-wise**
3. **Mode A: Employee-wise View**:
   - Table subtitle: `Employee Training Progress Tracker [X Records]`.
   - Filters:
     - Search filter: employee name or email.
     - Department dropdown.
     - Training Status dropdown: `All Statuses`, `Not Started`, `In Progress`, `Completed`, `Overdue`.
     - Certificate Status dropdown: `All Certificate Statuses`, `Issued`, `Pending`, `None`.
   - Table columns:
     1. `EMPLOYEE NAME` (Avatar, Full Name, Email).
     2. `DEPARTMENT` (Department name).
     3. `ASSIGNED TRAINING` (Programme title).
     4. `ASSIGNMENT DATE` (Date assigned).
     5. `DUE DATE` (Due date).
     6. `COMPLETION %` (Progress percentage with progress bar).
     7. `TRAINING STATUS` (Status pill: `Completed`, `In Progress`, `Not Started`, `Overdue`).
     8. `SUBMISSION STATUS` (Pill: `Approved` / `Auto-Evaluated` / `In Progress`).
     9. `CERTIFICATE STATUS` (Pill: `Issued` in purple, `Pending`, or `None`).
     10. `ACTION` (View icon to inspect individual learner progress).
4. **Mode B: Programme-wise View**:
   - Subtitle: `Programme Training Progress Tracker [X Programmes]`.
   - Search filter: Filter programme title or category.
   - Table / Grid listing of all 12 training programmes displaying:
     1. `PROGRAMME NAME` (Title, Category, Version badge).
     2. `DIFFICULTY & DURATION` (Level badge and expected hours).
     3. `ENROLLED LEARNERS` (Total count of assigned employees).
     4. `COMPLETED LEARNERS` (Count of learners who passed).
     5. `AVERAGE COMPLETION %` (Aggregated progress bar and percentage).
     6. `STATUS` (Published / Draft).
     7. `ACTIONS` (`View Enrolled Learners` button).
   - Clicking `View Enrolled Learners` opens a modal listing all employees enrolled in that specific programme, their progress %, assessment scores, and certification status.

---

### Story 6: Automated Certifications
**User Type:** Company Admin / HR Manager / Employee Learner  

**Acceptance Criteria:**
1. **Navigation:** `People > Training Module > Certificates`.
2. **Automated Issuance Rule:**
   - Manual management review queues and evaluator sign-off flows are eliminated.
   - When an employee completes all required resources and achieves a score $\ge$ the programme's Passing Score (e.g., 80%) on the final assessment:
     1. The system automatically marks Training Status as `Completed`.
     2. The system automatically generates an authenticated certificate with a unique Certificate ID (e.g., `CERT-2026-XXXX`) and verification hash.
     3. The certificate is immediately accessible in `People > Training Module > Certificates` and on the employee's personal portal profile under `My Certificates`.
3. Certificates table columns:
   1. `CERTIFICATE ID` (Unique identifier).
   2. `RECIPIENT NAME` (Employee full name & avatar).
   3. `PROGRAMME NAME` (Training programme completed).
   4. `COMPLETION DATE` (Date assessment was passed).
   5. `SCORE ACHIEVED` (Final assessment score %).
   6. `VERIFICATION HASH` (Authenticity code).
   7. `ACTIONS` (View Certificate modal, Download PDF).

---

### Story 7: Employee Profile Module Integration (Detail Screen Tabs)
**User Type:** Employee Learner / Reporting Manager / HR  

**Acceptance Criteria:**
1. **Navigation:** `People > Employees > [Click on any Employee]`.
2. Inside the employee detail screen, two dedicated training tabs are available:
   - **Tab 1: Training History**:
     - Displays all assigned programmes for this employee in tabular format:
       1. `Programme Title`
       2. `Category & Level`
       3. `Assigned Date`
       4. `Due Date`
       5. `Progress %`
       6. `Status` (Not Started, In Progress, Completed, Overdue)
       7. `Assessment Score`
       8. `Action` (Resume Learning / View Syllabus)
   - **Tab 2: My Certificates**:
     - Displays certificate cards for all completed and passed trainings:
       - Certificate thumbnail / badge.
       - Programme title.
       - Completion date & final score.
       - Unique verification ID.
       - `Download Certificate (PDF)` and `View Certificate` buttons.

---

### Story 8: System Configuration (Config Module)
**User Type:** Company Admin  

**Acceptance Criteria:**
1. **Navigation:** `Config > Training Config`.
2. User can configure global defaults:
   - Default Assessment Passing Score (%).
   - Default Max Attempts.
   - Default Due Period (Days) for new assignments.
   - Automated Certificate Template selector.
   - Email Reminder Cadence (e.g., 7 days, 3 days, 1 day before due date, and overdue notification).
3. **Navigation:** `Config > Roles`.
4. Role permissions matrix includes training-specific roles and capabilities:
   - `Training Admin`: Full CRUD access to programmes, assignments, settings, and certificates.
   - `Department Manager / Team Lead`: Read & progress tracking access for their department's employees.
   - `Employee Learner`: Access to view assigned trainings, consume resources, submit assessments, and view/download earned certificates.

---

## 3. Field Values & Validations Specification

### Form 1: Core Programme Details (`Training Management > Create Programme`)
| Field Name | Mandatory | Type | Max / Min Length | Default Value | Allowed Values / Validation Rules |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Programme Name** | Mandatory | Alphanumeric | Max: 120 chars | `""` | Valid text; cannot be blank or whitespace only. |
| **Training Category** | Mandatory | Dropdown | NA | Select Category | `Recruitment & HR Operations`, `Engineering & Architecture`, `Security & Compliance`, `Sales & BD`, `Executive Leadership`. |
| **Difficulty Level** | Mandatory | Dropdown | NA | `Intermediate` | `Beginner`, `Intermediate`, `Advanced`. |
| **Expected Duration (Hours)** | Mandatory | Numeric | Min: 1, Max: 200 | `4` | Positive integer; strictly between 1 and 200. |

---

### Form 2: Learning Resources Builder
| Field Name | Mandatory | Type | Max / Min Length | Default Value | Allowed Values / Validation Rules |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Resource Type** | Mandatory | Dropdown | NA | `Video / YouTube` | `Video / YouTube`, `PDF Document`, `External Course / Website`, `Interactive Assessment / Sandbox`. |
| **Module Title** | Mandatory | Text | Max: 120 chars | `""` | Descriptive title for the learning resource. |
| **Resource URL / Link** | Mandatory | URL | Max: 500 chars | `""` | Must be a valid URL starting with `http://` or `https://`. |

---

### Form 3: Assessment Configuration & Question Builder
| Field Name | Mandatory | Type | Max / Min Length | Default Value | Allowed Values / Validation Rules |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Enable Assessment** | Mandatory | Toggle | NA | `ON` (true) | Boolean: `true` or `false`. |
| **Assessment Title** | Mandatory | Alphanumeric | Max: 120 chars | `Final Training Assessment` | Text; required when assessment toggle is ON. |
| **Passing Score (%)** | Mandatory | Numeric | Min: 1, Max: 100 | `80` | Integer between 1 and 100; score required to earn automated certificate. |
| **Max Assessment Attempts** | Mandatory | Numeric | Min: 1, Max: 10 | `3` | Integer between 1 and 10 attempts allowed per learner. |
| **Assessment Description** | Optional | Textarea | Max: 500 chars | `Complete the following questions...` | Instructions displayed to learner before commencing test. Placed full-width below parameter fields. |
| **Question Statement** | Mandatory | Textarea | Max: 1000 chars | `""` | Clear question prompt for learner. |
| **Question Marks** | Mandatory | Numeric | Min: 1, Max: 100 | `2` | Points awarded for correct answer. |
| **Mandatory Question** | Optional | Checkbox | NA | `true` | Boolean: Learner must answer before submitting. |
| **Question Options** | Mandatory | List (2 to 6) | Max: 200 chars each | `""` | Minimum 2 options; at least 1 must be marked as correct answer. |

---

### Form 4: Global Training Configuration (`Config > Training Config`)
| Field Name | Mandatory | Type | Max / Min Length | Default Value | Allowed Values / Validation Rules |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Default Due Period (Days)** | Mandatory | Numeric | Min: 1, Max: 365 | `14` | Number of days given to complete an assignment from enrollment date. |
| **Automated Certification** | Mandatory | Toggle | NA | `ON` (true) | When `ON`, certificates are issued immediately upon passing score. |
| **Reminder Notifications** | Mandatory | Multi-select | NA | `[7, 3, 1]` days | Days before due date to dispatch automated email and in-app alerts. |
| **Certificate Template** | Mandatory | Dropdown | NA | `Standard Corporate Blue` | `Standard Corporate Blue`, `Executive Gold`, `Technical Minimalist`. |

---

## 4. System Connections & Automated Workflow Rules
1. **Automated Progression Engine:**
   - Consuming a mandatory learning resource updates `completionPercentage`.
   - When `completionPercentage > 0`, status changes from `Not Started` $\rightarrow$ `In Progress`.
   - Upon submitting the assessment:
     - If `score >= passingScore`: status $\rightarrow$ `Completed`, Certificate automatically issued, record written to `Certificates` table and `My Certificates` tab.
     - If `score < passingScore` and `attemptsUsed < maxAttempts`: learner remains in `In Progress` with remaining attempts counter decremented.
     - If `score < passingScore` and `attemptsUsed >= maxAttempts`: status $\rightarrow$ `Failed` (requires manager re-assignment).
2. **Assignments Screen Governance:**
   - Listing view only with search and filter controls.
   - Action column provides single-click access to detailed drawer/modal inspection.
3. **Training Progress Dual-Mode Engine:**
   - View mode persistence ensures seamless toggling between **Employee-wise** roster and **Programme-wise** catalogue without state or filter loss.
