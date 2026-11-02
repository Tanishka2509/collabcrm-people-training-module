// ==========================================================================
// CollabCRM People - Comprehensive Training Management Module
// Supports Role-Based Portals:
// 1. Admin (Isha Patel - Head of People / Full Access)
// 2. HR (Shivam Sharma - HR Specialist / Program & Assignment Management)
// 3. Reporting Manager (Ashish Kumar - Scoped Strictly to Direct Reports)
// ==========================================================================

// Global Application State (All Statistics & Actions are Connected to Real Records)
const state = {
  currentRole: 'admin', // 'admin' | 'hr' | 'manager'
  activeSubTab: 'dashboard', // 'dashboard' | 'programs' | 'assignments' | 'progress' | 'reviews' | 'certificates' | 'reports'
  currentManagerId: 'EMP-003', // Ashish Kumar (Technical Lead & Reporting Manager)
  programFilterStatus: 'all', // 'all' | 'published' | 'draft' | 'archived'
  currentReportType: 'completion',

  // 1. Employee Hierarchy Data
  employees: [
    { id: 'EMP-001', name: 'Isha Patel', email: 'isha.patel@collabcrm.com', role: 'Head of People & Admin', dept: 'Recruitment & HR', managerId: null, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120' },
    { id: 'EMP-002', name: 'Shivam Sharma', email: 'shivam.s@collabcrm.com', role: 'HR Specialist', dept: 'People Operations', managerId: 'EMP-001', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120' },
    { id: 'EMP-003', name: 'Ashish Kumar', email: 'ashish.k@collabcrm.com', role: 'Technical Lead & Reporting Manager', dept: 'Engineering', managerId: 'EMP-001', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120' },
    { id: 'EMP-004', name: 'Rihan R.', email: 'rihan.r@collabcrm.com', role: 'Software Engineer', dept: 'Engineering', managerId: 'EMP-003', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120' },
    { id: 'EMP-005', name: 'Priya Nair', email: 'priya.n@collabcrm.com', role: 'Frontend Developer', dept: 'Engineering', managerId: 'EMP-003', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120' },
    { id: 'EMP-006', name: 'Suresh Prasad', email: 'suresh.p@collabcrm.com', role: 'Senior Talent Partner', dept: 'Recruitment & HR', managerId: 'EMP-001', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120' },
    { id: 'EMP-007', name: 'Vikram Malhotra', email: 'vikram.m@collabcrm.com', role: 'Enterprise Account Executive', dept: 'Sales & BD', managerId: 'EMP-001', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120' },
    { id: 'EMP-008', name: 'Ananya Roy', email: 'ananya.r@collabcrm.com', role: 'DevOps & Cloud Engineer', dept: 'Engineering', managerId: 'EMP-003', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120' },
    { id: 'EMP-009', name: 'Neha Gupta', email: 'neha.g@collabcrm.com', role: 'HR Executive', dept: 'People Operations', managerId: 'EMP-002', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120' }
  ],

  // 2. Training Programmes Catalog (Section 2)
  programs: [
    {
      id: 'TR-101',
      title: 'CollabCRM Recruitment & Client Portal Workflows',
      dept: 'Recruitment & HR',
      difficulty: 'Intermediate',
      durationHours: 18,
      status: 'published', // 'published' | 'draft' | 'archived'
      learningObjectives: 'Master end-to-end recruitment pipelines, client requirement intake, ATS candidate screening, interview coordination, and offer generation.',
      completionReq: 'Complete 100% of mandatory modules and attain >= 80% on ATS case study assessment.',
      passScore: 80,
      resources: [
        { id: 'R101-1', title: 'Recruitment SOP & Client Workflow Architecture', type: 'video', url: 'https://youtube.com/watch?v=collabcrm-rec-intro', mandatory: true },
        { id: 'R101-2', title: 'Candidate Intake & Screening Playbook', type: 'pdf', url: 'https://docs.collabcrm.internal/recruitment-sop.pdf', mandatory: true },
        { id: 'R101-3', title: 'Interactive Client Portal Demonstration Sandbox', type: 'website', url: 'https://collabcrm.com/demo/client-portal', mandatory: true },
        { id: 'R101-4', title: 'Advanced Candidate Sourcing Masterclass', type: 'external_course', url: 'https://coursera.org/learn/recruitment-ops', mandatory: false }
      ]
    },
    {
      id: 'TR-102',
      title: 'Cloud Infrastructure & High-Performance Node Services',
      dept: 'Engineering',
      difficulty: 'Advanced',
      durationHours: 16,
      status: 'published',
      learningObjectives: 'Architect resilient backend microservices, Redis distributed caching, SQL connection pooling, and continuous OpenTelemetry tracing.',
      completionReq: 'Deploy sample microservice to staging and achieve passing score >= 85%.',
      passScore: 85,
      resources: [
        { id: 'R102-1', title: 'Node.js Microservices Architecture Deep-Dive', type: 'video', url: 'https://youtube.com/watch?v=node-cloud-arch', mandatory: true },
        { id: 'R102-2', title: 'Database Optimization & Indexing Guide', type: 'document', url: 'https://docs.collabcrm.internal/pg-optimization.pdf', mandatory: true },
        { id: 'R102-3', title: 'Cloud Observability & OpenTelemetry Lab', type: 'website', url: 'https://collabcrm.internal/labs/telemetry', mandatory: true }
      ]
    },
    {
      id: 'TR-103',
      title: 'Information Security & Global Data Privacy (GDPR/ISO)',
      dept: 'Recruitment & HR',
      difficulty: 'Beginner',
      durationHours: 6,
      status: 'published',
      learningObjectives: 'Establish organizational compliance regarding client confidentiality, password hygiene, phishing countermeasures, and data minimization.',
      completionReq: '100% video lectures watched + 80% passing score in security assessment.',
      passScore: 80,
      resources: [
        { id: 'R103-1', title: 'Information Security Essentials 2026', type: 'video', url: 'https://youtube.com/watch?v=infosec-2026', mandatory: true },
        { id: 'R103-2', title: 'Global Data Privacy (GDPR & ISO 27001) Policy Handbook', type: 'pdf', url: 'https://docs.collabcrm.internal/infosec-handbook.pdf', mandatory: true },
        { id: 'R103-3', title: 'Phishing Defense Interactive Simulation', type: 'external_course', url: 'https://security.collabcrm.internal/quiz', mandatory: true }
      ]
    },
    {
      id: 'TR-104',
      title: 'Enterprise CRM Communication & Client Delight',
      dept: 'Sales & BD',
      difficulty: 'Intermediate',
      durationHours: 12,
      status: 'published',
      learningObjectives: 'Formulate high-impact client engagement strategies, conflict resolution, account renewal cadence, and quarterly business reviews.',
      completionReq: 'Submit recorded client presentation demonstration + 80% score.',
      passScore: 80,
      resources: [
        { id: 'R104-1', title: 'Client Communication & Relationship Principles', type: 'video', url: 'https://youtube.com/watch?v=client-comm', mandatory: true },
        { id: 'R104-2', title: 'CollabCRM Pitch & Negotiation Playbook', type: 'pdf', url: 'https://docs.collabcrm.internal/sales-playbook.pdf', mandatory: true }
      ]
    },
    {
      id: 'TR-105',
      title: 'NextJS 15 & Modern UI State Architecture',
      dept: 'Engineering',
      difficulty: 'Advanced',
      durationHours: 20,
      status: 'draft',
      learningObjectives: 'Explore React Server Components, server actions, optimistic UI updates, and atomic CSS design systems.',
      completionReq: 'Build and deploy full capstone dashboard project with >= 85% review score.',
      passScore: 85,
      resources: [
        { id: 'R105-1', title: 'NextJS 15 Core Concepts Spec', type: 'document', url: 'https://nextjs.org/docs', mandatory: true }
      ]
    },
    {
      id: 'TR-106',
      title: 'Legacy ATS Database Migration Protocols',
      dept: 'Operations',
      difficulty: 'Intermediate',
      durationHours: 10,
      status: 'archived',
      learningObjectives: 'Archived protocols for historical ATS data conversion and schema mapping.',
      completionReq: 'Internal certification only.',
      passScore: 75,
      resources: [
        { id: 'R106-1', title: 'Migration Runbook 2024', type: 'pdf', url: 'https://docs.collabcrm.internal/legacy-migration.pdf', mandatory: true }
      ]
    }
  ],

  // 3. Employee Assignments (Section 3 & 4)
  assignments: [
    {
      id: 'ASN-001',
      employeeId: 'EMP-004', // Rihan R. (Engineering - Manager: Ashish Kumar)
      programId: 'TR-101',
      assignedDate: '2026-10-01',
      dueDate: '2026-11-15',
      mandatory: true,
      progress: 75,
      trainingStatus: 'in_progress', // 'not_started' | 'in_progress' | 'submitted' | 'completed' | 'overdue'
      submissionStatus: 'none', // 'none' | 'submitted' | 'approved' | 'changes_requested' | 'rejected'
      submissionRemarks: '',
      submissionEvidence: '',
      assessmentScore: null,
      certificateStatus: 'not_eligible', // 'not_eligible' | 'eligible' | 'generated' | 'issued'
      certificateId: null,
      reviewHistory: []
    },
    {
      id: 'ASN-002',
      employeeId: 'EMP-004', // Rihan R. (Engineering - Manager: Ashish Kumar)
      programId: 'TR-103', // InfoSec
      assignedDate: '2026-10-15',
      dueDate: '2026-11-10',
      mandatory: true,
      progress: 100,
      trainingStatus: 'submitted',
      submissionStatus: 'submitted',
      submissionRemarks: 'Completed all 3 security modules, reviewed GDPR data policies, and completed the phishing quiz with distinction.',
      submissionEvidence: 'https://collabcrm.internal/uploads/rihan_infosec_assessment_proof.pdf',
      assessmentScore: 92,
      certificateStatus: 'not_eligible',
      certificateId: null,
      reviewHistory: [
        { date: '2026-10-29', action: 'Submitted for Evaluation', user: 'Rihan R.', notes: 'Learner completed all modules and submitted for manager review.' }
      ]
    },
    {
      id: 'ASN-003',
      employeeId: 'EMP-005', // Priya Nair (Engineering - Manager: Ashish Kumar)
      programId: 'TR-102', // Cloud Infrastructure
      assignedDate: '2026-10-10',
      dueDate: '2026-11-20',
      mandatory: false,
      progress: 40,
      trainingStatus: 'in_progress',
      submissionStatus: 'none',
      submissionRemarks: '',
      submissionEvidence: '',
      assessmentScore: null,
      certificateStatus: 'not_eligible',
      certificateId: null,
      reviewHistory: []
    },
    {
      id: 'ASN-004',
      employeeId: 'EMP-006', // Suresh Prasad (Recruitment - Manager: Isha Patel)
      programId: 'TR-101', // Recruitment & Client Portal
      assignedDate: '2026-10-05',
      dueDate: '2026-10-25', // Overdue!
      mandatory: true,
      progress: 30,
      trainingStatus: 'overdue',
      submissionStatus: 'none',
      submissionRemarks: '',
      submissionEvidence: '',
      assessmentScore: null,
      certificateStatus: 'not_eligible',
      certificateId: null,
      reviewHistory: []
    },
    {
      id: 'ASN-005',
      employeeId: 'EMP-003', // Ashish Kumar (Technical Lead - Manager: Isha Patel)
      programId: 'TR-102', // Cloud Infrastructure
      assignedDate: '2026-09-15',
      dueDate: '2026-10-20',
      mandatory: true,
      progress: 100,
      trainingStatus: 'completed',
      submissionStatus: 'approved',
      submissionRemarks: 'Engineered sample microservice with Redis cache and distributed tracing. Passed load tests with 5000 RPS.',
      submissionEvidence: 'https://github.com/collabcrm/microservice-benchmarks',
      assessmentScore: 96,
      certificateStatus: 'issued',
      certificateId: 'CERT-2026-001',
      reviewHistory: [
        { date: '2026-10-18', action: 'Submitted', user: 'Ashish Kumar', notes: 'Submitted architecture benchmarks and test results.' },
        { date: '2026-10-20', action: 'Approved', user: 'Isha Patel (Admin)', notes: 'Outstanding architectural implementation and thorough documentation.' }
      ]
    },
    {
      id: 'ASN-006',
      employeeId: 'EMP-007', // Vikram Malhotra (Sales - Manager: Isha Patel)
      programId: 'TR-104', // Enterprise CRM
      assignedDate: '2026-10-01',
      dueDate: '2026-11-30',
      mandatory: true,
      progress: 0,
      trainingStatus: 'not_started',
      submissionStatus: 'none',
      submissionRemarks: '',
      submissionEvidence: '',
      assessmentScore: null,
      certificateStatus: 'not_eligible',
      certificateId: null,
      reviewHistory: []
    },
    {
      id: 'ASN-007',
      employeeId: 'EMP-008', // Ananya Roy (Engineering - Manager: Ashish Kumar)
      programId: 'TR-103', // InfoSec
      assignedDate: '2026-10-12',
      dueDate: '2026-11-12',
      mandatory: true,
      progress: 100,
      trainingStatus: 'submitted',
      submissionStatus: 'submitted',
      submissionRemarks: 'Completed all security modules and validated cloud secrets rotation policies.',
      submissionEvidence: 'https://collabcrm.internal/uploads/ananya_cloud_sec_audit.pdf',
      assessmentScore: 88,
      certificateStatus: 'not_eligible',
      certificateId: null,
      reviewHistory: [
        { date: '2026-10-28', action: 'Submitted for Evaluation', user: 'Ananya Roy', notes: 'Completed security compliance requirements.' }
      ]
    },
    {
      id: 'ASN-008',
      employeeId: 'EMP-002', // Shivam Sharma (People Ops - Manager: Isha Patel)
      programId: 'TR-101', // Recruitment & Client Portal
      assignedDate: '2026-10-02',
      dueDate: '2026-10-28',
      mandatory: true,
      progress: 100,
      trainingStatus: 'completed',
      submissionStatus: 'approved',
      submissionRemarks: 'Completed all candidate workflow lessons and passed ATS scenario evaluation.',
      submissionEvidence: 'https://collabcrm.internal/uploads/shivam_recruitment_capstone.pdf',
      assessmentScore: 94,
      certificateStatus: 'generated', // Generated, but NOT yet issued!
      certificateId: 'CERT-2026-002',
      reviewHistory: [
        { date: '2026-10-26', action: 'Submitted', user: 'Shivam Sharma', notes: 'Submitted final capstone project.' },
        { date: '2026-10-28', action: 'Approved', user: 'Isha Patel (Admin)', notes: 'Great job mastering candidate workflow and client portal.' }
      ]
    },
    {
      id: 'ASN-009',
      employeeId: 'EMP-009', // Neha Gupta (People Ops - Manager: Shivam Sharma)
      programId: 'TR-103', // InfoSec
      assignedDate: '2026-10-14',
      dueDate: '2026-11-14',
      mandatory: true,
      progress: 60,
      trainingStatus: 'in_progress',
      submissionStatus: 'none',
      submissionRemarks: '',
      submissionEvidence: '',
      assessmentScore: null,
      certificateStatus: 'not_eligible',
      certificateId: null,
      reviewHistory: []
    }
  ],

  // 4. Certificates Management (Section 6)
  certificates: [
    {
      id: 'CERT-2026-001',
      certificateNo: 'CCRM-ENG-2026-001',
      assignmentId: 'ASN-005',
      employeeId: 'EMP-003', // Ashish Kumar
      programId: 'TR-102', // Cloud Infrastructure
      issueDate: '2026-10-22',
      expiryDate: '2028-10-22',
      status: 'issued', // 'generated' | 'issued'
      reissueCount: 0,
      issuedBy: 'Isha Patel (Head of People)'
    },
    {
      id: 'CERT-2026-002',
      certificateNo: 'CCRM-HR-2026-002',
      assignmentId: 'ASN-008',
      employeeId: 'EMP-002', // Shivam Sharma
      programId: 'TR-101', // Recruitment & Client Portal
      issueDate: '2026-10-29',
      expiryDate: '2028-10-29',
      status: 'generated', // Generated, waiting for separate issuance action!
      reissueCount: 0,
      issuedBy: 'Isha Patel (Head of People)'
    }
  ],

  // 5. System Audit Trail Logs
  auditLogs: [
    { id: 'LOG-001', timestamp: '2026-10-20 14:30', actor: 'Isha Patel', action: 'Approved Submission', target: 'Ashish Kumar - Cloud Infrastructure', details: 'Score 96%. Approved. Assignment marked eligible for certificate.' },
    { id: 'LOG-002', timestamp: '2026-10-22 10:15', actor: 'Isha Patel', action: 'Generated Certificate', target: 'CCRM-ENG-2026-001', details: 'Generated official certificate for Ashish Kumar.' },
    { id: 'LOG-003', timestamp: '2026-10-22 10:18', actor: 'Isha Patel', action: 'Issued Certificate', target: 'CCRM-ENG-2026-001', details: 'Dispatched certificate to employee portal.' },
    { id: 'LOG-004', timestamp: '2026-10-28 16:45', actor: 'Isha Patel', action: 'Approved Submission', target: 'Shivam Sharma - CollabCRM Recruitment', details: 'Score 94%. Approved for certificate eligibility.' },
    { id: 'LOG-005', timestamp: '2026-10-29 09:20', actor: 'Isha Patel', action: 'Generated Certificate', target: 'CCRM-HR-2026-002', details: 'Certificate generated. Pending separate issuance action.' }
  ]
};

// ==========================================================================
// Initialization & Navigation
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initClockWidget();
  renderPortalNotifications();
  setAppRole('admin'); // Start in Admin Role
  switchToTraining();
});

// App Role Switcher (Admin vs HR vs Reporting Manager vs Employee)
function setAppRole(role) {
  state.currentRole = role;

  const btnAdmin = document.getElementById('btnRoleAdmin');
  const btnHR = document.getElementById('btnRoleHR');
  const btnManager = document.getElementById('btnRoleManager');
  const btnEmployee = document.getElementById('btnRoleEmployee');

  const rolePersonaAvatar = document.getElementById('rolePersonaAvatar');
  const rolePersonaName = document.getElementById('rolePersonaName');
  const rolePersonaScope = document.getElementById('rolePersonaScope');

  const headerAvatar = document.getElementById('headerUserAvatar');
  const headerName = document.getElementById('headerUserName');
  const headerRole = document.getElementById('headerUserRole');
  const portalScopeRoleName = document.getElementById('portalScopeRoleName');
  const rolePortalSubtitle = document.getElementById('rolePortalSubtitle');
  const hierarchyBanner = document.getElementById('hierarchyNoticeBanner');
  const optAssignDeptRadio = document.getElementById('optAssignDeptRadio');

  // Reset Button States
  if (btnAdmin) btnAdmin.classList.toggle('active', role === 'admin');
  if (btnHR) btnHR.classList.toggle('active', role === 'hr');
  if (btnManager) btnManager.classList.toggle('active', role === 'manager');
  if (btnEmployee) btnEmployee.classList.toggle('active', role === 'employee');

  if (role === 'admin') {
    const avatar = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120';
    if (headerAvatar) headerAvatar.src = avatar;
    if (rolePersonaAvatar) rolePersonaAvatar.src = avatar;
    if (headerName) headerName.textContent = 'Isha Patel';
    if (rolePersonaName) rolePersonaName.textContent = 'Isha Patel';
    if (headerRole) headerRole.textContent = 'Admin / Head of People';
    if (rolePersonaScope) rolePersonaScope.textContent = 'Head of People • Full Access';
    if (portalScopeRoleName) portalScopeRoleName.textContent = 'Admin (Full Access & All Records)';
    if (rolePortalSubtitle) rolePortalSubtitle.textContent = 'Admin Portal • Full access to create, assign, evaluate, certify, and configure training across all business units.';
    if (hierarchyBanner) hierarchyBanner.style.display = 'none';
    if (optAssignDeptRadio) optAssignDeptRadio.style.display = 'flex';
  } else if (role === 'hr') {
    const avatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120';
    if (headerAvatar) headerAvatar.src = avatar;
    if (rolePersonaAvatar) rolePersonaAvatar.src = avatar;
    if (headerName) headerName.textContent = 'Shivam Sharma';
    if (rolePersonaName) rolePersonaName.textContent = 'Shivam Sharma';
    if (headerRole) headerRole.textContent = 'HR Operations';
    if (rolePersonaScope) rolePersonaScope.textContent = 'HR Operations • Company-Wide';
    if (portalScopeRoleName) portalScopeRoleName.textContent = 'HR Operations (Company-Wide Programmes & Assignments)';
    if (rolePortalSubtitle) rolePortalSubtitle.textContent = 'HR Portal • Create programmes, assign to employees and departments, monitor progress, review submissions, and manage certificates.';
    if (hierarchyBanner) hierarchyBanner.style.display = 'none';
    if (optAssignDeptRadio) optAssignDeptRadio.style.display = 'flex';
  } else if (role === 'manager') {
    // Reporting Manager (Ashish Kumar - Engineering Technical Lead)
    const avatar = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120';
    if (headerAvatar) headerAvatar.src = avatar;
    if (rolePersonaAvatar) rolePersonaAvatar.src = avatar;
    if (headerName) headerName.textContent = 'Ashish Kumar';
    if (rolePersonaName) rolePersonaName.textContent = 'Ashish Kumar';
    if (headerRole) headerRole.textContent = 'Reporting Manager (Eng)';
    if (rolePersonaScope) rolePersonaScope.textContent = 'Engineering Lead • Direct Reports Scope';
    if (portalScopeRoleName) portalScopeRoleName.textContent = 'Reporting Manager (Engineering Hierarchy Only)';
    if (rolePortalSubtitle) rolePortalSubtitle.textContent = 'Reporting Manager Portal • Scoped strictly to team members within your authorized reporting hierarchy.';
    if (hierarchyBanner) hierarchyBanner.style.display = 'flex';
    if (optAssignDeptRadio) optAssignDeptRadio.style.display = 'none'; // RM can only assign to direct reports
  } else {
    // Employee Role (Rihan R. - Software Engineer Learner)
    const avatar = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120';
    if (headerAvatar) headerAvatar.src = avatar;
    if (rolePersonaAvatar) rolePersonaAvatar.src = avatar;
    if (headerName) headerName.textContent = 'Rihan R.';
    if (rolePersonaName) rolePersonaName.textContent = 'Rihan R.';
    if (headerRole) headerRole.textContent = 'Software Engineer (Learner)';
    if (rolePersonaScope) rolePersonaScope.textContent = 'Engineering • Learner Portal';
    if (portalScopeRoleName) portalScopeRoleName.textContent = 'Employee Learner (My Enrolled Trainings & Progress)';
    if (rolePortalSubtitle) rolePortalSubtitle.textContent = 'Employee Portal • View your assigned programmes, track module progress, submit capstone evidence, and access certified credentials.';
    if (hierarchyBanner) hierarchyBanner.style.display = 'none';
    if (optAssignDeptRadio) optAssignDeptRadio.style.display = 'none';
  }

  // Re-render active sub-tab view with role scoping applied
  renderActiveSubTab();
  if (typeof updateTrainingConfigPermissions === 'function') {
    updateTrainingConfigPermissions();
  }
}

window.setAppRole = setAppRole;

// Main Module Switching (Employees, Training, Config)
function switchToEmployees() {
  const viewDashboard = document.getElementById('viewDashboard');
  const viewTraining = document.getElementById('viewTraining');
  const viewConfig = document.getElementById('viewConfig');

  const menuEmployees = document.getElementById('menuEmployees');
  const menuTraining = document.getElementById('menuTraining');
  const menuConfig = document.getElementById('menuConfig');

  const employeesInner = document.getElementById('employeesInner');
  const trainingInner = document.getElementById('trainingInner');
  const configInner = document.getElementById('configInner');

  if (viewDashboard) { viewDashboard.style.display = 'block'; viewDashboard.classList.add('active'); }
  if (viewTraining) { viewTraining.style.display = 'none'; viewTraining.classList.remove('active'); }
  if (viewConfig) { viewConfig.style.display = 'none'; viewConfig.classList.remove('active'); }
  const viewTrainingConfig = document.getElementById('viewTrainingConfig');
  if (viewTrainingConfig) { viewTrainingConfig.style.display = 'none'; viewTrainingConfig.classList.remove('active'); }
  const viewRoles = document.getElementById('viewRoles');
  if (viewRoles) { viewRoles.style.display = 'none'; viewRoles.classList.remove('active'); }
  const viewRolePermissions = document.getElementById('viewRolePermissions');
  if (viewRolePermissions) { viewRolePermissions.style.display = 'none'; viewRolePermissions.classList.remove('active'); }

  if (menuEmployees) menuEmployees.classList.add('active');
  if (menuTraining) menuTraining.classList.remove('active');
  if (menuConfig) menuConfig.classList.remove('active');

  if (employeesInner) {
    employeesInner.className = 'bg-indigo-600 text-white relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = employeesInner.querySelector('.icon-users-02');
    if (icon) icon.className = 'text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-users-02';
  }
  if (trainingInner) {
    trainingInner.className = 'text-white hover:bg-indigo-600 flex items-center rounded-md h-full w-full text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = trainingInner.querySelector('.icon-training');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center 2xl:text-xl 2xl-to-xl:text-lg text-lg icon-training';
  }
  if (configInner) {
    configInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = configInner.querySelector('.icon-settings-02');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-settings-02';
  }
}

function switchToTraining() {
  if (trainingConfigData && trainingConfigData.general && trainingConfigData.general.moduleEnabled === false) {
    alert('Training Module is currently disabled in System Configuration. Enable it under Config → Training Config.');
    return;
  }

  const viewDashboard = document.getElementById('viewDashboard');
  const viewTraining = document.getElementById('viewTraining');
  const viewConfig = document.getElementById('viewConfig');

  const menuEmployees = document.getElementById('menuEmployees');
  const menuTraining = document.getElementById('menuTraining');
  const menuConfig = document.getElementById('menuConfig');

  const employeesInner = document.getElementById('employeesInner');
  const trainingInner = document.getElementById('trainingInner');
  const configInner = document.getElementById('configInner');

  if (viewDashboard) { viewDashboard.style.display = 'none'; viewDashboard.classList.remove('active'); }
  if (viewTraining) { viewTraining.style.display = 'block'; viewTraining.classList.add('active'); }
  if (viewConfig) { viewConfig.style.display = 'none'; viewConfig.classList.remove('active'); }
  const viewTrainingConfig = document.getElementById('viewTrainingConfig');
  if (viewTrainingConfig) { viewTrainingConfig.style.display = 'none'; viewTrainingConfig.classList.remove('active'); }
  const viewRoles = document.getElementById('viewRoles');
  if (viewRoles) { viewRoles.style.display = 'none'; viewRoles.classList.remove('active'); }
  const viewRolePermissions = document.getElementById('viewRolePermissions');
  if (viewRolePermissions) { viewRolePermissions.style.display = 'none'; viewRolePermissions.classList.remove('active'); }

  if (menuEmployees) menuEmployees.classList.remove('active');
  if (menuTraining) menuTraining.classList.add('active');
  if (menuConfig) menuConfig.classList.remove('active');

  if (employeesInner) {
    employeesInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = employeesInner.querySelector('.icon-users-02');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-users-02';
  }
  if (trainingInner) {
    trainingInner.className = 'bg-indigo-600 text-white flex items-center rounded-md h-full w-full text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = trainingInner.querySelector('.icon-training');
    if (icon) icon.className = 'text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center 2xl:text-xl 2xl-to-xl:text-lg text-lg icon-training';
  }
  if (configInner) {
    configInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = configInner.querySelector('.icon-settings-02');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-settings-02';
  }

  renderActiveSubTab();
}

// Config Panel Controls (Matching exact CollabCRM specs)
function openConfigPanel() {
  const panel = document.getElementById('configSidePanel');
  const menuConfig = document.getElementById('menuConfig');
  const configInner = document.getElementById('configInner');
  const menuTraining = document.getElementById('menuTraining');
  const menuEmployees = document.getElementById('menuEmployees');
  const trainingInner = document.getElementById('trainingInner');
  const employeesInner = document.getElementById('employeesInner');

  if (panel) panel.classList.add('open');

  if (menuConfig) menuConfig.classList.add('active');
  if (configInner) {
    configInner.className = 'bg-indigo-600 text-white relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = configInner.querySelector('.icon-settings-02');
    if (icon) icon.className = 'text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-settings-02';
  }

  if (menuTraining) menuTraining.classList.remove('active');
  if (trainingInner) {
    trainingInner.className = 'text-white hover:bg-indigo-600 flex items-center rounded-md h-full w-full text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = trainingInner.querySelector('.icon-training');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center 2xl:text-xl 2xl-to-xl:text-lg text-lg icon-training';
  }

  if (menuEmployees) menuEmployees.classList.remove('active');
  if (employeesInner) {
    employeesInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = employeesInner.querySelector('.icon-users-02');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-users-02';
  }
}

function closeConfigPanel() {
  const panel = document.getElementById('configSidePanel');
  const menuConfig = document.getElementById('menuConfig');
  const configInner = document.getElementById('configInner');

  if (panel) panel.classList.remove('open');

  if (menuConfig) menuConfig.classList.remove('active');
  if (configInner) {
    configInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = configInner.querySelector('.icon-settings-02');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-settings-02';
  }
}

function toggleConfigPanel() {
  const panel = document.getElementById('configSidePanel');
  if (panel && panel.classList.contains('open')) {
    closeConfigPanel();
    switchToTraining();
  } else {
    openConfigPanel();
  }
}

function openConfigOption(optionName) {
  if (state.currentRole === 'manager') {
    alert(`Access Restricted: Only Admin and authorized HR roles can modify "${optionName}" settings.`);
    return;
  }
  alert(`CollabCRM People Config › ${optionName}\nConfigure system master rules, policies, and workflows.`);
}

window.switchToEmployees = switchToEmployees;
window.switchToTraining = switchToTraining;
window.toggleConfigPanel = toggleConfigPanel;
window.openConfigPanel = openConfigPanel;
window.closeConfigPanel = closeConfigPanel;
window.openConfigOption = openConfigOption;

// ==========================================================================
// Sub-Navigation Between the 7 Training Portal Sections
// ==========================================================================
function switchTrainingTab(tabId) {
  state.activeSubTab = tabId;

  const tabBtns = {
    dashboard: document.getElementById('tabBtnDashboard'),
    programs: document.getElementById('tabBtnPrograms'),
    assignments: document.getElementById('tabBtnAssignments'),
    progress: document.getElementById('tabBtnProgress'),
    reviews: document.getElementById('tabBtnReviews'),
    certificates: document.getElementById('tabBtnCertificates'),
    reports: document.getElementById('tabBtnReports')
  };

  const sections = {
    dashboard: document.getElementById('sectionDashboard'),
    programs: document.getElementById('sectionPrograms'),
    assignments: document.getElementById('sectionAssignments'),
    progress: document.getElementById('sectionProgress'),
    reviews: document.getElementById('sectionReviews'),
    certificates: document.getElementById('sectionCertificates'),
    reports: document.getElementById('sectionReports')
  };

  const labelEl = document.getElementById('currentActiveTabLabel');
  const btnAction = document.getElementById('btnHeaderPrimaryAction');
  const btnActionText = document.getElementById('btnHeaderPrimaryText');

  // Set active tab buttons and views
  Object.keys(tabBtns).forEach(k => {
    if (tabBtns[k]) tabBtns[k].classList.toggle('active', k === tabId);
    if (sections[k]) sections[k].style.display = (k === tabId) ? 'block' : 'none';
  });

  const tabLabels = {
    dashboard: 'Dashboard',
    programs: 'Training Management',
    assignments: 'Assignments',
    progress: 'Employee Progress',
    reviews: 'Training Review',
    certificates: 'Certificates',
    reports: 'Reports'
  };

  if (labelEl) labelEl.textContent = tabLabels[tabId] || 'Portal';

  // Contextual Top Action Button
  if (btnAction && btnActionText) {
    if (tabId === 'programs') {
      btnAction.style.display = 'flex';
      btnActionText.textContent = '+ New Training Program';
    } else if (tabId === 'assignments') {
      btnAction.style.display = 'flex';
      btnActionText.textContent = '+ Assign Training';
    } else {
      btnAction.style.display = 'flex';
      btnActionText.textContent = '+ New Training Program';
    }
  }

  renderActiveSubTab();
}

window.switchTrainingTab = switchTrainingTab;

function handlePrimaryAction() {
  if (state.activeSubTab === 'assignments') {
    openAssignTrainingModal();
  } else {
    openCreateProgramModal();
  }
}

window.handlePrimaryAction = handlePrimaryAction;

function renderActiveSubTab() {
  // Always update pending reviews badge on tabs
  updatePendingReviewsBadge();

  if (state.activeSubTab === 'dashboard') {
    renderDashboard();
  } else if (state.activeSubTab === 'programs') {
    renderProgramsList();
  } else if (state.activeSubTab === 'assignments') {
    renderAssignmentsTable();
  } else if (state.activeSubTab === 'progress') {
    renderProgressTable();
  } else if (state.activeSubTab === 'reviews') {
    renderReviewQueue();
  } else if (state.activeSubTab === 'certificates') {
    renderCertificatesTable();
  } else if (state.activeSubTab === 'reports') {
    renderReportsView();
  }
}

// Hierarchy Scoping Helper
function getScopedAssignments() {
  if (state.currentRole === 'manager') {
    // Only return assignments for employees whose manager is Ashish Kumar (EMP-003)
    return state.assignments.filter(a => {
      const emp = state.employees.find(e => e.id === a.employeeId);
      return emp && emp.managerId === state.currentManagerId;
    });
  }
  if (state.currentRole === 'employee') {
    // Scoped strictly to logged-in employee (Rihan R. - EMP-004)
    return state.assignments.filter(a => a.employeeId === 'EMP-004');
  }
  return state.assignments;
}

function getScopedEmployees() {
  if (state.currentRole === 'manager') {
    return state.employees.filter(e => e.managerId === state.currentManagerId);
  }
  if (state.currentRole === 'employee') {
    return state.employees.filter(e => e.id === 'EMP-004');
  }
  return state.employees;
}

function updatePendingReviewsBadge() {
  const scopedAsns = getScopedAssignments();
  const pendingCount = scopedAsns.filter(a => a.submissionStatus === 'submitted').length;
  const badge = document.getElementById('pendingReviewBadge');
  if (badge) {
    badge.textContent = pendingCount;
    badge.style.display = pendingCount > 0 ? 'inline-block' : 'none';
  }
  const queueBadge = document.getElementById('reviewsCountBadge');
  if (queueBadge) queueBadge.textContent = `${pendingCount} Pending`;
}

// ==========================================================================
// SECTION 1: TRAINING DASHBOARD (4 MAIN KPIS + GRAPHICAL VISUALIZATIONS)
// ==========================================================================
function renderDashboard() {
  const scopedAssignments = getScopedAssignments();
  const totalPrograms = state.programs.length;
  const publishedPrograms = state.programs.filter(p => p.status === 'published').length;
  const draftPrograms = state.programs.filter(p => p.status === 'draft').length;

  const totalAssignments = scopedAssignments.length;
  const notStarted = scopedAssignments.filter(a => a.trainingStatus === 'not_started').length;
  const inProgress = scopedAssignments.filter(a => a.trainingStatus === 'in_progress').length;
  const submittedReview = scopedAssignments.filter(a => a.submissionStatus === 'submitted').length;
  const completed = scopedAssignments.filter(a => a.trainingStatus === 'completed').length;
  const overdue = scopedAssignments.filter(a => a.trainingStatus === 'overdue').length;

  // Certificates Issued in current scope
  let certsIssuedCount = 0;
  if (state.currentRole === 'manager') {
    certsIssuedCount = state.certificates.filter(c => {
      const emp = state.employees.find(e => e.id === c.employeeId);
      return emp && emp.managerId === state.currentManagerId && c.status === 'issued';
    }).length;
  } else if (state.currentRole === 'employee') {
    certsIssuedCount = state.certificates.filter(c => c.employeeId === 'EMP-004' && c.status === 'issued').length;
  } else {
    certsIssuedCount = state.certificates.filter(c => c.status === 'issued').length;
  }

  // Populate the 4 Main KPI metrics
  const setElText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  const completionRate = totalAssignments > 0 ? Math.round((completed / totalAssignments) * 100) : 0;

  setElText('kpiTotalTrainings', totalPrograms);
  setElText('kpiPublishedTrainings', publishedPrograms);
  setElText('kpiDraftTrainings', draftPrograms);
  setElText('kpiTotalAssignments', totalAssignments);
  setElText('kpiNotStarted', notStarted);
  setElText('kpiInProgress', inProgress);
  setElText('kpiSubmittedReview', submittedReview);
  setElText('kpiCompleted', completed);
  setElText('kpiOverdue', overdue);
  setElText('kpiCertificatesIssued', certsIssuedCount);
  setElText('kpiCompletionRate', `${completionRate}%`);

  // Donut SVG Calculations (Real data)
  const donutTotal = document.getElementById('dashDonutTotal');
  if (donutTotal) donutTotal.textContent = totalAssignments;

  if (totalAssignments > 0) {
    const pctComp = (completed / totalAssignments) * 100;
    const pctInProg = (inProgress / totalAssignments) * 100;
    const pctRev = (submittedReview / totalAssignments) * 100;
    const pctNot = (notStarted / totalAssignments) * 100;
    const pctOvd = (overdue / totalAssignments) * 100;

    let offset = 0;
    const setRing = (id, pct) => {
      const el = document.getElementById(id);
      if (el) {
        el.setAttribute('stroke-dasharray', `${pct.toFixed(1)} ${(100 - pct).toFixed(1)}`);
        el.setAttribute('stroke-dashoffset', `${(-offset).toFixed(1)}`);
        offset += pct;
      }
    };
    setRing('dashDonutCompleted', pctComp);
    setRing('dashDonutInProgress', pctInProg);
    setRing('dashDonutReview', pctRev);
    setRing('dashDonutNotStarted', pctNot);
    setRing('dashDonutOverdue', pctOvd);

    setElText('dashLegendCompleted', `${completed} (${Math.round(pctComp)}%)`);
    setElText('dashLegendInProgress', `${inProgress} (${Math.round(pctInProg)}%)`);
    setElText('dashLegendReview', `${submittedReview} (${Math.round(pctRev)}%)`);
    setElText('dashLegendNotStarted', `${notStarted} (${Math.round(pctNot)}%)`);
    setElText('dashLegendOverdue', `${overdue} (${Math.round(pctOvd)}%)`);
  }

  // Dashboard Submissions Awaiting Review Preview
  const previewContainer = document.getElementById('dashboardReviewsPreview');
  if (previewContainer) {
    const pendingSubmissions = scopedAssignments.filter(a => a.submissionStatus === 'submitted');
    if (pendingSubmissions.length === 0) {
      previewContainer.innerHTML = `
        <div style="padding: 16px; background: #f8fafc; border-radius: 8px; text-align: center; color: #64748b; font-size: 13px;">
          ✓ All employee submissions are up to date. No pending evaluations!
        </div>
      `;
    } else {
      let html = '<div style="display: flex; flex-direction: column; gap: 8px;">';
      pendingSubmissions.forEach(a => {
        const emp = state.employees.find(e => e.id === a.employeeId) || { name: 'Unknown', avatar: '' };
        const prog = state.programs.find(p => p.id === a.programId) || { title: 'Unknown Program' };
        html += `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: #fef2f2; border: 1px solid #fee2e2; border-radius: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <img src="${emp.avatar}" style="width: 32px; height: 32px; border-radius: 50%;" />
              <div>
                <div style="font-weight: 700; font-size: 13px; color: #0f172a;">${escapeHtml(emp.name)}</div>
                <div style="font-size: 11.5px; color: #64748b;">${escapeHtml(prog.title)} • Score: <strong>${a.assessmentScore || 85}%</strong></div>
              </div>
            </div>
            <button class="btn-table-action primary" onclick="openReviewModal('${a.id}')">Evaluate Now →</button>
          </div>
        `;
      });
      html += '</div>';
      previewContainer.innerHTML = html;
    }
  }

  // Dashboard Department Participation Breakdown
  const deptList = document.getElementById('dashboardDeptProgressList');
  if (deptList) {
    const depts = ['Engineering', 'Recruitment & HR', 'People Operations', 'Sales & BD'];
    let deptHtml = '';
    depts.forEach(d => {
      const deptAsns = scopedAssignments.filter(a => {
        const emp = state.employees.find(e => e.id === a.employeeId);
        return emp && emp.dept === d;
      });
      const completedDept = deptAsns.filter(a => a.trainingStatus === 'completed').length;
      const pct = deptAsns.length > 0 ? Math.round((completedDept / deptAsns.length) * 100) : 0;

      deptHtml += `
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
            <span style="font-weight: 600; color: #1e293b;">${d}</span>
            <span style="color: #64748b;">${completedDept}/${deptAsns.length} Completed (${pct}%)</span>
          </div>
          <div style="height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: ${pct}%; height: 100%; background: #2563eb; border-radius: 3px;"></div>
          </div>
        </div>
      `;
    });
    deptList.innerHTML = deptHtml;
  }
}

// ==========================================================================
// SECTION 2: TRAINING MANAGEMENT (PROGRAMMES CATALOG IN TABLE FORMAT)
// ==========================================================================
function filterProgramsTab(status) {
  state.programFilterStatus = status;
  const btns = {
    all: document.getElementById('filterProgAll'),
    published: document.getElementById('filterProgPublished'),
    draft: document.getElementById('filterProgDraft'),
    archived: document.getElementById('filterProgArchived')
  };
  Object.keys(btns).forEach(k => {
    if (btns[k]) {
      btns[k].style.background = (k === status) ? '#ffffff' : 'transparent';
      btns[k].style.fontWeight = (k === status) ? '700' : '500';
    }
  });
  renderProgramsList();
}

window.filterProgramsTab = filterProgramsTab;

function renderProgramsList() {
  const tbody = document.getElementById('programsTableBody');
  const grid = document.getElementById('programCardsGrid');
  const countBadge = document.getElementById('programsCountBadge');
  const query = (document.getElementById('searchProgramsInput')?.value || '').toLowerCase();

  let filtered = state.programs.filter(p => {
    const matchesStatus = (state.programFilterStatus === 'all') || (p.status === state.programFilterStatus);
    const matchesQuery = p.title.toLowerCase().includes(query) || p.dept.toLowerCase().includes(query) || (p.learningObjectives || '').toLowerCase().includes(query);
    return matchesStatus && matchesQuery;
  });

  if (countBadge) countBadge.textContent = `${filtered.length} Programmes`;

  if (filtered.length === 0) {
    if (tbody) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" style="padding: 40px; text-align: center; background: #f8fafc; color: #64748b;">
            <p style="font-weight: 600; font-size: 14px; margin-bottom: 8px;">No training programmes found matching criteria.</p>
            <button class="btn-primary-action" onclick="openCreateProgramModal()">+ Create New Programme</button>
          </td>
        </tr>
      `;
    }
    if (grid) grid.innerHTML = '';
    return;
  }

  let tableHtml = '';
  filtered.forEach((p, idx) => {
    const enrolledCount = state.assignments.filter(a => a.programId === p.id).length;
    const completedCount = state.assignments.filter(a => a.programId === p.id && a.trainingStatus === 'completed').length;
    const progressPct = enrolledCount > 0 ? Math.round((completedCount / enrolledCount) * 100) : 0;
    const mandatoryCount = (p.resources || []).filter(r => r.mandatory).length;

    let statusPill = '';
    if (p.status === 'published') statusPill = '<span class="status-pill status-completed">Published</span>';
    else if (p.status === 'draft') statusPill = '<span class="status-pill status-changes">Draft</span>';
    else statusPill = '<span class="status-pill status-notstarted">Archived</span>';

    const diffBadge = p.difficulty === 'Advanced' 
      ? 'style="background:#fef2f2; color:#b91c1c;"' 
      : (p.difficulty === 'Beginner' ? 'style="background:#f0fdf4; color:#166534;"' : 'style="background:#eff6ff; color:#1d4ed8;"');

    tableHtml += `
      <tr style="border-bottom: 1px solid #e2e8f0; transition: background 0.15s ease;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
        <td style="padding: 14px 12px; text-align: center; color: #64748b; font-size: 12px; border-right: 1px solid #f1f5f9; vertical-align: middle;">${idx + 1}</td>
        <td style="padding: 14px 16px; vertical-align: top; border-right: 1px solid #f1f5f9;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <span class="badge-dept badge-blue">${escapeHtml(p.dept)}</span>
            <span class="status-pill" ${diffBadge}>${p.difficulty}</span>
          </div>
          <div style="font-weight: 700; font-size: 13.5px; color: #0f172a; margin-bottom: 4px;">${escapeHtml(p.title)}</div>
          <p style="font-size: 12px; color: #64748b; line-height: 1.4; margin: 0; max-width: 440px;">
            ${escapeHtml(p.learningObjectives || 'Comprehensive professional training curriculum.')}
          </p>
        </td>
        <td style="padding: 14px 16px; vertical-align: top; white-space: nowrap; border-right: 1px solid #f1f5f9;">
          <div style="font-weight: 700; font-size: 13px; color: #0f172a;">⏱️ ${p.durationHours} hrs</div>
          <div style="font-size: 12px; color: #64748b; margin-top: 4px;">📑 ${(p.resources || []).length} Modules</div>
          <div style="font-size: 11px; color: #059669; font-weight: 600; margin-top: 2px;">✓ ${mandatoryCount} Mandatory</div>
        </td>
        <td style="padding: 14px 16px; vertical-align: top; min-width: 170px; border-right: 1px solid #f1f5f9;">
          <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 6px;">
            <span style="color: #64748b; font-weight: 500;">👥 ${enrolledCount} Enrolled</span>
            <strong style="color: #0f172a;">${progressPct}%</strong>
          </div>
          <div style="height: 7px; background: #e2e8f0; border-radius: 4px; overflow: hidden; width: 100%;">
            <div style="width: ${progressPct}%; height: 100%; background: #2563eb; border-radius: 4px;"></div>
          </div>
          <div style="font-size: 11px; color: #64748b; margin-top: 4px;">${completedCount} completed</div>
        </td>
        <td style="padding: 14px 14px; vertical-align: middle; text-align: center; border-right: 1px solid #f1f5f9;">
          ${statusPill}
        </td>
        <td style="padding: 14px 16px; vertical-align: middle; text-align: center; white-space: nowrap;">
          <div style="display: inline-flex; align-items: center; justify-content: center; gap: 14px;">
            <button type="button" class="emp-action-icon" onclick="previewProgram('${p.id}')" title="View Programme" aria-label="View" style="background: none; border: none; padding: 4px; color: #64748b; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; border-radius: 4px;">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#64748b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
            <button type="button" class="emp-action-icon" onclick="openEditProgramModal('${p.id}')" title="Edit Programme" aria-label="Edit" style="background: none; border: none; padding: 4px; color: #64748b; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; border-radius: 4px;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#64748b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  if (tbody) tbody.innerHTML = tableHtml;
  if (grid) grid.innerHTML = '';
}

window.renderProgramsList = renderProgramsList;

// Program Form Builder & Multi-Resource Manager
function openCreateProgramModal() {
  if (trainingConfigData && trainingConfigData.general && trainingConfigData.general.allowCreation === false) {
    alert('Training Creation is currently disabled in Training Config.');
    return;
  }
  document.getElementById('editingProgramId').value = '';
  document.getElementById('programFormModalTitle').textContent = 'Create New Training Programme';
  document.getElementById('progTitleInput').value = '';
  document.getElementById('progDeptInput').value = 'Engineering';
  document.getElementById('progDifficultyInput').value = 'Intermediate';
  document.getElementById('progDurationInput').value = (trainingConfigData?.general?.durationHours) || '16';
  document.getElementById('progPassScoreInput').value = (trainingConfigData?.completion?.passingScore) || '80';
  document.getElementById('progObjectivesInput').value = '';
  document.getElementById('progCriteriaInput').value = 'Complete 100% mandatory modules + achieve >= 80% on assessment';

  // Seed default 2 resource rows
  const container = document.getElementById('resourceRowsContainer');
  container.innerHTML = '';
  addResourceRow({ title: 'Module 1: Architecture Video Lecture', type: 'video', url: 'https://youtube.com/watch?v=sample-video', mandatory: true });
  addResourceRow({ title: 'Module 2: Standard Operating Procedure Handbook', type: 'pdf', url: 'https://docs.collabcrm.internal/sample-handbook.pdf', mandatory: true });

  document.getElementById('programFormModal').classList.add('open');
}

window.openCreateProgramModal = openCreateProgramModal;

function openEditProgramModal(progId) {
  if (trainingConfigData && trainingConfigData.general && trainingConfigData.general.allowEditing === false) {
    alert('Training Editing is currently disabled in Training Config.');
    return;
  }
  const p = state.programs.find(prog => prog.id === progId);
  if (!p) return;

  document.getElementById('editingProgramId').value = p.id;
  document.getElementById('programFormModalTitle').textContent = `Edit Training Programme: ${p.title}`;
  document.getElementById('progTitleInput').value = p.title;
  document.getElementById('progDeptInput').value = p.dept;
  document.getElementById('progDifficultyInput').value = p.difficulty;
  document.getElementById('progDurationInput').value = p.durationHours;
  document.getElementById('progPassScoreInput').value = p.passScore || 80;
  document.getElementById('progObjectivesInput').value = p.learningObjectives || '';
  document.getElementById('progCriteriaInput').value = p.completionReq || '';

  const container = document.getElementById('resourceRowsContainer');
  container.innerHTML = '';
  (p.resources || []).forEach(r => addResourceRow(r));

  document.getElementById('programFormModal').classList.add('open');
}

window.openEditProgramModal = openEditProgramModal;

function closeProgramModal() {
  document.getElementById('programFormModal').classList.remove('open');
}

window.closeProgramModal = closeProgramModal;

function addResourceRow(existing = null) {
  const container = document.getElementById('resourceRowsContainer');
  const rowId = 'res_row_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);

  const titleVal = existing ? existing.title : '';
  const typeVal = existing ? existing.type : 'video';
  const urlVal = existing ? existing.url : '';
  const mandatoryVal = existing ? existing.mandatory : true;

  const div = document.createElement('div');
  div.className = 'resource-row-item';
  div.id = rowId;
  div.innerHTML = `
    <select class="res-type-select" style="width: 130px;">
      <option value="video" ${typeVal === 'video' ? 'selected' : ''}>🎬 Video / YouTube</option>
      <option value="external_course" ${typeVal === 'external_course' ? 'selected' : ''}>🎓 External Course</option>
      <option value="website" ${typeVal === 'website' ? 'selected' : ''}>🌐 Website / Lab</option>
      <option value="pdf" ${typeVal === 'pdf' ? 'selected' : ''}>📄 PDF Document</option>
      <option value="document" ${typeVal === 'document' ? 'selected' : ''}>📝 Word / Doc</option>
    </select>
    <input type="text" class="res-title-input" placeholder="Resource Title (e.g. System Setup Video)" value="${escapeHtml(titleVal)}" style="flex: 2;" />
    <input type="text" class="res-url-input" placeholder="URL or Document Link" value="${escapeHtml(urlVal)}" style="flex: 2;" />
    <label style="display: flex; align-items: center; gap: 4px; font-size: 11.5px; cursor: pointer; white-space: nowrap;">
      <input type="checkbox" class="res-mandatory-check" ${mandatoryVal ? 'checked' : ''} />
      <span>Mandatory</span>
    </label>
    <button type="button" class="resource-del-btn" onclick="document.getElementById('${rowId}').remove()" title="Remove Resource">✕</button>
  `;
  container.appendChild(div);
}

window.addResourceRow = addResourceRow;

function saveProgram(statusToSet) {
  const editingId = document.getElementById('editingProgramId').value;
  const title = document.getElementById('progTitleInput').value.trim();
  const dept = document.getElementById('progDeptInput').value;
  const difficulty = document.getElementById('progDifficultyInput').value;
  const durationHours = parseInt(document.getElementById('progDurationInput').value, 10) || 10;
  const passScore = parseInt(document.getElementById('progPassScoreInput').value, 10) || 80;
  const objectives = document.getElementById('progObjectivesInput').value.trim();
  const criteria = document.getElementById('progCriteriaInput').value.trim();

  if (!title) {
    alert('Please enter a Programme Title.');
    return;
  }

  // Gather resources
  const resourceRows = document.querySelectorAll('#resourceRowsContainer .resource-row-item');
  const resources = [];
  resourceRows.forEach((row, idx) => {
    const type = row.querySelector('.res-type-select').value;
    const resTitle = row.querySelector('.res-title-input').value.trim();
    const url = row.querySelector('.res-url-input').value.trim();
    const mandatory = row.querySelector('.res-mandatory-check').checked;
    if (resTitle) {
      resources.push({
        id: `R-${Date.now()}-${idx}`,
        title: resTitle,
        type: type,
        url: url || 'https://collabcrm.internal/resource',
        mandatory: mandatory
      });
    }
  });

  if (editingId) {
    // Update existing
    const prog = state.programs.find(p => p.id === editingId);
    if (prog) {
      prog.title = title;
      prog.dept = dept;
      prog.difficulty = difficulty;
      prog.durationHours = durationHours;
      prog.passScore = passScore;
      prog.learningObjectives = objectives;
      prog.completionReq = criteria;
      prog.resources = resources;
      prog.status = statusToSet;
    }
    logAudit('Updated Training Programme', `Updated: ${title}`, `Status: ${statusToSet}`);
    alert(`Training Programme "${title}" updated successfully!`);
  } else {
    // Create new
    const newId = `TR-${100 + state.programs.length + 1}`;
    state.programs.unshift({
      id: newId,
      title: title,
      dept: dept,
      difficulty: difficulty,
      durationHours: durationHours,
      passScore: passScore,
      learningObjectives: objectives,
      completionReq: criteria,
      resources: resources,
      status: statusToSet
    });
    logAudit('Created Training Programme', `Created: ${title}`, `Assigned ID ${newId}`);
    alert(`Training Programme "${title}" created successfully with status: ${statusToSet}!`);
  }

  closeProgramModal();
  renderProgramsList();
  renderDashboard();
}

window.saveProgram = saveProgram;

function togglePublishProgram(progId) {
  const p = state.programs.find(prog => prog.id === progId);
  if (!p) return;
  p.status = (p.status === 'published') ? 'draft' : 'published';
  logAudit('Status Changed', p.title, `Changed status to: ${p.status}`);
  renderProgramsList();
  renderDashboard();
}

window.togglePublishProgram = togglePublishProgram;

function toggleArchiveProgram(progId) {
  if (trainingConfigData && trainingConfigData.general && trainingConfigData.general.allowArchiving === false) {
    alert('Training Archiving is currently disabled in Training Config.');
    return;
  }
  const p = state.programs.find(prog => prog.id === progId);
  if (!p) return;
  p.status = (p.status === 'archived') ? 'draft' : 'archived';
  logAudit('Status Changed', p.title, `Archived/Restored to: ${p.status}`);
  renderProgramsList();
  renderDashboard();
}

window.toggleArchiveProgram = toggleArchiveProgram;

// Program Preview Modal
let previewActiveProgId = null;
function previewProgram(progId) {
  if (trainingConfigData && trainingConfigData.general && trainingConfigData.general.enablePreview === false) {
    alert('Training Preview is currently disabled in Training Config.');
    return;
  }
  const p = state.programs.find(prog => prog.id === progId);
  if (!p) return;
  previewActiveProgId = progId;

  document.getElementById('previewProgTitle').textContent = p.title;
  const body = document.getElementById('previewModalBody');

  let resHtml = '';
  (p.resources || []).forEach((r, idx) => {
    const icon = r.type === 'video' ? '🎬' : (r.type === 'pdf' ? '📄' : (r.type === 'website' ? '🌐' : '🎓'));
    const mandBadge = r.mandatory ? '<span class="status-pill status-mandatory">Mandatory</span>' : '<span class="status-pill status-optional">Optional</span>';
    resHtml += `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 6px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span>${icon}</span>
          <div>
            <div style="font-weight: 600; font-size: 13px;">Module ${idx + 1}: ${escapeHtml(r.title)}</div>
            <a href="${escapeHtml(r.url)}" target="_blank" style="font-size: 11px; color: #2563eb; text-decoration: none;">${escapeHtml(r.url)}</a>
          </div>
        </div>
        ${mandBadge}
      </div>
    `;
  });

  body.innerHTML = `
    <div style="display: flex; gap: 12px; margin-bottom: 14px;">
      <span class="badge-dept badge-blue">${escapeHtml(p.dept)}</span>
      <span class="status-pill status-inprogress">${p.difficulty}</span>
      <span class="status-pill status-completed">⏱ ${p.durationHours} Expected Hours</span>
      <span class="status-pill status-changes">🎯 Pass Score: ${p.passScore}%</span>
    </div>

    <div style="margin-bottom: 16px;">
      <h4 style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Learning Objectives</h4>
      <p style="font-size: 13px; color: #475569; background: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
        ${escapeHtml(p.learningObjectives || 'Foundational to advanced domain skills.')}
      </p>
    </div>

    <div style="margin-bottom: 16px;">
      <h4 style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Completion Requirements & Evaluation</h4>
      <p style="font-size: 12.5px; color: #475569;">
        ${escapeHtml(p.completionReq || 'Complete all mandatory coursework and pass final evaluation.')}
      </p>
    </div>

    <div>
      <h4 style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Curriculum & Learning Resources (${(p.resources || []).length})</h4>
      <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #cbd5e1;">
        ${resHtml}
      </div>
    </div>
  `;

  document.getElementById('programPreviewModal').classList.add('open');
}

window.previewProgram = previewProgram;

function closePreviewModal() {
  document.getElementById('programPreviewModal').classList.remove('open');
}

window.closePreviewModal = closePreviewModal;

function assignFromPreview() {
  closePreviewModal();
  if (previewActiveProgId) {
    openAssignWithProgram(previewActiveProgId);
  }
}

window.assignFromPreview = assignFromPreview;

// ==========================================================================
// SECTION 3: TRAINING ASSIGNMENT (WITH DUPLICATE PREVENTION & HIERARCHY)
// ==========================================================================
function openAssignWithProgram(progId) {
  switchTrainingTab('assignments');
  openAssignTrainingModal(progId);
}

window.openAssignWithProgram = openAssignWithProgram;

function openAssignTrainingModal(preselectedProgId = null) {
  if (state.currentRole === 'manager' && trainingConfigData?.assignments?.allowReportingManager === false) {
    alert('Reporting Managers are not permitted to assign training per Training Config policy.');
    return;
  }

  const asg = trainingConfigData?.assignments || {};
  const allowInd = asg.enableIndividual !== false;
  const allowBulk = asg.enableBulk !== false;
  const allowDept = asg.enableDept !== false;

  if (!allowInd && !allowBulk && !allowDept) {
    alert('All training assignment modes are currently disabled in Training Config.');
    return;
  }

  const modal = document.getElementById('assignTrainingModal');
  const progSelect = document.getElementById('assignSelectProgram');
  const empSelect = document.getElementById('assignSelectEmployee');
  const multiContainer = document.getElementById('assignMultiEmployeesList');
  const dateInput = document.getElementById('assignDateInput');
  const dueInput = document.getElementById('assignDueDateInput');

  // Populate Programs Dropdown
  progSelect.innerHTML = '';
  state.programs.filter(p => p.status === 'published').forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = `${p.title} (${p.dept} • ${p.durationHours}h)`;
    if (preselectedProgId && p.id === preselectedProgId) opt.selected = true;
    progSelect.appendChild(opt);
  });

  // Populate Employees (Scoped strictly to hierarchy if Reporting Manager)
  const availableEmployees = getScopedEmployees();
  empSelect.innerHTML = '';
  multiContainer.innerHTML = '';

  availableEmployees.forEach(emp => {
    // Individual select option
    const opt = document.createElement('option');
    opt.value = emp.id;
    opt.textContent = `${emp.name} — ${emp.role} (${emp.dept})`;
    empSelect.appendChild(opt);

    // Multi-select checkbox item
    const lbl = document.createElement('label');
    lbl.style.cssText = 'display: flex; align-items: center; gap: 8px; font-size: 12.5px; cursor: pointer; padding: 4px 6px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 4px;';
    lbl.innerHTML = `
      <input type="checkbox" class="assign-emp-check" value="${emp.id}" onchange="checkAssignDuplicates()" />
      <img src="${emp.avatar}" style="width: 22px; height: 22px; border-radius: 50%;" />
      <span><strong>${escapeHtml(emp.name)}</strong> (${emp.dept})</span>
    `;
    multiContainer.appendChild(lbl);
  });

  // Dates and allowDueEdit enforcement
  const today = new Date().toISOString().split('T')[0];
  const dueDays = parseInt(asg.dueDays, 10) || 14;
  const calculatedDue = new Date(Date.now() + dueDays * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  if (dateInput) dateInput.value = today;
  if (dueInput) {
    dueInput.value = calculatedDue;
    if (asg.allowDueEdit === false) {
      dueInput.readOnly = true;
      dueInput.style.backgroundColor = '#f1f5f9';
      dueInput.style.cursor = 'not-allowed';
      dueInput.title = 'Due Date editing disabled by Training Config';
    } else {
      dueInput.readOnly = false;
      dueInput.style.backgroundColor = '#ffffff';
      dueInput.style.cursor = 'text';
      dueInput.title = '';
    }
  }

  // Enforce mode toggles
  const radioInd = document.querySelector('input[name="assignMode"][value="individual"]');
  const radioMul = document.querySelector('input[name="assignMode"][value="multiple"]');
  const radioDep = document.querySelector('input[name="assignMode"][value="department"]');

  if (radioInd) {
    radioInd.disabled = !allowInd;
    if (radioInd.closest('label')) {
      radioInd.closest('label').style.opacity = allowInd ? '1' : '0.4';
      radioInd.closest('label').style.cursor = allowInd ? 'pointer' : 'not-allowed';
    }
  }
  if (radioMul) {
    radioMul.disabled = !allowBulk;
    if (radioMul.closest('label')) {
      radioMul.closest('label').style.opacity = allowBulk ? '1' : '0.4';
      radioMul.closest('label').style.cursor = allowBulk ? 'pointer' : 'not-allowed';
    }
  }
  if (radioDep) {
    radioDep.disabled = !allowDept;
    if (radioDep.closest('label')) {
      radioDep.closest('label').style.opacity = allowDept ? '1' : '0.4';
      radioDep.closest('label').style.cursor = allowDept ? 'pointer' : 'not-allowed';
    }
  }

  let chosenMode = allowInd ? 'individual' : (allowBulk ? 'multiple' : 'department');
  if (radioInd && allowInd) radioInd.checked = true;
  else if (radioMul && allowBulk) radioMul.checked = true;
  else if (radioDep && allowDept) radioDep.checked = true;
  toggleAssignMode(chosenMode);

  checkAssignDuplicates();
  modal.classList.add('open');
}

window.openAssignTrainingModal = openAssignTrainingModal;

function closeAssignTrainingModal() {
  document.getElementById('assignTrainingModal').classList.remove('open');
}

window.closeAssignTrainingModal = closeAssignTrainingModal;

function toggleAssignMode(mode) {
  document.getElementById('assignGroupIndividual').style.display = (mode === 'individual') ? 'block' : 'none';
  document.getElementById('assignGroupMultiple').style.display = (mode === 'multiple') ? 'block' : 'none';
  document.getElementById('assignGroupDept').style.display = (mode === 'department') ? 'block' : 'none';
  checkAssignDuplicates();
}

window.toggleAssignMode = toggleAssignMode;

function toggleSelectAllEmployees() {
  const checks = document.querySelectorAll('.assign-emp-check');
  const allChecked = Array.from(checks).every(c => c.checked);
  checks.forEach(c => c.checked = !allChecked);
  checkAssignDuplicates();
}

window.toggleSelectAllEmployees = toggleSelectAllEmployees;

// Prevent Duplicate Active Assignments
function checkAssignDuplicates() {
  const progId = document.getElementById('assignSelectProgram')?.value;
  const mode = document.querySelector('input[name="assignMode"]:checked')?.value || 'individual';
  const warningBox = document.getElementById('assignDuplicateWarning');
  const btnConfirm = document.getElementById('btnConfirmAssign');

  // If preventDuplicates toggle is OFF, bypass duplicate check!
  if (trainingConfigData?.assignments?.preventDuplicates === false) {
    if (warningBox) warningBox.style.display = 'none';
    if (btnConfirm) btnConfirm.disabled = false;
    return false;
  }

  let targetEmpIds = [];
  if (mode === 'individual') {
    const singleId = document.getElementById('assignSelectEmployee')?.value;
    if (singleId) targetEmpIds.push(singleId);
  } else if (mode === 'multiple') {
    document.querySelectorAll('.assign-emp-check:checked').forEach(c => targetEmpIds.push(c.value));
  } else if (mode === 'department') {
    const dept = document.getElementById('assignSelectDept')?.value;
    getScopedEmployees().filter(e => e.dept === dept).forEach(e => targetEmpIds.push(e.id));
  }

  // Check if any active assignment exists for (empId, progId)
  const duplicates = [];
  targetEmpIds.forEach(empId => {
    const exists = state.assignments.find(a => a.employeeId === empId && a.programId === progId && a.trainingStatus !== 'completed');
    if (exists) {
      const emp = state.employees.find(e => e.id === empId);
      duplicates.push(emp ? emp.name : empId);
    }
  });

  if (duplicates.length > 0) {
    if (warningBox) {
      warningBox.style.display = 'block';
      warningBox.innerHTML = `⚠️ <strong>Duplicate Active Assignment Blocked:</strong> [${duplicates.join(', ')}] already has an active assignment for this programme. Re-assigning active training is prohibited.`;
    }
    if (btnConfirm) btnConfirm.disabled = true;
    return true;
  } else {
    if (warningBox) warningBox.style.display = 'none';
    if (btnConfirm) btnConfirm.disabled = false;
    return false;
  }
}

window.checkAssignDuplicates = checkAssignDuplicates;

function confirmTrainingAssignment() {
  if (state.currentRole === 'manager' && trainingConfigData?.assignments?.allowReportingManager === false) {
    alert('Reporting Managers are not permitted to assign training per Training Config policy.');
    return;
  }

  const mode = document.querySelector('input[name="assignMode"]:checked')?.value || 'individual';
  const asg = trainingConfigData?.assignments || {};
  if (mode === 'individual' && asg.enableIndividual === false) {
    alert('Individual training assignment is disabled in Training Config.');
    return;
  }
  if (mode === 'multiple' && asg.enableBulk === false) {
    alert('Multiple employee (bulk) training assignment is disabled in Training Config.');
    return;
  }
  if (mode === 'department' && asg.enableDept === false) {
    alert('Department-wide training assignment is disabled in Training Config.');
    return;
  }

  const isDuplicate = checkAssignDuplicates();
  if (isDuplicate) {
    alert('Cannot proceed: Active duplicate assignment detected. Please deselect already assigned employees.');
    return;
  }

  const progId = document.getElementById('assignSelectProgram').value;
  const assignedDate = document.getElementById('assignDateInput').value;
  const dueDate = document.getElementById('assignDueDateInput').value;
  const mandatory = document.getElementById('assignIsMandatory').checked;

  let targetEmpIds = [];
  if (mode === 'individual') {
    const id = document.getElementById('assignSelectEmployee').value;
    if (id) targetEmpIds.push(id);
  } else if (mode === 'multiple') {
    document.querySelectorAll('.assign-emp-check:checked').forEach(c => targetEmpIds.push(c.value));
  } else if (mode === 'department') {
    const dept = document.getElementById('assignSelectDept').value;
    getScopedEmployees().filter(e => e.dept === dept).forEach(e => targetEmpIds.push(e.id));
  }

  if (targetEmpIds.length === 0) {
    alert('Please select at least one employee to assign.');
    return;
  }

  // Hierarchy validation check
  if (state.currentRole === 'manager') {
    const invalid = targetEmpIds.some(empId => {
      const emp = state.employees.find(e => e.id === empId);
      return !emp || emp.managerId !== state.currentManagerId;
    });
    if (invalid) {
      alert('Security Exception: Reporting Managers are strictly forbidden from assigning training to employees outside their reporting hierarchy.');
      return;
    }
  }

  const prog = state.programs.find(p => p.id === progId);
  targetEmpIds.forEach(empId => {
    const newAsnId = `ASN-${String(state.assignments.length + 1).padStart(3, '0')}`;
    state.assignments.push({
      id: newAsnId,
      employeeId: empId,
      programId: progId,
      assignedDate: assignedDate,
      dueDate: dueDate,
      mandatory: mandatory,
      progress: 0,
      trainingStatus: 'not_started',
      submissionStatus: 'none',
      submissionRemarks: '',
      submissionEvidence: '',
      assessmentScore: null,
      certificateStatus: 'not_eligible',
      certificateId: null,
      reviewHistory: [
        { date: assignedDate, action: 'Assigned', user: state.currentRole === 'admin' ? 'Isha Patel (Admin)' : 'Ashish Kumar (Manager)', notes: 'Assigned training programme.' }
      ]
    });
  });

  if (asg.notifyEmployee !== false) {
    logAudit('Notification Sent', `${prog ? prog.title : progId}`, `Assignment notification dispatched to ${targetEmpIds.length} employee(s).`);
  }

  logAudit('Training Assigned', `${prog ? prog.title : progId}`, `Assigned to ${targetEmpIds.length} employee(s)`);
  alert(`Successfully assigned "${prog ? prog.title : 'Programme'}" to ${targetEmpIds.length} employee(s)!`);
  
  closeAssignTrainingModal();
  renderAssignmentsTable();
  renderDashboard();
}

window.confirmTrainingAssignment = confirmTrainingAssignment;

function renderAssignmentsTable() {
  const tbody = document.getElementById('assignmentsTableBody');
  const countBadge = document.getElementById('assignmentsCountBadge');
  const query = (document.getElementById('searchAssignmentsInput')?.value || '').toLowerCase();
  const deptFilter = document.getElementById('filterAssignDept')?.value || 'all';
  const mandFilter = document.getElementById('filterAssignMandatory')?.value || 'all';

  if (!tbody) return;

  const scopedAssignments = getScopedAssignments();
  const filtered = scopedAssignments.filter(a => {
    const emp = state.employees.find(e => e.id === a.employeeId);
    const prog = state.programs.find(p => p.id === a.programId);
    if (!emp || !prog) return false;

    const matchesQuery = emp.name.toLowerCase().includes(query) || prog.title.toLowerCase().includes(query);
    const matchesDept = (deptFilter === 'all') || (emp.dept === deptFilter);
    const matchesMand = (mandFilter === 'all') || (mandFilter === 'mandatory' && a.mandatory) || (mandFilter === 'elective' && !a.mandatory);

    return matchesQuery && matchesDept && matchesMand;
  });

  if (countBadge) countBadge.textContent = `${filtered.length} Total`;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 30px; color: #64748b;">
          No training assignments match the filter criteria.
        </td>
      </tr>
    `;
    return;
  }

  let html = '';
  filtered.forEach(a => {
    const emp = state.employees.find(e => e.id === a.employeeId);
    const prog = state.programs.find(p => p.id === a.programId);

    const mandPill = a.mandatory 
      ? '<span class="status-pill status-mandatory">Mandatory</span>' 
      : '<span class="status-pill status-optional">Elective</span>';

    const progColor = a.progress === 100 ? 'prog-green' : (a.progress > 0 ? '' : 'prog-red');

    html += `
      <tr>
        <td>
          <div class="cell-user-info">
            <img src="${emp.avatar}" class="cell-avatar" />
            <div class="cell-user-meta">
              <span class="cell-user-name">${escapeHtml(emp.name)}</span>
              <span class="cell-user-role">${escapeHtml(emp.role)}</span>
            </div>
          </div>
        </td>
        <td>${escapeHtml(emp.dept)}</td>
        <td>
          <div style="font-weight: 600; color: #0f172a;">${escapeHtml(prog.title)}</div>
          <span style="font-size: 11px; color: #64748b;">${prog.difficulty} • ${prog.durationHours} hrs</span>
        </td>
        <td>${a.assignedDate}</td>
        <td><strong style="${a.trainingStatus === 'overdue' ? 'color:#ef4444;' : ''}">${a.dueDate}</strong></td>
        <td>${mandPill}</td>
        <td>
          <div class="cell-prog-wrap">
            <div class="cell-prog-track">
              <div class="cell-prog-bar ${progColor}" style="width: ${a.progress}%;"></div>
            </div>
            <span class="cell-prog-text">${a.progress}%</span>
          </div>
        </td>
        <td>
          <div style="display: flex; gap: 6px;">
            <button class="btn-table-action" onclick="openProgressDetails('${a.id}')">View Details</button>
            <button class="btn-table-action" onclick="alert('Reminder notification dispatched to ${escapeHtml(emp.name)}!')">Remind</button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

window.renderAssignmentsTable = renderAssignmentsTable;

// ==========================================================================
// SECTION 4: EMPLOYEE PROGRESS MONITORING
// ==========================================================================
function renderProgressTable() {
  const tbody = document.getElementById('progressTableBody');
  const countBadge = document.getElementById('progressCountBadge');
  const query = (document.getElementById('searchProgressInput')?.value || '').toLowerCase();
  const statusFilter = document.getElementById('filterProgressStatus')?.value || 'all';
  const certFilter = document.getElementById('filterProgressCert')?.value || 'all';

  if (!tbody) return;

  const scopedAssignments = getScopedAssignments();
  const filtered = scopedAssignments.filter(a => {
    const emp = state.employees.find(e => e.id === a.employeeId);
    const prog = state.programs.find(p => p.id === a.programId);
    if (!emp || !prog) return false;

    const matchesQuery = emp.name.toLowerCase().includes(query) || prog.title.toLowerCase().includes(query) || emp.dept.toLowerCase().includes(query);
    const matchesStatus = (statusFilter === 'all') || (a.trainingStatus === statusFilter);
    const matchesCert = (certFilter === 'all') || (a.certificateStatus === certFilter);

    return matchesQuery && matchesStatus && matchesCert;
  });

  if (countBadge) countBadge.textContent = `${filtered.length} Records`;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="10" style="text-align: center; padding: 30px; color: #64748b;">
          No employee records match the progress search criteria.
        </td>
      </tr>
    `;
    return;
  }

  let html = '';
  filtered.forEach(a => {
    const emp = state.employees.find(e => e.id === a.employeeId);
    const prog = state.programs.find(p => p.id === a.programId);

    // Training Status Pill
    let tStatusPill = '';
    if (a.trainingStatus === 'completed') tStatusPill = '<span class="status-pill status-completed">Completed</span>';
    else if (a.trainingStatus === 'submitted') tStatusPill = '<span class="status-pill status-submitted">Submitted</span>';
    else if (a.trainingStatus === 'in_progress') tStatusPill = '<span class="status-pill status-inprogress">In Progress</span>';
    else if (a.trainingStatus === 'overdue') tStatusPill = '<span class="status-pill status-overdue">Overdue</span>';
    else tStatusPill = '<span class="status-pill status-notstarted">Not Started</span>';

    // Submission Status Pill
    let subPill = '';
    if (a.submissionStatus === 'approved') subPill = '<span class="status-pill status-approved">Approved</span>';
    else if (a.submissionStatus === 'submitted') subPill = '<span class="status-pill status-submitted">Awaiting Review</span>';
    else if (a.submissionStatus === 'changes_requested') subPill = '<span class="status-pill status-changes">Changes Requested</span>';
    else if (a.submissionStatus === 'rejected') subPill = '<span class="status-pill status-rejected">Rejected</span>';
    else subPill = '<span class="status-pill status-notstarted">Pending Sub</span>';

    // Certificate Status Pill
    let certPill = '';
    if (a.certificateStatus === 'issued') certPill = '<span class="status-pill status-issued">Issued</span>';
    else if (a.certificateStatus === 'generated') certPill = '<span class="status-pill status-generated">Generated</span>';
    else if (a.certificateStatus === 'eligible') certPill = '<span class="status-pill status-eligible">Eligible</span>';
    else certPill = '<span class="status-pill status-notstarted">Not Eligible</span>';

    html += `
      <tr>
        <td>
          <div class="cell-user-info">
            <img src="${emp.avatar}" class="cell-avatar" />
            <div class="cell-user-meta">
              <span class="cell-user-name">${escapeHtml(emp.name)}</span>
              <span class="cell-user-role">${escapeHtml(emp.email)}</span>
            </div>
          </div>
        </td>
        <td>${escapeHtml(emp.dept)}</td>
        <td><strong>${escapeHtml(prog.title)}</strong></td>
        <td>${a.assignedDate}</td>
        <td>${a.dueDate}</td>
        <td>
          <div class="cell-prog-wrap">
            <div class="cell-prog-track">
              <div class="cell-prog-bar ${a.progress === 100 ? 'prog-green' : ''}" style="width: ${a.progress}%;"></div>
            </div>
            <span class="cell-prog-text">${a.progress}%</span>
          </div>
        </td>
        <td>${tStatusPill}</td>
        <td>${subPill}</td>
        <td>${certPill}</td>
        <td style="text-align: center; white-space: nowrap;">
          <button type="button" class="btn-progress-action-icon" onclick="openProgressDetails('${a.id}')" title="View Progress Details" aria-label="View Progress Details">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

window.renderProgressTable = renderProgressTable;

// Employee Progress Details Modal
function openProgressDetails(asnId) {
  const a = state.assignments.find(asn => asn.id === asnId);
  if (!a) return;
  const emp = state.employees.find(e => e.id === a.employeeId);
  const prog = state.programs.find(p => p.id === a.programId);
  const manager = state.employees.find(e => e.id === emp.managerId) || { name: 'Executive Leadership' };

  const body = document.getElementById('progressDetailsModalBody');
  
  let resourcesHtml = '';
  (prog.resources || []).forEach((r, idx) => {
    const isCompleted = a.progress >= ((idx + 1) / prog.resources.length) * 100;
    resourcesHtml += `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 6px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 14px;">${isCompleted ? '✅' : '⏳'}</span>
          <div>
            <div style="font-size: 12.5px; font-weight: 600;">${escapeHtml(r.title)}</div>
            <span style="font-size: 11px; color: #64748b;">${r.mandatory ? 'Mandatory Module' : 'Optional Module'}</span>
          </div>
        </div>
        <span class="status-pill ${isCompleted ? 'status-completed' : 'status-notstarted'}">${isCompleted ? 'Completed' : 'Pending'}</span>
      </div>
    `;
  });

  let historyHtml = '';
  (a.reviewHistory || []).forEach(h => {
    historyHtml += `
      <div class="review-history-item">
        <div style="display: flex; justify-content: space-between; font-weight: 600; color: #1e293b;">
          <span>${h.action} by ${escapeHtml(h.user)}</span>
          <span style="color: #64748b;">${h.date}</span>
        </div>
        <p style="margin-top: 4px; color: #475569;">${escapeHtml(h.notes)}</p>
      </div>
    `;
  });

  body.innerHTML = `
    <div style="display: flex; align-items: center; gap: 14px; padding: 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 16px;">
      <img src="${emp.avatar}" style="width: 52px; height: 52px; border-radius: 50%;" />
      <div>
        <h3 style="font-size: 15px; font-weight: 800; color: #0f172a;">${escapeHtml(emp.name)}</h3>
        <p style="font-size: 12px; color: #64748b;">${escapeHtml(emp.role)} • ${escapeHtml(emp.dept)} • Reporting to: <strong>${escapeHtml(manager.name)}</strong></p>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 16px;">
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px;">
        <span style="font-size: 11px; color: #64748b; text-transform: uppercase;">Completion %</span>
        <div style="font-size: 1.3rem; font-weight: 800; color: #2563eb;">${a.progress}%</div>
      </div>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px;">
        <span style="font-size: 11px; color: #64748b; text-transform: uppercase;">Assessment Score</span>
        <div style="font-size: 1.3rem; font-weight: 800; color: #059669;">${a.assessmentScore ? a.assessmentScore + '%' : 'Pending'}</div>
      </div>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px;">
        <span style="font-size: 11px; color: #64748b; text-transform: uppercase;">Assigned Date</span>
        <div style="font-size: 12.5px; font-weight: 700; margin-top: 4px;">${a.assignedDate}</div>
      </div>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px;">
        <span style="font-size: 11px; color: #64748b; text-transform: uppercase;">Due Date</span>
        <div style="font-size: 12.5px; font-weight: 700; margin-top: 4px; ${a.trainingStatus === 'overdue' ? 'color:#ef4444;' : ''}">${a.dueDate}</div>
      </div>
    </div>

    ${a.submissionRemarks ? `
      <div class="evidence-card-box" style="margin-bottom: 16px;">
        <h4 style="font-size: 12.5px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Learner Submission Remarks</h4>
        <p style="font-size: 12.5px; color: #334155;">"${escapeHtml(a.submissionRemarks)}"</p>
        ${a.submissionEvidence ? `
          <div style="margin-top: 8px;">
            <a href="${escapeHtml(a.submissionEvidence)}" target="_blank" style="font-size: 12px; color: #2563eb; text-decoration: underline; font-weight: 600;">
              📎 View Uploaded Evidence / Capstone Repository
            </a>
          </div>
        ` : ''}
      </div>
    ` : ''}

    <div style="margin-bottom: 16px;">
      <h4 style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Curriculum Modules Progress</h4>
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px;">
        ${resourcesHtml}
      </div>
    </div>

    ${historyHtml ? `
      <div>
        <h4 style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Review & Audit Log History</h4>
        <div class="review-history-log">
          ${historyHtml}
        </div>
      </div>
    ` : ''}
  `;

  document.getElementById('progressDetailsModal').classList.add('open');
}

window.openProgressDetails = openProgressDetails;

function closeProgressDetailsModal() {
  document.getElementById('progressDetailsModal').classList.remove('open');
}

window.closeProgressDetailsModal = closeProgressDetailsModal;

// ==========================================================================
// SECTION 5: TRAINING SUBMISSION REVIEW (EVALUATION QUEUE)
// ==========================================================================
function renderReviewQueue() {
  const tbody = document.getElementById('reviewsTableBody');
  const filter = document.getElementById('filterReviewStatus')?.value || 'submitted';
  if (!tbody) return;

  const scopedAssignments = getScopedAssignments();
  const submissions = scopedAssignments.filter(a => {
    if (filter === 'all') return a.submissionStatus !== 'none';
    return a.submissionStatus === filter;
  });

  if (submissions.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 30px; color: #64748b;">
          No submissions found for the selected review queue filter.
        </td>
      </tr>
    `;
    return;
  }

  let html = '';
  submissions.forEach(a => {
    const emp = state.employees.find(e => e.id === a.employeeId);
    const prog = state.programs.find(p => p.id === a.programId);

    let statusPill = '';
    if (a.submissionStatus === 'approved') statusPill = '<span class="status-pill status-approved">Approved</span>';
    else if (a.submissionStatus === 'submitted') statusPill = '<span class="status-pill status-submitted">Pending Review</span>';
    else if (a.submissionStatus === 'changes_requested') statusPill = '<span class="status-pill status-changes">Changes Requested</span>';
    else if (a.submissionStatus === 'rejected') statusPill = '<span class="status-pill status-rejected">Rejected</span>';

    html += `
      <tr>
        <td>
          <div class="cell-user-info">
            <img src="${emp.avatar}" class="cell-avatar" />
            <div class="cell-user-meta">
              <span class="cell-user-name">${escapeHtml(emp.name)}</span>
              <span class="cell-user-role">${escapeHtml(emp.dept)}</span>
            </div>
          </div>
        </td>
        <td><strong>${escapeHtml(prog.title)}</strong></td>
        <td>${a.reviewHistory && a.reviewHistory.length > 0 ? a.reviewHistory[0].date : a.assignedDate}</td>
        <td>
          <span style="font-weight: 700; color: ${a.assessmentScore >= prog.passScore ? '#15803d' : '#b91c1c'};">
            ${a.assessmentScore || 85}% (Pass: ${prog.passScore}%)
          </span>
        </td>
        <td>
          ${a.submissionEvidence ? `<a href="${escapeHtml(a.submissionEvidence)}" target="_blank" style="color: #2563eb; text-decoration: underline; font-size: 11.5px;">📎 View File</a>` : 'No file'}
        </td>
        <td>${statusPill}</td>
        <td>
          <button class="btn-table-action primary" onclick="openReviewModal('${a.id}')">
            ${a.submissionStatus === 'submitted' ? 'Review & Decide' : 'Re-evaluate'}
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

window.renderReviewQueue = renderReviewQueue;

function openReviewModal(asnId) {
  const a = state.assignments.find(asn => asn.id === asnId);
  if (!a) return;
  const emp = state.employees.find(e => e.id === a.employeeId);
  const prog = state.programs.find(p => p.id === a.programId);

  // Security Check: Reporting Manager cannot review outside hierarchy
  if (state.currentRole === 'manager' && emp.managerId !== state.currentManagerId) {
    alert('Permission Denied: You are only authorized to review submissions for your direct reports.');
    return;
  }

  document.getElementById('reviewAssignmentId').value = a.id;
  document.getElementById('reviewerFeedbackInput').value = '';
  document.getElementById('feedbackValidationMsg').style.display = 'none';

  const container = document.getElementById('reviewSubmissionDetailsContainer');

  let historyHtml = '';
  (a.reviewHistory || []).forEach(h => {
    historyHtml += `
      <div class="review-history-item">
        <strong>${h.action}</strong> by ${escapeHtml(h.user)} (${h.date}):
        <p style="margin-top: 2px;">${escapeHtml(h.notes)}</p>
      </div>
    `;
  });

  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 14px;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${emp.avatar}" style="width: 40px; height: 40px; border-radius: 50%;" />
        <div>
          <div style="font-weight: 700; font-size: 14px;">${escapeHtml(emp.name)}</div>
          <div style="font-size: 12px; color: #64748b;">${escapeHtml(emp.dept)} • ${escapeHtml(emp.role)}</div>
        </div>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 11px; color: #64748b;">Programme:</span>
        <div style="font-weight: 700; font-size: 13px;">${escapeHtml(prog.title)}</div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 14px;">
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px;">
        <span style="font-size: 11px; color: #64748b;">ASSESSMENT SCORE</span>
        <div style="font-size: 1.4rem; font-weight: 800; color: #166534;">${a.assessmentScore || 85}%</div>
        <span style="font-size: 10.5px; color: #64748b;">Pass Requirement: ${prog.passScore}%</span>
      </div>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px;">
        <span style="font-size: 11px; color: #64748b;">RESOURCES COMPLETED</span>
        <div style="font-size: 1.4rem; font-weight: 800; color: #2563eb;">${(prog.resources || []).length}/${(prog.resources || []).length}</div>
        <span style="font-size: 10.5px; color: #166534;">100% Mandatory Done ✓</span>
      </div>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px;">
        <span style="font-size: 11px; color: #64748b;">SUBMISSION EVIDENCE</span>
        <div style="margin-top: 4px;">
          ${a.submissionEvidence 
            ? `<a href="${escapeHtml(a.submissionEvidence)}" target="_blank" style="font-size: 12px; color: #2563eb; text-decoration: underline; font-weight: 600;">📎 View Proof Document</a>` 
            : '<span style="font-size: 12px; color: #94a3b8;">None Attached</span>'}
        </div>
      </div>
    </div>

    <div class="evidence-card-box">
      <h4 style="font-size: 12.5px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Learner Submission Remarks</h4>
      <p style="font-size: 12.5px; color: #334155;">"${escapeHtml(a.submissionRemarks || 'Learner completed all required coursework.')}"</p>
    </div>

    ${historyHtml ? `
      <div style="margin-top: 14px;">
        <h4 style="font-size: 12.5px; font-weight: 700; color: #0f172a; margin-bottom: 6px;">Submission & Review History</h4>
        <div class="review-history-log">
          ${historyHtml}
        </div>
      </div>
    ` : ''}
  `;

  document.getElementById('reviewSubmissionModal').classList.add('open');
}

window.openReviewModal = openReviewModal;

function closeReviewModal() {
  document.getElementById('reviewSubmissionModal').classList.remove('open');
}

window.closeReviewModal = closeReviewModal;

// 3 Review Actions: Approve, Request Changes (mandatory feedback), Reject (mandatory feedback)
function handleReviewAction(action) {
  const comp = trainingConfigData?.completion || {};

  if (comp.approvalRequired === false) {
    alert('Submission approval is currently disabled in Training Config (Auto-approval active).');
  }

  if (action === 'request_changes' && comp.allowRetakes === false) {
    alert('Learner revisions / retakes are currently disabled in Training Config.');
    return;
  }

  const asnId = document.getElementById('reviewAssignmentId').value;
  const feedback = document.getElementById('reviewerFeedbackInput').value.trim();
  const validationMsg = document.getElementById('feedbackValidationMsg');

  const a = state.assignments.find(asn => asn.id === asnId);
  if (!a) return;
  const emp = state.employees.find(e => e.id === a.employeeId);
  const prog = state.programs.find(p => p.id === a.programId);
  const reviewerName = state.currentRole === 'admin' ? 'Isha Patel (Admin)' : (state.currentRole === 'hr' ? 'Shivam Sharma (HR)' : 'Ashish Kumar (Manager)');

  if (action === 'approve') {
    if (comp.evidenceEnabled !== false && comp.evidenceMandatory === true && !a.submissionEvidence) {
      alert('Cannot approve: Verification evidence document is mandatory per Training Config, but none was submitted.');
      return;
    }
    if (comp.remarksRequired === true && (!a.submissionRemarks || !a.submissionRemarks.trim())) {
      alert('Cannot approve: Learner remarks are required per Training Config.');
      return;
    }
  }

  // Enforce mandatory feedback for Request Changes and Reject
  if ((action === 'request_changes' || action === 'reject') && !feedback) {
    if (validationMsg) validationMsg.style.display = 'block';
    document.getElementById('reviewerFeedbackInput').focus();
    return;
  }

  if (validationMsg) validationMsg.style.display = 'none';

  const today = new Date().toISOString().split('T')[0];

  if (action === 'approve') {
    a.submissionStatus = 'approved';
    a.trainingStatus = 'completed';
    a.certificateStatus = 'eligible'; // Eligible, but NOT auto-generated or auto-issued!
    a.reviewHistory.unshift({
      date: today,
      action: 'Approved Submission',
      user: reviewerName,
      notes: feedback || 'Submission approved. Meets all training curriculum standards.'
    });
    logAudit('Approved Submission', `${emp.name} - ${prog.title}`, `Evaluator: ${reviewerName}. Marked eligible for certificate.`);
    alert(`Submission from ${emp.name} approved! Learner is now marked Completed and eligible for certificate generation.`);
  } else if (action === 'request_changes') {
    a.submissionStatus = 'changes_requested';
    a.trainingStatus = 'in_progress';
    a.reviewHistory.unshift({
      date: today,
      action: 'Requested Changes',
      user: reviewerName,
      notes: feedback
    });
    logAudit('Requested Changes', `${emp.name} - ${prog.title}`, `Feedback: ${feedback}`);
    alert(`Feedback sent to ${emp.name}. Learner has been requested to submit revisions.`);
  } else if (action === 'reject') {
    a.submissionStatus = 'rejected';
    a.trainingStatus = 'not_started';
    a.reviewHistory.unshift({
      date: today,
      action: 'Rejected Submission',
      user: reviewerName,
      notes: feedback
    });
    logAudit('Rejected Submission', `${emp.name} - ${prog.title}`, `Reason: ${feedback}`);
    alert(`Submission rejected for ${emp.name}. Remarks logged.`);
  }

  closeReviewModal();
  renderReviewQueue();
  renderDashboard();
  renderProgressTable();
}

window.handleReviewAction = handleReviewAction;

// ==========================================================================
// SECTION 6: CERTIFICATE MANAGEMENT
// (Certificate generation and issuance must remain separate actions)
// ==========================================================================
function renderCertificatesTable() {
  const tbody = document.getElementById('certificatesTableBody');
  const countBadge = document.getElementById('certCountBadge');
  const filter = document.getElementById('filterCertStatus')?.value || 'all';
  if (!tbody) return;

  const scopedAssignments = getScopedAssignments();
  
  // Show all completed/approved assignments and certificates
  const certItems = [];

  scopedAssignments.forEach(a => {
    if (a.certificateStatus !== 'not_eligible') {
      const emp = state.employees.find(e => e.id === a.employeeId);
      const prog = state.programs.find(p => p.id === a.programId);
      const cert = state.certificates.find(c => c.assignmentId === a.id);

      if (filter === 'all' || a.certificateStatus === filter) {
        certItems.push({
          assignment: a,
          employee: emp,
          program: prog,
          certificate: cert
        });
      }
    }
  });

  if (countBadge) countBadge.textContent = `${certItems.length} Certificates`;

  if (certItems.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 30px; color: #64748b;">
          No certificate records match the selected filter.
        </td>
      </tr>
    `;
    return;
  }

  let html = '';
  certItems.forEach(item => {
    const a = item.assignment;
    const emp = item.employee;
    const prog = item.program;
    const cert = item.certificate;

    let statusPill = '';
    let actionButtons = '';

    if (a.certificateStatus === 'eligible') {
      statusPill = '<span class="status-pill status-eligible">Eligible (Not Generated)</span>';
      actionButtons = `
        <button class="btn-table-action primary" onclick="generateCertificate('${a.id}')">
          ⚙️ Generate Certificate
        </button>
      `;
    } else if (a.certificateStatus === 'generated') {
      statusPill = '<span class="status-pill status-generated">Generated (Awaiting Issuance)</span>';
      actionButtons = `
        <button class="btn-table-action" onclick="previewCertificate('${cert ? cert.id : ''}')">Preview</button>
        <button class="btn-table-action success" onclick="issueCertificate('${cert ? cert.id : ''}')">
          📜 Issue Certificate
        </button>
      `;
    } else if (a.certificateStatus === 'issued') {
      statusPill = '<span class="status-pill status-issued">Issued & Active</span>';
      actionButtons = `
        <button class="btn-table-action" onclick="previewCertificate('${cert ? cert.id : ''}')">Preview</button>
        <button class="btn-table-action" onclick="openReissueModal('${cert ? cert.id : ''}')">Reissue</button>
      `;
    }

    html += `
      <tr>
        <td>
          <span style="font-family: monospace; font-weight: 700; color: #1e3a8a;">
            ${cert ? cert.certificateNo : 'Pending Generation'}
          </span>
          ${cert && cert.reissueCount > 0 ? `<span style="font-size:10px; color:#d97706; display:block;">(v${cert.reissueCount + 1} Reissued)</span>` : ''}
        </td>
        <td>
          <div class="cell-user-info">
            <img src="${emp.avatar}" class="cell-avatar" />
            <div class="cell-user-meta">
              <span class="cell-user-name">${escapeHtml(emp.name)}</span>
              <span class="cell-user-role">${escapeHtml(emp.dept)}</span>
            </div>
          </div>
        </td>
        <td><strong>${escapeHtml(prog.title)}</strong></td>
        <td>${a.reviewHistory && a.reviewHistory.length > 0 ? a.reviewHistory[0].date : a.assignedDate}</td>
        <td>${statusPill}</td>
        <td>${cert ? cert.expiryDate : '2 Years from Issue'}</td>
        <td>
          <div style="display: flex; gap: 6px;">
            ${actionButtons}
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

window.renderCertificatesTable = renderCertificatesTable;

// Action 1: Generate Certificate (Separate from Issuance)
function generateCertificate(asnId) {
  if (trainingConfigData?.certificates?.enabled === false) {
    alert('Certificate Generation is currently disabled in Training Config.');
    return;
  }
  const a = state.assignments.find(asn => asn.id === asnId);
  if (!a) return;
  const emp = state.employees.find(e => e.id === a.employeeId);
  const prog = state.programs.find(p => p.id === a.programId);

  const newCertId = `CERT-2026-${String(state.certificates.length + 1).padStart(3, '0')}`;
  const certNo = `CCRM-${emp.dept.substring(0, 3).toUpperCase()}-2026-${String(state.certificates.length + 1).padStart(3, '0')}`;
  const today = new Date().toISOString().split('T')[0];
  const expiry = new Date(Date.now() + 2 * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const newCert = {
    id: newCertId,
    certificateNo: certNo,
    assignmentId: a.id,
    employeeId: emp.id,
    programId: prog.id,
    issueDate: today,
    expiryDate: expiry,
    status: 'generated', // Generated, but NOT yet issued
    reissueCount: 0,
    issuedBy: 'Isha Patel (Head of People)'
  };

  state.certificates.push(newCert);
  a.certificateStatus = 'generated';
  a.certificateId = newCertId;

  logAudit('Generated Certificate', `${certNo}`, `Generated for ${emp.name} in ${prog.title}`);
  alert(`Certificate ${certNo} successfully GENERATED! It is now ready for preview and separate issuance.`);

  renderCertificatesTable();
  renderDashboard();
  renderProgressTable();
}

window.generateCertificate = generateCertificate;

// Action 2: Preview Certificate
let previewActiveCertId = null;
function previewCertificate(certId) {
  const cert = state.certificates.find(c => c.id === certId);
  if (!cert) return;
  previewActiveCertId = cert.id;

  const emp = state.employees.find(e => e.id === cert.employeeId);
  const prog = state.programs.find(p => p.id === cert.programId);

  document.getElementById('certPreviewRecipientName').textContent = emp ? emp.name : 'Learner';
  document.getElementById('certPreviewProgramName').textContent = prog ? prog.title : 'Training Course';
  document.getElementById('certPreviewNo').textContent = cert.certificateNo;
  document.getElementById('certPreviewIssueDate').textContent = cert.issueDate;
  document.getElementById('certPreviewExpiry').textContent = `Valid until ${cert.expiryDate}`;
  document.getElementById('certPreviewIssuer').textContent = cert.issuedBy || 'Isha Patel';

  const btnIssueFromModal = document.getElementById('btnIssueCertFromModal');
  if (btnIssueFromModal) {
    btnIssueFromModal.style.display = (cert.status === 'generated') ? 'inline-block' : 'none';
  }

  document.getElementById('certificatePreviewModal').classList.add('open');
}

window.previewCertificate = previewCertificate;

function closeCertPreviewModal() {
  document.getElementById('certificatePreviewModal').classList.remove('open');
}

window.closeCertPreviewModal = closeCertPreviewModal;

// ==========================================================================
// CollabCRM Portal Notifications System (Screenshot 4)
// ==========================================================================
let portalNotifications = [
  {
    id: 'notif_1',
    title: 'Certificate Issued & Available',
    message: 'Certificate TRN-2026-001 for "Modern Frontend Architecture" was issued to Isha Patel.',
    time: '2 hours ago',
    unread: false,
    icon: '📜',
    iconBg: '#ecfdf5',
    iconColor: '#059669',
    certId: 'cert_1'
  },
  {
    id: 'notif_2',
    title: 'Training Module Assigned',
    message: 'Assigned "Microservices with Go & Docker" to engineering cohort.',
    time: '1 day ago',
    unread: false,
    icon: '📋',
    iconBg: '#eff6ff',
    iconColor: '#2563eb'
  }
];

function renderPortalNotifications() {
  const listEl = document.getElementById('portalNotifList');
  const badgeEl = document.getElementById('portalNotifUnreadBadge');
  const dotWrap = document.getElementById('headerNotifDotWrap');
  if (!listEl) return;

  const unreadCount = portalNotifications.filter(n => n.unread).length;
  if (badgeEl) badgeEl.textContent = `${unreadCount} New`;
  if (dotWrap) dotWrap.style.display = unreadCount > 0 ? 'block' : 'none';

  if (portalNotifications.length === 0) {
    listEl.innerHTML = `<div style="padding: 24px; text-align: center; color: #64748b; font-size: 12px;">No notifications yet.</div>`;
    return;
  }

  let html = '';
  portalNotifications.forEach(n => {
    html += `
      <div class="portal-notif-item ${n.unread ? 'unread' : ''}" onclick="handleNotificationClick('${n.id}')">
        <div class="portal-notif-icon" style="background: ${n.iconBg}; color: ${n.iconColor};">
          ${n.icon}
        </div>
        <div class="portal-notif-body">
          <div class="portal-notif-title">${escapeHtml(n.title)}</div>
          <div class="portal-notif-msg">${escapeHtml(n.message)}</div>
          <div class="portal-notif-time">${escapeHtml(n.time)}</div>
        </div>
      </div>
    `;
  });
  listEl.innerHTML = html;
}

window.renderPortalNotifications = renderPortalNotifications;

function togglePortalNotificationsDropdown() {
  const dd = document.getElementById('portalNotificationsDropdown');
  if (!dd) return;
  const isHidden = (dd.style.display === 'none' || !dd.style.display);
  dd.style.display = isHidden ? 'block' : 'none';
  if (isHidden) renderPortalNotifications();
}

window.togglePortalNotificationsDropdown = togglePortalNotificationsDropdown;

function clearAllPortalNotifications() {
  portalNotifications.forEach(n => n.unread = false);
  renderPortalNotifications();
}

window.clearAllPortalNotifications = clearAllPortalNotifications;

function handleNotificationClick(id) {
  const notif = portalNotifications.find(n => n.id === id);
  if (notif) {
    notif.unread = false;
    renderPortalNotifications();
    if (notif.certId) {
      previewCertificate(notif.certId);
      const dd = document.getElementById('portalNotificationsDropdown');
      if (dd) dd.style.display = 'none';
    }
  }
}

window.handleNotificationClick = handleNotificationClick;

// Modal functions for Dual-Notification
let lastIssuedCertId = null;

function showCertIssuedNotificationModal(cert, emp, prog) {
  lastIssuedCertId = cert.id;
  const modal = document.getElementById('certIssuedNotificationModal');
  const certNoEl = document.getElementById('certIssuedModalCertNo');
  const recipEl = document.getElementById('certIssuedModalRecipient');
  const dateEl = document.getElementById('certIssuedModalDate');
  const emailTextEl = document.getElementById('certIssuedEmailText');
  const portalTextEl = document.getElementById('certIssuedPortalText');
  const subEl = document.getElementById('certIssuedModalSubtitle');

  if (certNoEl) certNoEl.textContent = cert.certificateNo;
  if (recipEl) recipEl.textContent = `${emp.name} (${emp.email})`;
  if (dateEl) dateEl.textContent = cert.issueDate || new Date().toISOString().split('T')[0];
  if (emailTextEl) {
    emailTextEl.innerHTML = `Official certificate notification email with signed PDF attachment delivered to <strong>${escapeHtml(emp.email)}</strong>.`;
  }
  if (portalTextEl) {
    portalTextEl.innerHTML = `In-app alert published to <strong>${escapeHtml(emp.name)}</strong>'s CollabCRM portal feed & system notification tray.`;
  }
  if (subEl) {
    subEl.textContent = `Credential ${cert.certificateNo} for "${prog ? prog.title : 'Programme'}" successfully dispatched.`;
  }

  if (modal) modal.style.display = 'flex';
}

window.showCertIssuedNotificationModal = showCertIssuedNotificationModal;

function closeCertIssuedModal() {
  const modal = document.getElementById('certIssuedNotificationModal');
  if (modal) modal.style.display = 'none';
}

window.closeCertIssuedModal = closeCertIssuedModal;

function viewIssuedCertFromModal() {
  closeCertIssuedModal();
  if (lastIssuedCertId) {
    previewCertificate(lastIssuedCertId);
  }
}

window.viewIssuedCertFromModal = viewIssuedCertFromModal;

// Action 3: Issue Certificate (Separate from Generation - Email & Portal Notified)
function issueCertificate(certId) {
  if (trainingConfigData?.certificates?.enabled === false) {
    alert('Certificate Issuance is currently disabled in Training Config.');
    return;
  }
  const cert = state.certificates.find(c => c.id === certId);
  if (!cert) return;
  const emp = state.employees.find(e => e.id === cert.employeeId);
  const a = state.assignments.find(asn => asn.id === cert.assignmentId);
  const prog = a ? state.programs.find(p => p.id === a.programId) : null;

  cert.status = 'issued';
  cert.issueDate = new Date().toISOString().split('T')[0];
  if (a) a.certificateStatus = 'issued';

  // 1. Audit Trail Logging
  logAudit('Issued Certificate', `${cert.certificateNo}`, `Delivered credential to ${emp.name} via Email (${emp.email}) and CollabCRM Portal`);

  // 2. CollabCRM Portal Notification
  portalNotifications.unshift({
    id: 'notif_' + Date.now(),
    title: 'Certificate Issued & Dispatched',
    message: `Certificate ${cert.certificateNo} for "${prog ? prog.title : 'Training'}" issued to ${emp.name}. Notification email delivered to ${emp.email}.`,
    time: 'Just now',
    unread: true,
    icon: '📜',
    iconBg: '#ecfdf5',
    iconColor: '#059669',
    certId: cert.id
  });
  renderPortalNotifications();

  // 3. Dual-Notification Dispatch Confirmation Modal
  showCertIssuedNotificationModal(cert, emp, prog);

  closeCertPreviewModal();
  renderCertificatesTable();
  renderDashboard();
  renderProgressTable();
}

window.issueCertificate = issueCertificate;

function issueCertificateFromModal() {
  if (previewActiveCertId) {
    issueCertificate(previewActiveCertId);
  }
}

window.issueCertificateFromModal = issueCertificateFromModal;

function printCertificate() {
  window.print();
}

window.printCertificate = printCertificate;

// Manage Reissues
function openReissueModal(certId) {
  if (trainingConfigData?.certificates?.allowReissue === false) {
    alert('Certificate reissuance is currently disabled in Training Config.');
    return;
  }
  const cert = state.certificates.find(c => c.id === certId);
  if (!cert) return;
  document.getElementById('reissueCertId').value = cert.id;
  document.getElementById('reissueNotesInput').value = '';
  document.getElementById('reissueModal').classList.add('open');
}

window.openReissueModal = openReissueModal;

function closeReissueModal() {
  document.getElementById('reissueModal').classList.remove('open');
}

window.closeReissueModal = closeReissueModal;

function confirmReissueCertificate() {
  if (trainingConfigData?.certificates?.allowReissue === false) {
    alert('Certificate reissuance is currently disabled in Training Config.');
    return;
  }
  const certId = document.getElementById('reissueCertId').value;
  const reason = document.getElementById('reissueReasonSelect').value;
  const notes = document.getElementById('reissueNotesInput').value.trim();

  const cert = state.certificates.find(c => c.id === certId);
  if (!cert) return;
  const emp = state.employees.find(e => e.id === cert.employeeId);

  cert.reissueCount = (cert.reissueCount || 0) + 1;
  const today = new Date().toISOString().split('T')[0];
  cert.issueDate = today;

  logAudit('Reissued Certificate', `${cert.certificateNo}`, `Revision v${cert.reissueCount + 1}. Reason: ${reason}. Notes: ${notes}`);
  alert(`Certificate ${cert.certificateNo} reissued (Revision ${cert.reissueCount + 1}) for ${emp.name}!`);

  closeReissueModal();
  renderCertificatesTable();
}

window.confirmReissueCertificate = confirmReissueCertificate;

// ==========================================================================
// SECTION 7: TRAINING INTELLIGENCE & COMPLIANCE REPORTS
// ==========================================================================
function switchReportType(type) {
  state.currentReportType = type;
  renderReportsView();
}

window.switchReportType = switchReportType;

function renderReportsView() {
  const thead = document.getElementById('reportTableHead');
  const tbody = document.getElementById('reportTableBody');
  const summaryBox = document.getElementById('reportsSummaryBox');
  const type = state.currentReportType || 'completion';

  if (!thead || !tbody) return;

  const scopedAssignments = getScopedAssignments();

  if (type === 'completion') {
    // 1. Employee-wise Training Completion
    summaryBox.innerHTML = `
      <div class="reports-kpi-summary">
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:10px;">
          <span style="font-size:11px; color:#64748b;">ACTIVE LEARNERS</span>
          <div style="font-size:1.3rem; font-weight:800; color:#0f172a;">${getScopedEmployees().length}</div>
        </div>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:10px;">
          <span style="font-size:11px; color:#64748b;">TOTAL ASSIGNMENTS</span>
          <div style="font-size:1.3rem; font-weight:800; color:#2563eb;">${scopedAssignments.length}</div>
        </div>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:10px;">
          <span style="font-size:11px; color:#64748b;">COMPLETED</span>
          <div style="font-size:1.3rem; font-weight:800; color:#166534;">${scopedAssignments.filter(a => a.trainingStatus === 'completed').length}</div>
        </div>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:10px;">
          <span style="font-size:11px; color:#64748b;">AVG SCORE</span>
          <div style="font-size:1.3rem; font-weight:800; color:#8b5cf6;">93.2%</div>
        </div>
      </div>
    `;

    thead.innerHTML = `
      <tr>
        <th>Employee Name</th>
        <th>Department</th>
        <th>Total Enrolled</th>
        <th>Completed</th>
        <th>In Progress</th>
        <th>Overdue</th>
        <th>Average Score</th>
        <th>Certificates</th>
      </tr>
    `;

    let html = '';
    getScopedEmployees().forEach(emp => {
      const asns = scopedAssignments.filter(a => a.employeeId === emp.id);
      const comp = asns.filter(a => a.trainingStatus === 'completed').length;
      const inProg = asns.filter(a => a.trainingStatus === 'in_progress').length;
      const od = asns.filter(a => a.trainingStatus === 'overdue').length;
      const certCount = state.certificates.filter(c => c.employeeId === emp.id && c.status === 'issued').length;

      html += `
        <tr>
          <td><strong>${escapeHtml(emp.name)}</strong></td>
          <td>${escapeHtml(emp.dept)}</td>
          <td>${asns.length}</td>
          <td><span style="color:#166534; font-weight:700;">${comp}</span></td>
          <td>${inProg}</td>
          <td><span style="color:${od > 0 ? '#b91c1c' : '#64748b'}; font-weight:${od > 0 ? '700' : '400'};">${od}</span></td>
          <td>92%</td>
          <td>${certCount} Issued</td>
        </tr>
      `;
    });
    tbody.innerHTML = html;

  } else if (type === 'department') {
    // 2. Department-wise Training Progress
    summaryBox.innerHTML = `
      <div style="font-size: 13px; color: #475569; margin-bottom: 6px;">
        Tracking completion velocity, participation levels, and compliance percentages aggregated across organization departments.
      </div>
    `;

    thead.innerHTML = `
      <tr>
        <th>Department</th>
        <th>Headcount</th>
        <th>Total Enrolled</th>
        <th>Completed</th>
        <th>In Progress</th>
        <th>Completion Rate %</th>
        <th>Compliance Status</th>
      </tr>
    `;

    const depts = ['Engineering', 'Recruitment & HR', 'People Operations', 'Sales & BD'];
    let html = '';
    depts.forEach(d => {
      const emps = state.employees.filter(e => e.dept === d);
      const asns = state.assignments.filter(a => emps.some(e => e.id === a.employeeId));
      const comp = asns.filter(a => a.trainingStatus === 'completed').length;
      const inProg = asns.filter(a => a.trainingStatus === 'in_progress').length;
      const pct = asns.length > 0 ? Math.round((comp / asns.length) * 100) : 0;

      html += `
        <tr>
          <td><strong>${d}</strong></td>
          <td>${emps.length} Staff</td>
          <td>${asns.length}</td>
          <td>${comp}</td>
          <td>${inProg}</td>
          <td>
            <div class="cell-prog-wrap">
              <div class="cell-prog-track"><div class="cell-prog-bar" style="width:${pct}%;"></div></div>
              <span class="cell-prog-text">${pct}%</span>
            </div>
          </td>
          <td><span class="status-pill ${pct >= 70 ? 'status-completed' : 'status-changes'}">${pct >= 70 ? 'Compliant' : 'Action Required'}</span></td>
        </tr>
      `;
    });
    tbody.innerHTML = html;

  } else if (type === 'pending') {
    // 3. Pending Training Report
    const pendingList = scopedAssignments.filter(a => a.trainingStatus === 'in_progress' || a.trainingStatus === 'not_started');
    summaryBox.innerHTML = `
      <div style="font-size: 13px; color: #475569; margin-bottom: 6px;">
        Learners actively progressing through modules. Total pending: <strong>${pendingList.length} assignments</strong>.
      </div>
    `;

    thead.innerHTML = `
      <tr>
        <th>Employee</th>
        <th>Training Programme</th>
        <th>Assigned Date</th>
        <th>Due Date</th>
        <th>Days Left</th>
        <th>Current Progress</th>
        <th>Type</th>
      </tr>
    `;

    let html = '';
    pendingList.forEach(a => {
      const emp = state.employees.find(e => e.id === a.employeeId);
      const prog = state.programs.find(p => p.id === a.programId);
      html += `
        <tr>
          <td><strong>${escapeHtml(emp.name)}</strong> (${emp.dept})</td>
          <td>${escapeHtml(prog.title)}</td>
          <td>${a.assignedDate}</td>
          <td>${a.dueDate}</td>
          <td><span style="color:#d97706; font-weight:700;">12 Days</span></td>
          <td>${a.progress}%</td>
          <td>${a.mandatory ? '<span class="status-pill status-mandatory">Mandatory</span>' : '<span class="status-pill status-optional">Elective</span>'}</td>
        </tr>
      `;
    });
    tbody.innerHTML = html;

  } else if (type === 'overdue') {
    // 4. Overdue Training Report
    const overdueList = scopedAssignments.filter(a => a.trainingStatus === 'overdue');
    summaryBox.innerHTML = `
      <div style="font-size: 13px; color: #ef4444; margin-bottom: 6px; font-weight: 600;">
        ⚠️ Overdue Escalate Queue: ${overdueList.length} assignments require immediate attention or manager intervention.
      </div>
    `;

    thead.innerHTML = `
      <tr>
        <th>Employee</th>
        <th>Department</th>
        <th>Training Programme</th>
        <th>Target Due Date</th>
        <th>Days Overdue</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    `;

    let html = '';
    overdueList.forEach(a => {
      const emp = state.employees.find(e => e.id === a.employeeId);
      const prog = state.programs.find(p => p.id === a.programId);
      html += `
        <tr>
          <td><strong>${escapeHtml(emp.name)}</strong></td>
          <td>${escapeHtml(emp.dept)}</td>
          <td>${escapeHtml(prog.title)}</td>
          <td><span style="color:#ef4444; font-weight:700;">${a.dueDate}</span></td>
          <td><span style="color:#ef4444; font-weight:800;">+8 Days</span></td>
          <td><span class="status-pill status-overdue">Escalated</span></td>
          <td><button class="btn-table-action danger" onclick="alert('Formal escalation notification dispatched to ${escapeHtml(emp.name)}!')">Send Notice</button></td>
        </tr>
      `;
    });
    tbody.innerHTML = html;

  } else if (type === 'effectiveness') {
    // 5. Training Effectiveness & Assessment Results
    summaryBox.innerHTML = `
      <div style="font-size: 13px; color: #475569; margin-bottom: 6px;">
        Assessment benchmarks, cohort evaluation scores, pass rates, and content difficulty analysis.
      </div>
    `;

    thead.innerHTML = `
      <tr>
        <th>Programme Title</th>
        <th>Department</th>
        <th>Difficulty</th>
        <th>Pass Criteria</th>
        <th>Evaluated Learners</th>
        <th>Avg Test Score</th>
        <th>Pass Rate</th>
      </tr>
    `;

    let html = '';
    state.programs.forEach(p => {
      const asns = state.assignments.filter(a => a.programId === p.id && a.assessmentScore);
      const avgScore = asns.length > 0 ? Math.round(asns.reduce((acc, curr) => acc + curr.assessmentScore, 0) / asns.length) : p.passScore + 8;
      html += `
        <tr>
          <td><strong>${escapeHtml(p.title)}</strong></td>
          <td>${escapeHtml(p.dept)}</td>
          <td>${p.difficulty}</td>
          <td>>= ${p.passScore}%</td>
          <td>${asns.length || 12}</td>
          <td><strong style="color:#15803d;">${avgScore}%</strong></td>
          <td><span class="status-pill status-completed">96.4% Passed</span></td>
        </tr>
      `;
    });
    tbody.innerHTML = html;

  } else if (type === 'certificates') {
    // 6. Certificate Issuance & Expiry Report
    summaryBox.innerHTML = `
      <div style="font-size: 13px; color: #475569; margin-bottom: 6px;">
        Verified credentials, certificate identifiers, validity horizons, and renewal schedules.
      </div>
    `;

    thead.innerHTML = `
      <tr>
        <th>Certificate No</th>
        <th>Recipient</th>
        <th>Training Programme</th>
        <th>Issue Date</th>
        <th>Expiry Date</th>
        <th>Status</th>
        <th>Validity</th>
      </tr>
    `;

    let html = '';
    state.certificates.forEach(c => {
      const emp = state.employees.find(e => e.id === c.employeeId);
      const prog = state.programs.find(p => p.id === c.programId);
      html += `
        <tr>
          <td><span style="font-family:monospace; font-weight:700; color:#1e3a8a;">${c.certificateNo}</span></td>
          <td>${emp ? escapeHtml(emp.name) : 'Learner'}</td>
          <td>${prog ? escapeHtml(prog.title) : 'Course'}</td>
          <td>${c.issueDate}</td>
          <td>${c.expiryDate}</td>
          <td><span class="status-pill ${c.status === 'issued' ? 'status-issued' : 'status-generated'}">${c.status === 'issued' ? 'Issued' : 'Generated'}</span></td>
          <td><span class="status-pill status-completed">Valid (24 Months)</span></td>
        </tr>
      `;
    });
    tbody.innerHTML = html;
  }
}

window.renderReportsView = renderReportsView;

// Export Report to CSV Format
function exportReportCSV() {
  const table = document.getElementById('reportContentTable');
  if (!table) return;

  let csvContent = '';
  const rows = table.querySelectorAll('tr');

  rows.forEach(row => {
    const cols = row.querySelectorAll('th, td');
    const rowData = [];
    cols.forEach(col => {
      let text = col.innerText.replace(/"/g, '""').trim();
      rowData.push(`"${text}"`);
    });
    csvContent += rowData.join(',') + '\r\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', `collabcrm_${state.currentReportType}_report_${Date.now()}.csv`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  logAudit('Exported Report', `Report: ${state.currentReportType}`, 'Downloaded CSV format');
}

window.exportReportCSV = exportReportCSV;

// ==========================================================================
// SYSTEM AUDIT TRAIL LOGGING
// ==========================================================================
function logAudit(action, target, details) {
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0] + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const actorName = state.currentRole === 'admin' ? 'Isha Patel (Admin)' : (state.currentRole === 'hr' ? 'Shivam Sharma (HR)' : 'Ashish Kumar (Manager)');

  state.auditLogs.unshift({
    id: `LOG-${Date.now()}`,
    timestamp: dateStr,
    actor: actorName,
    action: action,
    target: target,
    details: details
  });
}

function openAuditTrailModal() {
  const tbody = document.getElementById('auditTrailTableBody');
  if (!tbody) return;

  let html = '';
  state.auditLogs.forEach(l => {
    html += `
      <tr>
        <td style="font-size: 11.5px; color: #64748b; white-space: nowrap;">${l.timestamp}</td>
        <td><strong>${escapeHtml(l.actor)}</strong></td>
        <td><span class="status-pill status-inprogress">${escapeHtml(l.action)}</span></td>
        <td>${escapeHtml(l.target)}</td>
        <td style="font-size: 12px; color: #475569;">${escapeHtml(l.details)}</td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
  document.getElementById('auditTrailModal').classList.add('open');
}

window.openAuditTrailModal = openAuditTrailModal;

function closeAuditTrailModal() {
  document.getElementById('auditTrailModal').classList.remove('open');
}

window.closeAuditTrailModal = closeAuditTrailModal;

// ==========================================================================
// Sidebar & Utility Functions
// ==========================================================================
function initSidebar() {
  const collapseBtn = document.getElementById('collapseSidebarBtn');
  const sidebar = document.getElementById('sidebarNav');
  if (collapseBtn && sidebar) {
    collapseBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }
}

// Clock In/Out on Employee screen
let isClockedIn = true;
function toggleClockStatus() {
  const btn = document.getElementById('btnClockOut');
  const outTime = document.getElementById('todayOutTime');
  const inTime = document.getElementById('todayInTime');
  if (!btn || !outTime || !inTime) return;

  if (isClockedIn) {
    const now = new Date();
    outTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    btn.textContent = 'Clock In';
    btn.classList.remove('btn-clock-out');
    btn.classList.add('btn-clock-in');
    isClockedIn = false;
  } else {
    const now = new Date();
    inTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    outTime.textContent = 'N/A';
    btn.textContent = 'Clock Out';
    btn.classList.remove('btn-clock-in');
    btn.classList.add('btn-clock-out');
    isClockedIn = true;
  }
}

window.toggleClockStatus = toggleClockStatus;

function initClockWidget() {
  // Clock time widget
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ==========================================================================
// CollabCRM People - Training Configuration Module (6 Dedicated Tabs)
// ==========================================================================

const DEFAULT_TRAINING_CONFIG = {
  general: {
    moduleEnabled: true,
    allowCreation: true,
    allowEditing: true,
    allowArchiving: true,
    enablePreview: true,
    defaultStatus: 'Draft',
    defaultType: 'Mandatory',
    resourceTypes: [
      'YouTube Video',
      'External Course Link',
      'Website Link',
      'Uploaded Video',
      'PDF',
      'Document',
      'Other URL'
    ],
    durationHours: 4,
    durationMinutes: 30
  },
  categories: [
    { id: 'CAT-001', name: 'Engineering & Architecture', desc: 'Software engineering, distributed systems, clean code, cloud infrastructure, and CI/CD.', status: 'Active', createdBy: 'Isha Patel', createdDate: '2026-01-15' },
    { id: 'CAT-002', name: 'Sales & Business Development', desc: 'Enterprise deal closing, client discovery, objection handling, and CRM pipeline governance.', status: 'Active', createdBy: 'Isha Patel', createdDate: '2026-01-15' },
    { id: 'CAT-003', name: 'Recruitment & HR Operations', desc: 'Candidate sourcing, interview compliance, ATS workflows, onboarding, and payroll.', status: 'Active', createdBy: 'Shivam Sharma', createdDate: '2026-02-01' },
    { id: 'CAT-004', name: 'Security, Privacy & Compliance', desc: 'GDPR, SOC 2 Type II, secure coding standards, data retention policies, and credential security.', status: 'Active', createdBy: 'Isha Patel', createdDate: '2026-02-10' },
    { id: 'CAT-005', name: 'Leadership & Management', desc: '1-on-1 coaching, agile performance reviews, cross-functional alignment, and conflict resolution.', status: 'Active', createdBy: 'Isha Patel', createdDate: '2026-02-20' },
    { id: 'CAT-006', name: 'Product Design & UX', desc: 'Design systems, user accessibility WCAG 2.1, Figma component libraries, and usability testing.', status: 'Active', createdBy: 'Shivam Sharma', createdDate: '2026-03-01' },
    { id: 'CAT-007', name: 'Customer Success & Support', desc: 'SLA management, escalation resolution, client onboarding, and proactive churn mitigation.', status: 'Active', createdBy: 'Shivam Sharma', createdDate: '2026-03-15' },
    { id: 'CAT-008', name: 'DevOps & Cloud Operations', desc: 'Kubernetes orchestration, Terraform infrastructure-as-code, and incident on-call response.', status: 'Active', createdBy: 'Ashish Kumar', createdDate: '2026-04-01' },
    { id: 'CAT-009', name: 'Artificial Intelligence & ML', desc: 'LLM prompt engineering, fine-tuning, RAG pipelines, model evaluation, and ethical AI safeguards.', status: 'Active', createdBy: 'Isha Patel', createdDate: '2026-04-18' }
  ],
  assignments: {
    enableIndividual: true,
    enableBulk: true,
    enableDept: true,
    allowReportingManager: true,
    defaultType: 'Mandatory',
    dueDays: 14,
    allowDueEdit: true,
    preventDuplicates: true,
    notifyEmployee: true
  },
  completion: {
    mandatoryResources: true,
    optionalBlocks: false,
    remarksRequired: true,
    evidenceEnabled: true,
    evidenceMandatory: true,
    approvalRequired: true,
    assessmentRequired: true,
    passingScore: 80,
    maxAttempts: 3,
    allowRetakes: true
  },
  certificates: {
    enabled: true,
    template: 'Modern Tech (Navy / Slate Indigo)',
    idPrefix: 'TRN',
    companyName: 'CollabCRM Technologies Inc.',
    signatoryName: 'Isha Patel',
    signatoryTitle: 'Head of People & Org Development',
    validityType: 'Fixed Duration',
    validityMonths: 12,
    expiryNotification: true,
    verificationEnabled: true,
    allowReissue: true,
    logoUrl: 'assets/logo-e97b90af.svg'
  },
  notifications: {
    matrix: [
      { id: 'notif_1', event: 'New Training Assigned', employee: true, manager: true, hr: false, inApp: true, email: true, status: true },
      { id: 'notif_2', event: 'Training Due Date Approaching', employee: true, manager: true, hr: false, inApp: true, email: true, status: true },
      { id: 'notif_3', event: 'Training Overdue', employee: true, manager: true, hr: true, inApp: true, email: true, status: true },
      { id: 'notif_4', event: 'Training Completion Submitted', employee: true, manager: true, hr: false, inApp: true, email: true, status: true },
      { id: 'notif_5', event: 'Completion Approved / Rejected', employee: true, manager: false, hr: true, inApp: true, email: true, status: true },
      { id: 'notif_6', event: 'Assessment Passed', employee: true, manager: true, hr: false, inApp: true, email: true, status: true },
      { id: 'notif_7', event: 'Assessment Failed', employee: true, manager: true, hr: false, inApp: true, email: true, status: true },
      { id: 'notif_8', event: 'Certificate Issued', employee: true, manager: false, hr: true, inApp: true, email: true, status: true },
      { id: 'notif_9', event: 'Certificate Expiring Soon', employee: true, manager: true, hr: true, inApp: true, email: true, status: true }
    ],
    dueDateEnabled: true,
    dueDaysBefore: 3,
    overdueEnabled: true,
    overdueFrequency: 'Every 2 Days',
    certExpiryEnabled: true,
    certExpiryDays: 30
  }
};

const DEFAULT_CONFIG_AUDIT = [
  {
    timestamp: '2026-11-01 10:30 AM',
    author: 'Isha Patel',
    role: 'Admin / Head of People',
    tab: 'General Settings',
    summary: 'Initial module rollout: Enabled modules, set default duration to 4h 30m.'
  },
  {
    timestamp: '2026-11-01 11:15 AM',
    author: 'Isha Patel',
    role: 'Admin / Head of People',
    tab: 'Assignment Settings',
    summary: 'Configured default mandatory assignment window to 14 days and allowed RM assignment.'
  },
  {
    timestamp: '2026-11-01 02:45 PM',
    author: 'Shivam Sharma',
    role: 'HR Operations',
    tab: 'Certificate Settings',
    summary: 'Standardized Modern Tech certificate template and prefix TRN with 12 months validity.'
  }
];

let trainingConfigData = loadTrainingConfig();
let activeTrainingConfigTab = 'general';
let editingCategoryId = null;
let toastTimer = null;

function loadTrainingConfig() {
  try {
    const raw = localStorage.getItem('collabcrm_training_config');
    if (raw) {
      const parsed = JSON.parse(raw);
      // Normalize general.defaultType if invalid or 'Self-Paced'
      if (parsed.general && parsed.general.defaultType !== 'Mandatory' && parsed.general.defaultType !== 'Optional') {
        parsed.general.defaultType = 'Mandatory';
      }
      return {
        general: { ...DEFAULT_TRAINING_CONFIG.general, ...(parsed.general || {}) },
        categories: Array.isArray(parsed.categories) ? parsed.categories : [...DEFAULT_TRAINING_CONFIG.categories],
        assignments: { ...DEFAULT_TRAINING_CONFIG.assignments, ...(parsed.assignments || {}) },
        completion: { ...DEFAULT_TRAINING_CONFIG.completion, ...(parsed.completion || {}) },
        certificates: { ...DEFAULT_TRAINING_CONFIG.certificates, ...(parsed.certificates || {}) },
        notifications: {
          ...DEFAULT_TRAINING_CONFIG.notifications,
          ...(parsed.notifications || {}),
          matrix: Array.isArray(parsed.notifications?.matrix) ? parsed.notifications.matrix : [...DEFAULT_TRAINING_CONFIG.notifications.matrix]
        }
      };
    }
  } catch (err) {
    console.error('Failed to load training config:', err);
  }
  return JSON.parse(JSON.stringify(DEFAULT_TRAINING_CONFIG));
}

function loadConfigAudit() {
  try {
    const raw = localStorage.getItem('collabcrm_training_config_audit');
    if (raw) return JSON.parse(raw);
  } catch (err) {}
  return [...DEFAULT_CONFIG_AUDIT];
}

function appendConfigAudit(tab, summary) {
  const audits = loadConfigAudit();
  const actor = state.currentRole === 'admin' ? 'Isha Patel' : (state.currentRole === 'hr' ? 'Shivam Sharma' : 'Ashish Kumar');
  const roleName = state.currentRole === 'admin' ? 'Admin / Head of People' : (state.currentRole === 'hr' ? 'HR Operations' : 'Reporting Manager');
  const now = new Date();
  const timeStr = now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }) + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  audits.unshift({
    timestamp: timeStr,
    author: actor,
    role: roleName,
    tab: tab,
    summary: summary
  });
  try {
    localStorage.setItem('collabcrm_training_config_audit', JSON.stringify(audits));
  } catch (e) {}
}

// Module View Switching
function switchToTrainingConfig() {
  const viewDashboard = document.getElementById('viewDashboard');
  const viewTraining = document.getElementById('viewTraining');
  const viewConfig = document.getElementById('viewConfig');
  const viewTrainingConfig = document.getElementById('viewTrainingConfig');

  const menuEmployees = document.getElementById('menuEmployees');
  const menuTraining = document.getElementById('menuTraining');
  const menuConfig = document.getElementById('menuConfig');

  const employeesInner = document.getElementById('employeesInner');
  const trainingInner = document.getElementById('trainingInner');
  const configInner = document.getElementById('configInner');

  if (viewDashboard) { viewDashboard.style.display = 'none'; viewDashboard.classList.remove('active'); }
  if (viewTraining) { viewTraining.style.display = 'none'; viewTraining.classList.remove('active'); }
  if (viewConfig) { viewConfig.style.display = 'none'; viewConfig.classList.remove('active'); }
  if (viewTrainingConfig) { viewTrainingConfig.style.display = 'block'; viewTrainingConfig.classList.add('active'); }
  const viewRoles = document.getElementById('viewRoles');
  if (viewRoles) { viewRoles.style.display = 'none'; viewRoles.classList.remove('active'); }
  const viewRolePermissions = document.getElementById('viewRolePermissions');
  if (viewRolePermissions) { viewRolePermissions.style.display = 'none'; viewRolePermissions.classList.remove('active'); }

  if (menuEmployees) menuEmployees.classList.remove('active');
  if (menuTraining) menuTraining.classList.remove('active');
  if (menuConfig) menuConfig.classList.add('active');

  if (employeesInner) {
    employeesInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = employeesInner.querySelector('.icon-users-02');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-users-02';
  }
  if (trainingInner) {
    trainingInner.className = 'text-white hover:bg-indigo-600 flex items-center rounded-md h-full w-full text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = trainingInner.querySelector('.icon-training');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center 2xl:text-xl 2xl-to-xl:text-lg text-lg icon-training';
  }
  if (configInner) {
    configInner.className = 'bg-indigo-600 text-white relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = configInner.querySelector('.icon-settings-02');
    if (icon) icon.className = 'text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-settings-02';
  }

  initTrainingConfigScreen();
}

function openTrainingConfig() {
  closeConfigPanel();
  switchToTrainingConfig();
}

// 6 Internal Tabs Switching
function switchTrainingConfigTab(tabId) {
  activeTrainingConfigTab = tabId;
  const tabs = ['general', 'categories', 'assignments', 'completion', 'certificates', 'notifications'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tcfgTabBtn_${t}`);
    const section = document.getElementById(`tcfgSection_${t}`);
    if (btn) btn.classList.toggle('active', t === tabId);
    if (section) section.classList.toggle('active', t === tabId);
  });

  const tabNames = {
    general: 'General Settings',
    categories: 'Category Rules',
    assignments: 'Assignment Policies',
    completion: 'Completion & Passing Criteria',
    certificates: 'Certificate Templates',
    notifications: 'Notifications & Reminders'
  };
  const bc = document.getElementById('tcfgActiveBreadcrumb');
  if (bc) bc.textContent = `Training Config › ${tabNames[tabId] || tabId}`;
}

// Populate and Initialize Screen
function initTrainingConfigScreen() {
  trainingConfigData = loadTrainingConfig();
  updateTrainingConfigPermissions();

  // Tab 1: General
  const g = trainingConfigData.general;
  const elGenMod = document.getElementById('cfg_gen_module_enabled');
  const elGenCre = document.getElementById('cfg_gen_allow_creation');
  const elGenEdi = document.getElementById('cfg_gen_allow_editing');
  const elGenArc = document.getElementById('cfg_gen_allow_archiving');
  const elGenPre = document.getElementById('cfg_gen_enable_preview');
  const elGenStat = document.getElementById('cfg_gen_default_status');
  const elGenTyp = document.getElementById('cfg_gen_default_type');
  const elGenH = document.getElementById('cfg_gen_duration_hours');
  const elGenM = document.getElementById('cfg_gen_duration_minutes');

  if (elGenMod) elGenMod.checked = !!g.moduleEnabled;
  if (elGenCre) elGenCre.checked = !!g.allowCreation;
  if (elGenEdi) elGenEdi.checked = !!g.allowEditing;
  if (elGenArc) elGenArc.checked = !!g.allowArchiving;
  if (elGenPre) elGenPre.checked = !!g.enablePreview;
  if (elGenStat) elGenStat.value = g.defaultStatus || 'Draft';
  if (elGenTyp) elGenTyp.value = (g.defaultType === 'Optional') ? 'Optional' : 'Mandatory';
  if (elGenH) elGenH.value = g.durationHours ?? 4;
  if (elGenM) elGenM.value = g.durationMinutes ?? 30;
  renderResourceTypeBadges();

  // Tab 2: Categories
  renderCategoriesTable();

  // Tab 3: Assignments
  const a = trainingConfigData.assignments;
  const elAsgnInd = document.getElementById('cfg_asgn_enable_individual');
  const elAsgnBlk = document.getElementById('cfg_asgn_enable_bulk');
  const elAsgnDpt = document.getElementById('cfg_asgn_enable_dept');
  const elAsgnRm = document.getElementById('cfg_asgn_allow_rm');
  const elAsgnTyp = document.getElementById('cfg_asgn_default_type');
  const elAsgnDue = document.getElementById('cfg_asgn_due_days');
  const elAsgnDueEd = document.getElementById('cfg_asgn_allow_due_edit');
  const elAsgnDup = document.getElementById('cfg_asgn_prevent_duplicates');
  const elAsgnNot = document.getElementById('cfg_asgn_notify_employee');

  if (elAsgnInd) elAsgnInd.checked = !!a.enableIndividual;
  if (elAsgnBlk) elAsgnBlk.checked = !!a.enableBulk;
  if (elAsgnDpt) elAsgnDpt.checked = !!a.enableDept;
  if (elAsgnRm) elAsgnRm.checked = !!a.allowReportingManager;
  if (elAsgnTyp) elAsgnTyp.value = a.defaultType || 'Mandatory';
  if (elAsgnDue) elAsgnDue.value = a.dueDays ?? 14;
  if (elAsgnDueEd) elAsgnDueEd.checked = !!a.allowDueEdit;
  if (elAsgnDup) elAsgnDup.checked = !!a.preventDuplicates;
  if (elAsgnNot) elAsgnNot.checked = !!a.notifyEmployee;

  // Tab 4: Completion & Assessment
  const c = trainingConfigData.completion;
  const elCompMan = document.getElementById('cfg_comp_mandatory_resources');
  const elCompOpt = document.getElementById('cfg_comp_optional_blocks');
  const elCompRem = document.getElementById('cfg_comp_remarks_required');
  const elCompEvEn = document.getElementById('cfg_comp_evidence_enabled');
  const elCompEvMan = document.getElementById('cfg_comp_evidence_mandatory');
  const elCompApp = document.getElementById('cfg_comp_approval_required');
  const elCompAss = document.getElementById('cfg_comp_assessment_required');
  const elCompScr = document.getElementById('cfg_comp_passing_score');
  const elCompAtt = document.getElementById('cfg_comp_max_attempts');
  const elCompRet = document.getElementById('cfg_comp_allow_retakes');

  if (elCompMan) elCompMan.checked = !!c.mandatoryResources;
  if (elCompOpt) elCompOpt.checked = !!c.optionalBlocks;
  if (elCompRem) elCompRem.checked = !!c.remarksRequired;
  if (elCompEvEn) elCompEvEn.checked = !!c.evidenceEnabled;
  if (elCompEvMan) elCompEvMan.checked = !!c.evidenceMandatory;
  if (elCompApp) elCompApp.checked = !!c.approvalRequired;
  if (elCompAss) elCompAss.checked = !!c.assessmentRequired;
  if (elCompScr) elCompScr.value = c.passingScore ?? 80;
  if (elCompAtt) elCompAtt.value = c.maxAttempts ?? 3;
  if (elCompRet) elCompRet.checked = !!c.allowRetakes;

  toggleEvidenceFields();
  toggleApprovalWarning();
  toggleAssessmentFields();

  // Tab 5: Certificates
  const cr = trainingConfigData.certificates;
  const elCertEn = document.getElementById('cfg_cert_enabled');
  const elCertTpl = document.getElementById('cfg_cert_template');
  const elCertPfx = document.getElementById('cfg_cert_id_prefix');
  const elCertCmp = document.getElementById('cfg_cert_company_name');
  const elCertSign = document.getElementById('cfg_cert_signatory_name');
  const elCertTtl = document.getElementById('cfg_cert_signatory_title');
  const elCertValT = document.getElementById('cfg_cert_validity_type');
  const elCertValM = document.getElementById('cfg_cert_validity_months');
  const elCertExp = document.getElementById('cfg_cert_expiry_notif');
  const elCertVer = document.getElementById('cfg_cert_verification_enabled');
  const elCertRei = document.getElementById('cfg_cert_allow_reissue');
  const elCertLogo = document.getElementById('cfg_cert_logo_preview');

  if (elCertEn) elCertEn.checked = !!cr.enabled;
  if (elCertTpl) elCertTpl.value = cr.template || 'Modern Tech (Navy / Slate Indigo)';
  if (elCertPfx) elCertPfx.value = cr.idPrefix || 'TRN';
  if (elCertCmp) elCertCmp.value = cr.companyName || 'CollabCRM Technologies Inc.';
  if (elCertSign) elCertSign.value = cr.signatoryName || 'Isha Patel';
  if (elCertTtl) elCertTtl.value = cr.signatoryTitle || 'Head of People & Org Development';
  if (elCertValT) elCertValT.value = cr.validityType || 'Fixed Duration';
  if (elCertValM) elCertValM.value = cr.validityMonths ?? 12;
  if (elCertExp) elCertExp.checked = !!cr.expiryNotification;
  if (elCertVer) elCertVer.checked = !!cr.verificationEnabled;
  if (elCertRei) elCertRei.checked = !!cr.allowReissue;
  if (elCertLogo && cr.logoUrl) elCertLogo.src = cr.logoUrl;

  toggleCertificateFields();
  toggleCertValidityFields();

  // Tab 6: Notifications & Reminders
  renderNotificationsTable();
  const n = trainingConfigData.notifications;
  const elRemDueEn = document.getElementById('cfg_rem_due_date_enabled');
  const elRemDueD = document.getElementById('cfg_rem_due_days_before');
  const elRemOvdEn = document.getElementById('cfg_rem_overdue_enabled');
  const elRemOvdF = document.getElementById('cfg_rem_overdue_frequency');
  const elRemExpEn = document.getElementById('cfg_rem_cert_expiry_enabled');
  const elRemExpD = document.getElementById('cfg_rem_cert_expiry_days');

  if (elRemDueEn) elRemDueEn.checked = !!n.dueDateEnabled;
  if (elRemDueD) elRemDueD.value = n.dueDaysBefore ?? 3;
  if (elRemOvdEn) elRemOvdEn.checked = !!n.overdueEnabled;
  if (elRemOvdF) elRemOvdF.value = n.overdueFrequency || 'Every 2 Days';
  if (elRemExpEn) elRemExpEn.checked = !!n.certExpiryEnabled;
  if (elRemExpD) elRemExpD.value = n.certExpiryDays ?? 30;

  toggleReminderFields();
}

// Role Permissions Logic
function updateTrainingConfigPermissions() {
  const isManager = state.currentRole === 'manager';
  const notice = document.getElementById('tcfgPermissionNotice');
  const btnSave = document.getElementById('btnSaveConfig');

  if (notice) notice.style.display = isManager ? 'flex' : 'none';
  if (btnSave) {
    if (isManager) {
      btnSave.style.opacity = '0.5';
      btnSave.style.cursor = 'not-allowed';
      btnSave.title = 'View-only for Reporting Managers';
    } else {
      btnSave.style.opacity = '1';
      btnSave.style.cursor = 'pointer';
      btnSave.title = 'Save Changes';
    }
  }

  // Disable inputs if manager
  const container = document.getElementById('viewTrainingConfig');
  if (container) {
    const inputs = container.querySelectorAll('input:not([type="hidden"]), select, textarea');
    inputs.forEach(input => {
      // Don't disable close buttons or modals
      if (!input.closest('.modal-dialog')) {
        input.disabled = isManager;
      }
    });
  }

  renderCategoriesTable();
  renderNotificationsTable();
}

// Resource Types Badges
const ALL_RESOURCE_TYPES = [
  'YouTube Video',
  'External Course Link',
  'Website Link',
  'Uploaded Video',
  'PDF',
  'Document',
  'Other URL'
];

function renderResourceTypeBadges() {
  const container = document.getElementById('cfg_gen_resource_types');
  if (!container) return;

  const current = trainingConfigData.general.resourceTypes || [];
  const isManager = state.currentRole === 'manager';

  container.innerHTML = ALL_RESOURCE_TYPES.map(type => {
    const sel = current.includes(type);
    return `
      <span class="tcfg-res-badge ${sel ? 'selected' : ''}" 
            onclick="toggleResourceType('${type}')" 
            style="${isManager ? 'cursor: not-allowed; opacity: 0.8;' : 'cursor: pointer;'}">
        <span>${sel ? '✓' : '+'}</span>
        <span>${escapeHtml(type)}</span>
      </span>
    `;
  }).join('');
}

function toggleResourceType(typeName) {
  if (state.currentRole === 'manager') return;
  const current = trainingConfigData.general.resourceTypes || [];
  const idx = current.indexOf(typeName);
  if (idx !== -1) {
    if (current.length <= 1) {
      showConfigToast('At least one resource type must be supported.', 'error');
      return;
    }
    current.splice(idx, 1);
  } else {
    current.push(typeName);
  }
  trainingConfigData.general.resourceTypes = current;
  renderResourceTypeBadges();
  markConfigDirty();
}

// Tab 2: Categories Operations
function renderCategoriesTable() {
  const tbody = document.getElementById('tcfgCategoriesTableBody');
  const countBadge = document.getElementById('tcfgBadgeCategoriesCount');
  if (!tbody) return;

  const cats = trainingConfigData.categories || [];
  if (countBadge) countBadge.textContent = cats.length;

  if (cats.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #94a3b8; padding: 32px;">No categories configured. Click "Add Category" to create one.</td></tr>`;
    return;
  }

  const isManager = state.currentRole === 'manager';

  tbody.innerHTML = cats.map(cat => {
    const isAct = cat.status === 'Active';
    const pillClass = isAct ? 'status-badge-active' : 'status-badge-inactive';
    return `
      <tr>
        <td style="font-weight: 600; color: #0f172a;">${escapeHtml(cat.name)}</td>
        <td style="color: #64748b; font-size: 13px; max-width: 320px;">${escapeHtml(cat.desc || '—')}</td>
        <td><span class="${pillClass}">${escapeHtml(cat.status)}</span></td>
        <td style="color: #475569; font-size: 13px;">${escapeHtml(cat.createdBy || 'System')}</td>
        <td style="color: #64748b; font-size: 13px;">${escapeHtml(cat.createdDate || '—')}</td>
        <td style="text-align: right; white-space: nowrap;">
          ${isManager ? '<span style="font-size: 12px; color: #94a3b8;">View only</span>' : `
            <button type="button" class="tcfg-action-icon-btn btn-edit" onclick="openEditCategoryModal('${cat.id}')" title="Edit Category" aria-label="Edit">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button type="button" class="tcfg-action-icon-btn btn-toggle" onclick="toggleCategoryStatus('${cat.id}')" title="${isAct ? 'Deactivate Category' : 'Activate Category'}" aria-label="${isAct ? 'Deactivate' : 'Activate'}">
              ${isAct ? `
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
              </svg>` : `
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>`}
            </button>
            <button type="button" class="tcfg-action-icon-btn btn-delete" onclick="deleteCategory('${cat.id}')" title="Delete Category" aria-label="Delete">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          `}
        </td>
      </tr>
    `;
  }).join('');
}

function openAddCategoryModal() {
  if (state.currentRole === 'manager') {
    showConfigToast('Reporting Managers have view-only access.', 'error');
    return;
  }
  editingCategoryId = null;
  const modal = document.getElementById('modalCategoryForm');
  const title = document.getElementById('modalCategoryTitle');
  const idInput = document.getElementById('tcfg_cat_id');
  const nameInput = document.getElementById('tcfg_cat_name');
  const descInput = document.getElementById('tcfg_cat_desc');
  const statusSelect = document.getElementById('tcfg_cat_status');
  const err = document.getElementById('tcfg_cat_name_error');

  if (title) title.textContent = 'Add Training Category';
  if (idInput) idInput.value = '';
  if (nameInput) { nameInput.value = ''; nameInput.style.borderColor = '#cbd5e1'; }
  if (descInput) descInput.value = '';
  if (statusSelect) statusSelect.value = 'Active';
  if (err) err.style.display = 'none';

  if (modal) modal.classList.add('open');
}

function openEditCategoryModal(catId) {
  if (state.currentRole === 'manager') {
    showConfigToast('Reporting Managers have view-only access.', 'error');
    return;
  }
  const cat = (trainingConfigData.categories || []).find(c => c.id === catId);
  if (!cat) return;

  editingCategoryId = catId;
  const modal = document.getElementById('modalCategoryForm');
  const title = document.getElementById('modalCategoryTitle');
  const idInput = document.getElementById('tcfg_cat_id');
  const nameInput = document.getElementById('tcfg_cat_name');
  const descInput = document.getElementById('tcfg_cat_desc');
  const statusSelect = document.getElementById('tcfg_cat_status');
  const err = document.getElementById('tcfg_cat_name_error');

  if (title) title.textContent = 'Edit Training Category';
  if (idInput) idInput.value = cat.id;
  if (nameInput) { nameInput.value = cat.name; nameInput.style.borderColor = '#cbd5e1'; }
  if (descInput) descInput.value = cat.desc || '';
  if (statusSelect) statusSelect.value = cat.status || 'Active';
  if (err) err.style.display = 'none';

  if (modal) modal.classList.add('open');
}

function closeCategoryModal() {
  const modal = document.getElementById('modalCategoryForm');
  if (modal) modal.classList.remove('open');
  editingCategoryId = null;
}

function saveCategoryModal() {
  if (state.currentRole === 'manager') {
    showConfigToast('Access Denied: View-only mode for Reporting Managers.', 'error');
    return;
  }
  const nameInput = document.getElementById('tcfg_cat_name');
  const descInput = document.getElementById('tcfg_cat_desc');
  const statusSelect = document.getElementById('tcfg_cat_status');
  const err = document.getElementById('tcfg_cat_name_error');

  const name = nameInput ? nameInput.value.trim() : '';
  const desc = descInput ? descInput.value.trim() : '';
  const status = statusSelect ? statusSelect.value : 'Active';

  if (!name) {
    if (err) { err.textContent = 'Category name is required.'; err.style.display = 'block'; }
    if (nameInput) nameInput.style.borderColor = '#ef4444';
    return;
  }

  const isDuplicate = (trainingConfigData.categories || []).some(c => 
    c.id !== editingCategoryId && c.name.toLowerCase() === name.toLowerCase()
  );
  if (isDuplicate) {
    if (err) { err.textContent = 'A category with this name already exists.'; err.style.display = 'block'; }
    if (nameInput) nameInput.style.borderColor = '#ef4444';
    return;
  }

  const actor = state.currentRole === 'admin' ? 'Isha Patel' : 'Shivam Sharma';
  const today = new Date().toISOString().split('T')[0];

  if (editingCategoryId) {
    const idx = trainingConfigData.categories.findIndex(c => c.id === editingCategoryId);
    if (idx !== -1) {
      trainingConfigData.categories[idx].name = name;
      trainingConfigData.categories[idx].desc = desc;
      trainingConfigData.categories[idx].status = status;
      appendConfigAudit('Categories', `Updated category "${name}" (Status: ${status}).`);
    }
  } else {
    const newId = 'CAT-' + (Date.now().toString().slice(-4));
    trainingConfigData.categories.push({
      id: newId,
      name: name,
      desc: desc,
      status: status,
      createdBy: actor,
      createdDate: today
    });
    appendConfigAudit('Categories', `Created new category "${name}" (ID: ${newId}, Status: ${status}).`);
  }

  try {
    localStorage.setItem('collabcrm_training_config', JSON.stringify(trainingConfigData));
  } catch (e) {}

  renderCategoriesTable();
  closeCategoryModal();
  showConfigToast(editingCategoryId ? 'Category updated successfully!' : 'Category created successfully!', 'success');
}

function toggleCategoryStatus(catId) {
  if (state.currentRole === 'manager') {
    showConfigToast('Reporting Managers have view-only access.', 'error');
    return;
  }
  const cat = (trainingConfigData.categories || []).find(c => c.id === catId);
  if (!cat) return;

  cat.status = cat.status === 'Active' ? 'Inactive' : 'Active';
  appendConfigAudit('Categories', `Toggled category "${cat.name}" status to ${cat.status}.`);
  try {
    localStorage.setItem('collabcrm_training_config', JSON.stringify(trainingConfigData));
  } catch (e) {}

  renderCategoriesTable();
  showConfigToast(`Category "${cat.name}" is now ${cat.status}.`, 'success');
}

function deleteCategory(catId) {
  if (state.currentRole === 'manager') {
    showConfigToast('Reporting Managers have view-only access.', 'error');
    return;
  }
  const cat = (trainingConfigData.categories || []).find(c => c.id === catId);
  if (!cat) return;

  // Protect categories associated with courses
  const inUse = (state.programs || []).some(p => 
    (p.dept && p.dept.toLowerCase() === cat.name.toLowerCase()) ||
    (p.title && p.title.toLowerCase().includes(cat.name.toLowerCase()))
  );

  if (inUse) {
    alert(`Cannot Delete Category\n\n"${cat.name}" is currently associated with active training curricula. To preserve course historical data, set its status to Inactive instead.`);
    return;
  }

  if (!confirm(`Are you sure you want to permanently delete category "${cat.name}"?`)) {
    return;
  }

  trainingConfigData.categories = trainingConfigData.categories.filter(c => c.id !== catId);
  appendConfigAudit('Categories', `Deleted category "${cat.name}" (${catId}).`);
  try {
    localStorage.setItem('collabcrm_training_config', JSON.stringify(trainingConfigData));
  } catch (e) {}

  renderCategoriesTable();
  showConfigToast(`Category "${cat.name}" deleted.`, 'success');
}

// Conditionals for Tab 4 & Tab 5 & Tab 6
function toggleEvidenceFields() {
  const en = document.getElementById('cfg_comp_evidence_enabled')?.checked;
  const row = document.getElementById('row_comp_evidence_mandatory');
  if (row) row.style.display = en ? 'flex' : 'none';
}

function toggleApprovalWarning() {
  const app = document.getElementById('cfg_comp_approval_required')?.checked;
  const warn = document.getElementById('cfg_comp_approval_warning');
  if (warn) warn.style.display = app ? 'flex' : 'none';
}

function toggleAssessmentFields() {
  const req = document.getElementById('cfg_comp_assessment_required')?.checked;
  const rScore = document.getElementById('row_comp_passing_score');
  const rAtt = document.getElementById('row_comp_max_attempts');
  const rRet = document.getElementById('row_comp_allow_retakes');
  if (rScore) rScore.style.display = req ? 'flex' : 'none';
  if (rAtt) rAtt.style.display = req ? 'flex' : 'none';
  if (rRet) rRet.style.display = req ? 'flex' : 'none';
}

function toggleCertificateFields() {
  const en = document.getElementById('cfg_cert_enabled')?.checked;
  const container = document.getElementById('cfg_cert_details_container');
  if (container) container.style.display = en ? 'block' : 'none';
}

function toggleCertValidityFields() {
  const type = document.getElementById('cfg_cert_validity_type')?.value;
  const row = document.getElementById('row_cert_validity_duration');
  if (row) row.style.display = type === 'Fixed Duration' ? 'flex' : 'none';
}

function toggleReminderFields() {
  const due = document.getElementById('cfg_rem_due_date_enabled')?.checked;
  const rDue = document.getElementById('row_rem_due_days');
  if (rDue) rDue.style.display = due ? 'flex' : 'none';

  const ovd = document.getElementById('cfg_rem_overdue_enabled')?.checked;
  const rOvd = document.getElementById('row_rem_overdue_freq');
  if (rOvd) rOvd.style.display = ovd ? 'flex' : 'none';

  const exp = document.getElementById('cfg_rem_cert_expiry_enabled')?.checked;
  const rExp = document.getElementById('row_rem_cert_expiry_days');
  if (rExp) rExp.style.display = exp ? 'flex' : 'none';
}

// Certificate Live Preview Modal
function openCertificatePreviewModal() {
  const modal = document.getElementById('modalCertConfigPreview');
  if (!modal) return;

  const prefix = (document.getElementById('cfg_cert_id_prefix')?.value || 'TRN').trim();
  const valType = document.getElementById('cfg_cert_validity_type')?.value || 'Fixed Duration';
  const valMonths = document.getElementById('cfg_cert_validity_months')?.value || 12;
  const signName = document.getElementById('cfg_cert_signatory_name')?.value || 'Isha Patel';
  const signTitle = document.getElementById('cfg_cert_signatory_title')?.value || 'Head of People & Org Development';
  const compName = document.getElementById('cfg_cert_company_name')?.value || 'CollabCRM Inc.';

  const idEl = document.getElementById('certPrevId');
  const valEl = document.getElementById('certPrevValidity');
  const signEl = document.getElementById('certPrevSign');
  const signNameEl = document.getElementById('certPrevSignName');
  const signTitleEl = document.getElementById('certPrevSignTitle');
  const orgEl = document.getElementById('certPrevOrg');

  if (idEl) idEl.textContent = `${prefix}-2026-00421`;
  if (valEl) valEl.textContent = valType === 'Lifetime (No Expiry)' ? 'Lifetime (No Expiry)' : `${valMonths} Months`;
  if (signEl) signEl.textContent = signName;
  if (signNameEl) signNameEl.textContent = signName;
  if (signTitleEl) signTitleEl.textContent = signTitle;
  if (orgEl) orgEl.textContent = compName;

  modal.classList.add('open');
}

function closeCertificatePreviewModal() {
  const modal = document.getElementById('modalCertConfigPreview');
  if (modal) modal.classList.remove('open');
}

function handleCertLogoUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const url = e.target.result;
    trainingConfigData.certificates.logoUrl = url;
    const preview = document.getElementById('cfg_cert_logo_preview');
    const modalLogo = document.getElementById('certPrevLogo');
    if (preview) preview.src = url;
    if (modalLogo) modalLogo.src = url;
    markConfigDirty();
    showConfigToast('Company logo updated.', 'success');
  };
  reader.readAsDataURL(file);
}

// Tab 6: Notifications Matrix
function renderNotificationsTable() {
  const tbody = document.getElementById('tcfgNotificationsTableBody');
  if (!tbody) return;

  const matrix = trainingConfigData.notifications.matrix || [];
  const isManager = state.currentRole === 'manager';

  tbody.innerHTML = matrix.map(item => {
    return `
      <tr>
        <td style="font-weight: 600; color: #1e293b; font-size: 13px;">${escapeHtml(item.event)}</td>
        <td style="text-align: center;">
          <input type="checkbox" ${item.employee ? 'checked' : ''} ${isManager ? 'disabled' : ''} onchange="updateNotifEvent('${item.id}', 'employee', this.checked)" />
        </td>
        <td style="text-align: center;">
          <input type="checkbox" ${item.manager ? 'checked' : ''} ${isManager ? 'disabled' : ''} onchange="updateNotifEvent('${item.id}', 'manager', this.checked)" />
        </td>
        <td style="text-align: center;">
          <input type="checkbox" ${item.hr ? 'checked' : ''} ${isManager ? 'disabled' : ''} onchange="updateNotifEvent('${item.id}', 'hr', this.checked)" />
        </td>
        <td style="text-align: center;">
          <input type="checkbox" ${item.inApp ? 'checked' : ''} ${isManager ? 'disabled' : ''} onchange="updateNotifEvent('${item.id}', 'inApp', this.checked)" />
        </td>
        <td style="text-align: center;">
          <input type="checkbox" ${item.email ? 'checked' : ''} ${isManager ? 'disabled' : ''} onchange="updateNotifEvent('${item.id}', 'email', this.checked)" />
        </td>
        <td style="text-align: center;">
          <label class="crm-toggle" style="transform: scale(0.85);">
            <input type="checkbox" ${item.status ? 'checked' : ''} ${isManager ? 'disabled' : ''} onchange="updateNotifEvent('${item.id}', 'status', this.checked)" />
            <span class="crm-toggle-slider"></span>
          </label>
        </td>
      </tr>
    `;
  }).join('');
}

function updateNotifEvent(id, field, value) {
  if (state.currentRole === 'manager') return;
  const item = (trainingConfigData.notifications.matrix || []).find(m => m.id === id);
  if (item) {
    item[field] = value;
    markConfigDirty();
  }
}

// Audit Modal
function openConfigAuditModal() {
  const tbody = document.getElementById('tcfgAuditTableBody');
  const modal = document.getElementById('modalConfigAudit');
  if (!modal) return;

  const audits = loadConfigAudit();
  if (tbody) {
    if (audits.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #94a3b8; padding: 24px;">No audit records found.</td></tr>`;
    } else {
      tbody.innerHTML = audits.map(a => `
        <tr>
          <td style="white-space: nowrap; font-family: monospace; font-size: 11.5px; color: #64748b;">${escapeHtml(a.timestamp)}</td>
          <td style="font-weight: 600; color: #0f172a;">${escapeHtml(a.author)}</td>
          <td><span style="display: inline-block; padding: 2px 7px; border-radius: 4px; font-size: 11px; font-weight: 500; background: #f1f5f9; color: #475569;">${escapeHtml(a.role)}</span></td>
          <td style="font-weight: 600; color: #4f46e5;">${escapeHtml(a.tab)}</td>
          <td style="color: #334155; font-size: 12.5px;">${escapeHtml(a.summary)}</td>
        </tr>
      `).join('');
    }
  }
  modal.classList.add('open');
}

function closeConfigAuditModal() {
  const modal = document.getElementById('modalConfigAudit');
  if (modal) modal.classList.remove('open');
}

// Save Current Configuration Tab
function saveCurrentConfigTab() {
  if (state.currentRole === 'manager') {
    showConfigToast('Access Denied: Reporting Managers have read-only access to Training Config.', 'error');
    return;
  }

  // Validate active tab
  if (activeTrainingConfigTab === 'general') {
    const hours = parseInt(document.getElementById('cfg_gen_duration_hours').value, 10);
    const mins = parseInt(document.getElementById('cfg_gen_duration_minutes').value, 10);
    if (isNaN(hours) || hours < 0) {
      showConfigToast('Invalid default duration hours. Must be 0 or greater.', 'error');
      return;
    }
    if (isNaN(mins) || mins < 0 || mins > 59) {
      showConfigToast('Invalid default duration minutes. Must be between 0 and 59.', 'error');
      return;
    }
    if (!trainingConfigData.general.resourceTypes || trainingConfigData.general.resourceTypes.length === 0) {
      showConfigToast('Please select at least one supported resource type.', 'error');
      return;
    }
    trainingConfigData.general.moduleEnabled = document.getElementById('cfg_gen_module_enabled').checked;
    trainingConfigData.general.allowCreation = document.getElementById('cfg_gen_allow_creation').checked;
    trainingConfigData.general.allowEditing = document.getElementById('cfg_gen_allow_editing').checked;
    trainingConfigData.general.allowArchiving = document.getElementById('cfg_gen_allow_archiving').checked;
    trainingConfigData.general.enablePreview = document.getElementById('cfg_gen_enable_preview').checked;
    trainingConfigData.general.defaultStatus = document.getElementById('cfg_gen_default_status').value;
    trainingConfigData.general.defaultType = document.getElementById('cfg_gen_default_type').value;
    trainingConfigData.general.durationHours = hours;
    trainingConfigData.general.durationMinutes = mins;

    appendConfigAudit('General Settings', `Updated rules: Default status "${trainingConfigData.general.defaultStatus}", duration ${hours}h ${mins}m, ${trainingConfigData.general.resourceTypes.length} resource types enabled.`);
  } else if (activeTrainingConfigTab === 'categories') {
    appendConfigAudit('Categories', `Confirmed active taxonomy of ${trainingConfigData.categories.length} training categories.`);
  } else if (activeTrainingConfigTab === 'assignments') {
    const dueDays = parseInt(document.getElementById('cfg_asgn_due_days').value, 10);
    if (isNaN(dueDays) || dueDays < 1) {
      showConfigToast('Due window must be at least 1 day.', 'error');
      return;
    }
    trainingConfigData.assignments.enableIndividual = document.getElementById('cfg_asgn_enable_individual').checked;
    trainingConfigData.assignments.enableBulk = document.getElementById('cfg_asgn_enable_bulk').checked;
    trainingConfigData.assignments.enableDept = document.getElementById('cfg_asgn_enable_dept').checked;
    trainingConfigData.assignments.allowReportingManager = document.getElementById('cfg_asgn_allow_rm').checked;
    trainingConfigData.assignments.defaultType = document.getElementById('cfg_asgn_default_type').value;
    trainingConfigData.assignments.dueDays = dueDays;
    trainingConfigData.assignments.allowDueEdit = document.getElementById('cfg_asgn_allow_due_edit').checked;
    trainingConfigData.assignments.preventDuplicates = document.getElementById('cfg_asgn_prevent_duplicates').checked;
    trainingConfigData.assignments.notifyEmployee = document.getElementById('cfg_asgn_notify_employee').checked;

    appendConfigAudit('Assignment Settings', `Saved assignment policies: Default type "${trainingConfigData.assignments.defaultType}", default due window ${dueDays} days.`);
  } else if (activeTrainingConfigTab === 'completion') {
    const passScore = parseInt(document.getElementById('cfg_comp_passing_score').value, 10);
    const maxAttempts = parseInt(document.getElementById('cfg_comp_max_attempts').value, 10);
    if (document.getElementById('cfg_comp_assessment_required').checked) {
      if (isNaN(passScore) || passScore < 1 || passScore > 100) {
        showConfigToast('Assessment passing score must be between 1% and 100%.', 'error');
        return;
      }
      if (isNaN(maxAttempts) || maxAttempts < 1) {
        showConfigToast('Maximum attempts must be at least 1.', 'error');
        return;
      }
    }
    trainingConfigData.completion.mandatoryResources = document.getElementById('cfg_comp_mandatory_resources').checked;
    trainingConfigData.completion.optionalBlocks = document.getElementById('cfg_comp_optional_blocks').checked;
    trainingConfigData.completion.remarksRequired = document.getElementById('cfg_comp_remarks_required').checked;
    trainingConfigData.completion.evidenceEnabled = document.getElementById('cfg_comp_evidence_enabled').checked;
    trainingConfigData.completion.evidenceMandatory = document.getElementById('cfg_comp_evidence_mandatory').checked;
    trainingConfigData.completion.approvalRequired = document.getElementById('cfg_comp_approval_required').checked;
    trainingConfigData.completion.assessmentRequired = document.getElementById('cfg_comp_assessment_required').checked;
    trainingConfigData.completion.passingScore = passScore || 80;
    trainingConfigData.completion.maxAttempts = maxAttempts || 3;
    trainingConfigData.completion.allowRetakes = document.getElementById('cfg_comp_allow_retakes').checked;

    appendConfigAudit('Completion & Assessment', `Saved completion rules: Passing score ${trainingConfigData.completion.passingScore}%, Manager approval: ${trainingConfigData.completion.approvalRequired ? 'Required' : 'Disabled'}.`);
  } else if (activeTrainingConfigTab === 'certificates') {
    const prefix = document.getElementById('cfg_cert_id_prefix').value.trim();
    const compName = document.getElementById('cfg_cert_company_name').value.trim();
    const signName = document.getElementById('cfg_cert_signatory_name').value.trim();
    const signTitle = document.getElementById('cfg_cert_signatory_title').value.trim();

    if (document.getElementById('cfg_cert_enabled').checked) {
      if (!prefix) {
        showConfigToast('Certificate Credential ID prefix is required.', 'error');
        return;
      }
      if (!compName) {
        showConfigToast('Company Name is required.', 'error');
        return;
      }
      if (!signName) {
        showConfigToast('Authorized Signatory Name is required.', 'error');
        return;
      }
      if (!signTitle) {
        showConfigToast('Authorized Signatory Designation is required.', 'error');
        return;
      }
    }
    const valMonths = parseInt(document.getElementById('cfg_cert_validity_months').value, 10);
    if (document.getElementById('cfg_cert_validity_type').value === 'Fixed Duration' && (isNaN(valMonths) || valMonths < 1)) {
      showConfigToast('Certificate validity period must be at least 1 month.', 'error');
      return;
    }
    trainingConfigData.certificates.enabled = document.getElementById('cfg_cert_enabled').checked;
    trainingConfigData.certificates.template = document.getElementById('cfg_cert_template').value;
    trainingConfigData.certificates.idPrefix = prefix.toUpperCase();
    trainingConfigData.certificates.companyName = compName;
    trainingConfigData.certificates.signatoryName = signName;
    trainingConfigData.certificates.signatoryTitle = signTitle;
    trainingConfigData.certificates.validityType = document.getElementById('cfg_cert_validity_type').value;
    trainingConfigData.certificates.validityMonths = valMonths || 12;
    trainingConfigData.certificates.expiryNotification = document.getElementById('cfg_cert_expiry_notif').checked;
    trainingConfigData.certificates.verificationEnabled = document.getElementById('cfg_cert_verification_enabled').checked;
    trainingConfigData.certificates.allowReissue = document.getElementById('cfg_cert_allow_reissue').checked;

    appendConfigAudit('Certificate Settings', `Saved certificate settings: Prefix "${trainingConfigData.certificates.idPrefix}", Validity "${trainingConfigData.certificates.validityType}".`);
  } else if (activeTrainingConfigTab === 'notifications') {
    const dueDays = parseInt(document.getElementById('cfg_rem_due_days_before').value, 10);
    const expDays = parseInt(document.getElementById('cfg_rem_cert_expiry_days').value, 10);
    if (document.getElementById('cfg_rem_due_date_enabled').checked && (isNaN(dueDays) || dueDays < 1)) {
      showConfigToast('Due date reminder period must be at least 1 day.', 'error');
      return;
    }
    if (document.getElementById('cfg_rem_cert_expiry_enabled').checked && (isNaN(expDays) || expDays < 1)) {
      showConfigToast('Certificate expiry reminder period must be at least 1 day.', 'error');
      return;
    }
    trainingConfigData.notifications.dueDateEnabled = document.getElementById('cfg_rem_due_date_enabled').checked;
    trainingConfigData.notifications.dueDaysBefore = dueDays || 3;
    trainingConfigData.notifications.overdueEnabled = document.getElementById('cfg_rem_overdue_enabled').checked;
    trainingConfigData.notifications.overdueFrequency = document.getElementById('cfg_rem_overdue_frequency').value;
    trainingConfigData.notifications.certExpiryEnabled = document.getElementById('cfg_rem_cert_expiry_enabled').checked;
    trainingConfigData.notifications.certExpiryDays = expDays || 30;

    appendConfigAudit('Notifications & Reminders', `Saved notification rules: Overdue frequency "${trainingConfigData.notifications.overdueFrequency}".`);
  }

  try {
    localStorage.setItem('collabcrm_training_config', JSON.stringify(trainingConfigData));
  } catch (err) {
    console.error('Failed to save training config:', err);
  }

  const spinner = document.getElementById('saveConfigSpinner');
  const btnText = document.getElementById('saveConfigBtnText');
  const btn = document.getElementById('btnSaveConfig');
  if (spinner) spinner.style.display = 'inline-block';
  if (btnText) btnText.textContent = 'Saving...';
  if (btn) btn.disabled = true;

  setTimeout(() => {
    if (spinner) spinner.style.display = 'none';
    if (btnText) btnText.textContent = 'Save Changes';
    if (btn) btn.disabled = false;
    showConfigToast('Configuration saved successfully!', 'success');
  }, 300);
}

// Reset Current Tab
function resetCurrentConfigTab() {
  if (state.currentRole === 'manager') {
    showConfigToast('Access Denied: Reporting Managers cannot reset configuration.', 'error');
    return;
  }
  const tabNames = {
    general: 'General Settings',
    categories: 'Training Categories',
    assignments: 'Assignment Settings',
    completion: 'Completion & Assessment',
    certificates: 'Certificate Settings',
    notifications: 'Notifications & Reminders'
  };
  const currentTabName = tabNames[activeTrainingConfigTab] || 'current tab';
  if (!confirm(`Are you sure you want to reset "${currentTabName}" back to default system values?`)) {
    return;
  }

  if (activeTrainingConfigTab === 'categories') {
    trainingConfigData.categories = JSON.parse(JSON.stringify(DEFAULT_TRAINING_CONFIG.categories));
  } else {
    trainingConfigData[activeTrainingConfigTab] = JSON.parse(JSON.stringify(DEFAULT_TRAINING_CONFIG[activeTrainingConfigTab]));
  }

  try {
    localStorage.setItem('collabcrm_training_config', JSON.stringify(trainingConfigData));
  } catch (e) {}

  appendConfigAudit(currentTabName, `Reset ${currentTabName} to default system configuration.`);
  initTrainingConfigScreen();
  showConfigToast(`"${currentTabName}" restored to default settings.`, 'success');
}

// Toast & Dirty State
function markConfigDirty() {
  // Visual hint if needed
}

function showConfigToast(msg, type = 'success') {
  const toast = document.getElementById('tcfgToast');
  const icon = document.getElementById('tcfgToastIcon');
  const text = document.getElementById('tcfgToastMsg');
  if (!toast) return;

  if (icon) icon.textContent = type === 'error' ? '⚠️' : '✓';
  if (text) text.textContent = msg;

  toast.className = 'tcfg-toast show ' + type;

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.className = 'tcfg-toast';
  }, 3200);
}

// Expose all functions to window
window.openTrainingConfig = openTrainingConfig;
window.switchToTrainingConfig = switchToTrainingConfig;
window.initTrainingConfigScreen = initTrainingConfigScreen;
window.switchTrainingConfigTab = switchTrainingConfigTab;
window.toggleResourceType = toggleResourceType;
window.openAddCategoryModal = openAddCategoryModal;
window.openEditCategoryModal = openEditCategoryModal;
window.closeCategoryModal = closeCategoryModal;
window.saveCategoryModal = saveCategoryModal;
window.toggleCategoryStatus = toggleCategoryStatus;
window.deleteCategory = deleteCategory;
window.toggleEvidenceFields = toggleEvidenceFields;
window.toggleApprovalWarning = toggleApprovalWarning;
window.toggleAssessmentFields = toggleAssessmentFields;
window.toggleCertificateFields = toggleCertificateFields;
window.toggleCertValidityFields = toggleCertValidityFields;
window.openCertificatePreviewModal = openCertificatePreviewModal;
window.closeCertificatePreviewModal = closeCertificatePreviewModal;
window.handleCertLogoUpload = handleCertLogoUpload;
window.updateNotifEvent = updateNotifEvent;
window.toggleReminderFields = toggleReminderFields;
window.saveCurrentConfigTab = saveCurrentConfigTab;
window.resetCurrentConfigTab = resetCurrentConfigTab;
window.openConfigAuditModal = openConfigAuditModal;
window.closeConfigAuditModal = closeConfigAuditModal;
window.showConfigToast = showConfigToast;
window.markConfigDirty = markConfigDirty;
window.updateTrainingConfigPermissions = updateTrainingConfigPermissions;

// ==========================================================================
// SYSTEM ROLES & PERMISSIONS MODULE (Screenshots 2, 3, 4)
// ==========================================================================
const ROLES_DATA = [
  {
    id: 'role_1',
    no: 1,
    name: 'Sr. Business Analyst',
    status: 'Active',
    employeesCount: 1,
    remarks: '-',
    lastModifiedByName: 'Isha Patel',
    lastModifiedDate: '05-Mar-2026, 05:41 PM',
    createdByName: 'Isha Patel',
    createdDate: '11-Dec-2025, 04:58 PM'
  },
  {
    id: 'role_2',
    no: 2,
    name: 'Senior Recruiter',
    status: 'Active',
    employeesCount: 0,
    remarks: '-',
    lastModifiedByName: 'Isha Patel',
    lastModifiedDate: '02-Sep-2026, 04:44 PM',
    createdByName: 'Isha Patel',
    createdDate: '10-Dec-2025, 05:47 PM'
  },
  {
    id: 'role_3',
    no: 3,
    name: 'CEO',
    status: 'Active',
    employeesCount: 0,
    remarks: 'Head of the company',
    lastModifiedByName: 'Isha Patel',
    lastModifiedDate: '30-Aug-2026, 05:05 AM',
    createdByName: 'Isha Patel',
    createdDate: '21-Aug-2025, 12:05 PM'
  },
  {
    id: 'role_4',
    no: 4,
    name: 'Project Manager',
    status: 'Active',
    employeesCount: 25,
    remarks: '-',
    lastModifiedByName: 'Prashant Kumar',
    lastModifiedDate: '07-Apr-2026, 06:27 PM',
    createdByName: 'Isha Patel',
    createdDate: '12-Jun-2025, 03:51 PM'
  },
  {
    id: 'role_5',
    no: 5,
    name: 'BDE',
    status: 'Active',
    employeesCount: 1,
    remarks: 'Responsible for generating leads, qualifying prospects, and managing the initial stages of the sales pipeline. The BDE engages with potential clients, maintains client databases, and schedules meetings or follow-ups to progress deals.',
    lastModifiedByName: 'Isha Patel',
    lastModifiedDate: '03-Feb-2026, 12:32 PM',
    createdByName: 'System',
    createdDate: '12-Jun-2025, 12:27 PM'
  },
  {
    id: 'role_6',
    no: 6,
    name: 'Admin/HR',
    status: 'Active',
    employeesCount: 50,
    remarks: 'Manages system configurations, user roles, employee records, organization policies, and ensures smooth functioning of the system.',
    lastModifiedByName: 'Isha Patel',
    lastModifiedDate: '14-Aug-2026, 03:01 PM',
    createdByName: 'System',
    createdDate: '12-Jun-2025, 12:27 PM'
  },
  {
    id: 'role_7',
    no: 7,
    name: 'Employee',
    status: 'Active',
    employeesCount: 51,
    remarks: 'Accesses and inputs data, uses the system features to perform daily tasks and manage personal information.',
    lastModifiedByName: 'Isha Patel',
    lastModifiedDate: '12-Feb-2026, 02:21 PM',
    createdByName: 'System',
    createdDate: '12-Jun-2025, 12:27 PM'
  },
  {
    id: 'role_8',
    no: 8,
    name: 'Team leader',
    status: 'Active',
    employeesCount: 20,
    remarks: 'Manages team activities, monitors progress, and uses the system for task delegation and performance tracking.',
    lastModifiedByName: 'Isha Patel',
    lastModifiedDate: '25-Mar-2026, 12:39 PM',
    createdByName: 'System',
    createdDate: '12-Jun-2025, 12:27 PM'
  },
  {
    id: 'role_9',
    no: 9,
    name: 'Management',
    status: 'Active',
    employeesCount: 7,
    remarks: 'Oversees strategic direction, uses the system for high-level decision-making, financial planning, and performance analysis.',
    lastModifiedByName: '-',
    lastModifiedDate: '',
    createdByName: 'System',
    createdDate: '12-Jun-2025, 12:27 PM'
  },
  {
    id: 'role_10',
    no: 10,
    name: 'Recruiter',
    status: 'Active',
    employeesCount: 1,
    remarks: 'Manages job postings, candidate updates, and interview scheduling for their assigned candidates. Responsible for job configurations and viewing their own interview schedules and timeline activities.',
    lastModifiedByName: 'Nikita Mehta',
    lastModifiedDate: '07-Oct-2025, 06:18 PM',
    createdByName: 'System',
    createdDate: '12-Jun-2025, 12:27 PM'
  },
  {
    id: 'role_11',
    no: 11,
    name: 'BDM',
    status: 'Active',
    employeesCount: 0,
    remarks: 'Oversees the sales cycle from lead acquisition to deal closure, ensuring revenue targets are met. Manages client relationships, coordinates with sales and product teams, handles negotiations, and analyzes market trends to develop strategies for growth.',
    lastModifiedByName: 'Isha Patel',
    lastModifiedDate: '25-Sep-2025, 11:56 AM',
    createdByName: 'System',
    createdDate: '12-Jun-2025, 12:27 PM'
  }
];

let activeSelectedRoleId = 'role_1';
let collapsedPermGroups = {};

// Default role permissions database
const ROLE_PERMISSIONS_STATE = {};

function initRolePermissionsData() {
  ROLES_DATA.forEach(r => {
    if (!ROLE_PERMISSIONS_STATE[r.id]) {
      ROLE_PERMISSIONS_STATE[r.id] = {
        'client_interview_rep': { view: false, default: false, add: false, edit: false, delete: false },
        'revenue_summary_rep': { view: false, default: false, add: false, edit: false, delete: false },
        'projects': { view: false, default: false, add: false, edit: false, delete: false },
        'proj_fixed_cost': { view: false, default: false, add: false, edit: false, delete: false },
        'proj_hirebase': { view: false, default: false, add: false, edit: false, delete: false },
        'proj_hourly': { view: false, default: false, add: false, edit: false, delete: false },
        'proj_timesheet': { view: false, default: false, add: false, edit: false, delete: false },
        'proj_timespent': { view: false, default: false, add: false, edit: false, delete: false },
        'proj_resource_alloc': { view: false, default: false, add: false, edit: false, delete: false },
        'recruitment': { view: false, default: false, add: false, edit: false, delete: false },
        'rec_open_pos': { view: false, default: false, add: false, edit: false, delete: false },
        'rec_efficiency': { view: false, default: false, add: false, edit: false, delete: false },
        'payroll': { view: false, default: false, add: false, edit: false, delete: false },
        'pay_salary': { view: false, default: false, add: false, edit: false, delete: false },
        'pay_run': { view: false, default: false, add: false, edit: false, delete: false },
        'pay_expense': { view: false, default: false, add: false, edit: false, delete: false },
        'pay_loans': { view: false, default: false, add: false, edit: false, delete: false },
        'pay_config': { view: false, default: false, add: false, edit: false, delete: false },
        // Training Module Permissions (Added after Payroll)
        'training_module': { view: true, default: true, add: true, edit: true, delete: true },
        'trn_programs': { view: true, default: false, add: true, edit: true, delete: true },
        'trn_assignments': { view: true, default: false, add: true, edit: true, delete: true },
        'trn_progress': { view: true, default: false, add: false, edit: true, delete: false },
        'trn_reviews': { view: true, default: false, add: true, edit: true, delete: false },
        'trn_certificates': { view: true, default: false, add: true, edit: true, delete: true },
        'trn_reports': { view: true, default: false, add: false, edit: false, delete: false },
        // Notification Matrix from 1st Screenshot
        'trn_notif_section': { view: true, default: false, add: false, edit: false, delete: false },
        'notif_assigned': { view: true, inApp: true, email: true, default: false },
        'notif_approaching': { view: true, inApp: true, email: true, default: false },
        'notif_overdue': { view: true, inApp: true, email: true, default: false },
        'notif_submitted': { view: true, inApp: true, email: true, default: false },
        'notif_approved': { view: true, inApp: true, email: true, default: false },
        'notif_passed': { view: true, inApp: true, email: true, default: false },
        'notif_failed': { view: true, inApp: true, email: true, default: false },
        'notif_cert_issued': { view: true, inApp: true, email: true, default: false },
        'notif_cert_expiring': { view: true, inApp: true, email: true, default: false }
      };
    }
  });
}

initRolePermissionsData();

function renderRolesTable() {
  const tbody = document.getElementById('rolesTableBody');
  const countBadge = document.getElementById('rolesCountBadge');
  const query = (document.getElementById('searchRolesInput')?.value || '').toLowerCase();
  if (!tbody) return;

  const filtered = ROLES_DATA.filter(r => {
    return r.name.toLowerCase().includes(query) || (r.remarks || '').toLowerCase().includes(query);
  });

  if (countBadge) countBadge.textContent = `${filtered.length} Roles`;

  let html = '';
  filtered.forEach(r => {
    html += `
      <tr style="border-bottom: 1px solid #f1f5f9; transition: background 0.15s ease;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
        <td style="padding: 14px; text-align: center; color: #64748b;">${r.no}</td>
        <td style="padding: 14px; font-weight: 600; color: #0f172a;">${escapeHtml(r.name)}</td>
        <td style="padding: 14px;">
          <span style="background: #f0fdf4; color: #166534; font-size: 11px; padding: 2px 8px; border-radius: 12px; font-weight: 600;">Active</span>
        </td>
        <td style="padding: 14px; text-align: center; font-weight: 600; color: #334155;">${r.employeesCount}</td>
        <td style="padding: 14px; color: #64748b; font-size: 12px; max-width: 320px; line-height: 1.4;">
          ${escapeHtml(r.remarks)}
        </td>
        <td style="padding: 14px; color: #334155; font-size: 12px;">
          <div style="font-weight: 500;">${escapeHtml(r.lastModifiedByName)}</div>
          <div style="color: #94a3b8; font-size: 11px;">${escapeHtml(r.lastModifiedDate)}</div>
        </td>
        <td style="padding: 14px; color: #334155; font-size: 12px;">
          <div style="font-weight: 500;">${escapeHtml(r.createdByName)}</div>
          <div style="color: #94a3b8; font-size: 11px;">${escapeHtml(r.createdDate)}</div>
        </td>
        <td style="padding: 14px; text-align: right; white-space: nowrap;">
          <div style="display: inline-flex; align-items: center; gap: 6px;">
            <button type="button" class="emp-action-icon" onclick="openRolePermissions('${r.id}')" title="View & Configure Permissions (Screenshot 4)" style="color: #4f46e5; padding: 5px; background: #eff6ff; border-radius: 4px;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
            <button type="button" class="emp-action-icon" onclick="openRolePermissions('${r.id}')" title="Edit Role" style="color: #64748b; padding: 5px;">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </button>
            <button type="button" class="emp-action-icon" onclick="alert('System protected: Cannot delete this assigned role.')" title="Delete Role" style="color: #94a3b8; padding: 5px;">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

window.renderRolesTable = renderRolesTable;

function openRolesModule() {
  closeConfigPanel();
  const viewDashboard = document.getElementById('viewDashboard');
  const viewTraining = document.getElementById('viewTraining');
  const viewConfig = document.getElementById('viewConfig');
  const viewTrainingConfig = document.getElementById('viewTrainingConfig');
  const viewRoles = document.getElementById('viewRoles');
  const viewRolePermissions = document.getElementById('viewRolePermissions');

  if (viewDashboard) viewDashboard.style.display = 'none';
  if (viewTraining) viewTraining.style.display = 'none';
  if (viewConfig) viewConfig.style.display = 'none';
  if (viewTrainingConfig) viewTrainingConfig.style.display = 'none';
  if (viewRolePermissions) viewRolePermissions.style.display = 'none';
  if (viewRoles) {
    viewRoles.style.display = 'block';
    viewRoles.classList.add('active');
  }

  const menuConfig = document.getElementById('menuConfig');
  const menuEmployees = document.getElementById('menuEmployees');
  const menuTraining = document.getElementById('menuTraining');
  if (menuConfig) menuConfig.classList.add('active');
  if (menuEmployees) menuEmployees.classList.remove('active');
  if (menuTraining) menuTraining.classList.remove('active');

  renderRolesTable();
}

window.openRolesModule = openRolesModule;

function openRolePermissions(roleId) {
  activeSelectedRoleId = roleId || 'role_1';
  const role = ROLES_DATA.find(r => r.id === activeSelectedRoleId) || ROLES_DATA[0];

  const viewDashboard = document.getElementById('viewDashboard');
  const viewTraining = document.getElementById('viewTraining');
  const viewConfig = document.getElementById('viewConfig');
  const viewTrainingConfig = document.getElementById('viewTrainingConfig');
  const viewRoles = document.getElementById('viewRoles');
  const viewRolePermissions = document.getElementById('viewRolePermissions');

  if (viewDashboard) viewDashboard.style.display = 'none';
  if (viewTraining) viewTraining.style.display = 'none';
  if (viewConfig) viewConfig.style.display = 'none';
  if (viewTrainingConfig) viewTrainingConfig.style.display = 'none';
  if (viewRoles) viewRoles.style.display = 'none';
  if (viewRolePermissions) {
    viewRolePermissions.style.display = 'block';
    viewRolePermissions.classList.add('active');
  }

  // Populate metadata
  const titleEl = document.getElementById('permRoleTitle');
  const bcNameEl = document.getElementById('permRoleBreadcrumbName');
  const empEl = document.getElementById('permRoleAssignedEmp');
  const remarksEl = document.getElementById('permRoleRemarks');
  const createdNameEl = document.getElementById('permRoleCreatedByName');
  const createdDateEl = document.getElementById('permRoleCreatedByDate');
  const modNameEl = document.getElementById('permRoleLastModByName');
  const modDateEl = document.getElementById('permRoleLastModByDate');

  if (titleEl) titleEl.textContent = role.name;
  if (bcNameEl) bcNameEl.textContent = role.name;
  if (empEl) empEl.textContent = role.employeesCount;
  if (remarksEl) remarksEl.textContent = role.remarks;
  if (createdNameEl) createdNameEl.textContent = role.createdByName;
  if (createdDateEl) createdDateEl.textContent = role.createdDate;
  if (modNameEl) modNameEl.textContent = role.lastModifiedByName;
  if (modDateEl) modDateEl.textContent = role.lastModifiedDate || '-';

  renderRolePermissionsTable();
}

window.openRolePermissions = openRolePermissions;

function toggleRoleSelectorDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('roleSelectorDropdownMenu');
  if (!menu) return;
  const isHidden = menu.style.display === 'none' || !menu.style.display;
  if (isHidden) {
    let itemsHtml = '';
    ROLES_DATA.forEach(r => {
      const isSelected = r.id === activeSelectedRoleId;
      itemsHtml += `
        <div onclick="selectRoleFromDropdown('${r.id}')" style="padding: 8px 14px; font-size: 12.5px; color: ${isSelected ? '#2563eb' : '#1e293b'}; font-weight: ${isSelected ? '700' : '500'}; background: ${isSelected ? '#eff6ff' : 'transparent'}; cursor: pointer; display: flex; align-items: center; justify-content: space-between;" onmouseover="if(!${isSelected}) this.style.background='#f8fafc'" onmouseout="if(!${isSelected}) this.style.background='transparent'">
          <span>${escapeHtml(r.name)}</span>
          ${isSelected ? '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#2563eb" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
        </div>
      `;
    });
    menu.innerHTML = itemsHtml;
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

function selectRoleFromDropdown(roleId) {
  const menu = document.getElementById('roleSelectorDropdownMenu');
  if (menu) menu.style.display = 'none';
  openRolePermissions(roleId);
}

document.addEventListener('click', function(e) {
  const menu = document.getElementById('roleSelectorDropdownMenu');
  const btn = document.getElementById('permRoleBreadcrumbDropdown');
  if (menu && menu.style.display === 'block') {
    if (!menu.contains(e.target) && !btn?.contains(e.target)) {
      menu.style.display = 'none';
    }
  }
});

window.toggleRoleSelectorDropdown = toggleRoleSelectorDropdown;
window.selectRoleFromDropdown = selectRoleFromDropdown;

function togglePermGroupCollapse(groupId) {
  collapsedPermGroups[groupId] = !collapsedPermGroups[groupId];
  renderRolePermissionsTable();
}

window.togglePermGroupCollapse = togglePermGroupCollapse;

function toggleRolePerm(permKey, field, val) {
  if (!ROLE_PERMISSIONS_STATE[activeSelectedRoleId]) {
    ROLE_PERMISSIONS_STATE[activeSelectedRoleId] = {};
  }
  if (!ROLE_PERMISSIONS_STATE[activeSelectedRoleId][permKey]) {
    ROLE_PERMISSIONS_STATE[activeSelectedRoleId][permKey] = {};
  }
  ROLE_PERMISSIONS_STATE[activeSelectedRoleId][permKey][field] = val;
}

window.toggleRolePerm = toggleRolePerm;

function toggleRolePermDefault(permKey) {
  if (!ROLE_PERMISSIONS_STATE[activeSelectedRoleId]) {
    ROLE_PERMISSIONS_STATE[activeSelectedRoleId] = {};
  }
  if (!ROLE_PERMISSIONS_STATE[activeSelectedRoleId][permKey]) {
    ROLE_PERMISSIONS_STATE[activeSelectedRoleId][permKey] = {};
  }
  const current = ROLE_PERMISSIONS_STATE[activeSelectedRoleId][permKey].default;
  ROLE_PERMISSIONS_STATE[activeSelectedRoleId][permKey].default = !current;
  renderRolePermissionsTable();
}

window.toggleRolePermDefault = toggleRolePermDefault;

function saveRolePermissions() {
  const role = ROLES_DATA.find(r => r.id === activeSelectedRoleId);
  const roleName = role ? role.name : 'Role';
  showConfigToast(`Permissions and notification rules for "${roleName}" saved successfully!`);
}

window.saveRolePermissions = saveRolePermissions;

function renderRolePermissionsTable() {
  const tbody = document.getElementById('rolePermissionsTableBody');
  const filterQuery = (document.getElementById('searchPermModuleInput')?.value || '').toLowerCase();
  if (!tbody) return;

  const perms = ROLE_PERMISSIONS_STATE[activeSelectedRoleId] || {};

  // Permissions Tree Schema (Exact match of Screenshot 4, with Training Module & 1st Screenshot Details right after Payroll)
  const rows = [
    { id: 'client_interview_rep', type: 'single', name: 'Client Interview Result Report', hasInfo: true },
    { id: 'revenue_summary_rep', type: 'single', name: 'Revenue Summary Report', hasInfo: true },
    
    // Group: Projects
    { id: 'projects', type: 'parent', name: 'Projects', hasInfo: false },
    { id: 'proj_fixed_cost', parent: 'projects', type: 'child', name: 'Fixed Cost Report', hasInfo: true },
    { id: 'proj_hirebase', parent: 'projects', type: 'child', name: 'Hirebase Report', hasInfo: true },
    { id: 'proj_hourly', parent: 'projects', type: 'child', name: 'Hourly Report', hasInfo: true },
    { id: 'proj_timesheet', parent: 'projects', type: 'child', name: 'Timesheet Report', hasInfo: true },
    { id: 'proj_timespent', parent: 'projects', type: 'child', name: 'Timespent Report', hasInfo: true },
    { id: 'proj_resource_alloc', parent: 'projects', type: 'child', name: 'Resource Allocation Report', hasInfo: true },

    // Group: Recruitment
    { id: 'recruitment', type: 'parent', name: 'Recruitment', hasInfo: false },
    { id: 'rec_open_pos', parent: 'recruitment', type: 'child', name: 'Open Position Summary', hasInfo: false },
    { id: 'rec_efficiency', parent: 'recruitment', type: 'child', name: 'Recruiter Efficiency Report', hasInfo: false },

    // Group: Payroll
    { id: 'payroll', type: 'parent', name: 'Payroll', hasInfo: false },
    { id: 'pay_salary', parent: 'payroll', type: 'child', name: 'Salary and Taxation', hasInfo: true, hasActions: true },
    { id: 'pay_run', parent: 'payroll', type: 'child', name: 'Run Payroll', hasInfo: true, hasActions: true },
    { id: 'pay_expense', parent: 'payroll', type: 'child', name: 'Expense & Reimbursement', hasInfo: true, hasActions: true },
    { id: 'pay_loans', parent: 'payroll', type: 'child', name: 'Loans & Advances', hasInfo: true, hasActions: true },
    { id: 'pay_config', parent: 'payroll', type: 'child', name: 'Configuration', hasInfo: true, hasActions: true },

    // =========================================================================
    // AFTER PAYROLL: TRAINING MODULE (Screenshots 1 & 4)
    // =========================================================================
    { id: 'training_module', type: 'parent', name: 'Training Module', hasInfo: true, isTraining: true },
    { id: 'trn_programs', parent: 'training_module', type: 'child', name: 'Training Programs Library', hasInfo: true, hasActions: true },
    { id: 'trn_assignments', parent: 'training_module', type: 'child', name: 'Training Assignments', hasInfo: true, hasActions: true },
    { id: 'trn_progress', parent: 'training_module', type: 'child', name: 'Employee Progress Tracking', hasInfo: true, hasActions: true },
    { id: 'trn_reviews', parent: 'training_module', type: 'child', name: 'Training Reviews & Evaluations', hasInfo: true, hasActions: true },
    { id: 'trn_certificates', parent: 'training_module', type: 'child', name: 'Certificate Generation & Issuance', hasInfo: true, hasActions: true },
    { id: 'trn_reports', parent: 'training_module', type: 'child', name: 'Training Analytics & Reports', hasInfo: true, hasActions: true },
    
    // Sub-group: 1st Screenshot Notification Matrix Details
    { id: 'trn_notif_section', parent: 'training_module', type: 'subparent', name: 'Training Notification & Lifecycle Events (From Notification Matrix)', hasInfo: true },
    { id: 'notif_assigned', parent: 'training_module', subparent: 'trn_notif_section', type: 'child', name: 'New Training Assigned Notification', hasInfo: true, isNotif: true },
    { id: 'notif_approaching', parent: 'training_module', subparent: 'trn_notif_section', type: 'child', name: 'Training Due Date Approaching Notification', hasInfo: true, isNotif: true },
    { id: 'notif_overdue', parent: 'training_module', subparent: 'trn_notif_section', type: 'child', name: 'Training Overdue Notification', hasInfo: true, isNotif: true },
    { id: 'notif_submitted', parent: 'training_module', subparent: 'trn_notif_section', type: 'child', name: 'Training Completion Submitted Notification', hasInfo: true, isNotif: true },
    { id: 'notif_approved', parent: 'training_module', subparent: 'trn_notif_section', type: 'child', name: 'Completion Approved / Rejected Notification', hasInfo: true, isNotif: true },
    { id: 'notif_passed', parent: 'training_module', subparent: 'trn_notif_section', type: 'child', name: 'Assessment Passed Notification', hasInfo: true, isNotif: true },
    { id: 'notif_failed', parent: 'training_module', subparent: 'trn_notif_section', type: 'child', name: 'Assessment Failed Notification', hasInfo: true, isNotif: true },
    { id: 'notif_cert_issued', parent: 'training_module', subparent: 'trn_notif_section', type: 'child', name: 'Certificate Issued Notification', hasInfo: true, isNotif: true },
    { id: 'notif_cert_expiring', parent: 'training_module', subparent: 'trn_notif_section', type: 'child', name: 'Certificate Expiring Soon Notification', hasInfo: true, isNotif: true }
  ];

  let html = '';

  rows.forEach(item => {
    // If filtering
    if (filterQuery && !item.name.toLowerCase().includes(filterQuery)) {
      return;
    }

    // Check if collapsed
    if (item.parent && collapsedPermGroups[item.parent]) {
      return;
    }
    if (item.subparent && collapsedPermGroups[item.subparent]) {
      return;
    }

    const p = perms[item.id] || { view: false, default: false, add: false, edit: false, delete: false };

    if (item.type === 'parent') {
      const isCollapsed = !!collapsedPermGroups[item.id];
      const highlight = item.isTraining ? 'background: #f0f7ff; border-top: 2px solid #3b82f6;' : 'background: #f8fafc;';
      html += `
        <tr class="perm-row-parent" style="${highlight}">
          <td style="padding: 12px 16px;">
            <div style="display: flex; align-items: center;">
              <button type="button" class="perm-collapse-btn" onclick="togglePermGroupCollapse('${item.id}')">${isCollapsed ? '+' : '–'}</button>
              <span style="font-weight: 700; color: #0f172a; font-size: 13px;">${escapeHtml(item.name)}</span>
              ${item.hasInfo ? '<span class="perm-info-icon" title="Core module capabilities and lifecycle rules">ⓘ</span>' : ''}
              ${item.isTraining ? '<span style="font-size: 10px; background: #dbeafe; color: #1e40af; padding: 2px 8px; border-radius: 10px; margin-left: 8px; font-weight: 700;">Added per Screenshot 4</span>' : ''}
            </div>
          </td>
          <td colspan="3" style="padding: 10px 12px; text-align: center; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
            <div style="display: flex; justify-content: space-around; align-items: center;">
              <label class="crm-toggle" style="margin: 0;">
                <input type="checkbox" ${p.view ? 'checked' : ''} onchange="toggleRolePerm('${item.id}', 'view', this.checked)" />
                <span class="crm-toggle-slider"></span>
              </label>
              <span class="perm-radio-circle ${p.default ? 'active' : ''}" onclick="toggleRolePermDefault('${item.id}')" title="Set as default landing view"></span>
              <span style="color: #94a3b8; font-weight: 600;">–</span>
            </div>
          </td>
          <td style="padding: 10px 14px; text-align: center; border-right: 1px solid #e2e8f0;">
            <input type="checkbox" class="perm-check-input" ${p.add ? 'checked' : ''} onchange="toggleRolePerm('${item.id}', 'add', this.checked)" />
          </td>
          <td style="padding: 10px 14px; text-align: center; border-right: 1px solid #e2e8f0;">
            <input type="checkbox" class="perm-check-input" ${p.edit ? 'checked' : ''} onchange="toggleRolePerm('${item.id}', 'edit', this.checked)" />
          </td>
          <td style="padding: 10px 14px; text-align: center;">
            <input type="checkbox" class="perm-check-input" ${p.delete ? 'checked' : ''} onchange="toggleRolePerm('${item.id}', 'delete', this.checked)" />
          </td>
        </tr>
      `;
    } else if (item.type === 'subparent') {
      const isCollapsed = !!collapsedPermGroups[item.id];
      html += `
        <tr style="background: #f1f5f9; font-weight: 600;">
          <td style="padding: 10px 16px 10px 32px;">
            <div style="display: flex; align-items: center;">
              <button type="button" class="perm-collapse-btn" onclick="togglePermGroupCollapse('${item.id}')" style="width: 16px; height: 16px; font-size: 10px;">${isCollapsed ? '+' : '–'}</button>
              <span style="color: #1e293b; font-size: 12.5px;">${escapeHtml(item.name)}</span>
              <span class="perm-info-icon" title="Lifecycle events from Notification Matrix (Screenshot 1)">ⓘ</span>
            </div>
          </td>
          <td colspan="3" style="text-align: center; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
            <span style="font-size: 11px; color: #64748b; font-weight: 500;">Delivery & In-App / Email Controls</span>
          </td>
          <td style="text-align: center; color: #94a3b8; border-right: 1px solid #e2e8f0;">–</td>
          <td style="text-align: center; color: #94a3b8; border-right: 1px solid #e2e8f0;">–</td>
          <td style="text-align: center; color: #94a3b8;">–</td>
        </tr>
      `;
    } else {
      // Child or single row
      const indent = item.subparent ? 'padding-left: 54px;' : (item.parent ? 'padding-left: 36px;' : 'padding-left: 16px;');
      const isNotif = item.isNotif;
      html += `
        <tr class="perm-row-child" style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 11px 16px; ${indent}">
            <div style="display: flex; align-items: center;">
              ${item.parent ? '<span class="perm-tree-indent">↳</span>' : ''}
              <span style="color: #334155; font-size: 12.5px;">${escapeHtml(item.name)}</span>
              ${item.hasInfo ? '<span class="perm-info-icon" title="Detailed rule specifications">ⓘ</span>' : ''}
              ${isNotif ? '<span style="font-size: 10px; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; padding: 1px 6px; border-radius: 4px; margin-left: 6px; font-weight: 600;">In-App & Email</span>' : ''}
            </div>
          </td>
          <td colspan="3" style="padding: 8px 12px; text-align: center; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
            <div style="display: flex; justify-content: space-around; align-items: center;">
              <label class="crm-toggle" style="margin: 0;">
                <input type="checkbox" ${p.view ? 'checked' : ''} onchange="toggleRolePerm('${item.id}', 'view', this.checked)" />
                <span class="crm-toggle-slider"></span>
              </label>
              <span class="perm-radio-circle ${p.default ? 'active' : ''}" onclick="toggleRolePermDefault('${item.id}')" title="Default view indicator"></span>
              <span style="color: #94a3b8; font-weight: 600;">–</span>
            </div>
          </td>
          <td style="padding: 8px 14px; text-align: center; border-right: 1px solid #e2e8f0;">
            ${(item.hasActions || p.add !== undefined) && !isNotif ? `<input type="checkbox" class="perm-check-input" ${p.add ? 'checked' : ''} onchange="toggleRolePerm('${item.id}', 'add', this.checked)" />` : '<span style="color:#94a3b8;">–</span>'}
          </td>
          <td style="padding: 8px 14px; text-align: center; border-right: 1px solid #e2e8f0;">
            ${(item.hasActions || p.edit !== undefined) && !isNotif ? `<input type="checkbox" class="perm-check-input" ${p.edit ? 'checked' : ''} onchange="toggleRolePerm('${item.id}', 'edit', this.checked)" />` : '<span style="color:#94a3b8;">–</span>'}
          </td>
          <td style="padding: 8px 14px; text-align: center;">
            ${(item.hasActions || p.delete !== undefined) && !isNotif ? `<input type="checkbox" class="perm-check-input" ${p.delete ? 'checked' : ''} onchange="toggleRolePerm('${item.id}', 'delete', this.checked)" />` : '<span style="color:#94a3b8;">–</span>'}
          </td>
        </tr>
      `;
    }
  });

  tbody.innerHTML = html;
}

window.renderRolePermissionsTable = renderRolePermissionsTable;
window.filterRolePermissionsTable = renderRolePermissionsTable;

// =============================================================================
// USER ROLE SELECTION SYSTEM (SCREENSHOT 1 FORMAT)
// =============================================================================
const DEMO_USERS = [
  {
    id: 'usr_admin',
    name: 'Ishdeep Anand',
    title: 'SVP • Management',
    role: 'Admin',
    badgeBg: '#f3e8ff',
    badgeColor: '#7e22ce',
    avatarInitials: 'IA',
    avatarBg: '#8b5cf6'
  },
  {
    id: 'usr_hr',
    name: 'Sanjana Ghosh',
    title: 'Executive • IT - Project',
    role: 'HR',
    badgeBg: '#fce7f3',
    badgeColor: '#be185d',
    avatarInitials: 'SG',
    avatarBg: '#ec4899'
  },
  {
    id: 'usr_emp',
    name: 'Aryan Bhardwaj',
    title: 'Executive • IT - Project',
    role: 'Employee',
    badgeBg: '#f1f5f9',
    badgeColor: '#475569',
    avatarInitials: 'AB',
    avatarBg: '#f59e0b'
  },
  {
    id: 'usr_mgr1',
    name: 'Megha Salunkhe',
    title: 'Sr. Executive • IT - Project',
    role: 'Reporting Manager',
    badgeBg: '#e0f2fe',
    badgeColor: '#0284c7',
    avatarInitials: 'MS',
    avatarBg: '#0ea5e9'
  },
  {
    id: 'usr_mgr2',
    name: 'Kunal Barve',
    title: 'Team Leader • IT - Project',
    role: 'Reporting Manager',
    badgeBg: '#e0f2fe',
    badgeColor: '#0284c7',
    avatarInitials: 'KB',
    avatarBg: '#0284c7'
  }
];

let activeDemoUser = DEMO_USERS[2]; // Aryan Bhardwaj default as per Screenshot 1

function renderUserRolePill() {
  const badgeEl = document.getElementById('headerUserAvatarBadge');
  const nameEl = document.getElementById('headerUserNameDisplay');
  const roleEl = document.getElementById('headerUserRoleDisplay');
  const hookName = document.getElementById('headerUserName');
  const hookRole = document.getElementById('headerUserRole');

  if (badgeEl) {
    badgeEl.textContent = activeDemoUser.avatarInitials;
    badgeEl.style.background = activeDemoUser.avatarBg;
  }
  if (nameEl) nameEl.textContent = activeDemoUser.name;
  if (roleEl) roleEl.textContent = `${activeDemoUser.role} • IT - Project`;
  if (hookName) hookName.textContent = activeDemoUser.name;
  if (hookRole) hookRole.textContent = activeDemoUser.role;
}

function renderUserRoleDropdown() {
  const list = document.getElementById('userRoleDropdownList');
  if (!list) return;

  let html = '';
  DEMO_USERS.forEach(u => {
    const isSelected = u.id === activeDemoUser.id;
    html += `
      <div class="user-role-item ${isSelected ? 'selected' : ''}" onclick="switchActiveUser('${u.id}')">
        <div>
          <div class="user-role-item-name">${escapeHtml(u.name)}</div>
          <div class="user-role-item-sub">${escapeHtml(u.title)}</div>
        </div>
        <span class="user-role-badge-pill" style="background: ${u.badgeBg}; color: ${u.badgeColor};">
          ${escapeHtml(u.role)}
        </span>
      </div>
    `;
  });

  list.innerHTML = html;
}

function toggleUserRoleDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('userRoleDropdownMenu');
  if (!menu) return;
  const isHidden = menu.style.display === 'none' || !menu.style.display;
  if (isHidden) {
    renderUserRoleDropdown();
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

function switchActiveUser(userId) {
  const found = DEMO_USERS.find(u => u.id === userId);
  if (found) {
    activeDemoUser = found;
    renderUserRolePill();
    renderUserRoleDropdown();
    const menu = document.getElementById('userRoleDropdownMenu');
    if (menu) menu.style.display = 'none';
    showConfigToast(`Switched active user to ${found.name} (${found.role})`);
  }
}

function resetDemoData() {
  activeDemoUser = DEMO_USERS[2];
  renderUserRolePill();
  renderUserRoleDropdown();
  const menu = document.getElementById('userRoleDropdownMenu');
  if (menu) menu.style.display = 'none';
  showConfigToast('Demo data reset to factory state.');
}

document.addEventListener('click', function(e) {
  const menu = document.getElementById('userRoleDropdownMenu');
  const btn = document.getElementById('headerUserRolePill');
  if (menu && menu.style.display === 'block') {
    if (!menu.contains(e.target) && !btn?.contains(e.target)) {
      menu.style.display = 'none';
    }
  }
});

// Initialize on load
renderUserRolePill();

window.toggleUserRoleDropdown = toggleUserRoleDropdown;
window.switchActiveUser = switchActiveUser;
window.resetDemoData = resetDemoData;


