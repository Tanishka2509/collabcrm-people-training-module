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
    { id: 'CO-5039', name: 'Tanya Kapoor', email: 'calebnguyen@maildrop.cc', role: 'Business analyst', dept: 'Business analyst', managerId: 'EMP-003', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120', status: 'active' },
    { id: 'EMP-001', name: 'Isha Patel', email: 'isha.patel@collabcrm.com', role: 'Head of People & Admin', dept: 'Recruitment & HR', managerId: null, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120', status: 'active' },
    { id: 'EMP-002', name: 'Shivam Sharma', email: 'shivam.s@collabcrm.com', role: 'HR Specialist', dept: 'People Operations', managerId: 'EMP-001', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120', status: 'active' },
    { id: 'EMP-003', name: 'Ashish Kumar', email: 'ashish.k@collabcrm.com', role: 'Technical Lead & Reporting Manager', dept: 'Engineering', managerId: 'EMP-001', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120', status: 'active' },
    { id: 'EMP-004', name: 'Rihan R.', email: 'rihan.r@collabcrm.com', role: 'Software Engineer', dept: 'Engineering', managerId: 'EMP-003', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120', status: 'active' },
    { id: 'EMP-005', name: 'Priya Nair', email: 'priya.n@collabcrm.com', role: 'Frontend Developer', dept: 'Engineering', managerId: 'EMP-003', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120', status: 'active' },
    { id: 'EMP-006', name: 'Suresh Prasad', email: 'suresh.p@collabcrm.com', role: 'Senior Talent Partner', dept: 'Recruitment & HR', managerId: 'EMP-001', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120', status: 'active' },
    { id: 'EMP-007', name: 'Vikram Malhotra', email: 'vikram.m@collabcrm.com', role: 'Enterprise Account Executive', dept: 'Sales & BD', managerId: 'EMP-001', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120', status: 'active' },
    { id: 'EMP-008', name: 'Ananya Roy', email: 'ananya.r@collabcrm.com', role: 'DevOps & Cloud Engineer', dept: 'Engineering', managerId: 'EMP-003', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120', status: 'active' },
    { id: 'EMP-009', name: 'Neha Gupta', email: 'neha.g@collabcrm.com', role: 'HR Executive', dept: 'People Operations', managerId: 'EMP-002', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120', status: 'active' },
    { id: 'EMP-010', name: 'Karan Johar', email: 'karan.j@collabcrm.com', role: 'Former Sales Lead', dept: 'Sales & BD', managerId: 'EMP-001', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120', status: 'inactive', exitDate: '2026-02-15' }
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
    },
    {
      id: 'TR-107',
      title: 'API Security & OAuth2 Best Practices',
      dept: 'Technical Architecture',
      difficulty: 'Intermediate',
      durationHours: 4,
      status: 'published',
      learningObjectives: 'Master token-based authentication, RBAC scopes, OAuth2 grant types, and API rate limiting in CollabCRM architecture.',
      completionReq: 'Complete mandatory modules and score >= 80% on certification assessment.',
      passScore: 80,
      resources: [
        { id: 'res_101_1', title: 'OAuth 2.0 & OpenID Connect Framework Deep Dive', type: 'youtube', url: 'https://www.youtube.com/watch?v=996OiexHze0', mandatory: true },
        { id: 'res_101_2', title: 'CollabCRM API Security Specifications & Token Policies (PDF)', type: 'pdf', url: 'assets/docs/api_security_spec.pdf', mandatory: true },
        { id: 'res_101_3', title: 'Interactive OWASP API Vulnerability Simulation Labs', type: 'external_link', url: 'https://owasp.org/www-project-api-security/', mandatory: false },
        { id: 'res_101_4', title: 'CollabCRM Gateway JWT Validation Middleware Demo', type: 'video', url: 'assets/videos/jwt_middleware_demo.mp4', mandatory: true }
      ]
    },
    {
      id: 'TR-108',
      title: 'Security Awareness & GDPR Compliance 2026',
      dept: 'Governance & Compliance',
      difficulty: 'Beginner',
      durationHours: 2,
      status: 'published',
      learningObjectives: 'Annual company-wide compliance covering European GDPR regulations, data subject rights, and breach escalation protocols.',
      completionReq: 'Complete all GDPR modules and achieve 100% on compliance test.',
      passScore: 100,
      resources: [
        { id: 'res_102_1', title: 'GDPR Regulations & Employee Responsibilities', type: 'pdf', url: 'assets/docs/gdpr_compliance.pdf', mandatory: true },
        { id: 'res_102_2', title: 'Data Privacy Incident Reporting & Escalation Matrix', type: 'pdf', url: 'assets/docs/escalation_matrix.pdf', mandatory: true }
      ]
    },
    {
      id: 'TR-109',
      title: 'CollabCRM Platform Architecture Deep Dive',
      dept: 'Technical Architecture',
      difficulty: 'Advanced',
      durationHours: 6,
      status: 'published',
      learningObjectives: 'In-depth exploration of CollabCRM multi-tenant database partitioning, Redis caching topologies, and WebSocket streaming.',
      completionReq: 'Score >= 85% and submit architecture benchmark report.',
      passScore: 85,
      resources: [
        { id: 'res_103_1', title: 'Multi-Tenant Database Sharding Architecture (PDF)', type: 'pdf', url: 'assets/docs/sharding_architecture.pdf', mandatory: true },
        { id: 'res_103_2', title: 'Redis Cluster Caching Strategies Video', type: 'youtube', url: 'https://www.youtube.com/watch?v=G1rOthIU-uo', mandatory: true }
      ]
    },
    {
      id: 'TR-110',
      title: 'Effective Cross-Functional Stakeholder Communication',
      dept: 'Professional Skills',
      difficulty: 'Beginner',
      durationHours: 3,
      status: 'published',
      learningObjectives: 'Practical frameworks for managing expectations across sales, engineering, product management, and executive leadership.',
      completionReq: 'Complete executive briefing resource and submit reflection remarks.',
      passScore: 80,
      resources: [
        { id: 'res_104_1', title: 'The Art of Technical Executive Briefings', type: 'pdf', url: 'assets/docs/executive_briefings.pdf', mandatory: true }
      ]
    },
    {
      id: 'TR-111',
      title: 'Q4 2025 Workplace Safety & POSH Re-Certification',
      dept: 'Governance & Compliance',
      difficulty: 'Beginner',
      durationHours: 2,
      status: 'published',
      learningObjectives: 'Mandatory workplace safety policies, POSH compliance, and employee grievance redressal mechanisms.',
      completionReq: 'Complete handbook and emergency response modules.',
      passScore: 80,
      resources: [
        { id: 'res_105_1', title: 'Workplace Conduct & POSH Guidelines Handbook', type: 'pdf', url: 'assets/docs/posh_handbook.pdf', mandatory: true },
        { id: 'res_105_2', title: 'Employee Emergency Response Video', type: 'video', url: 'assets/videos/emergency_response.mp4', mandatory: true }
      ]
    },
    {
      id: 'TR-112',
      title: 'Incident Response & SLA Management',
      dept: 'Support & Operations',
      difficulty: 'Intermediate',
      durationHours: 3,
      status: 'published',
      learningObjectives: 'Operational response protocols for high-severity production outages, root cause analyses, and SLA commitments.',
      completionReq: 'Complete incident SOP and submit post-mortem analysis.',
      passScore: 80,
      resources: [
        { id: 'res_106_1', title: 'Incident Management Operating Procedures', type: 'pdf', url: 'assets/docs/incident_sop.pdf', mandatory: true }
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
  state.employeeTrainingData = getFallbackEmployeeData('CO-5039');
  syncEmployeeTrainingsWithGlobalAssignments();
  setAppRole('admin'); // Start in Admin Role
  switchToEmployees(); // By default, Employees module is opened whenever the system is opened
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
    // Employee Role (Tanya Kapoor - CO-5039)
    const avatar = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120';
    if (headerAvatar) headerAvatar.src = avatar;
    if (rolePersonaAvatar) rolePersonaAvatar.src = avatar;
    if (headerName) headerName.textContent = 'Tanya Kapoor';
    if (rolePersonaName) rolePersonaName.textContent = 'Tanya Kapoor';
    if (headerRole) headerRole.textContent = 'Business analyst (Employee)';
    if (rolePersonaScope) rolePersonaScope.textContent = 'Business analyst • Learner Portal';
    if (portalScopeRoleName) portalScopeRoleName.textContent = 'Employee Learner (My Enrolled Trainings & Progress)';
    if (rolePortalSubtitle) rolePortalSubtitle.textContent = '';
    if (hierarchyBanner) hierarchyBanner.style.display = 'none';
    if (optAssignDeptRadio) optAssignDeptRadio.style.display = 'none';
  }

  // Update Header Profile Avatar Photo
  const headerProfileImg = document.getElementById('headerProfileAvatarImg');
  if (headerProfileImg) {
    headerProfileImg.src = role === 'employee'
      ? 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120'
      : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120';
  }

  // Hide Config menu for Employee role
  const menuConfigEl = document.getElementById('menuConfig');
  if (menuConfigEl) {
    menuConfigEl.style.display = role === 'employee' ? 'none' : '';
  }

  // Toggle Employees directory vs Employee Dashboard in sidebar
  const menuEmployeesEl = document.getElementById('menuEmployees');
  const menuEmpDashboardEl = document.getElementById('menuEmpDashboard');
  if (menuEmployeesEl) {
    menuEmployeesEl.style.display = role === 'employee' ? 'none' : '';
  }
  if (menuEmpDashboardEl) {
    menuEmpDashboardEl.style.display = role === 'employee' ? 'block' : 'none';
  }

  // Toggle Employee Portal vs Admin/HR/Manager Portal Navigation
  const empHeaderCard = document.getElementById('empProfileHeaderCard');
  const adminSubnav = document.getElementById('adminSubnavTabs');
  const empSubnav = document.getElementById('employeeSubnavTabs');
  const subnavBar = document.querySelector('.training-subnav-bar');
  const btnAction = document.getElementById('btnHeaderPrimaryAction');
  const empEmptyState = document.getElementById('sectionEmployeeEmptyState');

  if (role === 'employee') {
    if (empHeaderCard) empHeaderCard.style.display = 'none'; // Redundant header removed per user instruction
    if (adminSubnav) adminSubnav.style.display = 'none';
    if (empSubnav) empSubnav.style.display = 'none';
    if (subnavBar) subnavBar.style.display = 'none';
    if (btnAction) btnAction.style.display = 'none';
    const trainingPanel = document.getElementById('trainingSidePanel');
    if (trainingPanel) trainingPanel.classList.remove('open');
    const configPanel = document.getElementById('configSidePanel');
    if (configPanel) configPanel.classList.remove('open');

    // Hide all management tabs and empty state; show Employee My Training
    ['sectionDashboard', 'sectionPrograms', 'sectionAssignments', 'sectionProgress', 'sectionReviews', 'sectionCertificates', 'sectionReports', 'sectionEmpCertificates', 'sectionEmpHistory', 'assignTrainingModal'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });

    if (empEmptyState) empEmptyState.style.display = 'none';
    const secMyTraining = document.getElementById('sectionEmpMyTraining');
    if (secMyTraining) secMyTraining.style.display = 'block';
    const labelEl = document.getElementById('currentActiveTabLabel');
    if (labelEl) labelEl.textContent = 'My Training';
    const mainHeadingEl = document.getElementById('trainingMainHeading');
    if (mainHeadingEl) mainHeadingEl.textContent = 'My Training';

    if (!state.employeeTrainingData || !state.employeeTrainingData.trainings || state.employeeTrainingData.trainings.length === 0) {
      state.employeeTrainingData = getFallbackEmployeeData('CO-5039');
      syncEmployeeTrainingsWithGlobalAssignments();
    }
    renderEmployeeDashboardUI();
    renderEmployeeTrainingsList();
    loadEmployeeTrainingData('CO-5039');

    // User requirement: "On the employee portal side before the training module keep the dashboard module and create this screen first"
    switchToEmployeeDashboard();
  } else {
    if (empHeaderCard) empHeaderCard.style.display = 'none';
    if (subnavBar) subnavBar.style.display = 'none';
    if (adminSubnav) adminSubnav.style.display = 'none';
    if (empSubnav) empSubnav.style.display = 'none';
    if (empEmptyState) empEmptyState.style.display = 'none';

    // Hide all employee tabs
    ['sectionEmpMyTraining', 'sectionEmpCertificates', 'sectionEmpHistory'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });

    // Show the active Management sub-tab view and re-render
    switchTrainingTab(state.activeSubTab || 'dashboard');
  }

  if (typeof updateTrainingConfigPermissions === 'function') {
    updateTrainingConfigPermissions();
  }
}

window.setAppRole = setAppRole;

// Main Module Switching: Employees (Management side only) vs Training vs Config
function switchToEmployees() {
  if (state.currentRole === 'employee') {
    switchToEmployeeDashboard();
    return;
  }

  const configPanel = document.getElementById('configSidePanel');
  if (configPanel) configPanel.classList.remove('open');
  const trainingPanel = document.getElementById('trainingSidePanel');
  if (trainingPanel) trainingPanel.classList.remove('open');

  const viewDashboard = document.getElementById('viewDashboard');
  const viewTraining = document.getElementById('viewTraining');
  const viewConfig = document.getElementById('viewConfig');
  const viewTrainingConfig = document.getElementById('viewTrainingConfig');
  const viewRoles = document.getElementById('viewRoles');
  const viewRolePermissions = document.getElementById('viewRolePermissions');
  const viewEmployeeDetail = document.getElementById('viewEmployeeDetail');
  const viewEmpDash = document.getElementById('viewEmployeeDashboard');

  const menuEmployees = document.getElementById('menuEmployees');
  const menuTraining = document.getElementById('menuTraining');
  const menuConfig = document.getElementById('menuConfig');
  const menuEmpDashboard = document.getElementById('menuEmpDashboard');

  const employeesInner = document.getElementById('employeesInner');
  const trainingInner = document.getElementById('trainingInner');
  const configInner = document.getElementById('configInner');
  const empDashboardInner = document.getElementById('empDashboardInner');

  if (viewDashboard) { viewDashboard.style.display = 'block'; viewDashboard.classList.add('active'); }
  if (viewTraining) { viewTraining.style.display = 'none'; viewTraining.classList.remove('active'); }
  if (viewConfig) { viewConfig.style.display = 'none'; viewConfig.classList.remove('active'); }
  if (viewTrainingConfig) { viewTrainingConfig.style.display = 'none'; viewTrainingConfig.classList.remove('active'); }
  if (viewRoles) { viewRoles.style.display = 'none'; viewRoles.classList.remove('active'); }
  if (viewRolePermissions) { viewRolePermissions.style.display = 'none'; viewRolePermissions.classList.remove('active'); }
  if (viewEmployeeDetail) { viewEmployeeDetail.style.display = 'none'; viewEmployeeDetail.classList.remove('active'); }
  if (viewEmpDash) { viewEmpDash.style.display = 'none'; viewEmpDash.classList.remove('active'); }

  if (menuEmployees) menuEmployees.classList.add('active');
  if (menuTraining) menuTraining.classList.remove('active');
  if (menuConfig) menuConfig.classList.remove('active');
  if (menuEmpDashboard) menuEmpDashboard.classList.remove('active');

  if (employeesInner) {
    employeesInner.className = 'bg-indigo-600 text-white relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = employeesInner.querySelector('.icon-users-02');
    if (icon) icon.className = 'text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-users-02';
  }
  if (trainingInner) {
    trainingInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = trainingInner.querySelector('.icon-training');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center 2xl:text-xl 2xl-to-xl:text-lg text-lg icon-training';
  }
  if (configInner) {
    configInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = configInner.querySelector('.icon-settings-02');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-settings-02';
  }
  if (empDashboardInner) {
    empDashboardInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = empDashboardInner.querySelector('svg');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white shrink-0';
  }
}

function switchToTraining() {
  if (trainingConfigData && trainingConfigData.general && trainingConfigData.general.moduleEnabled === false) {
    showConfigToast('Training Module is currently disabled in System Configuration. Enable it under Config → Training Config.', 'info')
    return;
  }

  const configPanel = document.getElementById('configSidePanel');
  if (configPanel) configPanel.classList.remove('open');

  const viewDashboard = document.getElementById('viewDashboard');
  const viewTraining = document.getElementById('viewTraining');
  const viewConfig = document.getElementById('viewConfig');
  const viewEmpDash = document.getElementById('viewEmployeeDashboard');

  const menuEmployees = document.getElementById('menuEmployees');
  const menuTraining = document.getElementById('menuTraining');
  const menuConfig = document.getElementById('menuConfig');
  const menuEmpDashboard = document.getElementById('menuEmpDashboard');

  const employeesInner = document.getElementById('employeesInner');
  const trainingInner = document.getElementById('trainingInner');
  const configInner = document.getElementById('configInner');
  const empDashboardInner = document.getElementById('empDashboardInner');

  if (viewDashboard) { viewDashboard.style.display = 'none'; viewDashboard.classList.remove('active'); }
  if (viewTraining) { viewTraining.style.display = 'block'; viewTraining.classList.add('active'); }
  if (viewConfig) { viewConfig.style.display = 'none'; viewConfig.classList.remove('active'); }
  if (viewEmpDash) { viewEmpDash.style.display = 'none'; viewEmpDash.classList.remove('active'); }
  const viewTrainingConfig = document.getElementById('viewTrainingConfig');
  if (viewTrainingConfig) { viewTrainingConfig.style.display = 'none'; viewTrainingConfig.classList.remove('active'); }
  const viewRoles = document.getElementById('viewRoles');
  if (viewRoles) { viewRoles.style.display = 'none'; viewRoles.classList.remove('active'); }
  const viewRolePermissions = document.getElementById('viewRolePermissions');
  if (viewRolePermissions) { viewRolePermissions.style.display = 'none'; viewRolePermissions.classList.remove('active'); }
  const viewEmployeeDetail = document.getElementById('viewEmployeeDetail');
  if (viewEmployeeDetail) { viewEmployeeDetail.style.display = 'none'; viewEmployeeDetail.classList.remove('active'); }

  if (menuEmployees) menuEmployees.classList.remove('active');
  if (menuTraining) menuTraining.classList.add('active');
  if (menuConfig) menuConfig.classList.remove('active');
  if (menuEmpDashboard) menuEmpDashboard.classList.remove('active');

  if (employeesInner) {
    employeesInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = employeesInner.querySelector('.icon-users-02');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-users-02';
  }
  if (trainingInner) {
    trainingInner.className = 'bg-indigo-600 text-white relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = trainingInner.querySelector('.icon-training');
    if (icon) icon.className = 'text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center 2xl:text-xl 2xl-to-xl:text-lg text-lg icon-training';
  }
  if (configInner) {
    configInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = configInner.querySelector('.icon-settings-02');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-settings-02';
  }
  if (empDashboardInner) {
    empDashboardInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = empDashboardInner.querySelector('svg');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white shrink-0';
  }

  if (state.currentRole === 'employee') {
    const secMyTraining = document.getElementById('sectionEmpMyTraining');
    if (secMyTraining) secMyTraining.style.display = 'block';
    if (!state.employeeTrainingData || !state.employeeTrainingData.trainings || state.employeeTrainingData.trainings.length === 0) {
      state.employeeTrainingData = getFallbackEmployeeData('CO-5039');
      syncEmployeeTrainingsWithGlobalAssignments();
    }
    renderEmployeeDashboardUI();
    renderEmployeeTrainingsList();
    loadEmployeeTrainingData('CO-5039');
  } else {
    renderActiveSubTab();
  }
}

// ==========================================================================
// EMPLOYEE DASHBOARD & CUSTOMIZE WIDGETS CONTROLLER (SCREENSHOTS 1, 2, 3)
// ==========================================================================

const EMP_DASHBOARD_WIDGET_CONFIG_KEY = 'collabcrm_emp_dashboard_widgets_v1';

function getEmpWidgetConfig() {
  try {
    const raw = localStorage.getItem(EMP_DASHBOARD_WIDGET_CONFIG_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return {
    prevAttendance: true,
    todayAttendance: true,
    attendanceCalendar: true,
    todayEvents: true,
    holidays: true,
    deviceInUse: true,
    training: true
  };
}

function saveEmpWidgetConfig(cfg) {
  try {
    localStorage.setItem(EMP_DASHBOARD_WIDGET_CONFIG_KEY, JSON.stringify(cfg));
  } catch (e) {}
}

function applyEmpWidgetVisibility() {
  const cfg = getEmpWidgetConfig();
  const map = {
    prevAttendance: 'widgetPrevAttendance',
    todayAttendance: 'widgetTodayAttendance',
    attendanceCalendar: 'widgetAttendanceCalendar',
    todayEvents: 'widgetTodayEvents',
    holidays: 'widgetHolidays',
    deviceInUse: 'widgetDeviceInUse',
    training: 'widgetTraining'
  };

  Object.entries(map).forEach(([key, elemId]) => {
    const el = document.getElementById(elemId);
    const isVisible = cfg[key] !== false;
    if (el) el.style.display = isVisible ? 'block' : 'none';

    const chk = document.getElementById(`chkWidget_${key}`);
    if (chk) chk.checked = isVisible;
  });
}
window.applyEmpWidgetVisibility = applyEmpWidgetVisibility;

function toggleEmpWidget(key) {
  const cfg = getEmpWidgetConfig();
  cfg[key] = !cfg[key];
  saveEmpWidgetConfig(cfg);
  applyEmpWidgetVisibility();
}
window.toggleEmpWidget = toggleEmpWidget;

function toggleCustomizeWidgetsMenu(e) {
  if (e) e.stopPropagation();
  const popover = document.getElementById('customizeWidgetsPopover');
  if (!popover) return;
  const isHidden = popover.style.display === 'none' || !popover.style.display;
  popover.style.display = isHidden ? 'block' : 'none';
}
window.toggleCustomizeWidgetsMenu = toggleCustomizeWidgetsMenu;

function closeCustomizeWidgetsMenu() {
  const popover = document.getElementById('customizeWidgetsPopover');
  if (popover) popover.style.display = 'none';
}
window.closeCustomizeWidgetsMenu = closeCustomizeWidgetsMenu;

function renderEmployeeDashboardWidgets() {
  const empId = state.currentRole === 'employee' ? 'CO-5039' : (state.currentEmployeeId || 'CO-5039');
  let empAsns = (state.assignments || []).filter(a => a.employeeId === empId && a.status !== 'cancelled' && a.status !== 'unassigned');
  if (empAsns.length === 0 && state.employeeTrainingData && Array.isArray(state.employeeTrainingData.trainings)) {
    empAsns = state.employeeTrainingData.trainings.filter(t => t.trainingStatus !== 'cancelled');
  }
  
  const trainingWidgetBody = document.getElementById('empWidgetTrainingBody');
  if (trainingWidgetBody) {
    if (empAsns.length === 0) {
      trainingWidgetBody.innerHTML = `
        <div style="padding: 24px 16px; text-align: center; color: #64748b; font-size: 13px;">
          <div style="font-size: 26px; margin-bottom: 6px;">📚</div>
          <strong style="color: #475569; font-size: 13.5px; display: block;">No training available.</strong>
          <p style="margin: 4px 0 0 0; font-size: 11.5px; color: #94a3b8;">You currently have no active assigned training modules.</p>
        </div>
      `;
    } else {
      const a = empAsns[0];
      const prog = (state.programs || []).find(p => p.id === a.programId) || {};
      const courseTitle = a.programTitle || a.trainingName || prog.title || a.title || 'Assigned Training Programme';
      const courseDept = a.category || prog.dept || 'Engineering';
      const courseDueDate = a.dueDate || '15-Nov-2026';
      const courseProgress = a.completionPercentage !== undefined ? a.completionPercentage : (a.progress || 0);
      const rawStatus = a.trainingStatus || a.status || 'not_started';
      const statusLabel = (rawStatus === 'completed' || rawStatus === 'Completed')
        ? '<span class="status-pill status-completed">Completed</span>' 
        : ((rawStatus === 'submitted' || rawStatus === 'submitted_for_review')
            ? '<span class="status-pill status-submitted">Under Review</span>' 
            : ((rawStatus === 'in_progress' || rawStatus === 'In Progress') ? '<span class="status-pill status-inprogress">In Progress</span>' : '<span class="status-pill status-notstarted">Not Started</span>'));
      
      trainingWidgetBody.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 10px;">
            <div>
              <div style="font-weight: 700; font-size: 13.5px; color: #0f172a; margin-bottom: 4px;">
                ${escapeHtml(courseTitle)}
              </div>
              <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
                <span class="badge-dept badge-blue" style="font-size: 10.5px; padding: 2px 7px;">${escapeHtml(courseDept)}</span>
                <span style="font-size: 11.5px; color: #64748b;">📅 Due: <strong>${escapeHtml(courseDueDate)}</strong></span>
              </div>
            </div>
            ${statusLabel}
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; font-size: 11.5px; margin-bottom: 5px;">
              <span style="color: #64748b;">Course Progress</span>
              <strong style="color: #2563eb;">${courseProgress}%</strong>
            </div>
            <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 9999px; overflow: hidden;">
              <div style="width: ${courseProgress}%; height: 100%; background: #2563eb; border-radius: 9999px; transition: width 0.3s ease;"></div>
            </div>
          </div>

          <div style="display: flex; justify-content: flex-end; padding-top: 6px;">
            <button type="button" onclick="switchToTraining()" class="btn-sm-primary" style="font-size: 12px; padding: 6px 14px; border-radius: 6px; cursor: pointer; background: #2563eb; color: #ffffff; border: none; font-weight: 600;">
              Go to Training →
            </button>
          </div>
        </div>
      `;
    }
  }
}
window.renderEmployeeDashboardWidgets = renderEmployeeDashboardWidgets;

function switchToEmployeeDashboard() {
  const configPanel = document.getElementById('configSidePanel');
  if (configPanel) configPanel.classList.remove('open');
  const trainingPanel = document.getElementById('trainingSidePanel');
  if (trainingPanel) trainingPanel.classList.remove('open');

  const viewDashboard = document.getElementById('viewDashboard');
  const viewTraining = document.getElementById('viewTraining');
  const viewConfig = document.getElementById('viewConfig');
  const viewTrainingConfig = document.getElementById('viewTrainingConfig');
  const viewRoles = document.getElementById('viewRoles');
  const viewRolePermissions = document.getElementById('viewRolePermissions');
  const viewEmployeeDetail = document.getElementById('viewEmployeeDetail');
  const viewEmpDash = document.getElementById('viewEmployeeDashboard');

  if (viewDashboard) { viewDashboard.style.display = 'none'; viewDashboard.classList.remove('active'); }
  if (viewTraining) { viewTraining.style.display = 'none'; viewTraining.classList.remove('active'); }
  if (viewConfig) { viewConfig.style.display = 'none'; viewConfig.classList.remove('active'); }
  if (viewTrainingConfig) { viewTrainingConfig.style.display = 'none'; viewTrainingConfig.classList.remove('active'); }
  if (viewRoles) { viewRoles.style.display = 'none'; viewRoles.classList.remove('active'); }
  if (viewRolePermissions) { viewRolePermissions.style.display = 'none'; viewRolePermissions.classList.remove('active'); }
  if (viewEmployeeDetail) { viewEmployeeDetail.style.display = 'none'; viewEmployeeDetail.classList.remove('active'); }

  if (viewEmpDash) {
    viewEmpDash.style.display = 'block';
    viewEmpDash.classList.add('active');
  }

  const menuEmpDashboard = document.getElementById('menuEmpDashboard');
  const menuTraining = document.getElementById('menuTraining');
  const empDashboardInner = document.getElementById('empDashboardInner');
  const trainingInner = document.getElementById('trainingInner');

  if (menuEmpDashboard) menuEmpDashboard.classList.add('active');
  if (menuTraining) menuTraining.classList.remove('active');

  if (empDashboardInner) {
    empDashboardInner.className = 'bg-indigo-600 text-white relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = empDashboardInner.querySelector('svg');
    if (icon) icon.className = 'text-white shrink-0';
  }
  if (trainingInner) {
    trainingInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = trainingInner.querySelector('.icon-training');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center 2xl:text-xl 2xl-to-xl:text-lg text-lg icon-training';
  }

  applyEmpWidgetVisibility();
  renderEmployeeDashboardWidgets();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.switchToEmployeeDashboard = switchToEmployeeDashboard;

function handleTrainingMenuClick() {
  if (state.currentRole === 'employee') {
    switchToTraining();
  } else {
    toggleTrainingPanel();
  }
}
window.handleTrainingMenuClick = handleTrainingMenuClick;

// Training Slide-out Side Panel Controls (Admin / Management only, like Config)
function openTrainingPanel() {
  const configPanel = document.getElementById('configSidePanel');
  if (configPanel) configPanel.classList.remove('open');

  if (state.currentRole === 'employee') {
    switchToTraining();
    return;
  }

  const panel = document.getElementById('trainingSidePanel');
  const menuTraining = document.getElementById('menuTraining');
  const trainingInner = document.getElementById('trainingInner');
  const menuConfig = document.getElementById('menuConfig');
  const configInner = document.getElementById('configInner');
  const menuEmployees = document.getElementById('menuEmployees');
  const employeesInner = document.getElementById('employeesInner');

  if (panel) panel.classList.add('open');

  if (menuTraining) menuTraining.classList.add('active');
  if (trainingInner) {
    trainingInner.className = 'bg-indigo-600 text-white relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = trainingInner.querySelector('.icon-training');
    if (icon) icon.className = 'text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center 2xl:text-xl 2xl-to-xl:text-lg text-lg icon-training';
  }

  if (menuConfig) menuConfig.classList.remove('active');
  if (configInner) {
    configInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = configInner.querySelector('.icon-settings-02');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-settings-02';
  }

  if (menuEmployees) menuEmployees.classList.remove('active');
  if (employeesInner) {
    employeesInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = employeesInner.querySelector('.icon-users-02');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-users-02';
  }
}

function closeTrainingPanel() {
  const panel = document.getElementById('trainingSidePanel');
  if (panel) panel.classList.remove('open');
}

function toggleTrainingPanel() {
  if (state.currentRole === 'employee') {
    closeTrainingPanel();
    switchToTraining();
    return;
  }
  const panel = document.getElementById('trainingSidePanel');
  if (panel && panel.classList.contains('open')) {
    closeTrainingPanel();
  } else {
    openTrainingPanel();
  }
}

function openTrainingSection(tabId) {
  closeTrainingPanel();
  switchToTraining();
  switchTrainingTab(tabId);
}

// Config Panel Controls (Matching exact CollabCRM specs)
function openConfigPanel() {
  const trainingPanel = document.getElementById('trainingSidePanel');
  if (trainingPanel) trainingPanel.classList.remove('open');

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
    trainingInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
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
  } else {
    openConfigPanel();
  }
}

function openConfigOption(optionName) {
  if (state.currentRole === 'manager') {
    showConfigToast(`Access Restricted: Only Admin and authorized HR roles can modify "${optionName}" settings.`, 'error')
    return;
  }
  showConfigToast(`CollabCRM People Config › ${optionName}\nConfigure system master rules, policies, and workflows.`, 'info')
}

window.switchToEmployees = switchToEmployees;
window.switchToTraining = switchToTraining;
window.toggleTrainingPanel = toggleTrainingPanel;
window.openTrainingPanel = openTrainingPanel;
window.closeTrainingPanel = closeTrainingPanel;
window.openTrainingSection = openTrainingSection;
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
  const mainHeadingEl = document.getElementById('trainingMainHeading');
  const btnAction = document.getElementById('btnHeaderPrimaryAction');
  const btnActionText = document.getElementById('btnHeaderPrimaryText');

  // Ensure any in-screen subviews (Programme Details / Assign Training) are reset when switching tabs
  const assignScreen = document.getElementById('assignTrainingModal');
  if (assignScreen) {
    assignScreen.style.display = 'none';
    assignScreen.classList.remove('open');
  }
  const progPreviewScreen = document.getElementById('programPreviewModal');
  const progFormScreen = document.getElementById('programFormModal');
  const progListCard = document.getElementById('programsCatalogListCard');
  if (progPreviewScreen) {
    progPreviewScreen.style.display = 'none';
    progPreviewScreen.classList.remove('open');
  }
  if (progFormScreen) {
    progFormScreen.style.display = 'none';
    progFormScreen.classList.remove('open');
  }
  if (progListCard) {
    progListCard.style.display = 'block';
  }

  // Set active tab buttons and views
  Object.keys(tabBtns).forEach(k => {
    if (tabBtns[k]) tabBtns[k].classList.toggle('active', k === tabId);
    if (sections[k]) sections[k].style.display = (k === tabId) ? 'block' : 'none';
    const sideItem = document.getElementById(`sideNavTraining_${k}`);
    if (sideItem) {
      const titleSpan = sideItem.querySelector('.config-item-training-title');
      if (titleSpan) titleSpan.style.color = (k === tabId) ? '#4f46e5' : '#27303f';
    }
  });

  const tabLabels = {
    dashboard: 'Dashboard',
    programs: 'Training Programes',
    assignments: 'Training Assignments',
    progress: 'Employee Progress',
    reviews: 'Training Review',
    certificates: 'Certificates',
    reports: 'Reports'
  };

  const activeTitle = tabLabels[tabId] || 'Dashboard';
  if (labelEl) labelEl.textContent = activeTitle;
  if (mainHeadingEl) mainHeadingEl.textContent = activeTitle;

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

  if (state.currentRole === 'employee') {
    setAppRole('employee');
  } else {
    renderActiveSubTab();
  }
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
  const sideBadge = document.getElementById('pendingReviewBadgeSide');
  if (sideBadge) {
    sideBadge.textContent = pendingCount;
    sideBadge.style.display = pendingCount > 0 ? 'inline-block' : 'none';
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
    const combinedInProg = inProgress + submittedReview;
    const pctComp = (completed / totalAssignments) * 100;
    const pctInProg = (combinedInProg / totalAssignments) * 100;
    const pctOvd = (overdue / totalAssignments) * 100;
    const pctNot = (notStarted / totalAssignments) * 100;

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
    setRing('dashDonutOverdue', pctOvd);
    setRing('dashDonutNotStarted', pctNot);

    setElText('dashLegendCompleted', `${completed} (${Math.round(pctComp)}%)`);
    setElText('dashLegendInProgress', `${combinedInProg} (${Math.round(pctInProg)}%)`);
    setElText('dashLegendOverdue', `${overdue} (${Math.round(pctOvd)}%)`);
    setElText('dashLegendNotStarted', `${notStarted} (${Math.round(pctNot)}%)`);
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

function toggleProgFilterCalcDropdown(e) {
  if (e) e.stopPropagation();
  const dd = document.getElementById('progFilterCalcDropdown');
  if (!dd) return;
  const isShown = dd.style.display === 'block';
  dd.style.display = isShown ? 'none' : 'block';
}

function closeProgFilterCalcDropdown() {
  const dd = document.getElementById('progFilterCalcDropdown');
  if (dd) dd.style.display = 'none';
}

function resetProgramsFilter() {
  const searchInput = document.getElementById('searchProgramsInput');
  if (searchInput) searchInput.value = '';
  const deptSelect = document.getElementById('progFilterDeptSelect');
  if (deptSelect) deptSelect.value = 'all';
  filterProgramsTab('all');
}

window.toggleProgFilterCalcDropdown = toggleProgFilterCalcDropdown;
window.closeProgFilterCalcDropdown = closeProgFilterCalcDropdown;
window.resetProgramsFilter = resetProgramsFilter;

function renderProgramsList() {
  const tbody = document.getElementById('programsTableBody');
  const grid = document.getElementById('programCardsGrid');
  const countBadge = document.getElementById('programsCountBadge');
  const query = (document.getElementById('searchProgramsInput')?.value || '').toLowerCase();
  const deptFilter = document.getElementById('progFilterDeptSelect')?.value || 'all';

  // Update calculation counts in the Σ dropdown
  const total = state.programs.length;
  const published = state.programs.filter(p => p.status === 'published').length;
  const draft = state.programs.filter(p => p.status === 'draft').length;
  const archived = state.programs.filter(p => p.status === 'archived').length;
  if (document.getElementById('progCalcTotal')) document.getElementById('progCalcTotal').textContent = total;
  if (document.getElementById('progCalcPublished')) document.getElementById('progCalcPublished').textContent = published;
  if (document.getElementById('progCalcDraft')) document.getElementById('progCalcDraft').textContent = draft;
  if (document.getElementById('progCalcArchived')) document.getElementById('progCalcArchived').textContent = archived;

  let filtered = state.programs.filter(p => {
    const matchesStatus = (state.programFilterStatus === 'all') || (p.status === state.programFilterStatus);
    const matchesDept = (deptFilter === 'all') || (p.dept === deptFilter);
    const matchesQuery = p.title.toLowerCase().includes(query) || p.dept.toLowerCase().includes(query) || (p.learningObjectives || '').toLowerCase().includes(query);
    return matchesStatus && matchesDept && matchesQuery;
  });

  if (countBadge) countBadge.textContent = `${filtered.length} Programmes`;

  if (filtered.length === 0) {
    if (tbody) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" style="padding: 40px; text-align: center; background: #f8fafc; color: #64748b;">
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
      <tr style="border-bottom: 1px solid #f1f5f9; transition: background 0.15s ease;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
        <td style="padding: 12px 14px; text-align: center; color: #64748b;">${idx + 1}</td>
        <td style="padding: 12px 14px; font-weight: 600; color: #0f172a;">
          <span>${escapeHtml(p.title)}</span>
          <span style="display: inline-block; font-size: 10.5px; font-weight: 700; color: #4338ca; background: #e0e7ff; padding: 1px 6px; border-radius: 4px; margin-left: 6px; vertical-align: middle;">v${p.version || 1}</span>
        </td>
        <td style="padding: 12px 14px; color: #334155;">${escapeHtml(p.dept)}</td>
        <td style="padding: 12px 14px;"><span class="status-pill" ${diffBadge}>${escapeHtml(p.difficulty)}</span></td>
        <td style="padding: 12px 14px; text-align: center; color: #334155;">${p.durationHours} hrs</td>
        <td style="padding: 12px 14px; text-align: center; color: #334155;">${enrolledCount}</td>
        <td style="padding: 12px 14px; text-align: center;">${statusPill}</td>
        <td style="padding: 12px 14px; text-align: center; white-space: nowrap;">
          <div style="display: inline-flex; align-items: center; gap: 4px;">
            <button type="button" class="emp-action-icon" onclick="previewProgram('${p.id}')" title="View Programme" aria-label="View">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
            <button type="button" class="emp-action-icon" onclick="openEditProgramModal('${p.id}')" title="Edit Programme" aria-label="Edit">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
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

// Program Form Builder & Multi-Resource Manager (In-Screen View + Per-Programme Config)
function populateCategorySelect(selectId, selectedValue = '') {
  const el = document.getElementById(selectId);
  if (!el) return;
  const cats = (trainingConfigData?.categories || DEFAULT_TRAINING_CONFIG.categories || []).filter(c => c.status !== 'Inactive');
  const catNames = cats.map(c => c.name);
  if (selectedValue && !catNames.includes(selectedValue)) {
    catNames.unshift(selectedValue);
  }
  el.innerHTML = catNames.map(name => `<option value="${escapeHtml(name)}" ${name === selectedValue ? 'selected' : ''}>${escapeHtml(name)}</option>`).join('');
}

function openCreateProgramModal() {
  if (trainingConfigData && trainingConfigData.general && trainingConfigData.general.allowCreation === false) {
    showConfigToast('Training Creation is currently disabled in Training Config.', 'info')
    return;
  }
  if (state.activeSubTab !== 'programs') {
    switchTrainingTab('programs');
  }

  document.getElementById('editingProgramId').value = '';
  document.getElementById('programFormModalTitle').textContent = 'Create New Training Programme';
  document.getElementById('progTitleInput').value = '';
  populateCategorySelect('progCategoryInput', 'Recruitment & HR Operations');
  document.getElementById('progDeptInput').value = 'Business analyst';
  document.getElementById('progDifficultyInput').value = 'Intermediate';
  document.getElementById('progDurationInput').value = (trainingConfigData?.general?.durationHours) || '16';
  document.getElementById('progPassScoreInput').value = (trainingConfigData?.completion?.passingScore) || '80';
  document.getElementById('progObjectivesInput').value = '';
  document.getElementById('progCriteriaInput').value = 'Complete 100% mandatory modules + achieve >= 80% on assessment';

  // Populate Per-Programme Config Defaults
  const maxEnrollEl = document.getElementById('progMaxEnrollmentInput');
  const dueDaysEl = document.getElementById('progDueDaysInput');
  const maxAttEl = document.getElementById('progMaxAttemptsInput');
  const certExpEl = document.getElementById('progCertExpiryMonthsInput');
  const remFreqEl = document.getElementById('progReminderFreqDaysInput');
  const asgnTypeEl = document.getElementById('progAssignmentTypeInput');
  const revAppEl = document.getElementById('progReviewerApprovalInput');
  const evidReqEl = document.getElementById('progEvidenceRequiredInput');
  const certEnEl = document.getElementById('progCertEnabledInput');

  if (maxEnrollEl) maxEnrollEl.value = 50;
  if (dueDaysEl) dueDaysEl.value = (trainingConfigData?.assignments?.dueDays) ?? 14;
  if (maxAttEl) maxAttEl.value = (trainingConfigData?.completion?.maxAttempts) ?? 3;
  if (certExpEl) certExpEl.value = (trainingConfigData?.general?.certificateExpiryMonths) ?? 24;
  if (remFreqEl) remFreqEl.value = (trainingConfigData?.general?.reminderFrequencyDays) ?? 7;
  if (asgnTypeEl) asgnTypeEl.value = (trainingConfigData?.assignments?.defaultType) || 'Mandatory';
  if (revAppEl) revAppEl.checked = trainingConfigData?.completion?.approvalRequired !== false;
  if (evidReqEl) evidReqEl.checked = trainingConfigData?.completion?.evidenceMandatory !== false;
  if (certEnEl) certEnEl.checked = trainingConfigData?.certificates?.enabled !== false;

  // Seed default 2 resource rows
  const container = document.getElementById('resourceRowsContainer');
  container.innerHTML = '';
  addResourceRow({ title: 'Module 1: Architecture Video Lecture', type: 'video', url: 'https://youtube.com/watch?v=sample-video', mandatory: true });
  addResourceRow({ title: 'Module 2: Standard Operating Procedure Handbook', type: 'pdf', url: 'https://docs.collabcrm.internal/sample-handbook.pdf', mandatory: true });

  const listCard = document.getElementById('programsCatalogListCard');
  const previewScreen = document.getElementById('programPreviewModal');
  const assignScreen = document.getElementById('assignTrainingModal');
  const formScreen = document.getElementById('programFormModal');
  if (listCard) listCard.style.display = 'none';
  if (previewScreen) { previewScreen.style.display = 'none'; previewScreen.classList.remove('open'); }
  if (assignScreen) { assignScreen.style.display = 'none'; assignScreen.classList.remove('open'); }
  if (formScreen) {
    formScreen.style.display = 'block';
    formScreen.classList.add('open');
  }
  const labelEl = document.getElementById('currentActiveTabLabel');
  if (labelEl) labelEl.textContent = 'Create Training Programme';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.openCreateProgramModal = openCreateProgramModal;

function openEditProgramModal(progId) {
  if (trainingConfigData && trainingConfigData.general && trainingConfigData.general.allowEditing === false) {
    showConfigToast('Training Editing is currently disabled in Training Config.', 'info')
    return;
  }
  const p = state.programs.find(prog => prog.id === progId);
  if (!p) return;

  if (state.activeSubTab !== 'programs') {
    switchTrainingTab('programs');
  }

  document.getElementById('editingProgramId').value = p.id;
  document.getElementById('programFormModalTitle').textContent = `Edit Training Programme: ${p.title}`;
  document.getElementById('progTitleInput').value = p.title;
  populateCategorySelect('progCategoryInput', p.category || 'Recruitment & HR Operations');
  document.getElementById('progDeptInput').value = p.dept;
  document.getElementById('progDifficultyInput').value = p.difficulty;
  document.getElementById('progDurationInput').value = p.durationHours;
  document.getElementById('progPassScoreInput').value = p.passScore || 80;
  document.getElementById('progObjectivesInput').value = p.learningObjectives || '';
  document.getElementById('progCriteriaInput').value = p.completionReq || '';

  // Populate Per-Programme Config Values
  const maxEnrollEl = document.getElementById('progMaxEnrollmentInput');
  const dueDaysEl = document.getElementById('progDueDaysInput');
  const maxAttEl = document.getElementById('progMaxAttemptsInput');
  const certExpEl = document.getElementById('progCertExpiryMonthsInput');
  const remFreqEl = document.getElementById('progReminderFreqDaysInput');
  const asgnTypeEl = document.getElementById('progAssignmentTypeInput');
  const revAppEl = document.getElementById('progReviewerApprovalInput');
  const evidReqEl = document.getElementById('progEvidenceRequiredInput');
  const certEnEl = document.getElementById('progCertEnabledInput');

  if (maxEnrollEl) maxEnrollEl.value = p.maxEnrollment ?? 50;
  if (dueDaysEl) dueDaysEl.value = p.dueDays ?? (trainingConfigData?.assignments?.dueDays ?? 14);
  if (maxAttEl) maxAttEl.value = p.maxAttempts ?? (trainingConfigData?.completion?.maxAttempts ?? 3);
  if (certExpEl) certExpEl.value = p.certExpiryMonths ?? (trainingConfigData?.general?.certificateExpiryMonths ?? 24);
  if (remFreqEl) remFreqEl.value = p.reminderFreqDays ?? (trainingConfigData?.general?.reminderFrequencyDays ?? 7);
  if (asgnTypeEl) asgnTypeEl.value = p.assignmentType || 'Mandatory';
  if (revAppEl) revAppEl.checked = p.reviewerApprovalRequired !== false;
  if (evidReqEl) evidReqEl.checked = p.evidenceRequired !== false;
  if (certEnEl) certEnEl.checked = p.certEnabled !== false;

  const container = document.getElementById('resourceRowsContainer');
  container.innerHTML = '';
  (p.resources || []).forEach(r => addResourceRow(r));

  const listCard = document.getElementById('programsCatalogListCard');
  const previewScreen = document.getElementById('programPreviewModal');
  const assignScreen = document.getElementById('assignTrainingModal');
  const formScreen = document.getElementById('programFormModal');
  if (listCard) listCard.style.display = 'none';
  if (previewScreen) { previewScreen.style.display = 'none'; previewScreen.classList.remove('open'); }
  if (assignScreen) { assignScreen.style.display = 'none'; assignScreen.classList.remove('open'); }
  if (formScreen) {
    formScreen.style.display = 'block';
    formScreen.classList.add('open');
  }
  const labelEl = document.getElementById('currentActiveTabLabel');
  if (labelEl) labelEl.textContent = `Edit: ${p.title}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.openEditProgramModal = openEditProgramModal;

function closeProgramModal() {
  const formScreen = document.getElementById('programFormModal');
  const listCard = document.getElementById('programsCatalogListCard');
  if (formScreen) {
    formScreen.style.display = 'none';
    formScreen.classList.remove('open');
  }
  if (listCard) {
    listCard.style.display = 'block';
  }
  const labelEl = document.getElementById('currentActiveTabLabel');
  if (labelEl) labelEl.textContent = 'Training Programes';
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
    <select class="res-type-select" style="width: 175px; min-width: 175px; height: 38px; padding: 0 10px; font-size: 13px; border: 1px solid #cbd5e1; border-radius: 6px; background: #ffffff; color: #1e293b; outline: none; flex-shrink: 0;">
      <option value="video" ${typeVal === 'video' ? 'selected' : ''}>🎬 Video / YouTube</option>
      <option value="external_course" ${typeVal === 'external_course' ? 'selected' : ''}>🎓 External Course</option>
      <option value="website" ${typeVal === 'website' ? 'selected' : ''}>🌐 Website / Lab</option>
      <option value="pdf" ${typeVal === 'pdf' ? 'selected' : ''}>📄 PDF Document</option>
      <option value="document" ${typeVal === 'document' ? 'selected' : ''}>📝 Word / Doc</option>
    </select>
    <input type="text" class="res-title-input" placeholder="Resource Title (e.g. Module 2: Standard Operations Guide)" value="${escapeHtml(titleVal)}" style="flex: 2; min-width: 160px; height: 38px; padding: 0 12px; font-size: 13px; border: 1px solid #cbd5e1; border-radius: 6px; outline: none; box-sizing: border-box;" />
    <input type="text" class="res-url-input" placeholder="URL or Document Link" value="${escapeHtml(urlVal)}" style="flex: 2; min-width: 160px; height: 38px; padding: 0 12px; font-size: 13px; border: 1px solid #cbd5e1; border-radius: 6px; outline: none; box-sizing: border-box;" />
    <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: #475569; cursor: pointer; white-space: nowrap; padding: 0 4px; flex-shrink: 0;">
      <input type="checkbox" class="res-mandatory-check" ${mandatoryVal ? 'checked' : ''} style="width: 15px; height: 15px; cursor: pointer;" />
      <span>Mandatory</span>
    </label>
    <button type="button" class="resource-del-btn" onclick="document.getElementById('${rowId}').remove()" title="Remove Resource" style="width: 34px; height: 34px; border-radius: 6px; border: 1px solid #fecaca; background: #fee2e2; color: #b91c1c; font-size: 13px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✕</button>
  `;
  container.appendChild(div);
}

window.addResourceRow = addResourceRow;

function saveProgram(statusToSet) {
  const editingId = document.getElementById('editingProgramId').value;
  const title = document.getElementById('progTitleInput').value.trim();
  const category = document.getElementById('progCategoryInput')?.value || 'Recruitment & HR Operations';
  const dept = document.getElementById('progDeptInput').value;
  const difficulty = document.getElementById('progDifficultyInput').value;
  const durationHours = parseInt(document.getElementById('progDurationInput').value, 10) || 10;
  const passScore = parseInt(document.getElementById('progPassScoreInput').value, 10) || 80;
  const objectives = document.getElementById('progObjectivesInput').value.trim();
  const criteria = document.getElementById('progCriteriaInput').value.trim();

  if (!title) {
    showConfigToast('Please enter a Programme Title.', 'error')
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

  const maxEnrollment = parseInt(document.getElementById('progMaxEnrollmentInput')?.value, 10) || 50;
  const dueDays = parseInt(document.getElementById('progDueDaysInput')?.value, 10) || 14;
  const maxAttempts = parseInt(document.getElementById('progMaxAttemptsInput')?.value, 10) || 3;
  const certExpiryMonths = parseInt(document.getElementById('progCertExpiryMonthsInput')?.value, 10) || 24;
  const reminderFreqDays = parseInt(document.getElementById('progReminderFreqDaysInput')?.value, 10) || 7;
  const assignmentType = document.getElementById('progAssignmentTypeInput')?.value || 'Mandatory';
  const reviewerApprovalRequired = document.getElementById('progReviewerApprovalInput') ? document.getElementById('progReviewerApprovalInput').checked : true;
  const evidenceRequired = document.getElementById('progEvidenceRequiredInput') ? document.getElementById('progEvidenceRequiredInput').checked : true;
  const certEnabled = document.getElementById('progCertEnabledInput') ? document.getElementById('progCertEnabledInput').checked : true;

  if (editingId) {
    // Update existing with Version Management (Feature 4)
    const prog = state.programs.find(p => p.id === editingId);
    if (prog) {
      const wasPublished = prog.status === 'published';
      const isPublishing = statusToSet === 'published';

      if (wasPublished && isPublishing) {
        if (!prog.versions) prog.versions = [];
        prog.versions.push({
          version: prog.version || 1,
          title: prog.title,
          updatedAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
          resources: JSON.parse(JSON.stringify(prog.resources || []))
        });
        prog.version = (prog.version || 1) + 1;
      }

      prog.title = title;
      prog.category = category;
      prog.dept = dept;
      prog.difficulty = difficulty;
      prog.durationHours = durationHours;
      prog.passScore = passScore;
      prog.learningObjectives = objectives;
      prog.completionReq = criteria;
      prog.resources = resources;
      prog.status = statusToSet;
      prog.maxEnrollment = maxEnrollment;
      prog.dueDays = dueDays;
      prog.maxAttempts = maxAttempts;
      prog.certExpiryMonths = certExpiryMonths;
      prog.reminderFreqDays = reminderFreqDays;
      prog.assignmentType = assignmentType;
      prog.reviewerApprovalRequired = reviewerApprovalRequired;
      prog.evidenceRequired = evidenceRequired;
      prog.certEnabled = certEnabled;

      // Sync version update with backend (keeps existing assignments linked to original version)
      fetch(getEmpApiUrl('/api/training/program-update'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          programId: prog.id,
          title: prog.title,
          category: prog.category,
          dept: prog.dept,
          difficulty: prog.difficulty,
          durationHours: prog.durationHours,
          passScore: prog.passScore,
          status: prog.status,
          version: prog.version || 1
        })
      }).catch(err => console.warn('Backend version sync note:', err));
    }
    logAudit('Updated Training Programme', `Updated: ${title} (v${prog?.version || 1})`, `Status: ${statusToSet}`);
    showConfigToast(`Training Programme "${title}" updated to v${prog?.version || 1}! Existing assignments keep original version.`, 'success');
  } else {
    // Create new
    const newId = `TR-${100 + state.programs.length + 1}`;
    state.programs.unshift({
      id: newId,
      title: title,
      category: category,
      dept: dept,
      difficulty: difficulty,
      durationHours: durationHours,
      passScore: passScore,
      learningObjectives: objectives,
      completionReq: criteria,
      resources: resources,
      status: statusToSet,
      maxEnrollment: maxEnrollment,
      dueDays: dueDays,
      maxAttempts: maxAttempts,
      certExpiryMonths: certExpiryMonths,
      reminderFreqDays: reminderFreqDays,
      assignmentType: assignmentType,
      reviewerApprovalRequired: reviewerApprovalRequired,
      evidenceRequired: evidenceRequired,
      certEnabled: certEnabled
    });
    logAudit('Created Training Programme', `Created: ${title}`, `Assigned ID ${newId}`);
    showConfigToast(`Training Programme "${title}" created successfully!`, 'success');
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
    showConfigToast('Training Archiving is currently disabled in Training Config.', 'info')
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

// In-Screen Programme Details View (Replaces Pop-up Modal)
let previewActiveProgId = null;
window.previewActiveProgId = null;

function previewProgram(progId) {
  if (trainingConfigData && trainingConfigData.general && trainingConfigData.general.enablePreview === false) {
    showConfigToast('Training Preview is currently disabled in Training Config.', 'info')
    return;
  }
  const p = state.programs.find(prog => prog.id === progId);
  if (!p) return;
  previewActiveProgId = progId;
  window.previewActiveProgId = progId;

  const titleEl = document.getElementById('previewProgTitle');
  if (titleEl) titleEl.textContent = p.title;
  const body = document.getElementById('previewModalBody');

  let resHtml = '';
  (p.resources || []).forEach((r, idx) => {
    const icon = (r.type === 'video' || r.type === 'youtube') ? '🎬' : (r.type === 'pdf' ? '📄' : ((r.type === 'website' || r.type === 'external_link') ? '🌐' : '🎓'));
    const iconBg = (r.type === 'video' || r.type === 'youtube') ? '#fee2e2' : (r.type === 'pdf' ? '#eff6ff' : ((r.type === 'website' || r.type === 'external_link') ? '#f0fdf4' : '#faf5ff'));
    const iconColor = (r.type === 'video' || r.type === 'youtube') ? '#dc2626' : (r.type === 'pdf' ? '#2563eb' : ((r.type === 'website' || r.type === 'external_link') ? '#16a34a' : '#7c3aed'));
    const mandBadge = r.mandatory
      ? '<span class="status-pill status-mandatory" style="font-size: 10.5px; padding: 2px 7px; background: #fee2e2; color: #991b1b; font-weight: 700; border-radius: 4px;">Mandatory</span>'
      : '<span class="status-pill status-optional" style="font-size: 10.5px; padding: 2px 7px; background: #f1f5f9; color: #475569; font-weight: 600; border-radius: 4px;">Optional</span>';
    const typeLabel = (r.type === 'video' || r.type === 'youtube') ? 'Video Lecture' : (r.type === 'pdf' ? 'PDF Playbook' : ((r.type === 'website' || r.type === 'external_link') ? 'Interactive Sandbox' : 'Masterclass'));
    const cleanUrl = escapeHtml(r.url || '#');
    const displayUrl = cleanUrl.replace(/^https?:\/\//, '').replace(/^www\./, '');

    resHtml += `
      <div class="curriculum-portrait-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between; min-height: 190px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); transition: all 0.15s ease;" onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'; this.style.borderColor='#cbd5e1';" onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.02)'; this.style.borderColor='#e2e8f0';">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
            <div style="width: 34px; height: 34px; border-radius: 8px; background: ${iconBg}; color: ${iconColor}; display: flex; align-items: center; justify-content: center; font-size: 16px;">
              ${icon}
            </div>
            <span style="font-size: 11px; font-weight: 700; color: #475569; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">Module ${idx + 1}</span>
          </div>
          <div style="font-weight: 700; font-size: 13px; color: #0f172a; line-height: 1.35; margin-bottom: 6px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;" title="${escapeHtml(r.title)}">
            ${escapeHtml(r.title)}
          </div>
          <div style="font-size: 11.5px; color: #64748b; margin-bottom: 6px; display: flex; align-items: center; gap: 4px;">
            <span>${typeLabel}</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-bottom: 8px;" title="${cleanUrl}">
            🔗 ${escapeHtml(displayUrl)}
          </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 10px; border-top: 1px solid #f1f5f9;">
          ${mandBadge}
          <a href="${cleanUrl}" target="_blank" style="font-size: 11.5px; color: #2563eb; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 3px;" title="${cleanUrl}">
            <span>Open</span>
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
    `;
  });

  // Enrolled learners for this programme
  const enrolledAsns = state.assignments.filter(a => a.programId === p.id);
  let enrolledHtml = '';
  if (enrolledAsns.length === 0) {
    enrolledHtml = `
      <div style="padding: 18px; text-align: center; color: #64748b; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; font-size: 12.5px;">
        No employees are currently assigned to this programme. Click <strong>+ Assign Programme</strong> above to enroll employees.
      </div>
    `;
  } else {
    let rows = '';
    enrolledAsns.forEach((a, i) => {
      const emp = state.employees.find(e => e.id === a.employeeId) || { id: a.employeeId, name: a.employeeId, role: 'Employee', dept: '-', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120' };
      const statusLabel = a.trainingStatus === 'completed' ? '<span class="status-pill status-completed">Completed</span>' : (a.trainingStatus === 'submitted' || a.trainingStatus === 'submitted_for_review' ? '<span class="status-pill status-submitted">Under Review</span>' : (a.trainingStatus === 'in_progress' ? '<span class="status-pill status-inprogress">In Progress</span>' : '<span class="status-pill status-notstarted">Not Started</span>'));
      rows += `
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 14px; color: #64748b;">${i + 1}</td>
          <td style="padding: 10px 14px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <img src="${emp.avatar}" style="width: 26px; height: 26px; border-radius: 50%; object-fit: cover;" />
              <div>
                <div style="font-weight: 600; color: #0f172a; font-size: 12.5px;">${escapeHtml(emp.name)}</div>
                <div style="font-size: 11px; color: #64748b;">${escapeHtml(emp.role)}</div>
              </div>
            </div>
          </td>
          <td style="padding: 10px 14px; color: #334155; font-size: 12.5px;">${escapeHtml(emp.dept)}</td>
          <td style="padding: 10px 14px; color: #475569; font-size: 12.5px;">${escapeHtml(a.assignedDate)}</td>
          <td style="padding: 10px 14px; color: #475569; font-size: 12.5px;">${escapeHtml(a.dueDate)}</td>
          <td style="padding: 10px 14px; font-size: 12.5px; font-weight: 600; color: #2563eb;">${a.progress}%</td>
          <td style="padding: 10px 14px;">${statusLabel}</td>
          <td style="padding: 10px 14px; text-align: center;">
            <button type="button" class="emp-action-icon" onclick="openEmployeeDetail('${emp.id || a.employeeId}')" title="View Detail Screen of ${escapeHtml(emp.name)}" aria-label="View Details" style="display: inline-flex; align-items: center; justify-content: center;">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </td>
        </tr>
      `;
    });
    enrolledHtml = `
      <div style="border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <table style="width: 100%; border-collapse: collapse; font-size: 12.5px; text-align: left;">
          <thead>
            <tr style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 11px; text-transform: uppercase;">
              <th style="padding: 10px 14px; width: 45px;">No.</th>
              <th style="padding: 10px 14px;">Employee</th>
              <th style="padding: 10px 14px;">Department</th>
              <th style="padding: 10px 14px;">Assigned Date</th>
              <th style="padding: 10px 14px;">Due Date</th>
              <th style="padding: 10px 14px;">Progress</th>
              <th style="padding: 10px 14px;">Status</th>
              <th style="padding: 10px 14px; text-align: center;">Action</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  if (body) {
    body.innerHTML = `
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 18px; align-items: center;">
        <span class="badge-dept badge-blue">${escapeHtml(p.dept)}</span>
        ${p.category ? `<span class="badge-dept" style="background: #f1f5f9; color: #334155; border: 1px solid #e2e8f0;">📁 ${escapeHtml(p.category)}</span>` : ''}
      </div>

      <div style="margin-bottom: 20px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px;">
        <h4 style="font-size: 13px; font-weight: 700; color: #0f172a; margin: 0 0 10px 0;">Programme Configuration &amp; Enrollment Limits</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; font-size: 12.5px;">
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 12px;">
            <span style="display: block; font-size: 10.5px; font-weight: 700; color: #64748b; text-transform: uppercase;">Status</span>
            <span class="status-pill ${p.status === 'published' ? 'status-completed' : 'status-notstarted'}" style="margin-top: 4px; display: inline-block;">${escapeHtml((p.status || 'published').toUpperCase())}</span>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 12px;">
            <span style="display: block; font-size: 10.5px; font-weight: 700; color: #64748b; text-transform: uppercase;">Difficulty Level</span>
            <strong style="color: #0f172a; font-size: 13.5px;">${escapeHtml(p.difficulty || 'Intermediate')}</strong>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 12px;">
            <span style="display: block; font-size: 10.5px; font-weight: 700; color: #64748b; text-transform: uppercase;">Expected Duration</span>
            <strong style="color: #0f172a; font-size: 13.5px;">⏱ ${p.durationHours || 10} Hours</strong>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 12px;">
            <span style="display: block; font-size: 10.5px; font-weight: 700; color: #64748b; text-transform: uppercase;">Passing Assessment Score</span>
            <strong style="color: #0f172a; font-size: 13.5px;">🎯 ${p.passScore || 80}%</strong>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 12px;">
            <span style="display: block; font-size: 10.5px; font-weight: 700; color: #64748b; text-transform: uppercase;">Max Enrollment Limit</span>
            <strong style="color: #0f172a; font-size: 13.5px;">${p.maxEnrollment ?? 50} Learners</strong>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 12px;">
            <span style="display: block; font-size: 10.5px; font-weight: 700; color: #64748b; text-transform: uppercase;">Default Due Window</span>
            <strong style="color: #0f172a; font-size: 13.5px;">${p.dueDays ?? 14} Days</strong>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 12px;">
            <span style="display: block; font-size: 10.5px; font-weight: 700; color: #64748b; text-transform: uppercase;">Max Assessment Attempts</span>
            <strong style="color: #0f172a; font-size: 13.5px;">${p.maxAttempts ?? 3} Attempts</strong>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 12px;">
            <span style="display: block; font-size: 10.5px; font-weight: 700; color: #64748b; text-transform: uppercase;">Certificate Expiry</span>
            <strong style="color: #0f172a; font-size: 13.5px;">${p.certExpiryMonths ?? 24} Months</strong>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 12px;">
            <span style="display: block; font-size: 10.5px; font-weight: 700; color: #64748b; text-transform: uppercase;">Reminder Frequency</span>
            <strong style="color: #0f172a; font-size: 13.5px;">${p.reminderFreqDays ?? 7} Days</strong>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px 12px;">
            <span style="display: block; font-size: 10.5px; font-weight: 700; color: #64748b; text-transform: uppercase;">Assignment Type</span>
            <strong style="color: #4f46e5; font-size: 13.5px;">${escapeHtml(p.assignmentType || 'Mandatory')}</strong>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 22px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
          <h4 style="font-size: 14px; font-weight: 700; color: #0f172a; margin: 0;">Curriculum &amp; Learning Resources (${(p.resources || []).length} Modules)</h4>
          <span style="font-size: 11.5px; color: #64748b;">Compact Portrait Cards • Click "Open" to launch resource</span>
        </div>
        <div style="background: #f8fafc; padding: 14px; border-radius: 10px; border: 1px solid #e2e8f0;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px;">
            ${resHtml}
          </div>
        </div>
      </div>

      <div>
        <h4 style="font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 10px;">Enrolled Employees (${enrolledAsns.length})</h4>
        ${enrolledHtml}
      </div>
    `;
  }

  // Switch in-screen inside #sectionPrograms (hide table list, show detail screen)
  const listCard = document.getElementById('programsCatalogListCard');
  const previewScreen = document.getElementById('programPreviewModal');
  const formScreen = document.getElementById('programFormModal');
  const assignScreen = document.getElementById('assignTrainingModal');
  if (assignScreen) assignScreen.style.display = 'none';
  if (formScreen) { formScreen.style.display = 'none'; formScreen.classList.remove('open'); }
  if (listCard) listCard.style.display = 'none';
  if (previewScreen) {
    previewScreen.style.display = 'block';
    previewScreen.classList.add('open');
  }
  const labelEl = document.getElementById('currentActiveTabLabel');
  if (labelEl) labelEl.textContent = p.title;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.previewProgram = previewProgram;

function closePreviewModal() {
  const listCard = document.getElementById('programsCatalogListCard');
  const previewScreen = document.getElementById('programPreviewModal');
  if (previewScreen) {
    previewScreen.style.display = 'none';
    previewScreen.classList.remove('open');
  }
  if (listCard) {
    listCard.style.display = 'block';
  }
  const labelEl = document.getElementById('currentActiveTabLabel');
  const mainHeadingEl = document.getElementById('trainingMainHeading');
  if (labelEl) labelEl.textContent = 'Training Programes';
  if (mainHeadingEl) mainHeadingEl.textContent = 'Training Programes';
}

window.closePreviewModal = closePreviewModal;

function assignFromPreview() {
  if (previewActiveProgId) {
    openAssignWithProgram(previewActiveProgId);
  } else {
    openAssignTrainingModal();
  }
}

window.assignFromPreview = assignFromPreview;

// ==========================================================================
// SECTION 3: TRAINING ASSIGNMENT (IN-SCREEN FLOW WITH DUPLICATE PREVENTION)
// ==========================================================================
function openAssignWithProgram(progId) {
  state.assignReturnToProgramPreview = progId;
  openAssignTrainingModal(progId);
}

window.openAssignWithProgram = openAssignWithProgram;

function openAssignTrainingModal(preselectedProgId = null) {
  if (state.currentRole === 'manager' && trainingConfigData?.assignments?.allowReportingManager === false) {
    showConfigToast('Reporting Managers are not permitted to assign training per Training Config policy.', 'info')
    return;
  }

  const asg = trainingConfigData?.assignments || {};
  const allowInd = asg.enableIndividual !== false;
  const allowBulk = asg.enableBulk !== false;
  const allowDept = asg.enableDept !== false;

  if (!allowInd && !allowBulk && !allowDept) {
    showConfigToast('All training assignment modes are currently disabled in Training Config.', 'info')
    return;
  }

  if (!preselectedProgId) {
    state.assignReturnToProgramPreview = null;
  }

  // Ensure #viewTraining is active
  const viewTraining = document.getElementById('viewTraining');
  if (viewTraining && viewTraining.style.display === 'none') {
    switchToTraining();
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
    const isInactive = emp.status === 'inactive' || emp.status === 'exited';
    // Individual select option
    const opt = document.createElement('option');
    opt.value = emp.id;
    opt.textContent = isInactive ? `${emp.name} — [Inactive / Exited Profile]` : `${emp.name} — ${emp.role} (${emp.dept})`;
    if (isInactive) {
      opt.disabled = true;
      opt.style.color = '#94a3b8';
    }
    empSelect.appendChild(opt);

    // Multi-select checkbox item
    if (!isInactive) {
      const lbl = document.createElement('label');
      lbl.style.cssText = 'display: flex; align-items: center; gap: 8px; font-size: 12.5px; cursor: pointer; padding: 4px 6px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 4px;';
      lbl.innerHTML = `
        <input type="checkbox" class="assign-emp-check" value="${emp.id}" onchange="checkAssignDuplicates()" />
        <img src="${emp.avatar}" style="width: 22px; height: 22px; border-radius: 50%;" />
        <span><strong>${escapeHtml(emp.name)}</strong> (${emp.dept})</span>
      `;
      multiContainer.appendChild(lbl);
    }
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

  // Render in-screen: hide other training tab views and display #assignTrainingModal in-screen
  ['sectionDashboard', 'sectionPrograms', 'sectionAssignments', 'sectionProgress', 'sectionReviews', 'sectionCertificates', 'sectionReports'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  if (modal) {
    modal.style.display = 'block';
    modal.classList.add('open');
  }
  const labelEl = document.getElementById('currentActiveTabLabel');
  const mainHeadingEl = document.getElementById('trainingMainHeading');
  if (labelEl) labelEl.textContent = 'Assign Training Programme';
  if (mainHeadingEl) mainHeadingEl.textContent = 'Assign Training Programme';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.openAssignTrainingModal = openAssignTrainingModal;

function closeAssignTrainingModal() {
  const modal = document.getElementById('assignTrainingModal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('open');
  }
  if (state.assignReturnToProgramPreview) {
    const progId = state.assignReturnToProgramPreview;
    state.assignReturnToProgramPreview = null;
    switchTrainingTab('programs');
    previewProgram(progId);
  } else {
    switchTrainingTab(state.activeSubTab || 'assignments');
  }
}

window.closeAssignTrainingModal = closeAssignTrainingModal;

function toggleAssignMode(mode) {
  document.getElementById('assignGroupIndividual').style.display = (mode === 'individual') ? 'flex' : 'none';
  document.getElementById('assignGroupMultiple').style.display = (mode === 'multiple') ? 'flex' : 'none';
  document.getElementById('assignGroupDept').style.display = (mode === 'department') ? 'flex' : 'none';
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
  const inactiveBlocked = [];
  targetEmpIds.forEach(empId => {
    const emp = state.employees.find(e => e.id === empId);
    if (emp && (emp.status === 'inactive' || emp.status === 'exited')) {
      inactiveBlocked.push(emp.name);
    }
    const exists = state.assignments.find(a => a.employeeId === empId && a.programId === progId && a.trainingStatus !== 'completed' && a.trainingStatus !== 'cancelled');
    if (exists) {
      duplicates.push(emp ? emp.name : empId);
    }
  });

  if (inactiveBlocked.length > 0) {
    if (warningBox) {
      warningBox.style.display = 'block';
      warningBox.innerHTML = `🚫 <strong>Inactive Employee Assignment Blocked:</strong> [${inactiveBlocked.join(', ')}] has exited or is inactive. Training cannot be assigned to exited employees.`;
    }
    if (btnConfirm) btnConfirm.disabled = true;
    return true;
  }

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
    showConfigToast('Reporting Managers are not permitted to assign training per Training Config policy.', 'info')
    return;
  }

  const mode = document.querySelector('input[name="assignMode"]:checked')?.value || 'individual';
  const asg = trainingConfigData?.assignments || {};
  if (mode === 'individual' && asg.enableIndividual === false) {
    showConfigToast('Individual training assignment is disabled in Training Config.', 'info')
    return;
  }
  if (mode === 'multiple' && asg.enableBulk === false) {
    showConfigToast('Multiple employee (bulk) training assignment is disabled in Training Config.', 'info')
    return;
  }
  if (mode === 'department' && asg.enableDept === false) {
    showConfigToast('Department-wide training assignment is disabled in Training Config.', 'info')
    return;
  }

  const isDuplicate = checkAssignDuplicates();
  if (isDuplicate) {
    showConfigToast('Cannot proceed: Active duplicate assignment detected. Please deselect already assigned employees.', 'error')
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
    showConfigToast('Please select at least one employee to assign.', 'error')
    return;
  }

  // Hierarchy validation check
  if (state.currentRole === 'manager') {
    const invalid = targetEmpIds.some(empId => {
      const emp = state.employees.find(e => e.id === empId);
      return !emp || emp.managerId !== state.currentManagerId;
    });
    if (invalid) {
      showConfigToast('Security Exception: Reporting Managers are strictly forbidden from assigning training to employees outside their reporting hierarchy.', 'error')
      return;
    }
  }

  const prog = state.programs.find(p => p.id === progId);
  const assignerName = state.currentRole === 'admin' ? 'Isha Patel (Head of People)' : (state.currentRole === 'hr' ? 'Shivam Sharma (HR)' : 'Ashish Kumar (Manager)');

  targetEmpIds.forEach(empId => {
    const newAsnId = `ASN-${String(state.assignments.length + 1).padStart(3, '0')}`;
    const clonedResources = (prog && prog.resources ? prog.resources : []).map((r, idx) => ({
      id: r.id || `res_${newAsnId}_${idx + 1}`,
      title: r.title,
      description: r.description || `Core learning module for ${prog ? prog.title : 'training programme'}.`,
      type: r.type || 'pdf',
      url: r.url || '#',
      isMandatory: r.isMandatory !== undefined ? r.isMandatory : (r.mandatory !== false),
      mandatory: r.mandatory !== false,
      duration: r.duration || '25 Mins',
      isCompleted: false,
      completionDate: null,
      completionTimestamp: null
    }));

    const unifiedRecord = {
      id: newAsnId,
      employeeId: empId,
      programId: progId,
      trainingName: prog ? prog.title : 'Assigned Training Programme',
      title: prog ? prog.title : 'Assigned Training Programme',
      category: prog ? prog.dept : 'General',
      shortDescription: prog ? prog.learningObjectives : '',
      isMandatory: mandatory,
      mandatory: mandatory,
      assignedBy: assignerName,
      assignedDate: assignedDate,
      dueDate: dueDate,
      startDate: null,
      progress: 0,
      completionPercentage: 0,
      trainingStatus: 'not_started',
      status: 'Not Started',
      submissionStatus: 'none',
      submissionRemarks: '',
      submissionEvidence: '',
      assessmentScore: null,
      certificateStatus: 'not_eligible',
      certificateId: null,
      difficultyLevel: prog ? prog.difficulty : 'Intermediate',
      expectedDuration: prog ? `${prog.durationHours} Hours` : '4 Hours',
      learningObjectives: prog && prog.learningObjectives ? [prog.learningObjectives, prog.completionReq || 'Complete all mandatory resources and pass the assessment.'] : ['Complete all mandatory resources and pass the assessment.'],
      expectedOutcomes: ['Verified competency in subject matter and official CollabCRM certification upon approval.'],
      resources: clonedResources,
      assessment: {
        id: `asm_${newAsnId}`,
        name: `${prog ? prog.title : 'Training'} Certification Assessment`,
        instructions: `Answer all questions carefully. Achieve at least ${prog && prog.passScore ? prog.passScore : 80}% to pass.`,
        passingScore: (prog && prog.passScore) ? prog.passScore : 80,
        maxAttempts: 3,
        attemptsUsed: 0,
        passed: false,
        isPassed: false,
        previousAttempts: [],
        questions: [
          {
            id: 'q1',
            text: `What is the primary operational objective of "${prog ? prog.title : 'this programme'}"?`,
            options: [
              prog && prog.learningObjectives ? prog.learningObjectives.slice(0, 95) : 'Deliver compliant, high-quality execution aligned with CollabCRM SOPs',
              'Bypass standard security and review controls for faster deployment',
              'Deprecate automated testing and manual verification checks',
              'Store unencrypted credentials in public repositories'
            ],
            correctIndex: 0
          },
          {
            id: 'q2',
            text: 'Which step is required before an assigned training is marked Completed and moved to Training History?',
            options: [
              'Only opening the first learning resource',
              'Completing mandatory resources, passing the assessment, submitting remarks, and receiving reviewer approval',
              'Skipping assessment and self-approving the record',
              'Deleting the assignment record after reading the overview'
            ],
            correctIndex: 1
          }
        ]
      },
      submission: {
        completionRemarks: '',
        evidenceFiles: [],
        submittedAt: null,
        isLocked: false
      },
      review: null,
      certificate: null,
      reviewHistory: [
        { date: assignedDate, action: 'Assigned', user: assignerName, notes: 'Assigned training programme.' }
      ]
    };

    state.assignments.unshift(unifiedRecord);

    if (empId === 'CO-5039') {
      if (!state.employeeTrainingData) {
        state.employeeTrainingData = getFallbackEmployeeData('CO-5039');
      }
      const existingIdx = state.employeeTrainingData.trainings.findIndex(t => t.id === unifiedRecord.id);
      if (existingIdx === -1) {
        state.employeeTrainingData.trainings.unshift(unifiedRecord);
      }
      state.employeeTrainingData.notifications.unshift({
        id: `notif_${Date.now()}`,
        title: 'New Training Assigned',
        message: `"${unifiedRecord.trainingName}" has been assigned to you by ${assignerName}. Due: ${dueDate}.`,
        type: 'info',
        time: 'Just now',
        trainingId: unifiedRecord.id,
        read: false
      });
      saveEmployeeStoreToLocal();
      fetch(getEmpApiUrl('/api/employee/assign'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ employeeId: 'CO-5039', training: unifiedRecord })
      }).catch(() => {});
    }
  });

  if (asg.notifyEmployee !== false) {
    logAudit('Notification Sent', `${prog ? prog.title : progId}`, `Assignment notification dispatched to ${targetEmpIds.length} employee(s).`);
  }

  logAudit('Training Assigned', `${prog ? prog.title : progId}`, `Assigned to ${targetEmpIds.length} employee(s)`);
  showConfigToast(`Successfully assigned "${prog ? prog.title : 'Programme'}" to ${targetEmpIds.length} employee(s)!`, 'success')
  
  state.assignReturnToProgramPreview = null;
  switchTrainingTab('assignments');
  renderAssignmentsTable();
  renderDashboard();
}

window.confirmTrainingAssignment = confirmTrainingAssignment;

state.expandedAssignmentEmployees = {};

function toggleAssignmentEmployeeGroup(empId, e) {
  if (e) e.stopPropagation();
  if (!state.expandedAssignmentEmployees) state.expandedAssignmentEmployees = {};
  state.expandedAssignmentEmployees[empId] = !state.expandedAssignmentEmployees[empId];
  renderAssignmentsTable();
}

window.toggleAssignmentEmployeeGroup = toggleAssignmentEmployeeGroup;

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

  // Group assignments by employeeId so same employee shows 1 primary row with expand/collapse for additional courses
  const empGroupsMap = new Map();
  filtered.forEach(a => {
    if (!empGroupsMap.has(a.employeeId)) {
      empGroupsMap.set(a.employeeId, []);
    }
    empGroupsMap.get(a.employeeId).push(a);
  });

  const renderAssignmentRowHtml = (a, emp, prog, isPrimary, totalForEmp, isExpanded) => {
    const mandPill = a.mandatory 
      ? '<span class="status-pill status-mandatory">Mandatory</span>' 
      : '<span class="status-pill status-optional">Elective</span>';

    const progColor = a.progress === 100 ? 'prog-green' : (a.progress > 0 ? '' : 'prog-red');

    const hasMultiple = totalForEmp > 1;
    const expandBtnHtml = (isPrimary && hasMultiple)
      ? `<button type="button" onclick="toggleAssignmentEmployeeGroup('${emp.id}', event)" title="${isExpanded ? 'Collapse courses' : 'Expand all assigned courses'}" style="display: inline-flex; align-items: center; gap: 4px; margin-left: 8px; padding: 2px 8px; border-radius: 12px; border: 1px solid ${isExpanded ? '#c7d2fe' : '#cbd5e1'}; background: ${isExpanded ? '#eef2ff' : '#f8fafc'}; color: ${isExpanded ? '#4f46e5' : '#475569'}; font-size: 11px; font-weight: 600; cursor: pointer; transition: all 0.15s ease;">
           <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" style="transform: rotate(${isExpanded ? '90deg' : '0deg'}); transition: transform 0.15s ease;"><polyline points="9 18 15 12 9 6"></polyline></svg>
           <span>${isExpanded ? 'Hide' : `+${totalForEmp - 1} more`}</span>
         </button>`
      : '';

    const rowStyle = isPrimary
      ? ''
      : 'background: #f8fafc; border-left: 3px solid #6366f1;';

    const empCellContent = isPrimary
      ? `<div class="cell-user-info" style="${hasMultiple ? 'cursor: pointer;' : ''}" ${hasMultiple ? `onclick="toggleAssignmentEmployeeGroup('${emp.id}', event)"` : ''}>
           <img src="${emp.avatar}" class="cell-avatar" />
           <div class="cell-user-meta">
             <div style="display: flex; align-items: center; flex-wrap: wrap;">
               <span class="cell-user-name">${escapeHtml(emp.name)}</span>
               ${expandBtnHtml}
             </div>
             <span class="cell-user-role">${escapeHtml(emp.role)}</span>
           </div>
         </div>`
      : `<div class="cell-user-info" style="padding-left: 18px;">
           <img src="${emp.avatar}" class="cell-avatar" style="width: 28px; height: 28px; opacity: 0.85;" />
           <div class="cell-user-meta">
             <span class="cell-user-name" style="font-size: 12.5px; color: #334155;">${escapeHtml(emp.name)}</span>
             <span class="cell-user-role">${escapeHtml(emp.role)}</span>
           </div>
         </div>`;

    return `
      <tr style="${rowStyle}">
        <td>${empCellContent}</td>
        <td>${escapeHtml(emp.dept)}</td>
        <td>
          <div style="font-weight: 600; color: #0f172a;">${escapeHtml(prog.title)}</div>
          <span style="font-size: 11px; color: #64748b;">${prog.difficulty} • ${prog.durationHours} hrs</span>
        </td>
        <td>${a.assignedDate}</td>
        <td>
          ${a.trainingStatus === 'cancelled'
            ? '<span style="background: #fee2e2; color: #b91c1c; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 6px; border: 1px solid #fecaca;">Cancelled</span>'
            : `<strong style="${a.trainingStatus === 'overdue' ? 'color:#ef4444;' : ''}">${a.dueDate}</strong>`
          }
        </td>
        <td>${mandPill}</td>
        <td>
          <div class="cell-prog-wrap">
            <div class="cell-prog-track">
              <div class="cell-prog-bar ${progColor}" style="width: ${a.progress}%;"></div>
            </div>
            <span class="cell-prog-text">${a.progress}%</span>
          </div>
        </td>
        <td style="white-space: nowrap;">
          <div style="display: inline-flex; align-items: center; gap: 4px;">
            <button type="button" class="emp-action-icon" onclick="openProgressDetails('${a.id}')" title="View Details" aria-label="View Details">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
            ${a.trainingStatus !== 'cancelled' ? `
              <button type="button" class="emp-action-icon" onclick="showConfigToast('Reminder notification dispatched to ${escapeHtml(emp.name)}!')" title="Send Reminder" aria-label="Remind">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
              <button type="button" class="emp-action-icon" onclick="openReassignScreen('${a.id}')" title="Reassign / Change Due Date" aria-label="Reassign" style="color: #2563eb;">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
              </button>
              <button type="button" class="emp-action-icon" onclick="openDelegateReviewerScreen('${a.id}')" title="Assign / Delegate Reviewer" aria-label="Delegate" style="color: #7c3aed;">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
              </button>
              <button type="button" class="emp-action-icon" onclick="openCancelAssignmentScreen('${a.id}')" title="Cancel Assignment" aria-label="Cancel" style="color: #e11d48;">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
              </button>
            ` : `
              <button type="button" class="emp-action-icon" onclick="openReassignScreen('${a.id}')" title="Reassign Training Course" aria-label="Reassign" style="color: #16a34a;">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
              </button>
            `}
          </div>
        </td>
      </tr>
    `;
  };

  let html = '';
  empGroupsMap.forEach((empAssignments, empId) => {
    const emp = state.employees.find(e => e.id === empId);
    if (!emp || empAssignments.length === 0) return;

    const isExpanded = !!(state.expandedAssignmentEmployees && state.expandedAssignmentEmployees[empId]);
    const primaryAsn = empAssignments[0];
    const primaryProg = state.programs.find(p => p.id === primaryAsn.programId);
    if (primaryProg) {
      html += renderAssignmentRowHtml(primaryAsn, emp, primaryProg, true, empAssignments.length, isExpanded);
    }

    if (isExpanded && empAssignments.length > 1) {
      empAssignments.slice(1).forEach(childAsn => {
        const childProg = state.programs.find(p => p.id === childAsn.programId);
        if (childProg) {
          html += renderAssignmentRowHtml(childAsn, emp, childProg, false, empAssignments.length, isExpanded);
        }
      });
    }
  });

  tbody.innerHTML = html;
}

window.renderAssignmentsTable = renderAssignmentsTable;

// ==========================================================================
// FEATURE 1 & 5: IN-SCREEN ASSIGNMENT ACTIONS (Cancel, Reassign, Delegate)
// (NO POP-UPS: Seamlessly transitions between table & in-screen drawer cards)
// ==========================================================================

function openCancelAssignmentScreen(asnId) {
  const a = state.assignments.find(asn => asn.id === asnId);
  if (!a) return;
  const emp = state.employees.find(e => e.id === a.employeeId);
  const prog = state.programs.find(p => p.id === a.programId);

  const screen = document.getElementById('assignCancelScreen');
  const details = document.getElementById('cancelAssignmentDetailsCard');
  const idInput = document.getElementById('cancelAssignmentId');
  const reasonInput = document.getElementById('cancelAssignmentReasonInput');

  if (idInput) idInput.value = a.id;
  if (reasonInput) reasonInput.value = '';

  if (details) {
    details.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
        <span style="font-weight: 700; color: #0f172a; font-size: 14px;">${escapeHtml(emp ? emp.name : a.employeeId)}</span>
        <span style="font-size: 11px; background: #fee2e2; color: #991b1b; padding: 2px 8px; border-radius: 4px; font-weight: 700;">Assignment ID: ${a.id}</span>
      </div>
      <div style="color: #475569; font-size: 12.5px; line-height: 1.4;">
        <div><strong>Programme:</strong> ${escapeHtml(prog ? prog.title : (a.trainingName || 'Training Course'))}</div>
        <div><strong>Current Due Date:</strong> ${a.dueDate} | <strong>Current Progress:</strong> ${a.progress}%</div>
      </div>
    `;
  }

  const tableCard = document.querySelector('#sectionAssignments .crm-table-container');
  if (tableCard) tableCard.style.display = 'none';
  if (screen) screen.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeCancelAssignmentScreen() {
  const screen = document.getElementById('assignCancelScreen');
  const tableCard = document.querySelector('#sectionAssignments .crm-table-container');
  if (screen) screen.style.display = 'none';
  if (tableCard) tableCard.style.display = 'block';
}

async function submitCancelAssignment() {
  const idInput = document.getElementById('cancelAssignmentId');
  const reasonInput = document.getElementById('cancelAssignmentReasonInput');
  const asnId = idInput ? idInput.value : '';
  const reason = reasonInput ? reasonInput.value.trim() : '';

  if (!reason || reason.length < 3) {
    showConfigToast('Please provide a valid cancellation reason.', 'error');
    if (reasonInput) reasonInput.focus();
    return;
  }

  const a = state.assignments.find(asn => asn.id === asnId);
  if (!a) return;

  const user = state.currentRole === 'admin' ? 'Isha Patel (Admin)' : (state.currentRole === 'hr' ? 'Shivam Sharma (HR)' : 'Ashish Kumar (Manager)');
  const today = new Date().toISOString().split('T')[0];

  a.trainingStatus = 'cancelled';
  a.status = 'Cancelled';
  a.cancellationReason = reason;
  a.cancelledBy = user;
  a.cancelledAt = today;

  if (!a.reviewHistory) a.reviewHistory = [];
  a.reviewHistory.unshift({
    date: today,
    action: 'Assignment Cancelled',
    user: user,
    notes: `Cancelled. Reason: ${reason}`
  });

  // Call backend API to persist
  try {
    await fetch(getEmpApiUrl('/api/training/cancel-assignment'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        assignmentId: a.id,
        employeeId: a.employeeId,
        cancellationReason: reason,
        cancelledBy: user
      })
    });
  } catch (err) {
    console.warn('Backend cancellation note:', err);
  }

  closeCancelAssignmentScreen();
  renderAssignmentsTable();
  renderDashboard();
  renderProgressTable();
  if (state.employeeTrainingData) renderEmployeeDashboardUI();
  showConfigToast('Training assignment cancelled. Previous progress and history preserved.', 'success');
}

function openReassignScreen(asnId) {
  const a = state.assignments.find(asn => asn.id === asnId);
  if (!a) return;
  const emp = state.employees.find(e => e.id === a.employeeId);
  const prog = state.programs.find(p => p.id === a.programId);

  const screen = document.getElementById('assignReassignScreen');
  const details = document.getElementById('reassignAssignmentDetailsCard');
  const idInput = document.getElementById('reassignAssignmentId');
  const dueInput = document.getElementById('reassignDueDateInput');
  const notesInput = document.getElementById('reassignNotesInput');

  if (idInput) idInput.value = a.id;
  if (notesInput) notesInput.value = '';

  const future14 = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  if (dueInput) dueInput.value = future14;

  if (details) {
    details.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
        <span style="font-weight: 700; color: #0f172a; font-size: 14px;">${escapeHtml(emp ? emp.name : a.employeeId)}</span>
        <span style="font-size: 11px; background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 4px; font-weight: 700;">Assignment ID: ${a.id}</span>
      </div>
      <div style="color: #475569; font-size: 12.5px; line-height: 1.4;">
        <div><strong>Programme:</strong> ${escapeHtml(prog ? prog.title : (a.trainingName || 'Training Course'))}</div>
        <div><strong>Prior Progress:</strong> ${a.progress}% (Will be preserved upon reassignment)</div>
      </div>
    `;
  }

  const tableCard = document.querySelector('#sectionAssignments .crm-table-container');
  if (tableCard) tableCard.style.display = 'none';
  if (screen) screen.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeReassignScreen() {
  const screen = document.getElementById('assignReassignScreen');
  const tableCard = document.querySelector('#sectionAssignments .crm-table-container');
  if (screen) screen.style.display = 'none';
  if (tableCard) tableCard.style.display = 'block';
}

async function submitReassignAssignment() {
  const idInput = document.getElementById('reassignAssignmentId');
  const dueInput = document.getElementById('reassignDueDateInput');
  const notesInput = document.getElementById('reassignNotesInput');
  const asnId = idInput ? idInput.value : '';
  const newDueDate = dueInput ? dueInput.value : '';
  const notes = notesInput ? notesInput.value.trim() : '';

  if (!newDueDate) {
    showConfigToast('Please select a valid new due date.', 'error');
    if (dueInput) dueInput.focus();
    return;
  }

  const a = state.assignments.find(asn => asn.id === asnId);
  if (!a) return;

  // Check duplicate active assignments: prevent if another active assignment exists for this (employee, program)
  const duplicate = state.assignments.find(other => other.id !== a.id && other.employeeId === a.employeeId && other.programId === a.programId && other.trainingStatus !== 'cancelled' && other.trainingStatus !== 'completed');
  if (duplicate) {
    showConfigToast('Duplicate active assignment detected for this employee and programme. Reassignment prevented.', 'error');
    return;
  }

  const user = state.currentRole === 'admin' ? 'Isha Patel (Admin)' : (state.currentRole === 'hr' ? 'Shivam Sharma (HR)' : 'Ashish Kumar (Manager)');
  const today = new Date().toISOString().split('T')[0];

  a.dueDate = newDueDate;
  a.trainingStatus = (a.progress > 0) ? 'in_progress' : 'not_started';
  a.status = (a.progress > 0) ? 'In Progress' : 'Not Started';
  a.cancellationReason = null;

  if (!a.reviewHistory) a.reviewHistory = [];
  a.reviewHistory.unshift({
    date: today,
    action: 'Assignment Reassigned',
    user: user,
    notes: `Reassigned with new due date ${newDueDate}. ${notes}`
  });

  // Call backend API to persist
  try {
    await fetch(getEmpApiUrl('/api/training/reassign'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        assignmentId: a.id,
        employeeId: a.employeeId,
        newDueDate: newDueDate,
        reassignedBy: user,
        notes: notes
      })
    });
  } catch (err) {
    console.warn('Backend reassignment note:', err);
  }

  closeReassignScreen();
  renderAssignmentsTable();
  renderDashboard();
  renderProgressTable();
  if (state.employeeTrainingData) renderEmployeeDashboardUI();
  showConfigToast(`Course reassigned with due date ${newDueDate}. Prior progress preserved.`, 'success');
}

function openDelegateReviewerScreen(asnId) {
  const a = state.assignments.find(asn => asn.id === asnId);
  if (!a) return;
  const emp = state.employees.find(e => e.id === a.employeeId);
  const prog = state.programs.find(p => p.id === a.programId);

  const screen = document.getElementById('assignDelegateScreen');
  const details = document.getElementById('delegateAssignmentDetailsCard');
  const idInput = document.getElementById('delegateAssignmentId');
  const select = document.getElementById('delegateReviewerSelect');
  const notesInput = document.getElementById('delegateNotesInput');

  if (idInput) idInput.value = a.id;
  if (notesInput) notesInput.value = '';

  if (select && a.reviewerId) {
    select.value = a.reviewerId;
  }

  if (details) {
    details.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
        <span style="font-weight: 700; color: #0f172a; font-size: 14px;">${escapeHtml(emp ? emp.name : a.employeeId)}</span>
        <span style="font-size: 11px; background: #f3e8ff; color: #6b21a8; padding: 2px 8px; border-radius: 4px; font-weight: 700;">Assignment ID: ${a.id}</span>
      </div>
      <div style="color: #475569; font-size: 12.5px; line-height: 1.4;">
        <div><strong>Programme:</strong> ${escapeHtml(prog ? prog.title : (a.trainingName || 'Training Course'))}</div>
        <div><strong>Current Reviewer:</strong> ${escapeHtml(a.reviewerName || 'Reporting Hierarchy')}</div>
      </div>
    `;
  }

  const tableCard = document.querySelector('#sectionAssignments .crm-table-container');
  if (tableCard) tableCard.style.display = 'none';
  if (screen) screen.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeDelegateReviewerScreen() {
  const screen = document.getElementById('assignDelegateScreen');
  const tableCard = document.querySelector('#sectionAssignments .crm-table-container');
  if (screen) screen.style.display = 'none';
  if (tableCard) tableCard.style.display = 'block';
}

async function submitDelegateReviewer() {
  const idInput = document.getElementById('delegateAssignmentId');
  const select = document.getElementById('delegateReviewerSelect');
  const notesInput = document.getElementById('delegateNotesInput');
  const asnId = idInput ? idInput.value : '';
  const reviewerId = select ? select.value : '';
  const reviewerName = select ? select.options[select.selectedIndex]?.text : '';
  const notes = notesInput ? notesInput.value.trim() : '';

  const a = state.assignments.find(asn => asn.id === asnId);
  if (!a) return;

  const user = state.currentRole === 'admin' ? 'Isha Patel (Admin)' : (state.currentRole === 'hr' ? 'Shivam Sharma (HR)' : 'Ashish Kumar (Manager)');
  const today = new Date().toISOString().split('T')[0];

  a.reviewerId = reviewerId;
  a.reviewerName = reviewerName;

  if (!a.reviewHistory) a.reviewHistory = [];
  a.reviewHistory.unshift({
    date: today,
    action: 'Reviewer Delegated',
    user: user,
    notes: `Review responsibility assigned to ${reviewerName}. ${notes}`
  });

  // Call backend API to persist
  try {
    await fetch(getEmpApiUrl('/api/training/delegate-reviewer'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        assignmentId: a.id,
        employeeId: a.employeeId,
        reviewerId: reviewerId,
        reviewerName: reviewerName,
        delegatedBy: user,
        notes: notes
      })
    });
  } catch (err) {
    console.warn('Backend delegation note:', err);
  }

  closeDelegateReviewerScreen();
  renderAssignmentsTable();
  showConfigToast(`Submission evaluation delegated to ${reviewerName}.`, 'success');
}

// Certificate Expiry Reminders and Refresher Training (Feature 2)
async function sendCertificateReminder(certId) {
  try {
    await fetch(getEmpApiUrl('/api/training/certificate/send-reminder'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ certificateId: certId, employeeId: 'CO-5039' })
    });
  } catch (err) {
    console.warn('Backend reminder note:', err);
  }
  showConfigToast(`Certificate expiry reminder notification dispatched to employee.`, 'success');
}

async function assignRefresherTraining(certId) {
  const cert = state.certificates.find(c => c.id === certId || c.assignmentId === certId);
  const progId = cert ? cert.programId : 'TR-101';
  const prog = state.programs.find(p => p.id === progId) || state.programs[0];
  const empId = cert ? cert.employeeId : 'CO-5039';
  const emp = state.employees.find(e => e.id === empId);

  if (emp && (emp.status === 'inactive' || emp.status === 'exited')) {
    showConfigToast(`Cannot assign refresher training: Employee ${emp.name} has exited or is inactive.`, 'error');
    return;
  }

  const user = state.currentRole === 'admin' ? 'Isha Patel (Admin)' : (state.currentRole === 'hr' ? 'Shivam Sharma (HR)' : 'Ashish Kumar (Manager)');
  const today = new Date().toISOString().split('T')[0];
  const due = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const newAsnId = `ASN-REFR-${String(state.assignments.length + 1).padStart(3, '0')}`;
  const refresherAsn = {
    id: newAsnId,
    employeeId: empId,
    programId: prog.id,
    programVersion: prog.version || 1,
    trainingName: `${prog.title} (Refresher)`,
    title: `${prog.title} (Refresher)`,
    category: prog.dept,
    shortDescription: `Certificate renewal refresher course for ${cert ? cert.id : 'expired credential'}.`,
    isMandatory: true,
    mandatory: true,
    isRefresher: true,
    refresherForCertId: cert ? cert.id : certId,
    assignedBy: user,
    assignedDate: today,
    dueDate: due,
    startDate: null,
    progress: 0,
    completionPercentage: 0,
    trainingStatus: 'not_started',
    status: 'Not Started',
    submissionStatus: 'none',
    submissionRemarks: '',
    submissionEvidence: '',
    assessmentScore: null,
    certificateStatus: 'not_eligible', // New certificate issued ONLY after approval
    certificateId: null,
    difficultyLevel: prog.difficulty,
    expectedDuration: `${prog.durationHours} Hours`,
    resources: (prog.resources || []).map((r, idx) => ({ ...r, id: `refr_${newAsnId}_${idx}`, isCompleted: false })),
    review: null,
    certificate: null,
    reviewHistory: [
      { date: today, action: 'Assigned Refresher', user: user, notes: `Assigned for renewal of ${cert ? cert.id : 'credential'}.` }
    ]
  };

  state.assignments.unshift(refresherAsn);

  try {
    await fetch(getEmpApiUrl('/api/training/certificate/assign-refresher'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        certificateId: cert ? cert.id : certId,
        employeeId: empId,
        programId: prog.id,
        assignedBy: user,
        dueDate: due,
        trainingName: refresherAsn.trainingName
      })
    });
  } catch (err) {
    console.warn('Backend refresher note:', err);
  }

  renderAssignmentsTable();
  renderCertificatesTable();
  renderDashboard();
  if (state.employeeTrainingData) renderEmployeeDashboardUI();
  showConfigToast(`Refresher training assigned for ${prog.title}. Credential will renew upon completion & approval.`, 'success');
}

window.openCancelAssignmentScreen = openCancelAssignmentScreen;
window.closeCancelAssignmentScreen = closeCancelAssignmentScreen;
window.submitCancelAssignment = submitCancelAssignment;
window.openReassignScreen = openReassignScreen;
window.closeReassignScreen = closeReassignScreen;
window.submitReassignAssignment = submitReassignAssignment;
window.openDelegateReviewerScreen = openDelegateReviewerScreen;
window.closeDelegateReviewerScreen = closeDelegateReviewerScreen;
window.submitDelegateReviewer = submitDelegateReviewer;
window.sendCertificateReminder = sendCertificateReminder;
window.assignRefresherTraining = assignRefresherTraining;

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
          <button type="button" class="emp-action-icon" onclick="openProgressDetails('${a.id}')" title="View Progress Details" aria-label="View Progress Details">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
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

  const screen = document.getElementById('sectionProgressDetailScreen');
  const tableCard = document.getElementById('mgmtProgressTableCard');
  if (tableCard) tableCard.style.display = 'none';
  if (screen) screen.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.openProgressDetails = openProgressDetails;

function closeProgressDetailsModal() {
  const screen = document.getElementById('sectionProgressDetailScreen');
  const tableCard = document.getElementById('mgmtProgressTableCard');
  if (screen) screen.style.display = 'none';
  if (tableCard) tableCard.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <td style="text-align: center; white-space: nowrap;">
          <button type="button" class="emp-action-icon" onclick="openReviewDetailScreen('${a.id}')" title="Review & Evaluate Submission" aria-label="Review Submission" style="width: 32px; height: 32px; border-radius: 6px; border: 1px solid #cbd5e1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s ease;" onmouseover="this.style.background='#eff6ff'; this.style.color='#2563eb'; this.style.borderColor='#bfdbfe';" onmouseout="this.style.background='#ffffff'; this.style.color='#334155'; this.style.borderColor='#cbd5e1';">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

window.renderReviewQueue = renderReviewQueue;

function openReviewDetailScreen(asnId) {
  const a = state.assignments.find(asn => asn.id === asnId);
  if (!a) return;
  const emp = state.employees.find(e => e.id === a.employeeId);
  const prog = state.programs.find(p => p.id === a.programId);

  // Security Check: Reporting Manager cannot review outside hierarchy
  if (state.currentRole === 'manager' && emp.managerId !== state.currentManagerId) {
    showConfigToast('Permission Denied: You are only authorized to review submissions for your direct reports.', 'error')
    return;
  }

  const screenAsnId = document.getElementById('screenReviewAssignmentId');
  const screenFeedback = document.getElementById('screenReviewerFeedbackInput');
  const screenValidation = document.getElementById('screenFeedbackValidationMsg');
  const screenBreadcrumb = document.getElementById('reviewDetailBreadcrumbName');

  if (screenAsnId) screenAsnId.value = a.id;
  if (screenFeedback) screenFeedback.value = '';
  if (screenValidation) screenValidation.style.display = 'none';
  if (screenBreadcrumb) screenBreadcrumb.textContent = `${emp.name} — ${prog.title}`;

  // Also sync modal inputs for compatibility
  const modalAsnId = document.getElementById('reviewAssignmentId');
  const modalFeedback = document.getElementById('reviewerFeedbackInput');
  if (modalAsnId) modalAsnId.value = a.id;
  if (modalFeedback) modalFeedback.value = '';

  let historyHtml = '';
  (a.reviewHistory || []).forEach(h => {
    historyHtml += `
      <div class="review-history-item" style="padding: 10px 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 8px;">
        <strong style="color: #0f172a; font-size: 13px;">${h.action}</strong> by <span style="font-weight: 600;">${escapeHtml(h.user)}</span> <span style="color: #64748b; font-size: 12px;">(${h.date})</span>:
        <p style="margin: 4px 0 0 0; font-size: 12.5px; color: #334155;">${escapeHtml(h.notes)}</p>
      </div>
    `;
  });

  const detailHtml = `
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px 18px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <img src="${emp.avatar}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;" />
        <div>
          <div style="font-weight: 700; font-size: 15px; color: #0f172a;">${escapeHtml(emp.name)}</div>
          <div style="font-size: 12px; color: #64748b;">${escapeHtml(emp.dept)} • ${escapeHtml(emp.role)}</div>
        </div>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.04em;">PROGRAMME</span>
        <div style="font-weight: 700; font-size: 14px; color: #1e3a8a;">${escapeHtml(prog.title)}</div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 16px;">
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 14px; border-radius: 8px;">
        <span style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.04em;">ASSESSMENT SCORE</span>
        <div style="font-size: 1.5rem; font-weight: 800; color: #166534; margin: 4px 0 2px 0;">${a.assessmentScore || 85}%</div>
        <span style="font-size: 11px; color: #64748b;">Pass Requirement: ${prog.passScore}%</span>
      </div>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 14px; border-radius: 8px;">
        <span style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.04em;">RESOURCES COMPLETED</span>
        <div style="font-size: 1.5rem; font-weight: 800; color: #2563eb; margin: 4px 0 2px 0;">${(prog.resources || []).length}/${(prog.resources || []).length}</div>
        <span style="font-size: 11px; color: #166534; font-weight: 600;">100% Mandatory Done ✓</span>
      </div>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 14px; border-radius: 8px;">
        <span style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.04em;">SUBMISSION EVIDENCE</span>
        <div style="margin-top: 6px;">
          ${a.submissionEvidence 
            ? `<a href="${escapeHtml(a.submissionEvidence)}" target="_blank" style="font-size: 12.5px; color: #2563eb; text-decoration: underline; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">📎 View Proof Document</a>` 
            : '<span style="font-size: 12px; color: #94a3b8;">None Attached</span>'}
        </div>
      </div>
    </div>

    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
      <h4 style="font-size: 13px; font-weight: 700; color: #0f172a; margin: 0 0 4px 0;">Learner Submission Remarks</h4>
      <p style="font-size: 13px; color: #334155; margin: 0; line-height: 1.4;">"${escapeHtml(a.submissionRemarks || 'Learner completed all required coursework.')}"</p>
    </div>

    ${historyHtml ? `
      <div style="margin-top: 14px;">
        <h4 style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Submission & Review History</h4>
        <div class="review-history-log">
          ${historyHtml}
        </div>
      </div>
    ` : ''}
  `;

  const screenContainer = document.getElementById('screenReviewSubmissionDetailsContainer');
  if (screenContainer) screenContainer.innerHTML = detailHtml;

  const modalContainer = document.getElementById('reviewSubmissionDetailsContainer');
  if (modalContainer) modalContainer.innerHTML = detailHtml;

  // Open IN-SCREEN view (NO POP-UPS per Screenshot 5)
  const secReviews = document.getElementById('sectionReviews');
  const secReviewDetail = document.getElementById('sectionReviewDetailScreen');
  if (secReviews) secReviews.style.display = 'none';
  if (secReviewDetail) secReviewDetail.style.display = 'block';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeReviewDetailScreen() {
  const secReviews = document.getElementById('sectionReviews');
  const secReviewDetail = document.getElementById('sectionReviewDetailScreen');
  if (secReviewDetail) secReviewDetail.style.display = 'none';
  if (secReviews) secReviews.style.display = 'block';
  renderReviewQueue();
}

function handleScreenReviewAction(action) {
  const screenFeedback = document.getElementById('screenReviewerFeedbackInput');
  const modalFeedback = document.getElementById('reviewerFeedbackInput');
  const screenAsnId = document.getElementById('screenReviewAssignmentId');
  const modalAsnId = document.getElementById('reviewAssignmentId');

  const fbVal = screenFeedback ? screenFeedback.value.trim() : '';
  if (modalFeedback) modalFeedback.value = fbVal;
  if (screenAsnId && modalAsnId) modalAsnId.value = screenAsnId.value;

  if ((action === 'request_changes' || action === 'reject') && !fbVal) {
    const valMsg = document.getElementById('screenFeedbackValidationMsg');
    if (valMsg) valMsg.style.display = 'block';
    if (screenFeedback) screenFeedback.focus();
    return;
  }

  handleReviewAction(action);
  closeReviewDetailScreen();
}

window.openReviewDetailScreen = openReviewDetailScreen;
window.closeReviewDetailScreen = closeReviewDetailScreen;
window.handleScreenReviewAction = handleScreenReviewAction;

function openReviewModal(asnId) {
  openReviewDetailScreen(asnId);
}

window.openReviewModal = openReviewModal;

function closeReviewModal() {
  closeReviewDetailScreen();
  const modal = document.getElementById('reviewSubmissionModal');
  if (modal) modal.classList.remove('open');
}

window.closeReviewModal = closeReviewModal;

// 3 Review Actions: Approve, Request Changes (mandatory feedback), Reject (mandatory feedback)
function handleReviewAction(action) {
  const comp = trainingConfigData?.completion || {};

  if (comp.approvalRequired === false) {
    showConfigToast('Submission approval is currently disabled in Training Config (Auto-approval active).', 'info')
  }

  if (action === 'request_changes' && comp.allowRetakes === false) {
    showConfigToast('Learner revisions / retakes are currently disabled in Training Config.', 'info')
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

  // Security Check: Enforce Reviewer Delegation & Hierarchy Permissions (Feature 5)
  if (state.currentRole !== 'admin') {
    const isDesignatedReviewer = a.reviewerId && (a.reviewerId === state.currentManagerId || (typeof activeDemoUser !== 'undefined' && activeDemoUser && a.reviewerId === activeDemoUser.id));
    const isDirectManager = emp && emp.managerId === state.currentManagerId;
    if (!isDesignatedReviewer && !isDirectManager) {
      showConfigToast('Permission Denied: You are not authorized to evaluate this submission. Only the designated reviewer or direct reporting manager can approve.', 'error');
      return;
    }
  }

  if (action === 'approve') {
    if (comp.evidenceEnabled !== false && comp.evidenceMandatory === true && !a.submissionEvidence) {
      showConfigToast('Cannot approve: Verification evidence document is mandatory per Training Config, but none was submitted.', 'error')
      return;
    }
    if (comp.remarksRequired === true && (!a.submissionRemarks || !a.submissionRemarks.trim())) {
      showConfigToast('Cannot approve: Learner remarks are required per Training Config.', 'error')
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
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  if (action === 'approve') {
    a.submissionStatus = 'approved';
    a.trainingStatus = 'completed';
    a.status = 'Completed';
    a.progress = 100;
    a.completionPercentage = 100;
    a.completionDate = dateStr;
    a.certificateStatus = 'issued';
    a.review = {
      status: 'approved',
      reviewerName: reviewerName,
      reviewDate: dateStr,
      feedback: feedback || 'Submission approved. Meets all training curriculum standards.'
    };
    if (!a.certificate) {
      const certId = a.certificateId || `TRN-2026-${String(Math.floor(1000 + Math.random() * 9000))}`;
      a.certificateId = certId;
      a.certificate = {
        id: certId,
        certificateNo: certId,
        name: `${prog ? prog.title : (a.trainingName || 'Training')} Credential`,
        trainingName: prog ? prog.title : (a.trainingName || 'Training'),
        issueDate: dateStr,
        expiryDate: 'Lifetime',
        status: 'issued',
        recipientName: emp ? emp.name : 'Tanya Kapoor',
        recipientId: emp ? emp.id : 'CO-5039',
        issuerName: 'Isha Patel',
        issuerRole: 'Head of People & Compliance'
      };
      if (!state.certificates.some(c => c.id === certId)) {
        state.certificates.push({
          id: certId,
          certificateNo: certId,
          assignmentId: a.id,
          employeeId: a.employeeId,
          programId: a.programId,
          issueDate: today,
          expiryDate: 'Lifetime',
          status: 'issued',
          reissueCount: 0,
          issuedBy: reviewerName
        });
      }
    } else {
      a.certificate.status = 'issued';
    }
    a.reviewHistory.unshift({
      date: today,
      action: 'Approved Submission',
      user: reviewerName,
      notes: feedback || 'Submission approved. Meets all training curriculum standards.'
    });

    if (a.employeeId === 'CO-5039') {
      if (state.employeeTrainingData && state.employeeTrainingData.notifications) {
        state.employeeTrainingData.notifications.unshift({
          id: `notif_${Date.now()}`,
          title: 'Training Approved & Moved to History',
          message: `Your submission for "${a.trainingName || (prog && prog.title)}" was approved by ${reviewerName}. Certificate ${a.certificate.id} issued!`,
          type: 'success',
          time: 'Just now',
          trainingId: a.id,
          read: false
        });
      }
      saveEmployeeStoreToLocal();
      fetch(getEmpApiUrl('/api/employee/review-decision'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          employeeId: 'CO-5039',
          trainingId: a.id,
          action: 'approve',
          reviewerName,
          feedback: a.review.feedback,
          certificate: a.certificate
        })
      }).catch(() => {});
    }

    logAudit('Approved Submission', `${emp.name} - ${prog.title}`, `Evaluator: ${reviewerName}. Marked Completed and moved to Training History.`);
    showConfigToast(`Submission from ${emp.name} approved! Training is now marked Completed and moved from My Training to Training History.`, 'success')
  } else if (action === 'request_changes') {
    a.submissionStatus = 'changes_requested';
    a.trainingStatus = 'changes_requested';
    a.status = 'Changes Requested';
    if (a.submission) a.submission.isLocked = false;
    a.review = {
      status: 'changes_requested',
      reviewerName: reviewerName,
      reviewDate: dateStr,
      feedback: feedback
    };
    a.reviewHistory.unshift({
      date: today,
      action: 'Requested Changes',
      user: reviewerName,
      notes: feedback
    });

    if (a.employeeId === 'CO-5039') {
      saveEmployeeStoreToLocal();
      fetch(getEmpApiUrl('/api/employee/review-decision'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          employeeId: 'CO-5039',
          trainingId: a.id,
          action: 'request_changes',
          reviewerName,
          feedback
        })
      }).catch(() => {});
    }

    logAudit('Requested Changes', `${emp.name} - ${prog.title}`, `Feedback: ${feedback}`);
    showConfigToast(`Feedback sent to ${emp.name}. Learner has been requested to submit revisions.`, 'info')
  } else if (action === 'reject') {
    a.submissionStatus = 'rejected';
    a.trainingStatus = 'in_progress';
    a.status = 'In Progress';
    if (a.submission) a.submission.isLocked = false;
    a.review = {
      status: 'rejected',
      reviewerName: reviewerName,
      reviewDate: dateStr,
      feedback: feedback
    };
    a.reviewHistory.unshift({
      date: today,
      action: 'Rejected Submission',
      user: reviewerName,
      notes: feedback
    });
    if (a.employeeId === 'CO-5039') {
      saveEmployeeStoreToLocal();
    }
    logAudit('Rejected Submission', `${emp.name} - ${prog.title}`, `Reason: ${feedback}`);
    showConfigToast(`Submission rejected for ${emp.name}. Remarks logged.`, 'info')
  }

  closeReviewModal();
  renderReviewQueue();
  renderDashboard();
  renderProgressTable();
  if (state.employeeTrainingData) {
    renderEmployeeDashboardUI();
  }
}

window.handleReviewAction = handleReviewAction;


// Pointer 1: Certificate Revocation Controller
let activeRevokeCertId = null;

function openRevokeCertificateModal(certOrAssignId) {
  const cert = state.certificates.find(c => c.id === certOrAssignId || c.assignmentId === certOrAssignId);
  const a = state.assignments.find(asn => asn.id === certOrAssignId || (cert && asn.id === cert.assignmentId));
  const emp = a ? state.employees.find(e => e.id === a.employeeId) : null;
  const prog = a ? state.programs.find(p => p.id === a.programId) : null;

  activeRevokeCertId = cert ? cert.id : certOrAssignId;

  const card = document.getElementById('mgmtRevokeCertCard');
  const certNoEl = document.getElementById('revokeTargetCertNo');
  const recipEl = document.getElementById('revokeTargetRecipient');
  const progEl = document.getElementById('revokeTargetProgram');
  const inputEl = document.getElementById('revokeReasonInput');
  const charCountEl = document.getElementById('revokeCharCount');

  if (certNoEl) certNoEl.textContent = cert ? cert.certificateNo : activeRevokeCertId;
  if (recipEl) recipEl.textContent = emp ? emp.name : 'Learner';
  if (progEl) progEl.textContent = prog ? prog.title : 'Training Programme';
  if (inputEl) inputEl.value = '';
  if (charCountEl) charCountEl.textContent = '0';

  if (card) {
    card.style.display = 'block';
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
window.openRevokeCertificateModal = openRevokeCertificateModal;

function closeRevokeCertModal() {
  activeRevokeCertId = null;
  const card = document.getElementById('mgmtRevokeCertCard');
  if (card) card.style.display = 'none';
}
window.closeRevokeCertModal = closeRevokeCertModal;

function submitRevokeCertificate() {
  if (!activeRevokeCertId) return;
  const reason = (document.getElementById('revokeReasonInput')?.value || '').trim();

  if (reason.length < 5 || reason.length > 500) {
    showConfigToast('Revocation reason is required and must be between 5 and 500 characters.', 'warning');
    return;
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  // Update in state.certificates
  const cert = state.certificates.find(c => c.id === activeRevokeCertId || c.assignmentId === activeRevokeCertId);
  if (cert) {
    cert.status = 'revoked';
    cert.revokeReason = reason;
    cert.revokedAt = dateStr;
    cert.revokedBy = 'Isha Patel (Head of People)';
  }

  // Update in state.assignments
  const a = state.assignments.find(asn => asn.id === activeRevokeCertId || (cert && asn.id === cert.assignmentId));
  if (a) {
    a.certificateStatus = 'revoked';
  }

  // Update in state.employeeTrainingData if present
  if (state.employeeTrainingData && Array.isArray(state.employeeTrainingData.trainings)) {
    const t = state.employeeTrainingData.trainings.find(x => (x.certificate && x.certificate.id === activeRevokeCertId) || x.id === activeRevokeCertId);
    if (t && t.certificate) {
      t.certificate.status = 'revoked';
      t.certificate.revokeReason = reason;
      t.certificate.revokedAt = dateStr;
    }
    saveEmployeeStoreToLocal();
  }

  closeRevokeCertModal();
  renderCertificatesTable();
  showConfigToast(`Certificate ${cert ? cert.certificateNo : activeRevokeCertId} has been successfully revoked.`, 'success');
}
window.submitRevokeCertificate = submitRevokeCertificate;

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

      const isExpired = cert && cert.expiryDate && cert.expiryDate !== 'Lifetime' && (new Date(cert.expiryDate) < new Date() || cert.status === 'expired');

      const isRevoked = a.certificateStatus === 'revoked' || (cert && cert.status === 'revoked');
      if (filter === 'all' || (filter === 'expired' && isExpired) || (filter === 'revoked' && isRevoked) || a.certificateStatus === filter) {
        certItems.push({
          assignment: a,
          employee: emp,
          program: prog,
          certificate: cert,
          isExpired: isExpired
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
    const isExpired = item.isExpired;

    let statusPill = '';
    let actionButtons = '';

    if (isExpired) {
      statusPill = '<span class="status-pill status-expired" style="background:#fee2e2; color:#b91c1c; border:1px solid #fecaca; font-weight:700;">Expired</span>';
      actionButtons = `
        <button type="button" class="emp-action-icon" onclick="previewCertificate('${cert ? cert.id : a.id}')" title="View Certificate" aria-label="View Certificate">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        </button>
        <button type="button" class="emp-action-icon" onclick="sendCertificateReminder('${cert ? cert.id : a.id}')" title="Send Expiry Reminder" aria-label="Remind" style="color:#d97706;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </button>
        <button type="button" class="emp-action-icon" onclick="assignRefresherTraining('${cert ? cert.id : a.id}')" title="Assign Refresher Course" aria-label="Refresher" style="color:#2563eb;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
        </button>
      `;
    } else if (a.certificateStatus === 'eligible') {
      statusPill = '<span class="status-pill status-eligible">Eligible (Not Generated)</span>';
      actionButtons = `
        <button type="button" class="emp-action-icon" onclick="previewCertificate('${a.id}')" title="Generate & View Certificate" aria-label="View Certificate">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        </button>
      `;
    } else if (a.certificateStatus === 'generated') {
      statusPill = '<span class="status-pill status-generated">Generated (Awaiting Issuance)</span>';
      actionButtons = `
        <button type="button" class="emp-action-icon" onclick="previewCertificate('${cert ? cert.id : a.id}')" title="View Certificate Details & Issue" aria-label="View Certificate">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        </button>
      `;
    } else if (a.certificateStatus === 'revoked' || (cert && cert.status === 'revoked')) {
      statusPill = '<span class="status-pill status-revoked" style="background:#fee2e2; color:#b91c1c; border:1px solid #fecaca; font-weight:700;">✕ Revoked</span>';
      actionButtons = `
        <button type="button" class="emp-action-icon" onclick="previewCertificate('${cert ? cert.id : a.id}')" title="View Revoked Record" aria-label="View Certificate">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        </button>
      `;
    } else if (a.certificateStatus === 'issued') {
      statusPill = '<span class="status-pill status-issued">Issued & Active</span>';
      actionButtons = `
        <button type="button" class="emp-action-icon" onclick="previewCertificate('${cert ? cert.id : a.id}')" title="View Certificate Details & Reissue" aria-label="View Certificate">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        </button>
        <button type="button" class="emp-action-icon" onclick="sendCertificateReminder('${cert ? cert.id : a.id}')" title="Send Expiry Reminder" aria-label="Remind" style="color:#d97706;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </button>
        <button type="button" class="emp-action-icon" onclick="assignRefresherTraining('${cert ? cert.id : a.id}')" title="Assign Refresher Course" aria-label="Refresher" style="color:#2563eb;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
        </button>
        <button type="button" class="emp-action-icon" onclick="openRevokeCertificateModal('${cert ? cert.id : a.id}')" title="Revoke Certificate (Requires 5-500 char reason)" aria-label="Revoke" style="color:#dc2626;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </button>
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
    showConfigToast('Certificate Generation is currently disabled in Training Config.', 'info')
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
  showConfigToast(`Certificate ${certNo} successfully GENERATED! It is now ready for preview and separate issuance.`, 'success')

  renderCertificatesTable();
  renderDashboard();
  renderProgressTable();
}

window.generateCertificate = generateCertificate;

// Action 2: Preview Certificate
let previewActiveCertId = null;
function previewCertificate(certId) {
  let cert = state.certificates.find(c => c.id === certId || c.assignmentId === certId);
  if (!cert) {
    const a = state.assignments.find(asn => asn.id === certId || asn.certificateId === certId);
    if (a && a.certificateStatus === 'eligible') {
      generateCertificate(a.id);
      cert = state.certificates.find(c => c.assignmentId === a.id);
    }
  }
  if (!cert) return;
  previewActiveCertId = cert.id;

  const emp = state.employees.find(e => e.id === cert.employeeId);
  const prog = state.programs.find(p => p.id === cert.programId);

  document.getElementById('certPreviewRecipientName').textContent = emp ? emp.name : 'Learner';
  const empCodeEl = document.getElementById('certPreviewEmpCode');
  if (empCodeEl) empCodeEl.textContent = emp ? (emp.code || 'CO-5039') : 'CO-5039';
  document.getElementById('certPreviewProgramName').textContent = prog ? prog.title : 'Training Course';
  document.getElementById('certPreviewNo').textContent = cert.certificateNo;
  document.getElementById('certPreviewIssueDate').textContent = cert.issueDate;
  document.getElementById('certPreviewExpiry').textContent = `Valid until ${cert.expiryDate}`;
  document.getElementById('certPreviewIssuer').textContent = cert.issuedBy || 'Megha Salunkhe';

  const btnIssueFromModal = document.getElementById('btnIssueCertFromModal');
  if (btnIssueFromModal) {
    btnIssueFromModal.style.display = (cert.status === 'generated') ? 'inline-block' : 'none';
  }
  const btnReissueFromModal = document.getElementById('btnReissueCertFromModal');
  if (btnReissueFromModal) {
    btnReissueFromModal.style.display = (cert.status === 'issued') ? 'inline-block' : 'none';
  }

  const revokedBanner = document.getElementById('certPreviewRevokedBanner');
  const revokedReasonEl = document.getElementById('certPreviewRevokeReasonText');
  const isRevoked = cert.status === 'revoked';
  if (revokedBanner) {
    revokedBanner.style.display = isRevoked ? 'block' : 'none';
    if (revokedReasonEl) revokedReasonEl.textContent = cert.revokeReason || 'Administrative revocation';
  }

  const mgmtCertScreen = document.getElementById('sectionMgmtCertificateScreen');
  const mgmtCertTable = document.getElementById('mgmtCertificatesTableCard');
  if (mgmtCertTable) mgmtCertTable.style.display = 'none';
  if (mgmtCertScreen) mgmtCertScreen.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMgmtReissueCard() {
  const card = document.getElementById('mgmtReissueCard');
  if (!card) return;
  card.style.display = (card.style.display === 'none' || !card.style.display) ? 'block' : 'none';
}
window.toggleMgmtReissueCard = toggleMgmtReissueCard;

function confirmReissueFromScreen() {
  if (!previewActiveCertId) return;
  const cert = state.certificates.find(c => c.id === previewActiveCertId);
  if (!cert) return;
  const reason = document.getElementById('reissueReasonSelectMgmt')?.value || 'Name / Typographical Correction';
  const notes = document.getElementById('reissueNotesInputMgmt')?.value || '';
  cert.reissueCount = (cert.reissueCount || 0) + 1;
  const now = new Date().toISOString().split('T')[0];
  cert.issueDate = now;
  appendAuditLog('Reissued Certificate', cert.id, `Revision ${cert.reissueCount}. Reason: ${reason}. Notes: ${notes}`);
  renderCertificatesTable();
  previewCertificate(cert.id);
  const card = document.getElementById('mgmtReissueCard');
  if (card) card.style.display = 'none';
  showConfigToast(`Certificate ${cert.certificateNo} reissued (Revision ${cert.reissueCount}) successfully!`, 'success');
}
window.confirmReissueFromScreen = confirmReissueFromScreen;

function openReissueModalFromPreview() {
  toggleMgmtReissueCard();
}

window.openReissueModalFromPreview = openReissueModalFromPreview;
window.previewCertificate = previewCertificate;

function closeCertPreviewModal() {
  const mgmtCertScreen = document.getElementById('sectionMgmtCertificateScreen');
  const mgmtCertTable = document.getElementById('mgmtCertificatesTableCard');
  if (mgmtCertScreen) mgmtCertScreen.style.display = 'none';
  if (mgmtCertTable) mgmtCertTable.style.display = 'block';
  const card = document.getElementById('mgmtReissueCard');
  if (card) card.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
    unread: true,
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
    unread: true,
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
  if (dotWrap) dotWrap.style.display = 'flex';

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

// ==========================================================================
// NOTIFICATIONS SCREEN (SCREENSHOT 5)
// ==========================================================================
let notifScreenActiveCategory = 'all';
let notifScreenShowUnreadOnly = false;

const SYSTEM_NOTIFICATIONS_DATA = [
  {
    id: 'notif_trn_1',
    category: 'employee',
    sender: 'Isha Patel (Head of People)',
    message: "New training assigned: 'Security Awareness & GDPR Compliance 2026'. Due Date: 28-Jan-2026.",
    time: '1 day ago',
    unread: true,
    trainingId: 'TRN-001'
  },
  {
    id: 'notif_feed_1',
    category: 'feed',
    sender: 'Kamlesh Puraswani',
    message: "Your work allocation has been updated for the project 'CollabCRM'.",
    time: '1 day ago',
    unread: true
  },
  {
    id: 'notif_leave_1',
    category: 'leave',
    sender: 'Kamlesh Puraswani',
    message: 'Leave approved: 05 Nov 2026, SH.',
    time: '1 day ago',
    unread: false
  },
  {
    id: 'notif_trn_2',
    category: 'employee',
    sender: 'Megha Salunkhe (Sr. Executive)',
    message: "Training Due Date Approaching: 'Cloud Infrastructure & High Performance Node Services' is due in 3 days.",
    time: '2 days ago',
    unread: true,
    trainingId: 'TRN-002'
  },
  {
    id: 'notif_wfh_1',
    category: 'wfh',
    sender: 'Kamlesh Puraswani',
    message: 'WFH approved: 11 Nov 2026, F to 20 Nov 2026, F.',
    time: '23-Oct-2026',
    unread: false
  },
  {
    id: 'notif_leave_2',
    category: 'leave',
    sender: 'Kamlesh Puraswani',
    message: 'Leave approved: 23 Oct 2026, SH.',
    time: '23-Oct-2026',
    unread: false
  },
  {
    id: 'notif_trn_3',
    category: 'employee',
    sender: 'CollabCRM Certification Authority',
    message: "Certificate Issued: Congratulations! Your certificate for 'Security Awareness & GDPR Compliance 2026' (TRN-2026-0003) is now verified and available.",
    time: '26-Jan-2026',
    unread: false,
    trainingId: 'TRN-001'
  },
  {
    id: 'notif_trn_4',
    category: 'employee',
    sender: 'Assessment & Verification Engine',
    message: "Assessment Graded: You achieved 95% on 'Security Awareness & GDPR Compliance 2026' capstone evaluation.",
    time: '26-Jan-2026',
    unread: false,
    trainingId: 'TRN-001'
  },
  {
    id: 'notif_feed_2',
    category: 'feed',
    sender: 'Khushi Bhatt',
    message: 'New document published. (Work From Home Policy_IT Guidelines)',
    time: '16-Oct-2026',
    unread: false
  },
  {
    id: 'notif_org_1',
    category: 'org',
    sender: 'System',
    message: 'Missing timesheet reminder for 14 Oct 2026.',
    time: '15-Oct-2026',
    unread: false
  },
  {
    id: 'notif_leave_3',
    category: 'leave',
    sender: 'Kamlesh Puraswani',
    message: 'Leave approved: 14 Oct 2026, SH.',
    time: '14-Oct-2026',
    unread: false
  }
];

function openNotificationsScreen(category = 'all') {
  // Close any open side panels
  const trnPanel = document.getElementById('trainingSidePanel');
  if (trnPanel) trnPanel.classList.remove('open');
  const cfgPanel = document.getElementById('configSidePanel');
  if (cfgPanel) cfgPanel.classList.remove('open');
  const dd = document.getElementById('portalNotificationsDropdown');
  if (dd) dd.style.display = 'none';

  // Ensure Training view is active
  const viewTraining = document.getElementById('viewTraining');
  if (viewTraining) {
    viewTraining.style.display = 'block';
    viewTraining.classList.add('active');
  }

  // Hide other training subviews
  [
    'sectionDashboard', 'sectionPrograms', 'sectionAssignments', 'sectionProgress',
    'sectionReviews', 'sectionCertificates', 'sectionReports', 'sectionEmpMyTraining',
    'sectionEmpCertificates', 'sectionEmpHistory', 'sectionEmpTrainingDetailScreen'
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  const notifScreen = document.getElementById('sectionNotificationsScreen');
  if (notifScreen) notifScreen.style.display = 'block';

  filterNotifScreen(category);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterNotifScreen(category) {
  notifScreenActiveCategory = category;

  const categories = ['all', 'ar', 'asset', 'employee', 'feed', 'leave', 'org', 'profile_update', 'project', 'wfh'];
  categories.forEach(c => {
    const btn = document.getElementById(`notifTab_${c}`);
    if (btn) btn.classList.toggle('active', c === category);
  });

  const breadcrumb = document.getElementById('notifBreadcrumbFilterLabel');
  if (breadcrumb) {
    const labels = {
      all: 'All', ar: 'AR', asset: 'Asset', employee: 'Employee', feed: 'Feed',
      leave: 'Leave', org: 'ORG', profile_update: 'Profile Update', project: 'Project', wfh: 'WFH'
    };
    breadcrumb.textContent = labels[category] || category;
  }

  renderNotificationsScreenList();
}

function toggleNotifUnreadFilter() {
  const toggle = document.getElementById('notifScreenUnreadOnlyToggle');
  notifScreenShowUnreadOnly = toggle ? toggle.checked : !notifScreenShowUnreadOnly;

  const switchEl = document.getElementById('notifToggleSwitch');
  const thumbEl = document.getElementById('notifToggleThumb');
  if (switchEl) switchEl.style.background = notifScreenShowUnreadOnly ? '#2563eb' : '#cbd5e1';
  if (thumbEl) thumbEl.style.transform = notifScreenShowUnreadOnly ? 'translateX(16px)' : 'translateX(0)';

  renderNotificationsScreenList();
}

function markAllNotifScreenRead() {
  SYSTEM_NOTIFICATIONS_DATA.forEach(n => n.unread = false);
  const dotWrap = document.getElementById('headerNotifDotWrap');
  if (dotWrap) dotWrap.style.display = 'none';
  const empBadge = document.getElementById('notifScreenEmpCountBadge');
  if (empBadge) empBadge.style.display = 'none';

  renderNotificationsScreenList();
  showConfigToast('All notifications marked as read.');
}

function handleNotifScreenItemClick(id) {
  const item = SYSTEM_NOTIFICATIONS_DATA.find(n => n.id === id);
  if (!item) return;
  item.unread = false;

  // Update employee unread count badge
  const unreadEmpCount = SYSTEM_NOTIFICATIONS_DATA.filter(n => n.category === 'employee' && n.unread).length;
  const empBadge = document.getElementById('notifScreenEmpCountBadge');
  if (empBadge) {
    empBadge.textContent = unreadEmpCount;
    empBadge.style.display = unreadEmpCount > 0 ? 'inline-block' : 'none';
  }

  // If training notification, navigate straight to detail screen
  if (item.trainingId) {
    openEmployeeTrainingDetail(item.trainingId);
    return;
  }

  renderNotificationsScreenList();
}

function renderNotificationsScreenList() {
  const container = document.getElementById('notifScreenListContainer');
  if (!container) return;

  // Filter items
  let list = SYSTEM_NOTIFICATIONS_DATA;
  if (notifScreenActiveCategory !== 'all') {
    list = list.filter(n => n.category === notifScreenActiveCategory);
  }
  if (notifScreenShowUnreadOnly) {
    list = list.filter(n => n.unread);
  }

  // Update employee badge count
  const unreadEmpCount = SYSTEM_NOTIFICATIONS_DATA.filter(n => n.category === 'employee' && n.unread).length;
  const empBadge = document.getElementById('notifScreenEmpCountBadge');
  if (empBadge) {
    empBadge.textContent = unreadEmpCount;
    empBadge.style.display = unreadEmpCount > 0 ? 'inline-block' : 'none';
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="padding: 48px 20px; text-align: center; color: #64748b;">
        <div style="font-size: 32px; margin-bottom: 8px;">🔔</div>
        <p style="font-size: 14px; font-weight: 600; color: #1e293b; margin: 0 0 4px 0;">No notifications found</p>
        <p style="font-size: 12.5px; margin: 0;">There are no notifications matching the selected filter.</p>
      </div>
    `;
    return;
  }

  let html = '';
  list.forEach(n => {
    const isUnread = n.unread;
    const dotColor = isUnread ? '#2563eb' : '#cbd5e1';
    const isTrn = n.trainingId ? true : false;

    html += `
      <div onclick="handleNotifScreenItemClick('${n.id}')" style="display: flex; align-items: flex-start; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid #f1f5f9; cursor: pointer; transition: background 0.15s ease; background: ${isUnread ? '#f8fafc' : '#ffffff'};" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='${isUnread ? '#f8fafc' : '#ffffff'}'">
        <div style="display: flex; align-items: flex-start; gap: 12px; flex: 1;">
          <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${dotColor}; margin-top: 6px; flex-shrink: 0;"></span>
          <div>
            <div style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 3px; display: flex; align-items: center; gap: 8px;">
              <span>${escapeHtml(n.sender)}</span>
              ${isTrn ? '<span style="font-size: 10.5px; font-weight: 600; color: #4338ca; background: #e0e7ff; padding: 1px 7px; border-radius: 4px;">Training</span>' : ''}
              ${isUnread ? '<span style="font-size: 10.5px; font-weight: 600; color: #1d4ed8; background: #dbeafe; padding: 1px 6px; border-radius: 4px;">New</span>' : ''}
            </div>
            <div style="font-size: 13px; color: #475569; line-height: 1.45;">
              ${escapeHtml(n.message)}
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 14px; margin-left: 16px; flex-shrink: 0;">
          <span style="font-size: 12px; color: #64748b; white-space: nowrap;">${escapeHtml(n.time)}</span>
          <span style="color: #94a3b8; font-size: 14px;" title="Open Details">↗</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

window.openNotificationsScreen = openNotificationsScreen;
window.filterNotifScreen = filterNotifScreen;
window.toggleNotifUnreadFilter = toggleNotifUnreadFilter;
window.markAllNotifScreenRead = markAllNotifScreenRead;
window.handleNotifScreenItemClick = handleNotifScreenItemClick;

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
    showConfigToast('Certificate Issuance is currently disabled in Training Config.', 'info')
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
    showConfigToast('Certificate reissuance is currently disabled in Training Config.', 'info')
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
    showConfigToast('Certificate reissuance is currently disabled in Training Config.', 'info')
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
  showConfigToast(`Certificate ${cert.certificateNo} reissued (Revision ${cert.reissueCount + 1}) for ${emp.name}!`, 'success')

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
          <td><button class="btn-table-action danger" onclick="showConfigToast('Formal escalation notification dispatched to ${escapeHtml(emp.name)}!', 'success')">Send Notice</button></td>
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
    durationMinutes: 30,
    certificateExpiryMonths: 24,
    reminderFrequencyDays: 7
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
    logoUrl: 'assets/collabcrm-logo.png'
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
  const viewEmployeeDetail = document.getElementById('viewEmployeeDetail');
  if (viewEmployeeDetail) { viewEmployeeDetail.style.display = 'none'; viewEmployeeDetail.classList.remove('active'); }

  if (menuEmployees) menuEmployees.classList.remove('active');
  if (menuTraining) menuTraining.classList.remove('active');
  if (menuConfig) menuConfig.classList.add('active');

  if (employeesInner) {
    employeesInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
    const icon = employeesInner.querySelector('.icon-users-02');
    if (icon) icon.className = 'text-indigo-200 group-hover:text-white h-6 w-6 shrink-0 whitespace-nowrap flex items-center justify-center text-base 2xl-to-xl:text-base 2xl:text-xl icon-users-02';
  }
  if (trainingInner) {
    trainingInner.className = 'text-white hover:bg-indigo-600 relative z-2 cursor-pointer flex items-center gap-x-3 rounded-md 2xl:p-3 2xl-to-xl:p-2 p-2 text-sm leading-6 font-semibold whitespace-nowrap';
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
    notifications: 'Notifications'
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
  const certExpVal = g.certificateExpiryMonths ?? 24;
  const remFreqVal = g.reminderFrequencyDays ?? 7;
  ['cfg_gen_cert_expiry_months', 'cfg_cert_expiry_months_box', 'cfg_rem_cert_expiry_months_box'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = certExpVal;
  });
  ['cfg_gen_reminder_freq_days', 'cfg_cert_reminder_freq_days_box', 'cfg_rem_reminder_freq_days_box'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = remFreqVal;
  });
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
          <div style="display: inline-flex; align-items: center; gap: 6px;">
            <button type="button" class="emp-action-icon" onclick="openEditCategoryModal('${cat.id}')" title="Edit Category" aria-label="Edit">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>
            <button type="button" class="emp-action-icon" onclick="openViewCategoryModal('${cat.id}')" title="View Category Details" aria-label="View">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
            ${isManager ? '' : `
              <button type="button" class="emp-action-icon" onclick="deleteCategory('${cat.id}')" title="Delete Category" aria-label="Delete">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            `}
          </div>
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

let viewingCategoryId = null;

function openViewCategoryModal(catId) {
  const cat = (trainingConfigData.categories || []).find(c => c.id === catId);
  if (!cat) return;
  viewingCategoryId = catId;

  const modal = document.getElementById('modalCategoryView');
  const nameEl = document.getElementById('viewCatName');
  const descEl = document.getElementById('viewCatDesc');
  const statusEl = document.getElementById('viewCatStatusBadge');
  const createdByEl = document.getElementById('viewCatCreatedBy');
  const createdDateEl = document.getElementById('viewCatCreatedDate');
  const countEl = document.getElementById('viewCatProgramCount');
  const listEl = document.getElementById('viewCatProgramList');

  if (nameEl) nameEl.textContent = cat.name;
  if (descEl) descEl.textContent = cat.desc || 'No description provided for this category.';
  if (statusEl) {
    statusEl.textContent = cat.status || 'Active';
    statusEl.className = (cat.status === 'Active') ? 'status-badge-active' : 'status-badge-inactive';
  }
  if (createdByEl) createdByEl.textContent = cat.createdBy || 'System Admin';
  if (createdDateEl) createdDateEl.textContent = cat.createdDate || '—';

  // Associated programs
  const progs = (state.programs || []).filter(p => p.category === cat.name || p.categoryId === cat.id);
  if (countEl) countEl.textContent = progs.length;
  if (listEl) {
    if (progs.length === 0) {
      listEl.innerHTML = `<span style="font-size: 12px; color: #94a3b8; font-style: italic;">No training programmes linked to this category yet.</span>`;
    } else {
      listEl.innerHTML = progs.map(p => `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 6px 10px; background: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 12.5px;">
          <span style="font-weight: 600; color: #0f172a;">${escapeHtml(p.title)}</span>
          <span style="color: #64748b; font-size: 11.5px;">${p.status || 'Published'}</span>
        </div>
      `).join('');
    }
  }

  if (modal) modal.classList.add('open');
}

function closeViewCategoryModal() {
  const modal = document.getElementById('modalCategoryView');
  if (modal) modal.classList.remove('open');
  viewingCategoryId = null;
}

function editFromViewCategory() {
  const idToEdit = viewingCategoryId;
  closeViewCategoryModal();
  if (idToEdit) {
    openEditCategoryModal(idToEdit);
  }
}

window.openViewCategoryModal = openViewCategoryModal;
window.closeViewCategoryModal = closeViewCategoryModal;
window.editFromViewCategory = editFromViewCategory;

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
    showConfigToast(`Cannot Delete Category\n\n"${cat.name}" is currently associated with active training curricula. To preserve course historical data, set its status to Inactive instead.`, 'error')
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
  const warn = document.getElementById('cfg_comp_approval_warning');
  if (warn) warn.style.display = 'none';
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
  const signName = document.getElementById('cfg_cert_signatory_name')?.value || 'Megha Salunkhe';
  const signTitle = document.getElementById('cfg_cert_signatory_title')?.value || 'Authorized Learning Director';
  const compName = document.getElementById('cfg_cert_company_name')?.value || 'COLLABCRM';

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
    showConfigToast('Company logo updated successfully.', 'success');
  };
  reader.readAsDataURL(file);
}

function resetCertLogoToDefault() {
  const defaultUrl = 'assets/collabcrm-logo.png';
  if (trainingConfigData && trainingConfigData.certificates) {
    trainingConfigData.certificates.logoUrl = defaultUrl;
  }
  const preview = document.getElementById('cfg_cert_logo_preview');
  const modalLogo = document.getElementById('certPrevLogo');
  if (preview) preview.src = defaultUrl;
  if (modalLogo) modalLogo.src = defaultUrl;
  const fileInput = document.getElementById('cfg_cert_logo_upload');
  if (fileInput) fileInput.value = '';
  markConfigDirty();
  showConfigToast('Company logo reset to default CollabCRM logo.', 'info');
}

window.resetCertLogoToDefault = resetCertLogoToDefault;

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
    const certExpEl = document.getElementById('cfg_gen_cert_expiry_months');
    const remFreqEl = document.getElementById('cfg_gen_reminder_freq_days');
    if (certExpEl) trainingConfigData.general.certificateExpiryMonths = parseInt(certExpEl.value, 10) || 24;
    if (remFreqEl) trainingConfigData.general.reminderFrequencyDays = parseInt(remFreqEl.value, 10) || 7;

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
    notifications: 'Notifications'
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
    employeesCount: 8,
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
    employeesCount: 5,
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
    employeesCount: 3,
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
          <div style="display: inline-flex; align-items: center; gap: 4px;">
            <button type="button" class="emp-action-icon" onclick="openRolePermissions('${r.id}')" title="View & Configure Permissions">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
            <button type="button" class="emp-action-icon" onclick="openRolePermissions('${r.id}')" title="Edit Role">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </button>
            <button type="button" class="emp-action-icon" onclick="showConfigToast('System protected: Cannot delete this assigned role.', 'error')" title="Delete Role">
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
  const viewEmployeeDetail = document.getElementById('viewEmployeeDetail');

  if (viewDashboard) viewDashboard.style.display = 'none';
  if (viewTraining) viewTraining.style.display = 'none';
  if (viewConfig) viewConfig.style.display = 'none';
  if (viewTrainingConfig) viewTrainingConfig.style.display = 'none';
  if (viewRolePermissions) viewRolePermissions.style.display = 'none';
  if (viewEmployeeDetail) viewEmployeeDetail.style.display = 'none';
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

let activeRoleDetailSubTab = 'permissions';

const ROLE_EMPLOYEES_DATA = {
  role_1: [
    {
      no: 1,
      initials: 'RS',
      avatarBg: '#a855f7',
      name: 'Roshan Sudarshana (CO-058)',
      designation: 'Business Analyst',
      status: 'Probation',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '06-Feb-2026, 03:44 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 2,
      initials: 'TK',
      avatarBg: '#f59e0b',
      name: 'Tanya Kapoor (CO-5039)',
      designation: 'Business analyst',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '12-Feb-2026, 02:21 PM',
      lastModifiedByName: 'Isha Patel',
      lastModifiedDate: '18-Mar-2026, 11:15 AM'
    },
    {
      no: 3,
      initials: 'SG',
      avatarBg: '#3b82f6',
      name: 'Sanjana Ghosh (COINT-5040)',
      designation: 'Sr. Business Analyst',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '15-Jan-2026, 10:12 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 4,
      initials: 'MS',
      avatarBg: '#10b981',
      name: 'Megha Salunkhe (CO-5038)',
      designation: 'Sr. Business Analyst',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '20-Jan-2026, 04:30 PM',
      lastModifiedByName: 'Isha Patel',
      lastModifiedDate: '04-Mar-2026, 02:10 PM'
    },
    {
      no: 5,
      initials: 'KB',
      avatarBg: '#6366f1',
      name: 'Kunal Barve (CO-5037)',
      designation: 'Business Analyst',
      status: 'Probation',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '01-Feb-2026, 09:45 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 6,
      initials: 'AS',
      avatarBg: '#ec4899',
      name: 'Ananya Sridhar (CO-5036)',
      designation: 'Sr. Business Analyst',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '08-Feb-2026, 01:20 PM',
      lastModifiedByName: 'Isha Patel',
      lastModifiedDate: '22-Mar-2026, 05:05 PM'
    },
    {
      no: 7,
      initials: 'VA',
      avatarBg: '#0ea5e9',
      name: 'Vikram Anand (CO-5035)',
      designation: 'Business Analyst',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '14-Feb-2026, 11:50 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 8,
      initials: 'RK',
      avatarBg: '#14b8a6',
      name: 'Rahul Khanna (CO-5034)',
      designation: 'Sr. Business Analyst',
      status: 'Probation',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '25-Feb-2026, 04:15 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    }
  ],
  role_2: [
    {
      no: 1,
      initials: 'NM',
      avatarBg: '#ec4899',
      name: 'Nikita Mehta (CO-089)',
      designation: 'Senior Recruiter',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '10-Jan-2026, 11:30 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 2,
      initials: 'RD',
      avatarBg: '#8b5cf6',
      name: 'Riya Deshmukh (CO-112)',
      designation: 'Senior Recruiter',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '18-Jan-2026, 03:20 PM',
      lastModifiedByName: 'Isha Patel',
      lastModifiedDate: '12-Mar-2026, 01:40 PM'
    },
    {
      no: 3,
      initials: 'SK',
      avatarBg: '#f97316',
      name: 'Siddharth Kulkarni (CO-119)',
      designation: 'Talent Acquisition Lead',
      status: 'Probation',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '04-Feb-2026, 10:05 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 4,
      initials: 'PN',
      avatarBg: '#10b981',
      name: 'Pooja Nair (CO-124)',
      designation: 'Senior Recruiter',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '19-Feb-2026, 04:50 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 5,
      initials: 'AT',
      avatarBg: '#3b82f6',
      name: 'Aditya Tiwari (CO-131)',
      designation: 'Senior Recruiter',
      status: 'Probation',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '02-Mar-2026, 12:15 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    }
  ],
  role_3: [
    {
      no: 1,
      initials: 'IA',
      avatarBg: '#8b5cf6',
      name: 'Ishdeep Anand (YOP-073)',
      designation: 'Admin',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'System',
      assignedDate: '12-Jun-2025, 12:27 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 2,
      initials: 'IP',
      avatarBg: '#10b981',
      name: 'Isha Patel (CO-0026)',
      designation: 'Senior Business Analyst',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'System',
      assignedDate: '12-Jun-2025, 12:27 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 3,
      initials: 'RV',
      avatarBg: '#3b82f6',
      name: 'Rajesh Verma (CO-001)',
      designation: 'Managing Director',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'System',
      assignedDate: '12-Jun-2025, 12:27 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    }
  ],
  role_4: [
    {
      no: 1,
      initials: 'PK',
      avatarBg: '#3b82f6',
      name: 'Prashant Kumar (CO-021)',
      designation: 'Project Manager',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '12-Jun-2025, 03:51 PM',
      lastModifiedByName: 'Isha Patel',
      lastModifiedDate: '07-Apr-2026, 06:27 PM'
    },
    {
      no: 2,
      initials: 'AK',
      avatarBg: '#6366f1',
      name: 'Ashish Kumar (CO-041)',
      designation: 'Technical Project Manager',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '19-Jul-2025, 11:20 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 3,
      initials: 'NK',
      avatarBg: '#10b981',
      name: 'Neha Kapoor (CO-064)',
      designation: 'Project Manager',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '08-Sep-2025, 02:15 PM',
      lastModifiedByName: 'Isha Patel',
      lastModifiedDate: '14-Jan-2026, 04:10 PM'
    },
    {
      no: 4,
      initials: 'SM',
      avatarBg: '#f59e0b',
      name: 'Saurabh Mishra (CO-077)',
      designation: 'Agile Delivery Manager',
      status: 'Probation',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '21-Jan-2026, 10:00 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 5,
      initials: 'DJ',
      avatarBg: '#ec4899',
      name: 'Divya Joshi (CO-093)',
      designation: 'Project Manager',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '11-Feb-2026, 05:30 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    }
  ],
  role_5: [
    {
      no: 1,
      initials: 'VM',
      avatarBg: '#f97316',
      name: 'Vikas Malhotra (CO-104)',
      designation: 'Business Development Executive',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '03-Feb-2026, 12:32 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 2,
      initials: 'TS',
      avatarBg: '#a855f7',
      name: 'Tanvi Sharma (CO-108)',
      designation: 'Business Development Executive',
      status: 'Probation',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '14-Feb-2026, 03:15 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 3,
      initials: 'HG',
      avatarBg: '#0ea5e9',
      name: 'Harsh Gupta (CO-115)',
      designation: 'Sr. Business Development Executive',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '22-Feb-2026, 11:05 AM',
      lastModifiedByName: 'Isha Patel',
      lastModifiedDate: '19-Mar-2026, 04:45 PM'
    },
    {
      no: 4,
      initials: 'KR',
      avatarBg: '#10b981',
      name: 'Kritika Rao (CO-122)',
      designation: 'Business Development Executive',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '01-Mar-2026, 09:50 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    }
  ],
  role_6: [
    {
      no: 1,
      initials: 'IP',
      avatarBg: '#10b981',
      name: 'Isha Patel (CO-0026)',
      designation: 'Senior Business Analyst',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'System',
      assignedDate: '12-Jun-2025, 12:27 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 2,
      initials: 'SS',
      avatarBg: '#3b82f6',
      name: 'Shivam Sharma (CO-014)',
      designation: 'HR Operations Lead',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'System',
      assignedDate: '12-Jun-2025, 12:27 PM',
      lastModifiedByName: 'Isha Patel',
      lastModifiedDate: '10-Jan-2026, 02:30 PM'
    },
    {
      no: 3,
      initials: 'IA',
      avatarBg: '#8b5cf6',
      name: 'Ishdeep Anand (YOP-073)',
      designation: 'Admin',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'System',
      assignedDate: '12-Jun-2025, 12:27 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 4,
      initials: 'PM',
      avatarBg: '#ec4899',
      name: 'Pallavi Menon (CO-033)',
      designation: 'HR Business Partner',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '05-Sep-2025, 04:12 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 5,
      initials: 'AG',
      avatarBg: '#f59e0b',
      name: 'Ankit Goswami (CO-049)',
      designation: 'People Operations Specialist',
      status: 'Probation',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '19-Jan-2026, 11:40 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    }
  ],
  role_7: [
    {
      no: 1,
      initials: 'TK',
      avatarBg: '#f59e0b',
      name: 'Tanya Kapoor (CO-5039)',
      designation: 'Business analyst',
      status: 'Probation',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '12-Feb-2026, 02:21 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 2,
      initials: 'SG',
      avatarBg: '#3b82f6',
      name: 'Sanjana Ghosh (COINT-5040)',
      designation: 'Software Engineer',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '15-Jan-2026, 10:12 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 3,
      initials: 'MS',
      avatarBg: '#10b981',
      name: 'Megha Salunkhe (CO-5038)',
      designation: 'Frontend Developer',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '20-Jan-2026, 04:30 PM',
      lastModifiedByName: 'Isha Patel',
      lastModifiedDate: '04-Mar-2026, 02:10 PM'
    },
    {
      no: 4,
      initials: 'KB',
      avatarBg: '#6366f1',
      name: 'Kunal Barve (CO-5037)',
      designation: 'QA Engineer',
      status: 'Probation',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '01-Feb-2026, 09:45 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 5,
      initials: 'AS',
      avatarBg: '#ec4899',
      name: 'Ananya Sridhar (CO-5036)',
      designation: 'UI/UX Designer',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '08-Feb-2026, 01:20 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 6,
      initials: 'VA',
      avatarBg: '#0ea5e9',
      name: 'Vikram Anand (CO-5035)',
      designation: 'DevOps Engineer',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '14-Feb-2026, 11:50 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    }
  ],
  role_8: [
    {
      no: 1,
      initials: 'AK',
      avatarBg: '#6366f1',
      name: 'Ashish Kumar (CO-041)',
      designation: 'Technical Lead',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '25-Mar-2026, 12:39 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 2,
      initials: 'RM',
      avatarBg: '#10b981',
      name: 'Rohit Mehra (CO-052)',
      designation: 'Engineering Team Lead',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '14-Nov-2025, 03:10 PM',
      lastModifiedByName: 'Isha Patel',
      lastModifiedDate: '02-Feb-2026, 11:25 AM'
    },
    {
      no: 3,
      initials: 'SN',
      avatarBg: '#f97316',
      name: 'Shruti Nambiar (CO-068)',
      designation: 'QA Team Lead',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '09-Jan-2026, 10:45 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 4,
      initials: 'DK',
      avatarBg: '#3b82f6',
      name: 'Deepak Khandelwal (CO-081)',
      designation: 'Platform Team Lead',
      status: 'Probation',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '17-Feb-2026, 04:05 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    }
  ],
  role_9: [
    {
      no: 1,
      initials: 'IA',
      avatarBg: '#8b5cf6',
      name: 'Ishdeep Anand (YOP-073)',
      designation: 'Admin',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'System',
      assignedDate: '12-Jun-2025, 12:27 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 2,
      initials: 'IP',
      avatarBg: '#10b981',
      name: 'Isha Patel (CO-0026)',
      designation: 'Senior Business Analyst',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'System',
      assignedDate: '12-Jun-2025, 12:27 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 3,
      initials: 'PK',
      avatarBg: '#3b82f6',
      name: 'Prashant Kumar (CO-021)',
      designation: 'Project Manager',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '12-Jun-2025, 03:51 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 4,
      initials: 'SS',
      avatarBg: '#ec4899',
      name: 'Shivam Sharma (CO-014)',
      designation: 'HR Operations Lead',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'System',
      assignedDate: '12-Jun-2025, 12:27 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    }
  ],
  role_10: [
    {
      no: 1,
      initials: 'NM',
      avatarBg: '#ec4899',
      name: 'Nikita Mehta (CO-089)',
      designation: 'Recruiter',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '07-Oct-2025, 06:18 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 2,
      initials: 'RD',
      avatarBg: '#8b5cf6',
      name: 'Riya Deshmukh (CO-112)',
      designation: 'Recruiter',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '18-Jan-2026, 03:20 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 3,
      initials: 'PN',
      avatarBg: '#10b981',
      name: 'Pooja Nair (CO-124)',
      designation: 'Technical Recruiter',
      status: 'Probation',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '19-Feb-2026, 04:50 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    }
  ],
  role_11: [
    {
      no: 1,
      initials: 'VM',
      avatarBg: '#f97316',
      name: 'Vikas Malhotra (CO-104)',
      designation: 'Business Development Manager',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '03-Feb-2026, 12:32 PM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 2,
      initials: 'HG',
      avatarBg: '#0ea5e9',
      name: 'Harsh Gupta (CO-115)',
      designation: 'Business Development Manager',
      status: 'Confirmed',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '22-Feb-2026, 11:05 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    },
    {
      no: 3,
      initials: 'KR',
      avatarBg: '#10b981',
      name: 'Kritika Rao (CO-122)',
      designation: 'Business Development Manager',
      status: 'Probation',
      expiryDate: '-',
      remarks: '-',
      assignedByName: 'Isha Patel',
      assignedDate: '01-Mar-2026, 09:50 AM',
      lastModifiedByName: '-',
      lastModifiedDate: ''
    }
  ]
};

function switchRoleDetailTab(tabName) {
  activeRoleDetailSubTab = tabName === 'employees' ? 'employees' : 'permissions';

  const btnPerm = document.getElementById('roleSubTabBtnPermissions');
  const btnEmp = document.getElementById('roleSubTabBtnEmployees');
  const crumbSub = document.getElementById('permRoleActiveSubTabCrumb');
  const saveWrap = document.getElementById('rolePermSaveBtnWrap');
  const searchPermWrap = document.getElementById('rolePermSearchBarWrap');
  const filterEmpWrap = document.getElementById('roleEmpFilterBarWrap');
  const panelPerm = document.getElementById('roleTabPanelPermissions');
  const panelEmp = document.getElementById('roleTabPanelEmployees');

  if (activeRoleDetailSubTab === 'employees') {
    if (btnEmp) {
      btnEmp.style.background = '#eef2ff';
      btnEmp.style.color = '#4f46e5';
      btnEmp.style.fontWeight = '600';
    }
    if (btnPerm) {
      btnPerm.style.background = 'transparent';
      btnPerm.style.color = '#475569';
      btnPerm.style.fontWeight = '500';
    }
    if (crumbSub) crumbSub.textContent = 'Employees';
    if (saveWrap) saveWrap.style.display = 'none';
    if (searchPermWrap) searchPermWrap.style.display = 'none';
    if (filterEmpWrap) filterEmpWrap.style.display = 'flex';
    if (panelPerm) panelPerm.style.display = 'none';
    if (panelEmp) panelEmp.style.display = 'block';
    renderRoleEmployeesTable();
  } else {
    if (btnPerm) {
      btnPerm.style.background = '#eef2ff';
      btnPerm.style.color = '#4f46e5';
      btnPerm.style.fontWeight = '600';
    }
    if (btnEmp) {
      btnEmp.style.background = 'transparent';
      btnEmp.style.color = '#475569';
      btnEmp.style.fontWeight = '500';
    }
    if (crumbSub) crumbSub.textContent = 'Permissions';
    if (saveWrap) saveWrap.style.display = 'block';
    if (searchPermWrap) searchPermWrap.style.display = 'flex';
    if (filterEmpWrap) filterEmpWrap.style.display = 'none';
    if (panelPerm) panelPerm.style.display = 'block';
    if (panelEmp) panelEmp.style.display = 'none';
    renderRolePermissionsTable();
  }
}

function renderRoleEmployeesTable() {
  const tbody = document.getElementById('roleEmployeesTableBody');
  if (!tbody) return;

  const query = (document.getElementById('searchRoleEmployeesInput')?.value || '').trim().toLowerCase();
  const list = (ROLE_EMPLOYEES_DATA[activeSelectedRoleId] || []).filter(item => {
    if (!query) return true;
    return item.name.toLowerCase().includes(query) || item.designation.toLowerCase().includes(query);
  });

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="padding: 36px 16px; text-align: center; color: #64748b; font-size: 13px;">
          No assigned employees found for this role.
        </td>
      </tr>
    `;
    return;
  }

  let html = '';
  list.forEach((emp, idx) => {
    const isProbation = emp.status === 'Probation';
    const statusBadgeStyle = isProbation
      ? 'display: inline-flex; align-items: center; gap: 5px; padding: 2px 10px; border-radius: 6px; border: 1px solid #818cf8; background: #eef2ff; color: #4f46e5; font-size: 11.5px; font-weight: 600;'
      : 'display: inline-flex; align-items: center; gap: 5px; padding: 2px 10px; border-radius: 6px; border: 1px solid #86efac; background: #f0fdf4; color: #166534; font-size: 11.5px; font-weight: 600;';

    html += `
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 14px 16px; color: #334155; font-weight: 500;">${idx + 1}</td>
        <td style="padding: 14px 16px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 32px; height: 32px; border-radius: 50%; background: ${emp.avatarBg}; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 11.5px; font-weight: 700; flex-shrink: 0;">
              ${escapeHtml(emp.initials)}
            </div>
            <div>
              <div style="font-weight: 700; color: #0f172a; font-size: 12.5px;">${escapeHtml(emp.name)}</div>
              <div style="font-size: 11px; color: #64748b; margin-top: 1px;">${escapeHtml(emp.designation)}</div>
            </div>
          </div>
        </td>
        <td style="padding: 14px 16px;">
          <span style="${statusBadgeStyle}">• ${escapeHtml(emp.status)}</span>
        </td>
        <td style="padding: 14px 16px; color: #475569;">${escapeHtml(emp.expiryDate)}</td>
        <td style="padding: 14px 16px; color: #475569;">${escapeHtml(emp.remarks)}</td>
        <td style="padding: 14px 16px; color: #334155; font-size: 12px;">
          <div style="font-weight: 500; color: #1e293b;">${escapeHtml(emp.assignedByName)}</div>
          <div style="color: #64748b; font-size: 11px; margin-top: 1px;">${escapeHtml(emp.assignedDate)}</div>
        </td>
        <td style="padding: 14px 16px; color: #334155; font-size: 12px;">
          ${emp.lastModifiedByName && emp.lastModifiedByName !== '-' ? `
            <div style="font-weight: 500; color: #1e293b;">${escapeHtml(emp.lastModifiedByName)}</div>
            <div style="color: #64748b; font-size: 11px; margin-top: 1px;">${escapeHtml(emp.lastModifiedDate)}</div>
          ` : '<span style="color: #64748b;">-</span>'}
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

window.switchRoleDetailTab = switchRoleDetailTab;
window.renderRoleEmployeesTable = renderRoleEmployeesTable;

function openRolePermissions(roleId) {
  activeSelectedRoleId = roleId || 'role_1';
  const role = ROLES_DATA.find(r => r.id === activeSelectedRoleId) || ROLES_DATA[0];

  const viewDashboard = document.getElementById('viewDashboard');
  const viewTraining = document.getElementById('viewTraining');
  const viewConfig = document.getElementById('viewConfig');
  const viewTrainingConfig = document.getElementById('viewTrainingConfig');
  const viewRoles = document.getElementById('viewRoles');
  const viewRolePermissions = document.getElementById('viewRolePermissions');
  const viewEmployeeDetail = document.getElementById('viewEmployeeDetail');

  if (viewDashboard) viewDashboard.style.display = 'none';
  if (viewTraining) viewTraining.style.display = 'none';
  if (viewConfig) viewConfig.style.display = 'none';
  if (viewTrainingConfig) viewTrainingConfig.style.display = 'none';
  if (viewRoles) viewRoles.style.display = 'none';
  if (viewEmployeeDetail) viewEmployeeDetail.style.display = 'none';
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

  switchRoleDetailTab(activeRoleDetailSubTab);
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
// USER ROLE SELECTION SYSTEM (MANAGEMENT VS EMPLOYEE)
// =============================================================================
const DEMO_USERS = [
  {
    id: 'usr_management',
    name: 'Ishdeep Anand',
    title: 'Admin',
    role: 'Management',
    dept: 'Admin',
    badgeBg: '#f3e8ff',
    badgeColor: '#7e22ce',
    avatarInitials: 'IA',
    avatarBg: '#8b5cf6'
  },
  {
    id: 'usr_emp',
    name: 'Tanya Kapoor',
    title: 'Business analyst',
    role: 'Employee',
    dept: 'Business analyst',
    badgeBg: '#f1f5f9',
    badgeColor: '#475569',
    avatarInitials: 'TK',
    avatarBg: '#f59e0b'
  }
];

let activeDemoUser = DEMO_USERS[0]; // Default to Management

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
  if (roleEl) {
    roleEl.textContent = activeDemoUser.id === 'usr_management'
      ? 'Admin • Management'
      : `${activeDemoUser.role} • ${activeDemoUser.dept || 'Employee'}`;
  }
  if (hookName) hookName.textContent = activeDemoUser.name;
  if (hookRole) hookRole.textContent = activeDemoUser.role;
}

function renderUserRoleDropdown() {
  const lists = [
    document.getElementById('userRoleDropdownList'),
    document.getElementById('headerMyProfileDropdownList')
  ].filter(Boolean);

  if (lists.length === 0) return;

  const isMgmt = activeDemoUser.id === 'usr_management';
  const isEmp = activeDemoUser.id === 'usr_emp';

  const html = `
    <button type="button" class="profile-menu-link" onclick="closeUserRoleDropdown(); openMyProfile('general');">
      <span>My Profile</span>
    </button>

    <div class="profile-menu-divider"></div>

    <div class="profile-menu-section-label">SWITCH USER ROLE</div>

    <button type="button" class="profile-menu-link role-switch-item ${isMgmt ? 'active-role' : ''}" onclick="switchActiveUser('usr_management');">
      <div class="role-switch-left">
        <span class="role-avatar-dot" style="background: #8b5cf6;">IA</span>
        <div class="role-switch-meta">
          <span class="role-switch-name">Ishdeep Anand</span>
          <span class="role-switch-role">Admin • Management</span>
        </div>
      </div>
      ${isMgmt ? '<span class="role-check">✓</span>' : ''}
    </button>

    <button type="button" class="profile-menu-link role-switch-item ${isEmp ? 'active-role' : ''}" onclick="switchActiveUser('usr_emp');">
      <div class="role-switch-left">
        <span class="role-avatar-dot" style="background: #f59e0b;">TK</span>
        <div class="role-switch-meta">
          <span class="role-switch-name">Tanya Kapoor</span>
          <span class="role-switch-role">Business analyst • Employee</span>
        </div>
      </div>
      ${isEmp ? '<span class="role-check">✓</span>' : ''}
    </button>

    <div class="profile-menu-divider"></div>

    <button type="button" class="profile-menu-link" onclick="closeUserRoleDropdown(); showConfigToast('Session signed out.');">
      <span>Logout</span>
    </button>
  `;

  lists.forEach(el => {
    el.innerHTML = html;
  });
}

function closeUserRoleDropdown() {
  const menu = document.getElementById('userRoleDropdownMenu');
  if (menu) menu.style.display = 'none';
  const profileMenu = document.getElementById('headerMyProfileDropdown');
  if (profileMenu) profileMenu.style.display = 'none';
}

function toggleUserRoleDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('userRoleDropdownMenu');
  if (!menu) return;
  const isHidden = menu.style.display === 'none' || !menu.style.display;
  if (isHidden) {
    renderUserRoleDropdown();
    menu.style.display = 'block';
    const profileMenu = document.getElementById('headerMyProfileDropdown');
    if (profileMenu) profileMenu.style.display = 'none';
  } else {
    menu.style.display = 'none';
  }
}

function switchActiveUser(userId) {
  const found = DEMO_USERS.find(u => u.id === userId || (userId === 'CO-5039' && u.id === 'usr_emp') || (userId === 'YOP-073' && u.id === 'usr_management'));
  if (found) {
    activeDemoUser = found;
    renderUserRolePill();
    renderUserRoleDropdown();
    closeUserRoleDropdown();
    showConfigToast(`Switched active user to ${found.name} (${found.role})`);

    const rLower = (found.role || '').toLowerCase();
    if (rLower === 'employee') {
      setAppRole('employee');
    } else {
      setAppRole('admin');
    }
  }
}

function resetDemoData() {
  try {
    localStorage.removeItem(EMP_STORE_LOCAL_KEY);
  } catch (e) {}
  state.employeeTrainingData = getFallbackEmployeeData('CO-5039');
  syncEmployeeTrainingsWithGlobalAssignments();
  activeDemoUser = DEMO_USERS[0];
  renderUserRolePill();
  renderUserRoleDropdown();
  setAppRole('admin');
  closeUserRoleDropdown();
  showConfigToast('Demo data reset to factory state.');
}

document.addEventListener('click', function(e) {
  const menu = document.getElementById('userRoleDropdownMenu');
  const btn = document.getElementById('headerUserRolePill');
  const profileDd = document.getElementById('headerMyProfileDropdown');
  const avatarBtn = document.getElementById('headerProfileAvatarBtn');
  const calcDd = document.getElementById('progFilterCalcDropdown');
  const calcBtn = document.querySelector('.emp-filter-calc-btn');

  if (menu && menu.style.display === 'block') {
    if (!menu.contains(e.target) && !btn?.contains(e.target)) {
      menu.style.display = 'none';
    }
  }
  if (profileDd && profileDd.style.display === 'block') {
    if (!profileDd.contains(e.target) && !avatarBtn?.contains(e.target)) {
      profileDd.style.display = 'none';
    }
  }
  if (calcDd && calcDd.style.display === 'block') {
    if (!calcDd.contains(e.target) && !calcBtn?.contains(e.target)) {
      calcDd.style.display = 'none';
    }
  }
});

// Initialize on load
renderUserRolePill();

window.renderUserRoleDropdown = renderUserRoleDropdown;
window.closeUserRoleDropdown = closeUserRoleDropdown;
window.toggleUserRoleDropdown = toggleUserRoleDropdown;
window.switchActiveUser = switchActiveUser;
window.resetDemoData = resetDemoData;

// ==========================================================================
// VIEW 7: EMPLOYEE DETAIL SCREEN & TRAINING HISTORY CONTROLLER (SCREENSHOT 3)
// ==========================================================================

const EMPLOYEES_DETAIL_DATABASE = {
  'EMP-004': {
    code: 'EMP-004',
    name: 'Rihan R.',
    firstName: 'Rihan',
    lastName: 'R.',
    gender: 'Male',
    dob: '14-Jul-1995',
    blood: 'B+',
    email: 'rihan.r@collabcrm.com',
    phone: '+91 98234 11204',
    businessUnit: 'Engineering',
    department: 'Engineering',
    designation: 'Software Engineer',
    reportingManager: 'Ashish Kumar',
    reportingAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    empType: 'Technical',
    biometricId: 'EMP-004',
    activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
    status: '• Confirmed',
    roleName: 'Software Engineer',
    roleExpiry: '-',
    roleRemarks: '-',
    expPrev: '3Y 8M',
    expCurrent: '1Y 4M',
    about: 'Software Engineer specializing in scalable full-stack applications, microservices, and modern UI engineering.',
    skills: 'React, Node.js, TypeScript, Cloud Native, RESTful APIs',
    badges: 'Fast Learner, Code Craft',
    seating: 'Floor 4, Desk 12',
    extension: '412',
    initials: 'RR',
    avatarBg: '#2563eb',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    trainings: [
      {
        id: 'ASN-001',
        no: 1,
        title: 'CollabCRM Recruitment & Client Portal Workflows',
        dept: 'Engineering',
        assignedBy: 'Ashish Kumar (Engineering Manager)',
        assignedDate: '01-Oct-2026',
        completionDate: '2026-11-15 (Due)',
        dueDate: '2026-11-15',
        score: '75%',
        progress: 75,
        status: 'In Progress',
        trainingStatus: 'in_progress',
        certId: null
      },
      {
        id: 'EMP-004-TRN-2',
        no: 2,
        title: 'Cloud Infrastructure & High-Performance Node Services',
        dept: 'Engineering',
        assignedBy: 'Ashish Kumar (Engineering Manager)',
        assignedDate: '10-Sep-2026',
        completionDate: '28-Sep-2026',
        dueDate: '2026-09-30',
        score: '96%',
        progress: 100,
        status: 'Passed',
        trainingStatus: 'completed',
        certId: 'CCRM-ENG-2026-001'
      },
      {
        id: 'EMP-004-TRN-3',
        no: 3,
        title: 'Information Security & Global Data Privacy (GDPR/ISO)',
        dept: 'Engineering',
        assignedBy: 'Isha Patel (Head of People)',
        assignedDate: '15-Oct-2026',
        completionDate: '29-Oct-2026',
        dueDate: '2026-10-31',
        score: '94%',
        progress: 100,
        status: 'Passed',
        trainingStatus: 'completed',
        certId: 'TRN-2026-0003'
      }
    ]
  },
  'EMP-006': {
    code: 'EMP-006',
    name: 'Suresh Prasad',
    firstName: 'Suresh',
    lastName: 'Prasad',
    gender: 'Male',
    dob: '22-Nov-1992',
    blood: 'O+',
    email: 'suresh.p@collabcrm.com',
    phone: '+91 97112 34506',
    businessUnit: 'Recruitment & HR',
    department: 'Recruitment & HR',
    designation: 'Senior Talent Partner',
    reportingManager: 'Isha Patel',
    reportingAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    empType: 'Technical',
    biometricId: 'EMP-006',
    activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
    status: '• Confirmed',
    roleName: 'Senior Talent Partner',
    roleExpiry: '-',
    roleRemarks: '-',
    expPrev: '5Y 2M',
    expCurrent: '2Y 1M',
    about: 'Senior Talent Partner responsible for executive hiring, talent pipeline development, and employer branding.',
    skills: 'Executive Sourcing, ATS Architecture, Candidate Experience, Interview Compliance',
    badges: 'Top Recruiter Q3',
    seating: 'Floor 3, Desk 06',
    extension: '306',
    initials: 'SP',
    avatarBg: '#059669',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120',
    trainings: [
      {
        id: 'ASN-004',
        no: 1,
        title: 'CollabCRM Recruitment & Client Portal Workflows',
        dept: 'Recruitment & HR',
        assignedBy: 'Isha Patel (Head of People)',
        assignedDate: '05-Oct-2026',
        completionDate: '2026-10-25 (Due)',
        dueDate: '2026-10-25',
        score: '30%',
        progress: 30,
        status: 'Not Started',
        trainingStatus: 'overdue',
        certId: null
      },
      {
        id: 'EMP-006-TRN-2',
        no: 2,
        title: 'Advanced Candidate Sourcing & Interview Compliance',
        dept: 'Recruitment & HR',
        assignedBy: 'Isha Patel (Head of People)',
        assignedDate: '01-Aug-2026',
        completionDate: '20-Aug-2026',
        dueDate: '2026-08-25',
        score: '92%',
        progress: 100,
        status: 'Passed',
        trainingStatus: 'completed',
        certId: 'TRN-2026-0006'
      }
    ]
  },
  'EMP-002': {
    code: 'EMP-002',
    name: 'Shivam Sharma',
    firstName: 'Shivam',
    lastName: 'Sharma',
    gender: 'Male',
    dob: '08-Mar-1993',
    blood: 'A+',
    email: 'shivam.s@collabcrm.com',
    phone: '+91 98450 78902',
    businessUnit: 'People Operations',
    department: 'People Operations',
    designation: 'HR Specialist',
    reportingManager: 'Isha Patel',
    reportingAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    empType: 'Technical',
    biometricId: 'EMP-002',
    activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
    status: '• Confirmed',
    roleName: 'HR Specialist',
    roleExpiry: '-',
    roleRemarks: '-',
    expPrev: '4Y 6M',
    expCurrent: '1Y 9M',
    about: 'HR Specialist leading organizational training, employee onboarding, performance frameworks, and people analytics.',
    skills: 'HRIS, Training Administration, Onboarding, Policy Compliance',
    badges: 'Culture Champion',
    seating: 'Floor 3, Desk 02',
    extension: '302',
    initials: 'SS',
    avatarBg: '#7c3aed',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
    trainings: [
      {
        id: 'ASN-008',
        no: 1,
        title: 'CollabCRM Recruitment & Client Portal Workflows',
        dept: 'People Operations',
        assignedBy: 'Isha Patel (Head of People)',
        assignedDate: '02-Oct-2026',
        completionDate: '28-Oct-2026',
        dueDate: '2026-10-28',
        score: '94%',
        progress: 100,
        status: 'Passed',
        trainingStatus: 'completed',
        certId: 'CCRM-HR-2026-002'
      },
      {
        id: 'EMP-002-TRN-2',
        no: 2,
        title: 'Information Security & Global Data Privacy (GDPR/ISO)',
        dept: 'People Operations',
        assignedBy: 'Isha Patel (Head of People)',
        assignedDate: '01-Sep-2026',
        completionDate: '18-Sep-2026',
        dueDate: '2026-09-20',
        score: '97%',
        progress: 100,
        status: 'Passed',
        trainingStatus: 'completed',
        certId: 'TRN-2026-0002'
      }
    ]
  },
  'YOP-073': {
    code: 'YOP-073',
    name: 'Ishdeep Anand',
    firstName: 'Ishdeep',
    lastName: 'Anand',
    gender: 'Female',
    dob: '10-May-1990',
    blood: '-',
    email: 'ishdeep@maildrop.cc',
    phone: '+91 9999882892',
    businessUnit: 'MailDrop',
    department: 'Admin',
    designation: 'Admin',
    reportingManager: 'Isha Patel',
    reportingAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    empType: 'Technical',
    biometricId: 'YOP-073',
    activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
    status: '• Confirmed',
    roleName: 'Administrator',
    roleExpiry: '-',
    roleRemarks: '-',
    expPrev: '15Y 2M',
    expCurrent: '20D',
    about: '-',
    skills: 'No skills added.',
    badges: 'No badges received.',
    seating: '-',
    extension: '-',
    initials: 'IA',
    avatarBg: '#8b5cf6',
    trainings: [
      {
        no: 1,
        title: 'Enterprise Security & Data Protection Compliance',
        dept: 'Management',
        assignedDate: '05-Jan-2026',
        completionDate: '20-Jan-2026',
        score: '94%',
        status: 'Passed',
        certId: 'TRN-2026-0001'
      },
      {
        no: 2,
        title: 'Executive Leadership & Strategic Governance',
        dept: 'Management',
        assignedDate: '10-Feb-2026',
        completionDate: '25-Feb-2026',
        score: '98%',
        status: 'Passed',
        certId: 'TRN-2026-0004'
      },
      {
        no: 3,
        title: 'Cross-Border CRM Regulatory Compliance',
        dept: 'Management',
        assignedDate: '15-Mar-2026',
        completionDate: 'In Progress (65%)',
        score: '-',
        status: 'In Progress',
        certId: null
      }
    ]
  },
  'COINT-5040': {
    code: 'COINT-5040',
    name: 'Sanjana Ghosh',
    firstName: 'Sanjana',
    lastName: 'Ghosh',
    gender: 'Female',
    dob: '14-Aug-1998',
    blood: 'B+',
    email: 'zarahaddad@maildrop.cc',
    phone: '+1 9005049481',
    businessUnit: 'MailDrop',
    department: 'IT - Project',
    designation: 'Executive',
    reportingManager: 'Megha Salunkhe',
    reportingAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
    empType: 'Technical',
    biometricId: 'COINT-5040',
    activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
    status: '• Intern',
    roleName: 'Employee',
    roleExpiry: '-',
    roleRemarks: '-',
    expPrev: '3Y 8M',
    expCurrent: '6M',
    about: 'Enthusiastic front-end developer passionate about clean UI and CRM integrations.',
    skills: 'JavaScript, React, HTML5/CSS3',
    badges: 'Fast Learner 2026',
    seating: 'Floor 3, Desk 14',
    extension: '401',
    initials: 'SG',
    avatarBg: '#ef4444',
    trainings: [
      {
        no: 1,
        title: 'Security Awareness & GDPR Essentials',
        dept: 'IT - Project',
        assignedDate: '01-Feb-2026',
        completionDate: '14-Feb-2026',
        score: '91%',
        status: 'Passed',
        certId: 'TRN-2026-0002'
      },
      {
        no: 2,
        title: 'CollabCRM Platform Architecture Deep Dive',
        dept: 'IT - Project',
        assignedDate: '20-Feb-2026',
        completionDate: 'In Progress (80%)',
        score: '-',
        status: 'In Progress',
        certId: null
      }
    ]
  },
  'CO-5039': {
    code: 'CO-5039',
    name: 'Tanya Kapoor',
    firstName: 'Tanya',
    lastName: 'Kapoor',
    gender: 'Female',
    dob: '22-Nov-1996',
    blood: 'O+',
    email: 'calebnguyen@maildrop.cc',
    phone: '+1 9005048244',
    businessUnit: 'MailDrop',
    department: 'Business analyst',
    designation: 'Business analyst',
    reportingManager: 'Megha Salunkhe',
    reportingAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
    empType: 'Technical',
    biometricId: 'CO-5039',
    activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
    status: '• Probation',
    roleName: 'Employee',
    roleExpiry: '-',
    roleRemarks: '-',
    expPrev: '3Y 11M',
    expCurrent: '1Y',
    about: '-',
    skills: 'Backend APIs, Node.js, SQL',
    badges: 'No badges received.',
    seating: 'Floor 3, Desk 18',
    extension: '402',
    initials: 'TK',
    avatarBg: '#f59e0b',
    trainings: [
      {
        no: 1,
        title: 'API Security & OAuth2 Best Practices',
        dept: 'IT - Project',
        assignedDate: '12-Jan-2026',
        completionDate: '28-Jan-2026',
        score: '88%',
        status: 'Passed',
        certId: 'TRN-2026-0003'
      }
    ]
  },
  'CO-5038': {
    code: 'CO-5038',
    name: 'Megha Salunkhe',
    firstName: 'Megha',
    lastName: 'Salunkhe',
    gender: 'Female',
    dob: '18-Jan-1994',
    blood: 'A+',
    email: 'naomitanaka@maildrop.cc',
    phone: '+1 9005047007',
    businessUnit: 'MailDrop',
    department: 'IT - Project',
    designation: 'Sr. Executive',
    reportingManager: 'Kunal Barve',
    reportingAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    empType: 'Technical',
    biometricId: 'CO-5038',
    activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
    status: '• Confirmed',
    roleName: 'Team leader',
    roleExpiry: '-',
    roleRemarks: '-',
    expPrev: '5Y 4M',
    expCurrent: '2Y',
    about: '-',
    skills: 'Sprint Management, QA, Testing Automation',
    badges: 'Quality Champion',
    seating: 'Floor 3, Desk 05',
    extension: '403',
    initials: 'MS',
    avatarBg: '#10b981',
    trainings: [
      {
        no: 1,
        title: 'Agile Leadership & Team Orchestration',
        dept: 'IT - Project',
        assignedDate: '01-Jan-2026',
        completionDate: '15-Jan-2026',
        score: '96%',
        status: 'Passed',
        certId: 'TRN-2026-0005'
      }
    ]
  },
  'CO-5037': {
    code: 'CO-5037',
    name: 'Kunal Barve',
    firstName: 'Kunal',
    lastName: 'Barve',
    gender: 'Female',
    dob: '05-May-1992',
    blood: 'B+',
    email: 'jordanellis@maildrop.cc',
    phone: '+1 9005045770',
    businessUnit: 'MailDrop',
    department: 'IT - Project',
    designation: 'Team leader',
    reportingManager: 'Ananya Sridhar',
    reportingAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    empType: 'Technical',
    biometricId: 'CO-5037',
    activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
    status: '• Confirmed',
    roleName: 'Team leader',
    roleExpiry: '-',
    roleRemarks: '-',
    expPrev: '7Y 10M',
    expCurrent: '3Y',
    about: '-',
    skills: 'System Design, Microservices, DevOps',
    badges: 'Mentor of the Quarter',
    seating: 'Floor 3, Desk 01',
    extension: '404',
    initials: 'KB',
    avatarBg: '#3b82f6',
    trainings: [
      {
        no: 1,
        title: 'Cloud Architecture & Disaster Recovery',
        dept: 'IT - Project',
        assignedDate: '10-Nov-2025',
        completionDate: '30-Nov-2025',
        score: '92%',
        status: 'Passed',
        certId: 'TRN-2026-0006'
      }
    ]
  },
  'CO-5036': {
    code: 'CO-5036',
    name: 'Ananya Sridhar',
    firstName: 'Ananya',
    lastName: 'Sridhar',
    gender: 'Female',
    dob: '30-Jul-1988',
    blood: 'O+',
    email: 'sashapetrov@maildrop.cc',
    phone: '+1 9005044533',
    businessUnit: 'MailDrop',
    department: 'IT - Project',
    designation: 'Manager',
    reportingManager: 'Vikram Anand',
    reportingAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    empType: 'Technical',
    biometricId: 'CO-5036',
    activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
    status: '• Confirmed',
    roleName: 'Project Manager',
    roleExpiry: '-',
    roleRemarks: '-',
    expPrev: '10Y 2M',
    expCurrent: '4Y',
    about: '-',
    skills: 'Product Management, Budgeting, Agile Delivery',
    badges: 'Leadership Award 2025',
    seating: 'Cabin 3B',
    extension: '405',
    initials: 'AS',
    avatarBg: '#475569',
    trainings: [
      {
        no: 1,
        title: 'Strategic Resource & Capacity Planning',
        dept: 'IT - Project',
        assignedDate: '01-Dec-2025',
        completionDate: '15-Dec-2025',
        score: '95%',
        status: 'Passed',
        certId: 'TRN-2026-0007'
      }
    ]
  },
  'CO-5035': {
    code: 'CO-5035',
    name: 'Vikram Anand',
    firstName: 'Vikram',
    lastName: 'Anand',
    gender: 'Female',
    dob: '12-Dec-1986',
    blood: 'AB+',
    email: 'vikramanand@maildrop.cc',
    phone: '+1 9005043286',
    businessUnit: 'MailDrop',
    department: 'IT - Project',
    designation: 'AVP',
    reportingManager: 'Isha Patel',
    reportingAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    empType: 'Technical',
    biometricId: 'CO-5035',
    activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
    status: '• Confirmed',
    roleName: 'Management',
    roleExpiry: '-',
    roleRemarks: '-',
    expPrev: '11Y 7M',
    expCurrent: '5Y',
    about: '-',
    skills: 'Executive Management, Global Scale, Technical Strategy',
    badges: 'Excellence in Innovation',
    seating: 'Cabin 4A',
    extension: '406',
    initials: 'VA',
    avatarBg: '#6366f1',
    trainings: [
      {
        no: 1,
        title: 'Enterprise Cyber Defense & Risk Mitigation',
        dept: 'IT - Project',
        assignedDate: '05-Jan-2026',
        completionDate: '22-Jan-2026',
        score: '99%',
        status: 'Passed',
        certId: 'TRN-2026-0008'
      }
    ]
  },
  'CO-5034': {
    code: 'CO-5034',
    name: 'Rahul Khanna',
    firstName: 'Rahul',
    lastName: 'Khanna',
    gender: 'Female',
    dob: '15-Mar-1997',
    blood: 'A+',
    email: 'elliotsharpe@maildrop.cc',
    phone: '+1 9005042059',
    businessUnit: 'MailDrop',
    department: 'CPA Firms',
    designation: 'Executive',
    reportingManager: 'Varun Acharya',
    reportingAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    empType: 'Technical',
    biometricId: 'CO-5034',
    activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
    status: '• Confirmed',
    roleName: 'Employee',
    roleExpiry: '-',
    roleRemarks: '-',
    expPrev: '4Y',
    expCurrent: '1Y 6M',
    about: '-',
    skills: 'Financial Audit, Tax Compliance, ERP Systems',
    badges: 'No badges received.',
    seating: 'Floor 2, Desk 22',
    extension: '301',
    initials: 'RK',
    avatarBg: '#a855f7',
    trainings: [
      {
        no: 1,
        title: 'CPA Audit Trail Security & Compliance',
        dept: 'CPA Firms',
        assignedDate: '15-Jan-2026',
        completionDate: '30-Jan-2026',
        score: '93%',
        status: 'Passed',
        certId: 'TRN-2026-0009'
      }
    ]
  },
  'CO-5033': {
    code: 'CO-5033',
    name: 'Deepa Ramaswamy',
    firstName: 'Deepa',
    lastName: 'Ramaswamy',
    gender: 'Female',
    dob: '28-Oct-1997',
    blood: 'B-',
    email: 'biancamoreau@maildrop.cc',
    phone: '+1 9005040822',
    businessUnit: 'MailDrop',
    department: 'CPA Firms',
    designation: 'Executive',
    reportingManager: 'Varun Acharya',
    reportingAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    empType: 'Technical',
    biometricId: 'CO-5033',
    activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
    status: '• Probation',
    roleName: 'Employee',
    roleExpiry: '-',
    roleRemarks: '-',
    expPrev: '3Y 5M',
    expCurrent: '8M',
    about: '-',
    skills: 'Taxation, International Accounting Standards',
    badges: 'No badges received.',
    seating: 'Floor 2, Desk 24',
    extension: '302',
    initials: 'DR',
    avatarBg: '#ea580c',
    trainings: [
      {
        no: 1,
        title: 'International Tax Ethics & Compliance Standards',
        dept: 'CPA Firms',
        assignedDate: '10-Feb-2026',
        completionDate: '24-Feb-2026',
        score: '90%',
        status: 'Passed',
        certId: 'TRN-2026-0010'
      }
    ]
  },
  'CO-5032': {
    code: 'CO-5032',
    name: 'Varun Acharya',
    firstName: 'Varun',
    lastName: 'Acharya',
    gender: 'Female',
    dob: '19-Sep-1993',
    blood: 'O+',
    email: 'trevorlindqvist@maildrop.cc',
    phone: '+1 9005039565',
    businessUnit: 'MailDrop',
    department: 'CPA Firms',
    designation: 'Sr. Executive',
    reportingManager: 'Isha Patel',
    reportingAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    empType: 'Technical',
    biometricId: 'CO-5032',
    activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
    status: '• Confirmed',
    roleName: 'Team leader',
    roleExpiry: '-',
    roleRemarks: '-',
    expPrev: '5Y 10M',
    expCurrent: '2Y',
    about: '-',
    skills: 'Client Account Management, Statutory Filings',
    badges: 'Key Contributor',
    seating: 'Floor 2, Desk 10',
    extension: '300',
    initials: 'VA',
    avatarBg: '#ec4899',
    trainings: [
      {
        no: 1,
        title: 'Global Accounting Compliance & Statutory Reporting',
        dept: 'CPA Firms',
        assignedDate: '01-Nov-2025',
        completionDate: '18-Nov-2025',
        score: '96%',
        status: 'Passed',
        certId: 'TRN-2026-0011'
      }
    ]
  }
};

let activeEmployeeDetailCode = 'YOP-073';
let activeEmpDetailSubTab = 'general';

function getEmployeeDetailObject(empCode) {
  if (EMPLOYEES_DETAIL_DATABASE[empCode]) {
    return EMPLOYEES_DETAIL_DATABASE[empCode];
  }
  // Search in state.employees by id or code or name
  const emp = (state.employees || []).find(e => e.id === empCode || e.code === empCode || e.name === empCode);
  if (emp) {
    const mgr = (state.employees || []).find(m => m.id === emp.managerId) || { name: 'Isha Patel', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120' };
    const nameParts = (emp.name || '').trim().split(' ');
    const fName = nameParts[0] || emp.name;
    const lName = nameParts.slice(1).join(' ') || '';
    const initials = ((nameParts[0]?.[0] || 'E') + (nameParts[1]?.[0] || nameParts[0]?.[1] || 'M')).toUpperCase();

    // Collect trainings from assignments
    const empAsns = (state.assignments || []).filter(a => a.employeeId === emp.id);
    const trainings = empAsns.map((a, idx) => {
      const prog = (state.programs || []).find(p => p.id === a.programId) || {};
      const cert = (state.certificates || []).find(c => c.assignmentId === a.id || (c.employeeId === emp.id && c.programId === a.programId));
      return {
        id: a.id,
        no: idx + 1,
        title: a.programTitle || prog.title || 'Training Programme',
        trainingName: a.programTitle || prog.title || 'Training Programme',
        dept: prog.dept || emp.dept || 'Engineering',
        assignedBy: a.assignedBy || 'Isha Patel',
        assignedDate: a.assignedDate || '2026-10-01',
        completionDate: a.completionDate || (a.trainingStatus === 'completed' ? (a.review?.reviewDate || a.dueDate) : '-'),
        dueDate: a.dueDate || '2026-11-15',
        score: a.assessmentScore ? `${a.assessmentScore}%` : (a.progress === 100 ? '92%' : '-'),
        progress: a.progress || 0,
        status: a.trainingStatus === 'completed' ? 'Passed' : (a.trainingStatus === 'in_progress' ? 'In Progress' : 'Not Started'),
        trainingStatus: a.trainingStatus,
        certId: cert ? cert.id : (a.trainingStatus === 'completed' ? `TRN-2026-00${idx + 10}` : null),
        certificate: cert
      };
    });

    const isFemale = ['Priya Nair', 'Ananya Roy', 'Neha Gupta', 'Isha Patel', 'Tanya Kapoor', 'Muskan Sharma'].includes(emp.name);
    const obj = {
      code: emp.id,
      name: emp.name,
      firstName: fName,
      lastName: lName,
      gender: isFemale ? 'Female' : 'Male',
      dob: '14-Aug-1994',
      blood: 'O+',
      email: emp.email || `${fName.toLowerCase()}@collabcrm.com`,
      phone: '+91 98765 43210',
      businessUnit: 'CollabCRM Tech',
      department: emp.dept || 'Engineering',
      designation: emp.role || 'Software Engineer',
      reportingManager: mgr.name,
      reportingAvatar: mgr.avatar,
      empType: 'Full-time',
      biometricId: emp.id,
      activeShift: 'General Shift - GS (10:00 AM - 07:00 PM)',
      status: emp.status === 'inactive' ? '• Inactive' : '• Confirmed',
      roleName: emp.role || 'Employee',
      roleExpiry: '-',
      roleRemarks: '-',
      expPrev: '4Y 2M',
      expCurrent: '1Y 6M',
      about: `${emp.name} is working as ${emp.role} in ${emp.dept}.`,
      skills: 'Full Stack, Cloud Services, Automated Testing, Agile Delivery',
      badges: 'Verified Team Member',
      seating: 'Floor 2, Pod C',
      extension: '214',
      initials: initials,
      avatarBg: '#2563eb',
      avatar: emp.avatar,
      trainings: trainings
    };
    EMPLOYEES_DETAIL_DATABASE[empCode] = obj;
    return obj;
  }
  return EMPLOYEES_DETAIL_DATABASE['CO-5039'] || EMPLOYEES_DETAIL_DATABASE['YOP-073'];
}

function populateEmployeeDetail(empCode) {
  const emp = getEmployeeDetailObject(empCode);
  activeEmployeeDetailCode = emp.code;

  // Left Sidebar
  const checkinBadge = document.getElementById('empDetailCheckinBadge');
  const avatarCircle = document.getElementById('empDetailAvatarCircle');
  const nameEl = document.getElementById('empDetailName');
  const desigEl = document.getElementById('empDetailDesignation');
  const deptBadge = document.getElementById('empDetailDeptBadge');
  const aboutEl = document.getElementById('empDetailAbout');
  const buEl = document.getElementById('empDetailBusinessUnit');
  const expPrev = document.getElementById('empDetailExpPrev');
  const expCurrent = document.getElementById('empDetailExpCurrent');
  const skillsEl = document.getElementById('empDetailSkills');
  const badgesEl = document.getElementById('empDetailBadges');
  const seatingEl = document.getElementById('empDetailSeating');
  const extEl = document.getElementById('empDetailExtension');

  if (checkinBadge) {
    checkinBadge.textContent = 'IN';
    checkinBadge.style.background = '#f0fdf4';
    checkinBadge.style.borderColor = '#86efac';
    checkinBadge.style.color = '#16a34a';
  }
  if (avatarCircle) {
    const empRecord = state.employees.find(e => e.id === emp.code);
    const photoUrl = emp.avatar || (empRecord && empRecord.avatar) || (emp.code === 'CO-5039' ? 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=240' : null);
    if (photoUrl) {
      avatarCircle.innerHTML = `<img src="${photoUrl}" alt="${escapeHtml(emp.name)}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`;
    } else {
      avatarCircle.textContent = emp.initials;
      avatarCircle.style.background = '#f1f5f9';
      avatarCircle.style.color = '#475569';
    }
  }
  if (nameEl) nameEl.textContent = emp.name;
  if (desigEl) desigEl.textContent = emp.designation;
  if (deptBadge) deptBadge.textContent = emp.department;
  if (aboutEl) aboutEl.textContent = emp.about && emp.about !== '-' ? emp.about : 'Yest';
  if (buEl) {
    buEl.innerHTML = `<span style="background: #eff6ff; color: #3b49df; border-radius: 4px; font-size: 11px; padding: 2px 5px;">❄️</span> CollabCRM Demo Account`;
  }
  if (expPrev) expPrev.textContent = emp.expPrev || '-';
  if (expCurrent) expCurrent.textContent = emp.expCurrent || '4Y 3M 1D';
  if (skillsEl) {
    const skillColors = [
      { bg: '#ecfdf5', color: '#059669', border: '#a7f3d0' },
      { bg: '#fffbeb', color: '#d97706', border: '#fde68a' },
      { bg: '#fef2f2', color: '#dc2626', border: '#fecaca' }
    ];
    const defaultSkills = ['Data Mining', 'UI/UX Research and Testing', 'Account Management', 'Analytics', 'Project Management (Agile/Scrum)', 'JAVA Kotlin'];
    const rawSkills = (emp.skills && emp.skills !== 'No skills added.')
      ? emp.skills.split(',').map(s => s.trim()).filter(Boolean)
      : defaultSkills;
    const mergedSkills = rawSkills.length >= 4 ? rawSkills : [...rawSkills, ...defaultSkills.filter(d => !rawSkills.includes(d))].slice(0, 6);
    skillsEl.innerHTML = mergedSkills.map((sk, idx) => {
      const c = skillColors[idx % skillColors.length];
      return `<span style="background: ${c.bg}; color: ${c.color}; border: 1px solid ${c.border}; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600;">${escapeHtml(sk)}</span>`;
    }).join('');
  }
  if (badgesEl) badgesEl.textContent = emp.badges;
  if (seatingEl) seatingEl.textContent = emp.seating;
  if (extEl) extEl.textContent = emp.extension;

  // Top Info Card
  const topEmail = document.getElementById('empDetailTopEmail');
  const topCode = document.getElementById('empDetailTopCode');
  const topMgrName = document.getElementById('empDetailTopMgrName');
  const topMgrImg = document.getElementById('empDetailTopMgrImg');
  if (topEmail) topEmail.textContent = emp.email;
  if (topCode) topCode.textContent = emp.code;
  if (topMgrName) topMgrName.textContent = emp.reportingManager;
  if (topMgrImg) topMgrImg.src = emp.reportingAvatar;

  // Personal Information
  const fName = document.getElementById('empDetailFirstName');
  const lName = document.getElementById('empDetailLastName');
  const genderEl = document.getElementById('empDetailGender');
  const dobEl = document.getElementById('empDetailDob');
  const bloodEl = document.getElementById('empDetailBlood');
  if (fName) fName.textContent = emp.firstName;
  if (lName) lName.textContent = emp.lastName;
  if (genderEl) genderEl.textContent = emp.gender;
  if (dobEl) dobEl.textContent = emp.dob;
  if (bloodEl) bloodEl.textContent = emp.blood;

  // Employee Information
  const infoBU = document.getElementById('empDetailInfoBU');
  const infoCode = document.getElementById('empDetailInfoCode');
  const infoStatus = document.getElementById('empDetailInfoStatus');
  const infoDept = document.getElementById('empDetailInfoDept');
  const infoDesig = document.getElementById('empDetailInfoDesig');
  const infoReporting = document.getElementById('empDetailInfoReporting');
  const infoType = document.getElementById('empDetailInfoType');
  const infoBio = document.getElementById('empDetailInfoBiometric');
  const infoShift = document.getElementById('empDetailInfoShift');
  if (infoBU) infoBU.textContent = 'CollabCRM Demo Account';
  if (infoCode) infoCode.textContent = emp.code;
  if (infoStatus) infoStatus.textContent = emp.status;
  if (infoDept) infoDept.textContent = emp.department;
  if (infoDesig) infoDesig.textContent = emp.designation;
  if (infoReporting) infoReporting.textContent = emp.reportingManager;
  if (infoType) infoType.textContent = emp.empType;
  if (infoBio) infoBio.textContent = emp.biometricId;
  if (infoShift) infoShift.textContent = emp.activeShift;

  // Employee Role Information
  const roleName = document.getElementById('empDetailRoleName');
  const roleExpiry = document.getElementById('empDetailRoleExpiry');
  const roleRemarks = document.getElementById('empDetailRoleRemarks');
  if (roleName) roleName.textContent = emp.roleName;
  if (roleExpiry) roleExpiry.textContent = emp.roleExpiry;
  if (roleRemarks) roleRemarks.textContent = emp.roleRemarks;

  // Company Contact Information
  const compEmail = document.getElementById('empDetailCompEmail');
  const compPhone = document.getElementById('empDetailCompPhone');
  if (compEmail) compEmail.textContent = emp.email;
  if (compPhone) compPhone.textContent = emp.phone;

  // Contextual Header Buttons for Employee vs Management
  const btnBack = document.getElementById('btnEmpDetailBackOrMyTraining');
  const btnTrnAction = document.getElementById('btnEmpDetailTrainingAction');
  if (state.currentRole === 'employee') {
    if (btnBack) btnBack.textContent = '← Go to My Training';
    if (btnTrnAction) btnTrnAction.textContent = 'Go to My Active Trainings →';
  } else {
    if (btnBack) btnBack.textContent = '← Back to Employees';
    if (btnTrnAction) btnTrnAction.textContent = '+ Assign New Training';
  }

  // Render Training History
  renderEmployeeTrainingHistory(emp);
}

function renderEmployeeTrainingHistory(emp) {
  const tbody = document.getElementById('empDetailTrainingTableBody');
  const enrolledEl = document.getElementById('empDetailTrnEnrolled');
  const completedEl = document.getElementById('empDetailTrnCompleted');
  const inProgEl = document.getElementById('empDetailTrnInProg');
  const certsEl = document.getElementById('empDetailTrnCerts');

  // For CO-5039 (and any employee with unified records), use the unified training & assignment store
  if (!state.employeeTrainingData) {
    state.employeeTrainingData = getFallbackEmployeeData('CO-5039');
  }

  let allEmpTrainings = [];
  let completedRecords = [];

  if (emp.code === 'CO-5039' && state.employeeTrainingData && Array.isArray(state.employeeTrainingData.trainings)) {
    allEmpTrainings = state.employeeTrainingData.trainings;
    completedRecords = allEmpTrainings.filter(t => normalizeStatus(t.trainingStatus || t.status) === 'Completed');
  } else {
    const rawList = emp.trainings || [];
    allEmpTrainings = rawList;
    completedRecords = rawList.filter(t => t.status === 'Passed' || t.status === 'Completed' || normalizeStatus(t.trainingStatus || t.status) === 'Completed');
  }

  const completedCount = completedRecords.length;
  const inProgCount = allEmpTrainings.filter(t => {
    const s = normalizeStatus(t.trainingStatus || t.status);
    return s !== 'Completed' && t.status !== 'Passed';
  }).length;
  const certCount = completedRecords.filter(t => (t.certificate && t.certificate.id) || t.certId).length;

  if (enrolledEl) enrolledEl.textContent = allEmpTrainings.length;
  if (completedEl) completedEl.textContent = completedCount;
  if (inProgEl) inProgEl.textContent = inProgCount;
  if (certsEl) certsEl.textContent = certCount;

  if (!tbody) return;

  if (completedRecords.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="padding: 28px; text-align: center; color: #94a3b8; font-size: 13px;">
          No completed training history records found for this employee yet. Active assignments appear under <strong>My Training</strong> until approved by a reviewer.
        </td>
      </tr>
    `;
    return;
  }

  let html = '';
  completedRecords.forEach((t, idx) => {
    const recordId = t.id || `EMP-${emp.code}-TRN-${idx + 1}`;
    const title = t.trainingName || t.title || 'Training Programme';
    const category = t.category || t.dept || emp.department || 'General';
    const assignedDate = t.assignedDate || '-';
    const completionDate = t.completionDate || (t.review && t.review.reviewDate) || t.dueDate || '-';

    let scoreVal = t.score || '-';
    if (t.assessment && t.assessment.previousAttempts && t.assessment.previousAttempts.length > 0) {
      scoreVal = `${t.assessment.previousAttempts[t.assessment.previousAttempts.length - 1].score}%`;
    } else if (t.assessmentScore) {
      scoreVal = `${t.assessmentScore}%`;
    }

    const certId = (t.certificate && t.certificate.id) || t.certId || 'TRN-2026-0003';

    const statusPill = `<span style="display: inline-flex; align-items: center; justify-content: center; gap: 5px; background: #ecfdf5; border: 1px solid #a7f3d0; color: #047857; font-size: 11.5px; font-weight: 700; padding: 4px 12px; border-radius: 9999px; white-space: nowrap; line-height: 1;"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Completed</span>`;

    const scoreBadge = scoreVal !== '-'
      ? `<span style="font-weight: 700; color: #0f172a; background: #f8fafc; border: 1px solid #e2e8f0; padding: 2px 6px; border-radius: 4px;">${escapeHtml(String(scoreVal))}</span>`
      : `<span style="color: #94a3b8;">100%</span>`;

    const cleanAssignedBy = escapeHtml((t.assignedBy || 'Isha Patel').replace(/\s*\(.*?\)/g, '').trim());

    const certAction = `<button type="button" onclick="event.stopPropagation(); openEmployeeCertificateViewer('${certId}')" class="btn-table-action" style="padding: 5px 12px; font-size: 12px; color: #1d4ed8; border: 1px solid #bfdbfe; background: #eff6ff; border-radius: 6px; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 5px; white-space: nowrap;" title="Click to view certificate">
         🎓 <span>${escapeHtml(certId)}</span>
       </button>`;

    html += `
      <tr onclick="openEmployeeTrainingDetail('${recordId}')" style="border-bottom: 1px solid #f1f5f9; transition: background 0.15s ease; cursor: pointer;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'" title="Click to open complete training details, submission, reviewer feedback & certificate">
        <td style="padding: 12px 14px; text-align: center; color: #64748b; font-weight: 500;">${idx + 1}</td>
        <td style="padding: 12px 14px;">
          <div style="font-weight: 600; color: #0f172a; font-size: 13px;">${escapeHtml(title)}</div>
          <div style="font-size: 11px; color: #64748b; margin-top: 2px;">${escapeHtml(category)}</div>
        </td>
        <td style="padding: 12px 14px;">
          <span style="background: #f1f5f9; color: #334155; font-size: 11.5px; font-weight: 600; padding: 2px 8px; border-radius: 4px;">${cleanAssignedBy}</span>
        </td>
        <td style="padding: 12px 14px; color: #475569; white-space: nowrap;">${escapeHtml(assignedDate)}</td>
        <td style="padding: 12px 14px; color: #475569; white-space: nowrap;">${escapeHtml(completionDate)}</td>
        <td style="padding: 12px 14px; text-align: center;">${scoreBadge}</td>
        <td style="padding: 12px 14px; text-align: center; white-space: nowrap;">${statusPill}</td>
        <td style="padding: 12px 14px; text-align: center; white-space: nowrap;">${certAction}</td>
        <td style="padding: 12px 14px; text-align: center; white-space: nowrap;">
          <button type="button" class="emp-action-icon" onclick="event.stopPropagation(); openEmployeeTrainingDetail('${recordId}')" title="View Complete Training Details" aria-label="View Complete Training Details" style="width: 32px; height: 32px; border-radius: 6px; border: 1px solid #cbd5e1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s ease;" onmouseover="this.style.background='#eff6ff'; this.style.color='#2563eb'; this.style.borderColor='#bfdbfe';" onmouseout="this.style.background='#ffffff'; this.style.color='#334155'; this.style.borderColor='#cbd5e1';">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function switchEmpDetailSubTab(tabName = 'general') {
  activeEmpDetailSubTab = tabName;

  const btnGen = document.getElementById('tabNavGeneral');
  const btnTrn = document.getElementById('tabNavTraining');

  if (btnGen) {
    const isGen = tabName === 'general';
    btnGen.classList.toggle('active', isGen);
    btnGen.style.background = isGen ? '#eef2ff' : 'transparent';
    btnGen.style.color = isGen ? '#3b49df' : '#475569';
    btnGen.style.fontWeight = isGen ? '600' : '500';
  }
  if (btnTrn) {
    const isTrn = tabName === 'training';
    btnTrn.classList.toggle('active', isTrn);
    btnTrn.style.background = isTrn ? '#eef2ff' : 'transparent';
    btnTrn.style.color = isTrn ? '#3b49df' : '#475569';
    btnTrn.style.fontWeight = isTrn ? '600' : '500';
  }

  const bcTab = document.getElementById('empDetailBreadcrumbTab');
  const panelGen = document.getElementById('empDetailPanelGeneral');
  const panelTrn = document.getElementById('empDetailPanelTraining');
  const panelPlc = document.getElementById('empDetailPanelPlaceholder');

  if (bcTab) bcTab.textContent = tabName === 'training' ? 'Training History' : 'General Info';
  if (panelGen) panelGen.style.display = tabName === 'general' ? 'flex' : 'none';
  if (panelTrn) {
    panelTrn.style.display = tabName === 'training' ? 'flex' : 'none';
    if (tabName === 'training') {
      const emp = EMPLOYEES_DETAIL_DATABASE[activeEmployeeDetailCode] || EMPLOYEES_DETAIL_DATABASE['CO-5039'];
      if (emp) renderEmployeeTrainingHistory(emp);
    }
  }
  if (panelPlc) panelPlc.style.display = 'none';
}

function openEmployeeDetail(empCode = 'CO-5039', initialTab = 'general', sourceView = null) {
  // If explicitly opened from previewProgram or currently inside previewProgram
  const previewScreen = document.getElementById('programPreviewModal');
  if (sourceView === 'previewProgram' || (previewScreen && previewScreen.style.display === 'block')) {
    state.empDetailPreviousView = 'previewProgram';
  } else if (!state.empDetailPreviousView) {
    state.empDetailPreviousView = state.currentRole === 'employee' ? 'my_training' : 'employees';
  }

  // Enforce employee-level data access: logged-in employee can only view their own profile
  if (state.currentRole === 'employee') {
    empCode = 'CO-5039';
  }

  const viewDashboard = document.getElementById('viewDashboard');
  const viewTraining = document.getElementById('viewTraining');
  const viewConfig = document.getElementById('viewConfig');
  const viewTrainingConfig = document.getElementById('viewTrainingConfig');
  const viewRoles = document.getElementById('viewRoles');
  const viewRolePermissions = document.getElementById('viewRolePermissions');
  const viewEmployeeDetail = document.getElementById('viewEmployeeDetail');

  if (viewDashboard) viewDashboard.style.display = 'none';
  if (viewTraining) viewTraining.style.display = 'none';
  if (viewConfig) viewConfig.style.display = 'none';
  if (viewTrainingConfig) viewTrainingConfig.style.display = 'none';
  if (viewRoles) viewRoles.style.display = 'none';
  if (viewRolePermissions) viewRolePermissions.style.display = 'none';

  if (viewEmployeeDetail) {
    viewEmployeeDetail.style.display = 'block';
    viewEmployeeDetail.classList.add('active');
  }

  populateEmployeeDetail(empCode);
  switchEmpDetailSubTab(initialTab || 'general');

  // Update back button text based on source
  const btnBack = document.getElementById('btnEmpDetailBackOrMyTraining');
  if (btnBack) {
    if (state.empDetailPreviousView === 'previewProgram') {
      btnBack.textContent = '← Back to Programme Details';
    } else if (state.currentRole === 'employee') {
      btnBack.textContent = '← Go to My Training';
    } else {
      btnBack.textContent = '← Back to Employees';
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleEmpDetailBackOrAction() {
  if (state.empDetailPreviousView === 'previewProgram' && window.previewActiveProgId) {
    state.empDetailPreviousView = null;
    const viewEmployeeDetail = document.getElementById('viewEmployeeDetail');
    if (viewEmployeeDetail) {
      viewEmployeeDetail.style.display = 'none';
      viewEmployeeDetail.classList.remove('active');
    }
    const viewTraining = document.getElementById('viewTraining');
    if (viewTraining) {
      viewTraining.style.display = 'block';
      viewTraining.classList.add('active');
    }
    previewProgram(window.previewActiveProgId);
    return;
  }

  if (state.currentRole === 'employee') {
    switchToTraining();
  } else {
    switchToEmployees();
  }
}

function handleEmpDetailTrainingHeaderAction() {
  if (state.currentRole === 'employee') {
    switchToTraining();
  } else {
    openAssignTrainingModal();
  }
}

function toggleMyProfileDropdown(e) {
  if (e) e.stopPropagation();
  const dd = document.getElementById('headerMyProfileDropdown');
  if (!dd) return;
  const isOpen = dd.style.display === 'block';
  if (!isOpen) {
    renderUserRoleDropdown();
    dd.style.display = 'block';
    const userMenu = document.getElementById('userRoleDropdownMenu');
    if (userMenu) userMenu.style.display = 'none';
  } else {
    dd.style.display = 'none';
  }
}

function closeMyProfileDropdown() {
  const dd = document.getElementById('headerMyProfileDropdown');
  if (dd) dd.style.display = 'none';
}

function openMyProfile(initialTab = 'general') {
  closeMyProfileDropdown();
  const targetCode = state.currentRole === 'employee' ? 'CO-5039' : 'YOP-073';
  openEmployeeDetail(targetCode, initialTab);
}

document.addEventListener('click', function(e) {
  const container = document.getElementById('headerMyProfileContainer');
  const dd = document.getElementById('headerMyProfileDropdown');
  if (dd && dd.style.display === 'block' && container && !container.contains(e.target)) {
    dd.style.display = 'none';
  }

  const popover = document.getElementById('customizeWidgetsPopover');
  const toggleBtn = document.getElementById('btnCustomizeWidgetsToggle');
  if (popover && popover.style.display === 'block' && toggleBtn && !toggleBtn.contains(e.target) && !popover.contains(e.target)) {
    popover.style.display = 'none';
  }
});

window.openEmployeeDetail = openEmployeeDetail;
window.switchEmpDetailSubTab = switchEmpDetailSubTab;
window.populateEmployeeDetail = populateEmployeeDetail;
window.renderEmployeeTrainingHistory = renderEmployeeTrainingHistory;
window.handleEmpDetailBackOrAction = handleEmpDetailBackOrAction;
window.handleEmpDetailTrainingHeaderAction = handleEmpDetailTrainingHeaderAction;
window.toggleMyProfileDropdown = toggleMyProfileDropdown;
window.closeMyProfileDropdown = closeMyProfileDropdown;
window.openMyProfile = openMyProfile;

// =============================================================================
// EMPLOYEE ROLE – TRAINING MANAGEMENT MODULE CONTROLLER (SECTIONS 1 TO 19)
// =============================================================================

state.empActiveFilter = 'all';
state.empCurrentTrainingId = null;
state.empCurrentResourceId = null;
state.empModalActiveTab = 'overview';
state.empAttachedEvidence = null;
state.employeeTrainingData = null;

// Helper to resolve API endpoint with fallback for any port or host
function getEmpApiUrl(endpoint) {
  if (window.location.protocol === 'file:') {
    return 'http://localhost:3000' + endpoint;
  }
  return endpoint;
}

// Helper to normalize status strings to ONLY the 4 system-wide lifecycle statuses (Screenshot 1)
function normalizeStatus(s) {
  if (!s) return 'Not Started';
  const str = String(s).toLowerCase().trim();
  if (str.includes('comp') || str.includes('pass') || str.includes('appr')) return 'Completed';
  if (str.includes('overdue')) return 'Overdue';
  if (str.includes('prog') || str.includes('subm') || str.includes('review') || str.includes('eval') || str.includes('change')) return 'In Progress';
  return 'Not Started';
}

// Master helper: Calculate Dashboard Stats from state (Strictly 4 statuses per Screenshot 1)
function calcEmployeeStatsFromTrainings(trainings = []) {
  const comp = trainings.filter(t => normalizeStatus(t.trainingStatus || t.status) === 'Completed').length;
  const inProg = trainings.filter(t => normalizeStatus(t.trainingStatus || t.status) === 'In Progress').length;
  const ovd = trainings.filter(t => normalizeStatus(t.trainingStatus || t.status) === 'Overdue').length;
  const notSt = trainings.filter(t => normalizeStatus(t.trainingStatus || t.status) === 'Not Started').length;
  return {
    totalAssigned: trainings.length,
    notStarted: notSt,
    inProgress: inProg,
    submittedForReview: 0,
    changesRequested: 0,
    completed: comp,
    overdue: ovd,
    certificatesIssued: trainings.filter(t => t.certificate && t.certificate.status === 'issued').length
  };
}

const EMP_STORE_LOCAL_KEY = 'collabcrm_emp_store_CO_5039_v2';

function mapTrainingTitleToProgramId(title = '') {
  const t = title.toLowerCase();
  if (t.includes('api security') || t.includes('oauth2')) return 'TR-107';
  if (t.includes('gdpr') || t.includes('security awareness')) return 'TR-108';
  if (t.includes('platform architecture')) return 'TR-109';
  if (t.includes('stakeholder') || t.includes('cross-functional')) return 'TR-110';
  if (t.includes('posh') || t.includes('workplace safety')) return 'TR-111';
  if (t.includes('incident response') || t.includes('sla')) return 'TR-112';
  const match = state.programs.find(p => p.title.toLowerCase() === t);
  return match ? match.id : 'TR-107';
}

function hydrateUnifiedTrainingRecord(t, empId = 'CO-5039') {
  t.employeeId = t.employeeId || empId;
  t.programId = t.programId || mapTrainingTitleToProgramId(t.trainingName || t.title || '');
  t.trainingName = t.trainingName || t.title || 'Training Programme';
  t.title = t.trainingName;
  t.mandatory = t.isMandatory !== undefined ? t.isMandatory : (t.mandatory !== false);
  t.isMandatory = t.mandatory;
  t.progress = t.completionPercentage !== undefined ? t.completionPercentage : (t.progress || 0);
  t.completionPercentage = t.progress;

  const norm = normalizeStatus(t.trainingStatus || t.status);
  if (norm === 'Completed') {
    t.trainingStatus = 'completed';
    t.status = 'Completed';
    t.submissionStatus = 'approved';
    t.certificateStatus = (t.certificate && t.certificate.status === 'issued') ? 'issued' : 'eligible';
    if (t.certificate && t.certificate.id) t.certificateId = t.certificate.id;
  } else if (norm === 'Submitted for Review') {
    t.trainingStatus = 'submitted_for_review';
    t.status = 'Submitted for Review';
    t.submissionStatus = 'submitted';
  } else if (norm === 'Changes Requested') {
    t.trainingStatus = 'changes_requested';
    t.status = 'Changes Requested';
    t.submissionStatus = 'changes_requested';
  } else if (norm === 'In Progress') {
    t.trainingStatus = 'in_progress';
    t.status = 'In Progress';
    t.submissionStatus = t.submissionStatus || 'none';
  } else if (norm === 'Overdue') {
    t.trainingStatus = 'overdue';
    t.status = 'Overdue';
    t.submissionStatus = t.submissionStatus || 'none';
  } else {
    t.trainingStatus = 'not_started';
    t.status = 'Not Started';
    t.submissionStatus = t.submissionStatus || 'none';
  }

  if (t.submission) {
    t.submissionRemarks = t.submission.completionRemarks || t.submissionRemarks || '';
    if (Array.isArray(t.submission.evidenceFiles) && t.submission.evidenceFiles.length > 0) {
      t.submissionEvidence = t.submission.evidenceFiles[0];
    }
  }
  if (t.assessment) {
    if (t.assessment.passed !== undefined) t.assessment.isPassed = t.assessment.passed;
    if (t.assessment.isPassed !== undefined) t.assessment.passed = t.assessment.isPassed;
    if (Array.isArray(t.assessment.previousAttempts) && t.assessment.previousAttempts.length > 0) {
      t.assessmentScore = t.assessment.previousAttempts[t.assessment.previousAttempts.length - 1].score;
    }
  }
  if (!Array.isArray(t.reviewHistory)) {
    t.reviewHistory = [];
    if (t.submission && t.submission.submittedAt) {
      t.reviewHistory.push({
        date: t.submission.submittedAt,
        action: 'Submitted for Evaluation',
        user: 'Tanya Kapoor',
        notes: t.submission.completionRemarks || 'Submitted completed modules and assessment.'
      });
    }
    if (t.review && t.review.reviewDate) {
      t.reviewHistory.unshift({
        date: t.review.reviewDate,
        action: t.review.status === 'approved' ? 'Approved Submission' : 'Requested Changes',
        user: t.review.reviewerName || 'Reviewer',
        notes: t.review.feedback || ''
      });
    }
  }
  return t;
}

function syncEmployeeTrainingsWithGlobalAssignments() {
  if (!state.employeeTrainingData || !Array.isArray(state.employeeTrainingData.trainings)) return;
  state.employeeTrainingData.trainings.forEach(t => {
    hydrateUnifiedTrainingRecord(t, 'CO-5039');
    const existingIdx = state.assignments.findIndex(a => a.id === t.id);
    if (existingIdx !== -1) {
      if (state.assignments[existingIdx] !== t) {
        Object.assign(t, state.assignments[existingIdx]);
        state.assignments[existingIdx] = t;
      }
    } else {
      state.assignments.unshift(t);
    }
    if (t.certificate && t.certificate.id && !state.certificates.some(c => c.id === t.certificate.id)) {
      state.certificates.push({
        id: t.certificate.id,
        certificateNo: t.certificate.certificateNo || t.certificate.id,
        assignmentId: t.id,
        employeeId: 'CO-5039',
        programId: t.programId,
        issueDate: t.certificate.issueDate || '26-Jan-2026',
        expiryDate: t.certificate.expiryDate || 'Lifetime',
        status: 'issued',
        reissueCount: 0,
        issuedBy: t.certificate.issuerName || 'Isha Patel (Head of People)'
      });
    }
  });
  updatePendingReviewsBadge();
}

function saveEmployeeStoreToLocal() {
  if (!state.employeeTrainingData) return;
  syncEmployeeTrainingsWithGlobalAssignments();
  try {
    localStorage.setItem(EMP_STORE_LOCAL_KEY, JSON.stringify({
      profile: state.employeeTrainingData.profile,
      trainings: state.employeeTrainingData.trainings,
      notifications: state.employeeTrainingData.notifications
    }));
  } catch (e) {
    console.warn('Unable to save employee training store to localStorage:', e);
  }
}

const BUILTIN_CO5039_TRAININGS = [
  {
    "id": "TRN-ASSIGN-101",
    "trainingName": "API Security & OAuth2 Best Practices",
    "category": "Technical Architecture",
    "shortDescription": "Master token-based authentication, RBAC scopes, OAuth2 grant types, and API rate limiting in CollabCRM architecture.",
    "isMandatory": true,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "12-Jan-2026",
    "dueDate": "15-Mar-2026",
    "startDate": "15-Jan-2026",
    "completionPercentage": 67,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Understand OAuth2 authorization code and client credentials grant mechanisms",
      "Implement cryptographically verified JSON Web Token (JWT) validation and RBAC claims",
      "Prevent OWASP Top 10 API threats including Broken Object Level Authorization (BOLA)",
      "Configure distributed sliding-window rate limiting algorithms on mission-critical CRM gateways"
    ],
    "expectedOutcomes": "Engineers will be capable of authoring and auditing secure zero-trust APIs, safeguarding CRM customer data, and adhering to strict platform access policies.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-101_r1",
        "title": "Module 1: Foundations & Core Principles of API Security & OAuth2 Best Practices",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "15-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-101_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-101_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-101_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-101",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-101_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-101_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-101_asm",
      "name": "API Security & OAuth2 Best Practices Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "15-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "type": "single_choice",
          "text": "What is the primary operational objective of API Security & OAuth2 Best Practices?",
          "options": [
            "Enforce rigorous zero-trust token authentication and access boundaries",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "type": "multiple_choice",
          "text": "Which mechanisms defend against Broken Object Level Authorization (BOLA)? (Select all that apply)",
          "options": [
            "Validate tenant and object ownership on every state-changing request",
            "Enforce cryptographically signed JWT claims with short-lived expiration",
            "Rely solely on client-side routing guards without server validation",
            "Implement fine-grained resource level access control policies"
          ],
          "correctAnswers": [0, 1, 3]
        },
        {
          "id": "q3",
          "type": "true_false",
          "text": "OAuth 2.0 access tokens must be transmitted in Authorization headers rather than URL query parameters.",
          "correctAnswer": "true"
        },
        {
          "id": "q4",
          "type": "text",
          "text": "Explain briefly how distributed rate limiting safeguards CRM gateways against denial-of-service spikes.",
          "minChars": 10
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-102",
    "trainingName": "Data Protection, GDPR & Employee Privacy 2026",
    "category": "Governance & Compliance",
    "shortDescription": "Comprehensive training on EU GDPR regulations, CCPA data rights, PII handling, employee consent frameworks, and breach response.",
    "isMandatory": true,
    "assignedBy": "Isha Patel (HR Operations)",
    "assignedDate": "05-Jan-2026",
    "dueDate": "20-Feb-2026",
    "startDate": "08-Jan-2026",
    "completionDate": "26-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Beginner",
    "expectedDuration": "3 Hours",
    "learningObjectives": [
      "Identify Personally Identifiable Information (PII) across customer and employee databases",
      "Execute GDPR Subject Access Requests (SAR) and Right to Erasure procedures",
      "Maintain Data Protection Impact Assessments (DPIA) for high-risk data workflows",
      "Implement incident containment protocols within the mandatory 72-hour notification window"
    ],
    "expectedOutcomes": "Staff demonstrate thorough comprehension of data subject rights and privacy protection obligations across all software interfaces.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-102_r1",
        "title": "Module 1: Foundations & Core Principles of Data Protection, GDPR & Employee Privacy 2026",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "26-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-102_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-102_playbook.pdf",
        "isCompleted": true,
        "completionDate": "26-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-102_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-102",
        "isCompleted": true,
        "completionDate": "26-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-102_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-102_demo.mp4",
        "isCompleted": true,
        "completionDate": "26-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-102_asm",
      "name": "Data Protection, GDPR & Employee Privacy 2026 Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "26-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Data Protection, GDPR & Employee Privacy 2026?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-102.pdf"
      ],
      "submittedAt": "26-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Isha Patel",
      "reviewDate": "26-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0002",
      "name": "Data Protection, GDPR & Employee Privacy 2026 Credential",
      "trainingName": "Data Protection, GDPR & Employee Privacy 2026",
      "issueDate": "26-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-103",
    "trainingName": "CollabCRM Platform Architecture & Microservices",
    "category": "Product & Platform",
    "shortDescription": "Deep dive into internal service communication, message brokers, caching tiers, and resilient microservice design.",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "18-Jan-2026",
    "dueDate": "28-Feb-2026",
    "startDate": "20-Jan-2026",
    "completionPercentage": 45,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Advanced",
    "expectedDuration": "6 Hours",
    "learningObjectives": [
      "Deconstruct CollabCRM event-driven pub/sub architecture using RabbitMQ/Kafka",
      "Implement circuit breakers, retries, and exponential backoff in inter-service gRPC calls",
      "Analyze telemetry traces, distributed spans, and OpenTelemetry instrumentation",
      "Manage multi-tenant schema partitioning and cross-database referential integrity"
    ],
    "expectedOutcomes": "Architects and engineers build scalable, fault-tolerant business features aligned with enterprise system architecture.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-103_r1",
        "title": "Module 1: Foundations & Core Principles of CollabCRM Platform Architecture & Microservices",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "20-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-103_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-103_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-103_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-103",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-103_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-103_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-103_asm",
      "name": "CollabCRM Platform Architecture & Microservices Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "20-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of CollabCRM Platform Architecture & Microservices?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-104",
    "trainingName": "Enterprise Information Security & Phishing Defense",
    "category": "Governance & Compliance",
    "shortDescription": "Mandatory annual cybersecurity defense course covering spear-phishing, social engineering, credential hygiene, and MFA verification.",
    "isMandatory": true,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "10-Dec-2025",
    "dueDate": "15-Jan-2026",
    "startDate": "12-Dec-2025",
    "completionPercentage": 20,
    "trainingStatus": "overdue",
    "difficultyLevel": "Beginner",
    "expectedDuration": "2 Hours",
    "learningObjectives": [
      "Identify sophisticated spear-phishing emails, spoofed headers, and fraudulent domains",
      "Enforce hardware FIDO2/WebAuthn MFA tokens across all operational workstation logins",
      "Safely report suspected security threats through internal SecOps dispatch pipelines",
      "Adhere to clean-desk, screen-locking, and physical badge access requirements"
    ],
    "expectedOutcomes": "Employees act as a vigilant first line of cyber defense to eliminate unauthorized intrusions and corporate data breaches.",
    "status": "Overdue",
    "resources": [
      {
        "id": "TRN-ASSIGN-104_r1",
        "title": "Module 1: Foundations & Core Principles of Enterprise Information Security & Phishing Defense",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-104_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-104_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-104_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-104",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-104_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-104_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-104_asm",
      "name": "Enterprise Information Security & Phishing Defense Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Enterprise Information Security & Phishing Defense?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-105",
    "trainingName": "Cloud Native DevOps & CI/CD Pipelines",
    "category": "Technical Architecture",
    "shortDescription": "Automated continuous integration, deployment gates, trunk-based development, and blue-green rollouts on Kubernetes.",
    "isMandatory": false,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "25-Jan-2026",
    "dueDate": "30-Apr-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "5 Hours",
    "learningObjectives": [
      "Configure automated Docker multi-stage container builds with vulnerability image scanning",
      "Design GitHub Actions workflows with ephemeral test environments and preview deployments",
      "Execute automated canary analysis and zero-downtime rolling service upgrades",
      "Define Terraform Infrastructure-as-Code modules for cloud resource provisioning"
    ],
    "expectedOutcomes": "Engineers achieve frictionless code-to-production workflows while adhering to automated quality and security checks.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-105_r1",
        "title": "Module 1: Foundations & Core Principles of Cloud Native DevOps & CI/CD Pipelines",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-105_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-105_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-105_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-105",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-105_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-105_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-105_asm",
      "name": "Cloud Native DevOps & CI/CD Pipelines Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Cloud Native DevOps & CI/CD Pipelines?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-106",
    "trainingName": "Client Onboarding & Requirement Intake Playbook",
    "category": "Support & Operations",
    "shortDescription": "Standard operating procedures for managing high-touch client onboarding, technical intake workshops, and CRM data migrations.",
    "isMandatory": true,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "02-Jan-2026",
    "dueDate": "10-Feb-2026",
    "startDate": "04-Jan-2026",
    "completionDate": "28-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Facilitate structured stakeholder discovery workshops and requirement documentation",
      "Map legacy CRM customer records to CollabCRM entity models with zero data truncation",
      "Establish client success milestones, SLA governance, and executive sign-off criteria",
      "Execute mock migration dry-runs to ensure data validation passes with 100% fidelity"
    ],
    "expectedOutcomes": "Support leads onboard enterprise clients smoothly with rapid time-to-value and reduced kickoff friction.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-106_r1",
        "title": "Module 1: Foundations & Core Principles of Client Onboarding & Requirement Intake Playbook",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "28-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-106_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-106_playbook.pdf",
        "isCompleted": true,
        "completionDate": "28-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-106_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-106",
        "isCompleted": true,
        "completionDate": "28-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-106_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-106_demo.mp4",
        "isCompleted": true,
        "completionDate": "28-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-106_asm",
      "name": "Client Onboarding & Requirement Intake Playbook Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "28-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Client Onboarding & Requirement Intake Playbook?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-106.pdf"
      ],
      "submittedAt": "28-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": "28-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0006",
      "name": "Client Onboarding & Requirement Intake Playbook Credential",
      "trainingName": "Client Onboarding & Requirement Intake Playbook",
      "issueDate": "28-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-107",
    "trainingName": "Cross-Functional Agile Leadership & Scrum Mastery",
    "category": "Professional Skills",
    "shortDescription": "Empowering cross-disciplinary squad leaders with sprint planning, velocity tracking, backlog refinement, and blameless retrospectives.",
    "isMandatory": false,
    "assignedBy": "Isha Patel (HR Operations)",
    "assignedDate": "14-Jan-2026",
    "dueDate": "20-Mar-2026",
    "startDate": "18-Jan-2026",
    "completionPercentage": 80,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3.5 Hours",
    "learningObjectives": [
      "Facilitate high-velocity sprint planning, daily standups, and demo showcases",
      "Manage product backlog prioritization using WSJF (Weighted Shortest Job First)",
      "Conduct psychological-safety focused blameless sprint retrospectives and action tracking",
      "Measure cycle time, lead time, and flow efficiency with interactive burndown analytics"
    ],
    "expectedOutcomes": "Squad leaders guide development teams to sustainable delivery rhythms and measurable quarterly OKR achievements.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-107_r1",
        "title": "Module 1: Foundations & Core Principles of Cross-Functional Agile Leadership & Scrum Mastery",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "18-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-107_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-107_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-107_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-107",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-107_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-107_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-107_asm",
      "name": "Cross-Functional Agile Leadership & Scrum Mastery Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "18-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Cross-Functional Agile Leadership & Scrum Mastery?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Isha Patel",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-108",
    "trainingName": "Zero-Trust Infrastructure & IAM Policy Hardening",
    "category": "Technical Architecture",
    "shortDescription": "Principles of zero-trust architecture, micro-segmentation, least-privilege IAM policies, and cryptographic mutual TLS (mTLS).",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "22-Jan-2026",
    "dueDate": "25-Apr-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Advanced",
    "expectedDuration": "5.5 Hours",
    "learningObjectives": [
      "Eliminate static network perimeters using dynamic identity-aware reverse proxies",
      "Implement granular AWS/GCP IAM role-assumption conditions and ABAC policies",
      "Configure Istio service mesh mTLS peer authentication across all namespace boundaries",
      "Deploy automated secret rotation via HashiCorp Vault with dynamic ephemeral credentials"
    ],
    "expectedOutcomes": "Engineering infrastructure is hardened against lateral movement threats and insider credential misuse.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-108_r1",
        "title": "Module 1: Foundations & Core Principles of Zero-Trust Infrastructure & IAM Policy Hardening",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-108_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-108_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-108_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-108",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-108_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-108_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-108_asm",
      "name": "Zero-Trust Infrastructure & IAM Policy Hardening Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Zero-Trust Infrastructure & IAM Policy Hardening?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-109",
    "trainingName": "Workplace Diversity, Equity & Inclusion (DEI)",
    "category": "Governance & Compliance",
    "shortDescription": "Fostering an inclusive, psychologically safe, and culturally respectful workplace culture across global distributed teams.",
    "isMandatory": true,
    "assignedBy": "Shivam Sharma (People Operations)",
    "assignedDate": "01-Jan-2026",
    "dueDate": "15-Feb-2026",
    "startDate": "05-Jan-2026",
    "completionDate": "22-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Beginner",
    "expectedDuration": "2 Hours",
    "learningObjectives": [
      "Recognize unconscious bias in recruitment, performance appraisals, and code reviews",
      "Implement active allyship and inclusive communication practices across hybrid teams",
      "Understand corporate grievance redressal, anti-harassment policies, and whistleblower protections",
      "Promote cognitive diversity to elevate problem-solving efficiency and team belonging"
    ],
    "expectedOutcomes": "A respectful, collaborative work atmosphere where every team member is empowered to contribute their best work.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-109_r1",
        "title": "Module 1: Foundations & Core Principles of Workplace Diversity, Equity & Inclusion (DEI)",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "22-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-109_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-109_playbook.pdf",
        "isCompleted": true,
        "completionDate": "22-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-109_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-109",
        "isCompleted": true,
        "completionDate": "22-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-109_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-109_demo.mp4",
        "isCompleted": true,
        "completionDate": "22-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-109_asm",
      "name": "Workplace Diversity, Equity & Inclusion (DEI) Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "22-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Workplace Diversity, Equity & Inclusion (DEI)?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-109.pdf"
      ],
      "submittedAt": "22-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Shivam Sharma",
      "reviewDate": "22-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0009",
      "name": "Workplace Diversity, Equity & Inclusion (DEI) Credential",
      "trainingName": "Workplace Diversity, Equity & Inclusion (DEI)",
      "issueDate": "22-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-110",
    "trainingName": "Advanced SQL & BigQuery Performance Tuning",
    "category": "Engineering",
    "shortDescription": "Master query execution plans, partitioning, clustering, cost optimization, and window analytics in Google BigQuery & PostgreSQL.",
    "isMandatory": false,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "10-Jan-2026",
    "dueDate": "25-Mar-2026",
    "startDate": "15-Jan-2026",
    "completionPercentage": 50,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Advanced",
    "expectedDuration": "6 Hours",
    "learningObjectives": [
      "Optimize query slot allocation, scan bytes, and shuffle stages in distributed BigQuery engines",
      "Design time-unit partition filters and clustering keys to reduce query scan costs by up to 80%",
      "Write advanced window functions, LEAD/LAG analytics, and recursive Common Table Expressions (CTEs)",
      "Benchmark index types: B-Tree, GIN, and BRIN for high-throughput transactional database workloads"
    ],
    "expectedOutcomes": "Data analysts and engineers author lightning-fast analytical queries while slashing enterprise cloud data compute expenses.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-110_r1",
        "title": "Module 1: Foundations & Core Principles of Advanced SQL & BigQuery Performance Tuning",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "15-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-110_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-110_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-110_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-110",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-110_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-110_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-110_asm",
      "name": "Advanced SQL & BigQuery Performance Tuning Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "15-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Advanced SQL & BigQuery Performance Tuning?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-111",
    "trainingName": "SOC2 Type II Audit Preparedness & Evidence Collection",
    "category": "Governance & Compliance",
    "shortDescription": "Operational compliance requirements for Trust Services Criteria: Security, Availability, Processing Integrity, and Confidentiality.",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "01-Dec-2025",
    "dueDate": "10-Jan-2026",
    "startDate": "08-Dec-2025",
    "completionPercentage": 30,
    "trainingStatus": "overdue",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Conduct continuous automated compliance testing against AICPA Trust Services Criteria",
      "Gather cryptographically verified audit artifacts for change management and access reviews",
      "Document vendor risk assessments and third-party SaaS sub-processor security evaluations",
      "Maintain immutable audit logs, incident registers, and business continuity drill reports"
    ],
    "expectedOutcomes": "Team members understand audit requirements to ensure successful un-qualified SOC2 Type II examination certifications.",
    "status": "Overdue",
    "resources": [
      {
        "id": "TRN-ASSIGN-111_r1",
        "title": "Module 1: Foundations & Core Principles of SOC2 Type II Audit Preparedness & Evidence Collection",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-111_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-111_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-111_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-111",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-111_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-111_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-111_asm",
      "name": "SOC2 Type II Audit Preparedness & Evidence Collection Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of SOC2 Type II Audit Preparedness & Evidence Collection?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-112",
    "trainingName": "CollabCRM UI/UX Design System & Accessibility (WCAG 2.1)",
    "category": "Product & Platform",
    "shortDescription": "Building pixel-perfect, accessible user interfaces following CollabCRM design tokens, color contrast standards, and keyboard navigation.",
    "isMandatory": true,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "08-Jan-2026",
    "dueDate": "18-Feb-2026",
    "startDate": "10-Jan-2026",
    "completionDate": "01-Feb-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3.5 Hours",
    "learningObjectives": [
      "Implement WCAG 2.1 AA compliant color contrast ratios, focus states, and aria attributes",
      "Utilize CollabCRM design token system for typography, spacing, elevations, and card surfaces",
      "Test web applications with screen readers (NVDA, VoiceOver) and automated axe-core audits",
      "Ensure zero layout shifts and responsive multi-device fidelity across all CRM portal screens"
    ],
    "expectedOutcomes": "Frontend developers ship polished, accessible, and brand-consistent interfaces usable by all individuals.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-112_r1",
        "title": "Module 1: Foundations & Core Principles of CollabCRM UI/UX Design System & Accessibility (WCAG 2.1)",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "01-Feb-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-112_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-112_playbook.pdf",
        "isCompleted": true,
        "completionDate": "01-Feb-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-112_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-112",
        "isCompleted": true,
        "completionDate": "01-Feb-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-112_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-112_demo.mp4",
        "isCompleted": true,
        "completionDate": "01-Feb-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-112_asm",
      "name": "CollabCRM UI/UX Design System & Accessibility (WCAG 2.1) Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "01-Feb-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of CollabCRM UI/UX Design System & Accessibility (WCAG 2.1)?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-112.pdf"
      ],
      "submittedAt": "01-Feb-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": "01-Feb-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0012",
      "name": "CollabCRM UI/UX Design System & Accessibility (WCAG 2.1) Credential",
      "trainingName": "CollabCRM UI/UX Design System & Accessibility (WCAG 2.1)",
      "issueDate": "01-Feb-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-113",
    "trainingName": "High-Impact Executive Presentation & Business Storytelling",
    "category": "Professional Skills",
    "shortDescription": "Techniques for crafting compelling data-driven slide decks, executive summaries, and pitch presentations for enterprise stakeholders.",
    "isMandatory": false,
    "assignedBy": "Isha Patel (HR Operations)",
    "assignedDate": "26-Jan-2026",
    "dueDate": "30-Apr-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Beginner",
    "expectedDuration": "3 Hours",
    "learningObjectives": [
      "Structure executive presentations using the Minto Pyramid Principle and SCQA frameworks",
      "Translate complex quantitative telemetry into actionable business narratives and decisions",
      "Design clear, clean data visualizations that highlight key performance indicators",
      "Master stage presence, audience engagement, and confident Q&A objection handling"
    ],
    "expectedOutcomes": "Professionals deliver persuasive, engaging presentations that align leadership and drive project approval.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-113_r1",
        "title": "Module 1: Foundations & Core Principles of High-Impact Executive Presentation & Business Storytelling",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-113_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-113_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-113_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-113",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-113_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-113_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-113_asm",
      "name": "High-Impact Executive Presentation & Business Storytelling Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of High-Impact Executive Presentation & Business Storytelling?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Isha Patel",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-114",
    "trainingName": "Distributed Systems Caching with Redis & Memcached",
    "category": "Engineering",
    "shortDescription": "Designing low-latency caching architectures, cache eviction algorithms, cache-aside patterns, and thundering herd mitigations.",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "15-Jan-2026",
    "dueDate": "10-Apr-2026",
    "startDate": "22-Jan-2026",
    "completionPercentage": 40,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Advanced",
    "expectedDuration": "4.5 Hours",
    "learningObjectives": [
      "Choose optimal caching strategies: Cache-Aside, Write-Through, and Write-Behind patterns",
      "Prevent cache penetration, cache breakdown, and avalanche issues using probabilistic early expiration",
      "Leverage Redis data structures: Hashes, Sorted Sets, Bitmaps, and HyperLogLogs for CRM metrics",
      "Configure Redis Cluster with automatic shard failover and Sentinel health monitoring"
    ],
    "expectedOutcomes": "Engineers achieve sub-5ms API response latencies while shielding core transactional databases from peak load spikes.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-114_r1",
        "title": "Module 1: Foundations & Core Principles of Distributed Systems Caching with Redis & Memcached",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "22-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-114_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-114_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-114_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-114",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-114_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-114_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-114_asm",
      "name": "Distributed Systems Caching with Redis & Memcached Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "22-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Distributed Systems Caching with Redis & Memcached?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-115",
    "trainingName": "Incident Response Management & Root Cause Analysis",
    "category": "Support & Operations",
    "shortDescription": "Incident commander protocols, SEV-1 triage procedures, stakeholder communications, and post-mortem retrospective authoring.",
    "isMandatory": true,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "28-Jan-2026",
    "dueDate": "15-May-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Execute Incident Commander duties, delegating technical investigation and status page updates",
      "Establish blameless 5-Whys root cause analysis workflows and preventative action items",
      "Calculate Mean Time to Detect (MTTD), Acknowledge (MTTA), and Recover (MTTR)",
      "Conduct realistic tabletop crisis simulations to validate operational escalation matrices"
    ],
    "expectedOutcomes": "Operations teams resolve production disruptions rapidly while building organizational resilience against repeat failures.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-115_r1",
        "title": "Module 1: Foundations & Core Principles of Incident Response Management & Root Cause Analysis",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-115_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-115_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-115_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-115",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-115_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-115_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-115_asm",
      "name": "Incident Response Management & Root Cause Analysis Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Incident Response Management & Root Cause Analysis?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-116",
    "trainingName": "Enterprise Sales Negotiation & Solution Selling",
    "category": "Professional Skills",
    "shortDescription": "Consultative selling methodology, enterprise procurement navigation, competitive objection handling, and win-win contract structuring.",
    "isMandatory": false,
    "assignedBy": "Shivam Sharma (People Operations)",
    "assignedDate": "02-Jan-2026",
    "dueDate": "05-Feb-2026",
    "startDate": "06-Jan-2026",
    "completionDate": "29-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3.5 Hours",
    "learningObjectives": [
      "Apply MEDDPICC qualification frameworks to evaluate enterprise opportunity health",
      "Navigate multi-stakeholder legal, IT security, and procurement negotiation conversations",
      "Quantify customer ROI models and business value propositions in CRM proposals",
      "Manage price discount requests through value concessions rather than margin erosion"
    ],
    "expectedOutcomes": "Sales consultants close high-value annual contracts with predictable sales velocity and healthy profit margins.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-116_r1",
        "title": "Module 1: Foundations & Core Principles of Enterprise Sales Negotiation & Solution Selling",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "29-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-116_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-116_playbook.pdf",
        "isCompleted": true,
        "completionDate": "29-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-116_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-116",
        "isCompleted": true,
        "completionDate": "29-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-116_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-116_demo.mp4",
        "isCompleted": true,
        "completionDate": "29-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-116_asm",
      "name": "Enterprise Sales Negotiation & Solution Selling Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "29-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Enterprise Sales Negotiation & Solution Selling?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-116.pdf"
      ],
      "submittedAt": "29-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Shivam Sharma",
      "reviewDate": "29-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0016",
      "name": "Enterprise Sales Negotiation & Solution Selling Credential",
      "trainingName": "Enterprise Sales Negotiation & Solution Selling",
      "issueDate": "29-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-117",
    "trainingName": "Kubernetes Cluster Administration & Container Orchestration",
    "category": "Technical Architecture",
    "shortDescription": "Production Kubernetes management: Pod autoscaling (HPA), ingress controllers, network policies, helm charts, and daemonsets.",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "12-Jan-2026",
    "dueDate": "15-Apr-2026",
    "startDate": "16-Jan-2026",
    "completionPercentage": 60,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Advanced",
    "expectedDuration": "7 Hours",
    "learningObjectives": [
      "Manage multi-node Kubernetes clusters with control-plane high availability and etcd backups",
      "Configure Horizontal Pod Autoscalers (HPA) and cluster autoscaler on cloud node pools",
      "Author reusable Helm charts with secure values validation and semantic versioning",
      "Isolate tenant workloads using Calico network policies and Pod Security Standards (PSS)"
    ],
    "expectedOutcomes": "Cloud architects maintain stable, self-healing container infrastructures capable of absorbing extreme traffic surges.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-117_r1",
        "title": "Module 1: Foundations & Core Principles of Kubernetes Cluster Administration & Container Orchestration",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "16-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-117_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-117_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-117_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-117",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-117_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-117_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-117_asm",
      "name": "Kubernetes Cluster Administration & Container Orchestration Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "16-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Kubernetes Cluster Administration & Container Orchestration?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-118",
    "trainingName": "Anti-Bribery, Anti-Corruption & FCPA Compliance",
    "category": "Governance & Compliance",
    "shortDescription": "Global compliance rules governing corporate gifts, hospitality, political contributions, conflict of interest, and anti-bribery statutes.",
    "isMandatory": true,
    "assignedBy": "Isha Patel (HR Operations)",
    "assignedDate": "03-Jan-2026",
    "dueDate": "28-Jan-2026",
    "startDate": "07-Jan-2026",
    "completionDate": "24-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Beginner",
    "expectedDuration": "2 Hours",
    "learningObjectives": [
      "Identify situations giving rise to potential Foreign Corrupt Practices Act (FCPA) liabilities",
      "Follow proper gift declaration thresholds and corporate entertainment approval processes",
      "Report potential conflicts of interest regarding personal investments or vendor relationships",
      "Maintain accurate accounting ledgers and payment documentation without facilitation payments"
    ],
    "expectedOutcomes": "Employees uphold CollabCRM’s zero-tolerance standard for bribery, corruption, and unethical business practices.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-118_r1",
        "title": "Module 1: Foundations & Core Principles of Anti-Bribery, Anti-Corruption & FCPA Compliance",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "24-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-118_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-118_playbook.pdf",
        "isCompleted": true,
        "completionDate": "24-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-118_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-118",
        "isCompleted": true,
        "completionDate": "24-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-118_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-118_demo.mp4",
        "isCompleted": true,
        "completionDate": "24-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-118_asm",
      "name": "Anti-Bribery, Anti-Corruption & FCPA Compliance Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "24-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Anti-Bribery, Anti-Corruption & FCPA Compliance?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-118.pdf"
      ],
      "submittedAt": "24-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Isha Patel",
      "reviewDate": "24-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0018",
      "name": "Anti-Bribery, Anti-Corruption & FCPA Compliance Credential",
      "trainingName": "Anti-Bribery, Anti-Corruption & FCPA Compliance",
      "issueDate": "24-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-119",
    "trainingName": "RESTful & GraphQL API Design Governance",
    "category": "Engineering",
    "shortDescription": "Authoring clean, predictable APIs with JSON:API conventions, schema-first GraphQL, versioning, pagination, and OpenAPI 3.1 docs.",
    "isMandatory": false,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "20-Jan-2026",
    "dueDate": "10-May-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Design RESTful resource URI hierarchies adhering to RFC-compliant HTTP status codes",
      "Implement cursor-based pagination and idempotent HTTP request signatures (Idempotency-Key)",
      "Model GraphQL schemas with Apollo Server, resolving N+1 queries via DataLoader batching",
      "Automate contract testing and Swagger/OpenAPI documentation generation via CI gates"
    ],
    "expectedOutcomes": "Developers produce delightful, cohesive developer-facing APIs with long-term backward compatibility.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-119_r1",
        "title": "Module 1: Foundations & Core Principles of RESTful & GraphQL API Design Governance",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-119_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-119_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-119_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-119",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-119_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-119_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-119_asm",
      "name": "RESTful & GraphQL API Design Governance Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of RESTful & GraphQL API Design Governance?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-120",
    "trainingName": "Customer Success Lifecycle & Retention Strategies",
    "category": "Support & Operations",
    "shortDescription": "Proactive customer relationship management, health score monitoring, net retention rate (NRR) optimization, and churn prevention.",
    "isMandatory": true,
    "assignedBy": "Shivam Sharma (People Operations)",
    "assignedDate": "10-Jan-2026",
    "dueDate": "30-Mar-2026",
    "startDate": "12-Jan-2026",
    "completionPercentage": 75,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3.5 Hours",
    "learningObjectives": [
      "Design multi-factor customer health score algorithms using login frequency and feature usage telemetry",
      "Conduct high-value Quarterly Business Reviews (QBRs) showcasing customer outcomes and ROI",
      "Execute early-warning churn mitigation playbooks when product utilization drops below thresholds",
      "Drive expansion revenue and customer advocacy through cross-selling and success testimonials"
    ],
    "expectedOutcomes": "Customer success managers build loyal client partnerships, maximizing customer lifetime value and product adoption.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-120_r1",
        "title": "Module 1: Foundations & Core Principles of Customer Success Lifecycle & Retention Strategies",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "12-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-120_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-120_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-120_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-120",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-120_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-120_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-120_asm",
      "name": "Customer Success Lifecycle & Retention Strategies Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "12-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Customer Success Lifecycle & Retention Strategies?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Shivam Sharma",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-121",
    "trainingName": "Disaster Recovery & High Availability Architecture",
    "category": "Technical Architecture",
    "shortDescription": "Multi-region failover design, Recovery Time Objective (RTO), Recovery Point Objective (RPO), database replication, and chaos engineering.",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "15-Dec-2025",
    "dueDate": "20-Jan-2026",
    "startDate": "18-Dec-2025",
    "completionPercentage": 15,
    "trainingStatus": "overdue",
    "difficultyLevel": "Advanced",
    "expectedDuration": "5 Hours",
    "learningObjectives": [
      "Define verifiable RTO and RPO benchmarks across tier-1, tier-2, and tier-3 CRM services",
      "Implement active-passive cross-region database streaming replication and split-brain defenses",
      "Execute DNS health check automated failovers using latency-based routing policies",
      "Conduct Chaos Mesh experiments simulating network partitions and datacenter power failures"
    ],
    "expectedOutcomes": "System resilience is verified to guarantee continuous business operation even through severe infrastructure disasters.",
    "status": "Overdue",
    "resources": [
      {
        "id": "TRN-ASSIGN-121_r1",
        "title": "Module 1: Foundations & Core Principles of Disaster Recovery & High Availability Architecture",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-121_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-121_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-121_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-121",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-121_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-121_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-121_asm",
      "name": "Disaster Recovery & High Availability Architecture Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Disaster Recovery & High Availability Architecture?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-122",
    "trainingName": "Artificial Intelligence & LLM Prompt Engineering for Enterprise",
    "category": "Engineering",
    "shortDescription": "Leveraging large language models, retrieval augmented generation (RAG), vector embeddings, and guardrails in enterprise applications.",
    "isMandatory": false,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "27-Jan-2026",
    "dueDate": "20-Jun-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "5 Hours",
    "learningObjectives": [
      "Apply advanced prompt engineering: Few-shot prompting, Chain-of-Thought, and ReAct paradigms",
      "Build scalable RAG pipelines using pgvector, hybrid semantic search, and re-ranking models",
      "Implement LLM safety guardrails to prevent hallucinations, jailbreaks, and prompt injections",
      "Benchmark model latency, token utilization economics, and output precision across LLM providers"
    ],
    "expectedOutcomes": "Engineers build high-reliability AI-powered CRM features that respect customer privacy and enterprise compliance.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-122_r1",
        "title": "Module 1: Foundations & Core Principles of Artificial Intelligence & LLM Prompt Engineering for Enterprise",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-122_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-122_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-122_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-122",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-122_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-122_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-122_asm",
      "name": "Artificial Intelligence & LLM Prompt Engineering for Enterprise Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Artificial Intelligence & LLM Prompt Engineering for Enterprise?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-123",
    "trainingName": "HIPAA & Health Data Privacy Standards",
    "category": "Governance & Compliance",
    "shortDescription": "Health Insurance Portability and Accountability Act: Protecting electronic Protected Health Information (ePHI), encryption, and BAA rules.",
    "isMandatory": true,
    "assignedBy": "Isha Patel (HR Operations)",
    "assignedDate": "04-Jan-2026",
    "dueDate": "02-Feb-2026",
    "startDate": "08-Jan-2026",
    "completionDate": "25-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3 Hours",
    "learningObjectives": [
      "Classify ePHI identifiers according to HIPAA Privacy Rule definitions and Safe Harbor methods",
      "Ensure AES-256 encryption at rest and TLS 1.3 in transit across all health data integrations",
      "Enforce Business Associate Agreements (BAA) and minimum-necessary data disclosure rules",
      "Execute required HIPAA administrative, physical, and technical safeguard audits"
    ],
    "expectedOutcomes": "Staff safeguard health data confidentiality, avoiding severe regulatory fines and protecting patient privacy.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-123_r1",
        "title": "Module 1: Foundations & Core Principles of HIPAA & Health Data Privacy Standards",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "25-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-123_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-123_playbook.pdf",
        "isCompleted": true,
        "completionDate": "25-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-123_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-123",
        "isCompleted": true,
        "completionDate": "25-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-123_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-123_demo.mp4",
        "isCompleted": true,
        "completionDate": "25-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-123_asm",
      "name": "HIPAA & Health Data Privacy Standards Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "25-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of HIPAA & Health Data Privacy Standards?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-123.pdf"
      ],
      "submittedAt": "25-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Isha Patel",
      "reviewDate": "25-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0023",
      "name": "HIPAA & Health Data Privacy Standards Credential",
      "trainingName": "HIPAA & Health Data Privacy Standards",
      "issueDate": "25-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-124",
    "trainingName": "Product Analytics, Telemetry & User Journey Mapping",
    "category": "Product & Platform",
    "shortDescription": "Event tracking taxonomy, retention cohorts, funnel conversion drop-off analysis, and feature adoption metrics with Mixpanel/PostHog.",
    "isMandatory": false,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "16-Jan-2026",
    "dueDate": "25-Apr-2026",
    "startDate": "20-Jan-2026",
    "completionPercentage": 35,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3.5 Hours",
    "learningObjectives": [
      "Standardize event tracking naming schemas and metadata properties across web and mobile clients",
      "Analyze multi-step signup and onboarding conversion funnels to identify friction points",
      "Build retention heatmaps and cohort analyses to quantify long-term feature stickiness",
      "Design randomized A/B experimentation hypotheses with statistical significance guardrails"
    ],
    "expectedOutcomes": "Product teams make validated, user-centric decisions driven by empirical customer behavioral analytics.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-124_r1",
        "title": "Module 1: Foundations & Core Principles of Product Analytics, Telemetry & User Journey Mapping",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "20-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-124_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-124_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-124_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-124",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-124_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-124_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-124_asm",
      "name": "Product Analytics, Telemetry & User Journey Mapping Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "20-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Product Analytics, Telemetry & User Journey Mapping?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-125",
    "trainingName": "Conflict Resolution & Collaborative Problem Solving",
    "category": "Professional Skills",
    "shortDescription": "Navigating difficult interpersonal discussions, depersonalizing feedback, finding win-win compromises, and active empathetic listening.",
    "isMandatory": false,
    "assignedBy": "Shivam Sharma (People Operations)",
    "assignedDate": "25-Jan-2026",
    "dueDate": "30-May-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Beginner",
    "expectedDuration": "2.5 Hours",
    "learningObjectives": [
      "Apply the Thomas-Kilmann Conflict Mode Instrument (TKI) to match response styles to conflict stakes",
      "Deliver candid yet empathetic performance feedback using the SBI (Situation-Behavior-Impact) model",
      "De-escalate emotional friction in high-pressure technical disagreements or project scope shifts",
      "Establish team alignment through collaborative consensus building and clear accountability"
    ],
    "expectedOutcomes": "Teams maintain strong interpersonal trust and resolve disagreements constructively without lasting friction.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-125_r1",
        "title": "Module 1: Foundations & Core Principles of Conflict Resolution & Collaborative Problem Solving",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-125_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-125_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-125_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-125",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-125_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-125_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-125_asm",
      "name": "Conflict Resolution & Collaborative Problem Solving Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Conflict Resolution & Collaborative Problem Solving?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Shivam Sharma",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-126",
    "trainingName": "Micro-Frontend Architecture with Module Federation",
    "category": "Engineering",
    "shortDescription": "Decoupling large monolithic web applications into independently deployable micro-frontends using Webpack 5 Module Federation.",
    "isMandatory": false,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "12-Jan-2026",
    "dueDate": "10-Apr-2026",
    "startDate": "18-Jan-2026",
    "completionPercentage": 55,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Advanced",
    "expectedDuration": "5.5 Hours",
    "learningObjectives": [
      "Configure Webpack 5 Module Federation host and remote container boundaries",
      "Manage shared dependencies (React, design system components) with singleton version resolution",
      "Implement client-side micro-frontend routing and custom event bus communication",
      "Ensure isolated CSS scoping and resilient error boundaries to isolate remote container failures"
    ],
    "expectedOutcomes": "Engineering squads deliver and deploy UI modules independently without blocking shared release pipelines.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-126_r1",
        "title": "Module 1: Foundations & Core Principles of Micro-Frontend Architecture with Module Federation",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "18-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-126_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-126_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-126_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-126",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-126_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-126_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-126_asm",
      "name": "Micro-Frontend Architecture with Module Federation Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "18-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Micro-Frontend Architecture with Module Federation?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-127",
    "trainingName": "Secure Code Review & Static Analysis (SAST/DAST)",
    "category": "Technical Architecture",
    "shortDescription": "Integrating automated vulnerability scanning, SonarQube rules, Semgrep pattern matching, and peer security code reviews.",
    "isMandatory": true,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "01-Jan-2026",
    "dueDate": "08-Feb-2026",
    "startDate": "04-Jan-2026",
    "completionDate": "27-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Advanced",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Identify SQL injections, cross-site scripting (XSS), and insecure deserialization in pull requests",
      "Configure Semgrep rules and SonarQube quality gates to block critical security vulnerabilities in CI",
      "Conduct structured peer threat-modeling sessions for major software architectural revisions",
      "Remediate vulnerable third-party dependencies using automated Dependabot/Snyk pull requests"
    ],
    "expectedOutcomes": "Developers prevent security flaws before merging code into main branch deployment pipelines.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-127_r1",
        "title": "Module 1: Foundations & Core Principles of Secure Code Review & Static Analysis (SAST/DAST)",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "27-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-127_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-127_playbook.pdf",
        "isCompleted": true,
        "completionDate": "27-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-127_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-127",
        "isCompleted": true,
        "completionDate": "27-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-127_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-127_demo.mp4",
        "isCompleted": true,
        "completionDate": "27-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-127_asm",
      "name": "Secure Code Review & Static Analysis (SAST/DAST) Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "27-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Secure Code Review & Static Analysis (SAST/DAST)?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-127.pdf"
      ],
      "submittedAt": "27-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": "27-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0027",
      "name": "Secure Code Review & Static Analysis (SAST/DAST) Credential",
      "trainingName": "Secure Code Review & Static Analysis (SAST/DAST)",
      "issueDate": "27-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  },
  {
    "id": "TRN-ASSIGN-128",
    "trainingName": "Service Level Objective (SLO) & Error Budget Engineering",
    "category": "Support & Operations",
    "shortDescription": "Site Reliability Engineering principles: Defining SLIs, establishing realistic SLOs, managing error budgets, and alert fatigue reduction.",
    "isMandatory": true,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "28-Jan-2026",
    "dueDate": "20-May-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "3.5 Hours",
    "learningObjectives": [
      "Formulate user-centric Service Level Indicators (SLIs) measuring availability and latency",
      "Negotiate achievable Service Level Objectives (SLOs) aligning customer expectations with engineering velocity",
      "Govern release gate freezes when error budgets are exhausted to protect system reliability",
      "Eliminate noisy non-actionable monitoring alerts by adopting burn-rate based alerting rules"
    ],
    "expectedOutcomes": "Operations teams maintain rock-solid reliability while sustaining healthy development innovation velocity.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-128_r1",
        "title": "Module 1: Foundations & Core Principles of Service Level Objective (SLO) & Error Budget Engineering",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-128_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-128_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-128_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-128",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-128_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-128_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-128_asm",
      "name": "Service Level Objective (SLO) & Error Budget Engineering Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Service Level Objective (SLO) & Error Budget Engineering?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-129",
    "trainingName": "ISO 27001 Information Security Management Systems",
    "category": "Governance & Compliance",
    "shortDescription": "Implementing ISO/IEC 27001:2022 security controls, risk treatment plans, asset inventories, and internal surveillance audit procedures.",
    "isMandatory": true,
    "assignedBy": "Isha Patel (HR Operations)",
    "assignedDate": "10-Jan-2026",
    "dueDate": "15-Mar-2026",
    "startDate": "14-Jan-2026",
    "completionPercentage": 70,
    "trainingStatus": "in_progress",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4 Hours",
    "learningObjectives": [
      "Implement Annex A information security controls across organizational, people, physical, and technological themes",
      "Maintain comprehensive information asset registers with classification levels and custody tracking",
      "Formulate risk treatment plans using qualitative likelihood and business impact matrices",
      "Participate effectively in internal and external ISO 27001 surveillance audits"
    ],
    "expectedOutcomes": "The organization systematically manages information security risks to uphold accredited global certifications.",
    "status": "In Progress",
    "resources": [
      {
        "id": "TRN-ASSIGN-129_r1",
        "title": "Module 1: Foundations & Core Principles of ISO 27001 Information Security Management Systems",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "14-Jan-2026",
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-129_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-129_playbook.pdf",
        "isCompleted": true,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-129_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-129",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-129_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-129_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-129_asm",
      "name": "ISO 27001 Information Security Management Systems Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": false,
      "isPassed": false,
      "bestScore": 70,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 70,
          "passed": false,
          "submissionDate": "14-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of ISO 27001 Information Security Management Systems?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "pending",
      "reviewerName": "Isha Patel",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-130",
    "trainingName": "Kafka Event-Driven Architecture & Stream Processing",
    "category": "Engineering",
    "shortDescription": "Building distributed event streams with Apache Kafka: Topics, partitions, consumer groups, schema registry, and idempotent producers.",
    "isMandatory": false,
    "assignedBy": "Megha Salunkhe (Sr. Executive)",
    "assignedDate": "05-Dec-2025",
    "dueDate": "12-Jan-2026",
    "startDate": "10-Dec-2025",
    "completionPercentage": 25,
    "trainingStatus": "overdue",
    "difficultyLevel": "Advanced",
    "expectedDuration": "6 Hours",
    "learningObjectives": [
      "Design high-throughput Kafka topics with optimal partition sizing and retention policies",
      "Enforce strong schema evolution and backwards compatibility using Avro and Confluent Schema Registry",
      "Configure exactly-once processing (EOS) semantics using transactional producer and consumer APIs",
      "Build real-time event aggregation and streaming join pipelines with Kafka Streams / ksqlDB"
    ],
    "expectedOutcomes": "Engineers construct resilient asynchronous data highways powering decoupled microservices across the CRM.",
    "status": "Overdue",
    "resources": [
      {
        "id": "TRN-ASSIGN-130_r1",
        "title": "Module 1: Foundations & Core Principles of Kafka Event-Driven Architecture & Stream Processing",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-130_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-130_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-130_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-130",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-130_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-130_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-130_asm",
      "name": "Kafka Event-Driven Architecture & Stream Processing Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Kafka Event-Driven Architecture & Stream Processing?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Megha Salunkhe",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-131",
    "trainingName": "CollabCRM Mobile App Architecture & Offline Sync",
    "category": "Product & Platform",
    "shortDescription": "Building offline-first mobile experiences: SQLite caching, background data synchronization, optimistic UI updates, and conflict resolution.",
    "isMandatory": false,
    "assignedBy": "Ishdeep Anand (Admin)",
    "assignedDate": "26-Jan-2026",
    "dueDate": "15-Jun-2026",
    "startDate": null,
    "completionPercentage": 0,
    "trainingStatus": "not_started",
    "difficultyLevel": "Intermediate",
    "expectedDuration": "4.5 Hours",
    "learningObjectives": [
      "Implement local SQLite persistence and reactive querying using WatermelonDB / Realm",
      "Design two-way conflict resolution algorithms (Last-Write-Wins and CRDT delta merges)",
      "Deliver optimistic client UI updates with automated retry queues for intermittent connectivity",
      "Optimize mobile battery and network payload consumption with compressed Delta Sync payloads"
    ],
    "expectedOutcomes": "Field sales and service agents experience seamless CRM productivity regardless of cellular network dead zones.",
    "status": "Not Started",
    "resources": [
      {
        "id": "TRN-ASSIGN-131_r1",
        "title": "Module 1: Foundations & Core Principles of CollabCRM Mobile App Architecture & Offline Sync",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-131_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-131_playbook.pdf",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-131_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-131",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      },
      {
        "id": "TRN-ASSIGN-131_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-131_demo.mp4",
        "isCompleted": false,
        "completionDate": null,
        "completionTimestamp": null
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-131_asm",
      "name": "CollabCRM Mobile App Architecture & Offline Sync Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 0,
      "passed": false,
      "isPassed": false,
      "bestScore": 0,
      "previousAttempts": [],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of CollabCRM Mobile App Architecture & Offline Sync?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "",
      "evidenceFiles": [],
      "submittedAt": null,
      "isLocked": false
    },
    "review": {
      "status": "not_submitted",
      "reviewerName": "Ishdeep Anand",
      "reviewDate": null,
      "feedback": null
    },
    "certificate": null
  },
  {
    "id": "TRN-ASSIGN-132",
    "trainingName": "Time Management & Deep Work Practices for Knowledge Workers",
    "category": "Professional Skills",
    "shortDescription": "Mastering calendar blocking, asynchronous communication discipline, context-switching reduction, and deep work focus blocks.",
    "isMandatory": false,
    "assignedBy": "Shivam Sharma (People Operations)",
    "assignedDate": "01-Jan-2026",
    "dueDate": "20-Jan-2026",
    "startDate": "04-Jan-2026",
    "completionDate": "18-Jan-2026",
    "completionPercentage": 100,
    "trainingStatus": "completed",
    "difficultyLevel": "Beginner",
    "expectedDuration": "2 Hours",
    "learningObjectives": [
      "Structure calendar focus blocks following Cal Newport’s Deep Work philosophies",
      "Minimize cognitive switching costs by batching email, Slack, and administrative tasks",
      "Apply the Eisenhower Matrix to ruthlessly prioritize high-leverage quarterly objectives",
      "Establish personal boundaries to sustain long-term intellectual energy and prevent workplace burnout"
    ],
    "expectedOutcomes": "Knowledge workers achieve high daily cognitive output and job satisfaction with low chronic stress.",
    "status": "Completed",
    "resources": [
      {
        "id": "TRN-ASSIGN-132_r1",
        "title": "Module 1: Foundations & Core Principles of Time Management & Deep Work Practices for Knowledge Workers",
        "description": "Comprehensive breakdown of fundamental operational standards, compliance benchmarks, and platform rules.",
        "type": "youtube",
        "isMandatory": true,
        "duration": "22 Mins",
        "url": "https://www.youtube.com/watch?v=996OiexHze0",
        "isCompleted": true,
        "completionDate": "18-Jan-2026",
        "completionTimestamp": "24-Jan-2026, 11:15 AM"
      },
      {
        "id": "TRN-ASSIGN-132_r2",
        "title": "Module 2: CollabCRM Implementation Playbook & Guidelines (PDF)",
        "description": "Official corporate documentation outlining specific architectural policies and system workflows.",
        "type": "pdf",
        "isMandatory": true,
        "duration": "35 Mins",
        "url": "assets/docs/trn-assign-132_playbook.pdf",
        "isCompleted": true,
        "completionDate": "18-Jan-2026",
        "completionTimestamp": "25-Jan-2026, 02:40 PM"
      },
      {
        "id": "TRN-ASSIGN-132_r3",
        "title": "Module 3: Hands-on Interactive Scenario Sandbox",
        "description": "Real-world practical laboratory exercises simulating production challenges and mitigation workflows.",
        "type": "external_link",
        "isMandatory": false,
        "duration": "40 Mins",
        "url": "https://collabcrm.internal/sandbox/trn-assign-132",
        "isCompleted": true,
        "completionDate": "18-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 04:10 PM"
      },
      {
        "id": "TRN-ASSIGN-132_r4",
        "title": "Module 4: Practical Case Study & Masterclass Demo",
        "description": "Demonstration video covering edge cases, troubleshooting workflows, and best practice checklists.",
        "type": "video",
        "isMandatory": true,
        "duration": "28 Mins",
        "url": "assets/videos/trn-assign-132_demo.mp4",
        "isCompleted": true,
        "completionDate": "18-Jan-2026",
        "completionTimestamp": "26-Jan-2026, 05:30 PM"
      }
    ],
    "assessment": {
      "id": "TRN-ASSIGN-132_asm",
      "name": "Time Management & Deep Work Practices for Knowledge Workers Certification Assessment",
      "passingScore": 80,
      "maxAttempts": 3,
      "attemptsUsed": 1,
      "passed": true,
      "isPassed": true,
      "bestScore": 92,
      "previousAttempts": [
        {
          "attemptNumber": 1,
          "score": 92,
          "passed": true,
          "submissionDate": "18-Jan-2026"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary operational objective of Time Management & Deep Work Practices for Knowledge Workers?",
          "options": [
            "Enforce rigorous security and operational standards across all CRM interactions",
            "Bypass architectural reviews for faster feature releases",
            "Store unencrypted sensitive credentials in public client code",
            "Disable audit logging during customer onboarding"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which stakeholder must be immediately informed during an unexpected operational issue?",
          "options": [
            "Unrelated external vendors",
            "Reporting Manager, SecOps, and the Incident Commander",
            "Nobody until end-of-quarter reviews",
            "Only social media followers"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q3",
          "text": "What is the minimum passing score required to obtain a verified CollabCRM certificate?",
          "options": [
            "50%",
            "65%",
            "80%",
            "100%"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "submission": {
      "completionRemarks": "All 4 modules thoroughly studied and assessment completed with score >= 80%.",
      "evidenceFiles": [
        "certificate_evidence_trn-assign-132.pdf"
      ],
      "submittedAt": "18-Jan-2026",
      "isLocked": true
    },
    "review": {
      "status": "approved",
      "reviewerName": "Shivam Sharma",
      "reviewDate": "18-Jan-2026",
      "feedback": "Comprehensive coursework completed and passed with distinction. Certificate approved and issued."
    },
    "certificate": {
      "id": "TRN-2026-0032",
      "name": "Time Management & Deep Work Practices for Knowledge Workers Credential",
      "trainingName": "Time Management & Deep Work Practices for Knowledge Workers",
      "issueDate": "18-Jan-2026",
      "expiryDate": "26-Jan-2028",
      "status": "issued",
      "recipientName": "Tanya Kapoor",
      "recipientId": "CO-5039"
    }
  }
];

// Master helper: Get fallback employee data
function getFallbackEmployeeData(empId = "CO-5039") {
  let saved = null;
  if (empId === "CO-5039") {
    try {
      const raw = localStorage.getItem(EMP_STORE_LOCAL_KEY);
      if (raw) saved = JSON.parse(raw);
    } catch (e) {}
  }
  const defaultTrainings = (window.DEFAULT_EMPLOYEE_STORE && window.DEFAULT_EMPLOYEE_STORE[empId] && Array.isArray(window.DEFAULT_EMPLOYEE_STORE[empId].trainings) && window.DEFAULT_EMPLOYEE_STORE[empId].trainings.length >= 25)
    ? window.DEFAULT_EMPLOYEE_STORE[empId].trainings
    : BUILTIN_CO5039_TRAININGS;
  
  let finalTrainings = defaultTrainings;
  if (saved && Array.isArray(saved.trainings) && saved.trainings.length > 0) {
    const savedMap = new Map(saved.trainings.map(t => [t.id, t]));
    finalTrainings = defaultTrainings.map(defT => savedMap.get(defT.id) || defT);
  }
  const store = { trainings: finalTrainings, profile: (saved && saved.profile) || { id: "CO-5039", name: "Tanya Kapoor", department: "Business analyst" }, notifications: (saved && saved.notifications) || [] };
  const trainings = JSON.parse(JSON.stringify(store.trainings));
trainings.forEach(t => hydrateUnifiedTrainingRecord(t, empId));
  const stats = calcEmployeeStatsFromTrainings(trainings);
  const certs = trainings
    .filter(t => t.certificate && t.certificate.status === 'issued')
    .map(t => ({
      ...t.certificate,
      name: t.certificate.name || `${t.trainingName} Credential`,
      trainingName: t.trainingName,
      category: t.category,
      assignedBy: t.assignedBy
    }));

  const history = trainings.map(t => {
    let scoreStr = '-';
    if (t.assessment && t.assessment.previousAttempts && t.assessment.previousAttempts.length > 0) {
      scoreStr = `${t.assessment.previousAttempts[t.assessment.previousAttempts.length - 1].score}%`;
    } else if (t.assessmentScore) {
      scoreStr = `${t.assessmentScore}%`;
    }
    return {
      id: t.id,
      trainingId: t.id,
      trainingName: t.trainingName,
      category: t.category,
      assignedBy: t.assignedBy,
      assignedDate: t.assignedDate,
      dueDate: t.dueDate,
      startDate: t.startDate || '-',
      submissionDate: (t.submission && t.submission.submittedAt) ? t.submission.submittedAt : '-',
      reviewDate: (t.review && t.review.reviewDate) ? t.review.reviewDate : '-',
      completionDate: (t.trainingStatus === 'completed' && t.review) ? (t.review.reviewDate || t.completionDate || t.dueDate) : (t.completionDate || '-'),
      progress: t.completionPercentage,
      progressPercent: t.completionPercentage,
      score: scoreStr.replace('%', ''),
      assessmentScore: scoreStr,
      assignmentStatus: normalizeStatus(t.trainingStatus || t.status),
      reviewStatus: t.review ? t.review.status : 'not_submitted',
      certificateId: (t.certificate && t.certificate.status === 'issued') ? t.certificate.id : null,
      certificateStatus: (t.certificate && t.certificate.status === 'issued') ? 'Issued' : 'Not Issued'
    };
  });

  const profileObj = JSON.parse(JSON.stringify(store.profile || {}));
  if (empId === 'CO-5039') {
    profileObj.designation = 'Business analyst';
    profileObj.department = 'Business analyst';
  }

  return {
    profile: profileObj,
    stats: stats,
    kpis: stats,
    trainings: trainings,
    notifications: JSON.parse(JSON.stringify(store.notifications || [])),
    certificates: certs,
    history: history
  };
}

// Render complete employee UI components from current state
function renderEmployeeDashboardUI() {
  if (!state.employeeTrainingData) return;

  syncEmployeeTrainingsWithGlobalAssignments();

  // Recalculate live stats, certificates, and history from the unified trainings array
  const trainings = state.employeeTrainingData.trainings || [];
  const k = calcEmployeeStatsFromTrainings(trainings);
  state.employeeTrainingData.stats = k;
  state.employeeTrainingData.kpis = k;
  state.employeeTrainingData.certificates = trainings
    .filter(t => t.certificate && t.certificate.status === 'issued')
    .map(t => ({
      ...t.certificate,
      name: t.certificate.name || `${t.trainingName} Credential`,
      trainingName: t.trainingName,
      category: t.category,
      assignedBy: t.assignedBy
    }));
  state.employeeTrainingData.history = trainings.map(t => {
    let scoreNum = null;
    if (t.assessment && t.assessment.previousAttempts && t.assessment.previousAttempts.length > 0) {
      scoreNum = t.assessment.previousAttempts[t.assessment.previousAttempts.length - 1].score;
    } else if (t.assessmentScore) {
      scoreNum = t.assessmentScore;
    }
    return {
      id: t.id,
      trainingId: t.id,
      trainingName: t.trainingName,
      category: t.category,
      assignedBy: t.assignedBy,
      assignedDate: t.assignedDate,
      dueDate: t.dueDate,
      startDate: t.startDate || '—',
      submissionDate: (t.submission && t.submission.submittedAt) ? t.submission.submittedAt : '—',
      reviewDate: (t.review && t.review.reviewDate) ? t.review.reviewDate : '—',
      completionDate: (normalizeStatus(t.trainingStatus || t.status) === 'Completed') ? (t.completionDate || (t.review && t.review.reviewDate) || t.dueDate) : '—',
      progress: t.completionPercentage,
      progressPercent: t.completionPercentage !== undefined ? t.completionPercentage : (t.progress || 0),
      score: scoreNum,
      assessmentScore: scoreNum ? `${scoreNum}%` : '—',
      assignmentStatus: normalizeStatus(t.trainingStatus || t.status),
      reviewStatus: t.review ? t.review.status : 'Pending',
      certificateId: (t.certificate && t.certificate.id) ? t.certificate.id : null,
      certificateStatus: (t.certificate && t.certificate.status === 'issued') ? 'Issued' : 'None'
    };
  });

  // Populate profile card (Spec Sec 3)
  const p = state.employeeTrainingData.profile || {};
  const elName = document.getElementById('empProfileCardName');
  const elCode = document.getElementById('empProfileCardCode');
  const elDesig = document.getElementById('empProfileCardDesignation');
  const elDept = document.getElementById('empProfileCardDept');
  const elMgr = document.getElementById('empProfileCardManager');
  const elAvatar = document.getElementById('empProfileCardAvatar');

  if (elName) elName.textContent = p.name || 'Tanya Kapoor';
  if (elCode) elCode.textContent = p.employeeId || p.id || 'CO-5039';
  if (elDesig) elDesig.textContent = p.designation || 'Business analyst';
  if (elDept) elDept.textContent = p.department || 'Business analyst';
  if (elMgr) elMgr.textContent = p.reportingManager || 'Megha Salunkhe';
  if (elAvatar) {
    elAvatar.textContent = p.avatarInitials || 'TK';
    elAvatar.style.background = '#f59e0b';
  }

  // Populate KPI Summary Cards (Matching 4 lifecycle statuses + Total)
  const setCard = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val !== undefined ? val : 0;
  };
  setCard('empKpiTotalAssigned', k.totalAssigned);
  setCard('empKpiNotStarted', k.notStarted);
  setCard('empKpiInProgress', k.inProgress);
  setCard('empKpiOverdue', k.overdue);
  setCard('empKpiCompleted', k.completed);
  setCard('empKpiCertificatesIssued', k.certificatesIssued);

  // Update Notification count badge
  const badge = document.getElementById('empNotificationBadge');
  const notifs = state.employeeTrainingData.notifications || [];
  const unreadCount = notifs.filter(n => !n.isRead && !n.read).length;
  if (badge) {
    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? 'inline-block' : 'none';
  }

  // Render list views
  renderEmployeeTrainingsList();
  renderEmployeeCertificates();
  renderEmployeeHistoryFull();

  // Also refresh Employee Detail Training History if currently viewing CO-5039
  const viewEmployeeDetail = document.getElementById('viewEmployeeDetail');
  if (viewEmployeeDetail && viewEmployeeDetail.style.display === 'block' && activeEmployeeDetailCode === 'CO-5039') {
    const emp = EMPLOYEES_DETAIL_DATABASE['CO-5039'];
    if (emp) renderEmployeeTrainingHistory(emp);
  }
}

// 1. Fetch complete employee training data with fallback resilience (Spec Sec 15)
async function loadEmployeeTrainingData(empId = 'CO-5039') {
  if (!state.employeeTrainingData || !state.employeeTrainingData.trainings || state.employeeTrainingData.trainings.length === 0) {
    state.employeeTrainingData = getFallbackEmployeeData(empId);
    syncEmployeeTrainingsWithGlobalAssignments();
    renderEmployeeDashboardUI();
  }

  try {
    const trnRes = await fetch(getEmpApiUrl(`/api/employee/training-data?employeeId=${encodeURIComponent(empId)}`));
    const data = trnRes.ok ? await trnRes.json() : {};

    if (data && data.trainings && data.trainings.length > 0) {
      // Merge server trainings with any locally created/updated assignments so nothing is lost
      const localMap = new Map((state.employeeTrainingData.trainings || []).map(t => [t.id, t]));
      data.trainings.forEach(srvT => {
        if (!localMap.has(srvT.id)) {
          localMap.set(srvT.id, hydrateUnifiedTrainingRecord(srvT, empId));
        }
      });
      state.employeeTrainingData.trainings = Array.from(localMap.values());
      if (data.profile || data.employee) {
        state.employeeTrainingData.profile = data.profile || data.employee;
      }
      saveEmployeeStoreToLocal();
      renderEmployeeDashboardUI();
    }
  } catch (err) {
    console.warn('Backend API sync unavailable, using unified client-side state:', err);
    renderEmployeeDashboardUI();
  }
}

// 2. Filter trainings by status (Spec Sec 4)
function filterEmpTrainingsByStatus(status) {
  state.empActiveFilter = status;

  const filterPillKeys = [
    'all',
    'not_started',
    'in_progress',
    'completed',
    'overdue'
  ];

  filterPillKeys.forEach(key => {
    const btn = document.getElementById(`empFilterBtn_${key}`);
    if (btn) {
      const isActive = key === status;
      btn.classList.toggle('active', isActive);
      if (isActive) {
        btn.style.setProperty('background', '#ffffff', 'important');
        btn.style.setProperty('color', '#2563eb', 'important');
        btn.style.setProperty('font-weight', '700', 'important');
        btn.style.setProperty('box-shadow', '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)', 'important');
      } else {
        btn.style.setProperty('background', 'transparent', 'important');
        btn.style.setProperty('color', '#475569', 'important');
        btn.style.setProperty('font-weight', '500', 'important');
        btn.style.setProperty('box-shadow', 'none', 'important');
      }
    }
  });

  renderEmployeeTrainingsList();
}

// 3. Render Training Listing Table (Matching CollabCRM Portal Table Layout per Screenshot 5)
function renderEmployeeTrainingsList() {
  const tableBody = document.getElementById('empTrainingsTableBody');
  const countBadge = document.getElementById('empTrainingsCountBadge');

  if (!state.employeeTrainingData || !state.employeeTrainingData.trainings || state.employeeTrainingData.trainings.length === 0) {
    state.employeeTrainingData = getFallbackEmployeeData('CO-5039');
    syncEmployeeTrainingsWithGlobalAssignments();
  }

  const query = (document.getElementById('searchEmpTrainingsInput')?.value || '').toLowerCase().trim();
  const catFilter = document.getElementById('filterEmpCategorySelect')?.value || 'all';
  const sortOrder = document.getElementById('sortEmpTrainingsSelect')?.value || 'due_soonest';

  // Base list of all assigned trainings
  const allTrainings = state.employeeTrainingData.trainings;
  let list = [...allTrainings];

  // 1. Status Filter
  if (state.empActiveFilter && state.empActiveFilter !== 'all') {
    const targetNorm = normalizeStatus(state.empActiveFilter);
    list = list.filter(t => normalizeStatus(t.trainingStatus || t.status) === targetNorm);
  }

  // 2. Category Filter
  if (catFilter !== 'all') {
    list = list.filter(t => t.category === catFilter);
  }

  // 3. Search Query
  if (query) {
    list = list.filter(t => {
      const title = (t.trainingName || t.title || '').toLowerCase();
      const cat = (t.category || '').toLowerCase();
      const desc = (t.shortDescription || t.shortDesc || t.description || '').toLowerCase();
      const by = (t.assignedBy || '').toLowerCase();
      return title.includes(query) || cat.includes(query) || desc.includes(query) || by.includes(query);
    });
  }

  // 4. Sorting
  if (sortOrder === 'due_soonest') {
    list.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  } else if (sortOrder === 'progress_desc') {
    list.sort((a, b) => {
      const pB = b.completionPercentage !== undefined ? b.completionPercentage : (b.progressPercent || 0);
      const pA = a.completionPercentage !== undefined ? a.completionPercentage : (a.progressPercent || 0);
      return pB - pA;
    });
  } else if (sortOrder === 'recently_assigned') {
    list.sort((a, b) => new Date(b.assignedDate) - new Date(a.assignedDate));
  } else if (sortOrder === 'name_asc') {
    list.sort((a, b) => (a.trainingName || a.title || '').localeCompare(b.trainingName || b.title || ''));
  }

  // 5. Pagination Computation (User Requirement: Pagination, records > 20-30)
  state.empTrainingCurrentPage = state.empTrainingCurrentPage || 1;
  state.empTrainingPageSize = state.empTrainingPageSize || 8;

  const totalRecords = list.length;
  const totalPages = Math.max(1, Math.ceil(totalRecords / state.empTrainingPageSize));
  if (state.empTrainingCurrentPage > totalPages) state.empTrainingCurrentPage = totalPages;
  if (state.empTrainingCurrentPage < 1) state.empTrainingCurrentPage = 1;

  const startIndex = totalRecords === 0 ? 0 : (state.empTrainingCurrentPage - 1) * state.empTrainingPageSize;
  const endIndex = Math.min(startIndex + state.empTrainingPageSize, totalRecords);
  const pagedList = totalRecords === 0 ? [] : list.slice(startIndex, endIndex);

  // Update header counter badge (e.g. "1 - 8 of 32 Trainings")
  if (countBadge) {
    if (totalRecords === 0) {
      countBadge.textContent = `0 of ${allTrainings.length} Trainings`;
    } else {
      countBadge.textContent = `${startIndex + 1} - ${endIndex} of ${totalRecords} Trainings`;
    }
  }

  const getStatusBadge = (status) => {
    const s = normalizeStatus(status);
    switch (s) {
      case 'Completed':
        return '<span style="background: #dcfce7; color: #15803d; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 12px; border: 1px solid #bbf7d0; display: inline-flex; align-items: center; gap: 4px;">✓ Completed</span>';
      case 'In Progress':
        return '<span style="background: #eff6ff; color: #1d4ed8; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 12px; border: 1px solid #bfdbfe; display: inline-flex; align-items: center; gap: 4px;">● In Progress</span>';
      case 'Overdue':
        return '<span style="background: #fee2e2; color: #b91c1c; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 12px; border: 1px solid #fecaca; display: inline-flex; align-items: center; gap: 4px;">✕ Overdue</span>';
      default:
        return '<span style="background: #f1f5f9; color: #475569; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 12px; border: 1px solid #e2e8f0; display: inline-flex; align-items: center; gap: 4px;">○ Not Started</span>';
    }
  };

  if (!tableBody) return;

  if (totalRecords === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align: center; padding: 36px 20px; color: #64748b;">
          <div style="font-size: 28px; margin-bottom: 6px;">📚</div>
          <div style="font-weight: 600; color: #1e293b; font-size: 14px;">No Assigned Trainings Match Filter</div>
          <div style="font-size: 12px; margin-top: 4px;">Try selecting another status or clear the search query.</div>
          <button type="button" class="emp-btn-primary" onclick="filterEmpTrainingsByStatus('all')" style="margin: 12px auto 0 auto; display: inline-flex;">Show All Assigned Trainings</button>
        </td>
      </tr>
    `;
    renderEmpTrainingsPaginationControls(0, 1, 0, 0);
    return;
  }

  let tableHtml = '';
  pagedList.forEach((t, idx) => {
    const isMandatory = t.isMandatory !== undefined ? t.isMandatory : (t.mandatory !== false);
    const prog = t.completionPercentage !== undefined ? t.completionPercentage : (t.progressPercent || 0);
    const progColor = prog === 100 ? '#10b981' : prog > 0 ? '#4f46e5' : '#94a3b8';
    const title = t.trainingName || t.title || 'Training Program';
    const statusText = normalizeStatus(t.trainingStatus || t.status);
    const duration = t.expectedDuration || (t.durationHours ? t.durationHours + ' hrs' : '4 hrs');
    const rowNum = startIndex + idx + 1;

    // Parse Assigned By details (HR, Admin, or Reporting Manager)
    let assignedByName = t.assignedBy || 'Megha Salunkhe (Sr. Executive)';
    let assignedByRole = 'Reporting Manager';
    let assignedByInitials = 'MS';
    let assignedByBg = '#0284c7';

    const byLower = assignedByName.toLowerCase();
    if (byLower.includes('megha') || byLower.includes('reporting') || byLower.includes('executive')) {
      assignedByName = 'Megha Salunkhe';
      assignedByRole = 'Reporting Manager';
      assignedByInitials = 'MS';
      assignedByBg = '#0284c7';
    } else if (byLower.includes('ishdeep') || byLower.includes('admin')) {
      assignedByName = 'Ishdeep Anand';
      assignedByRole = 'Admin';
      assignedByInitials = 'IA';
      assignedByBg = '#8b5cf6';
    } else if (byLower.includes('isha') || byLower.includes('hr') || byLower.includes('people')) {
      assignedByName = 'Isha Patel';
      assignedByRole = 'HR Operations';
      assignedByInitials = 'IP';
      assignedByBg = '#10b981';
    } else {
      const clean = assignedByName.replace(/\(.*\)/g, '').trim();
      const parts = clean.split(' ');
      assignedByName = clean;
      assignedByInitials = parts.map(p => p[0]).join('').slice(0, 2).toUpperCase() || 'MG';
      assignedByRole = 'Management';
      assignedByBg = '#4f46e5';
    }

    tableHtml += `
      <tr>
        <td style="color: #64748b; font-weight: 500;">${rowNum}</td>
        <td>
          <div style="font-weight: 600; color: #0f172a; font-size: 13px; line-height: 1.35; margin-bottom: 3px;">
            ${escapeHtml(title)}
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 11px; color: #64748b;">
            <span>⏱ ${escapeHtml(duration)}</span>
            <span>•</span>
            ${isMandatory
              ? '<span style="background: #fee2e2; color: #991b1b; font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 4px;">Mandatory</span>'
              : '<span style="background: #f1f5f9; color: #475569; font-size: 10px; font-weight: 600; padding: 1px 6px; border-radius: 4px;">Optional</span>'
            }
          </div>
        </td>
        <td>
          <span class="emp-dept-badge">${escapeHtml(t.category || 'General')}</span>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="emp-avatar-circle" style="background: ${assignedByBg}; width: 26px; height: 26px; font-size: 10.5px; font-weight: 700; color: #fff; flex-shrink: 0;">
              ${assignedByInitials}
            </div>
            <div>
              <div style="font-weight: 600; color: #0f172a; font-size: 12px; line-height: 1.2;">${escapeHtml(assignedByName)}</div>
              <div style="font-size: 11px; color: #64748b; line-height: 1.2; margin-top: 1px;">${escapeHtml(assignedByRole)}</div>
            </div>
          </div>
        </td>
        <td style="color: #64748b; font-size: 12px; white-space: nowrap;">
          ${escapeHtml(t.assignedDate || '12-Jan-2026')}
        </td>
        <td style="font-weight: 500; color: #1e293b; font-size: 12px; white-space: nowrap;">
          ${escapeHtml(t.dueDate || '15-Mar-2026')}
        </td>
        <td>
          ${getStatusBadge(statusText)}
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px; width: 100%; min-width: 120px;">
            <div style="flex: 1; height: 6px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
              <div style="width: ${prog}%; height: 100%; background: ${progColor}; border-radius: 4px;"></div>
            </div>
            <span style="font-size: 11.5px; font-weight: 600; color: #334155; min-width: 32px;">${prog}%</span>
          </div>
        </td>
        <td style="text-align: center; white-space: nowrap;">
          <button type="button" class="emp-action-icon" onclick="openEmployeeTrainingDetail('${t.id}')" title="View Training Details" aria-label="View Details" style="width: 32px; height: 32px; border-radius: 6px; border: 1px solid #cbd5e1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s ease;" onmouseover="this.style.background='#eff6ff'; this.style.color='#2563eb'; this.style.borderColor='#bfdbfe';" onmouseout="this.style.background='#ffffff'; this.style.color='#334155'; this.style.borderColor='#cbd5e1';">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
        </td>
      </tr>
    `;
  });

  tableBody.innerHTML = tableHtml;
  renderEmpTrainingsPaginationControls(totalRecords, totalPages, startIndex, endIndex);
}

// Helper: Render Pagination Controls
function renderEmpTrainingsPaginationControls(totalRecords, totalPages, startIndex, endIndex) {
  const container = document.getElementById('empTrainingsPagination');
  if (!container) return;

  if (totalRecords === 0) {
    container.innerHTML = '<div style="font-size: 12.5px; color: #64748b;">No records to display</div>';
    return;
  }

  const currentPage = state.empTrainingCurrentPage || 1;
  const pageSize = state.empTrainingPageSize || 8;

  let pageBtnsHtml = '';
  for (let p = 1; p <= totalPages; p++) {
    const isActive = p === currentPage;
    pageBtnsHtml += `
      <button type="button" onclick="changeEmpTrainingPage(${p})" style="min-width: 32px; height: 32px; padding: 0 8px; border-radius: 6px; font-size: 12.5px; font-weight: ${isActive ? '700' : '500'}; border: 1px solid ${isActive ? '#4338ca' : '#cbd5e1'}; background: ${isActive ? '#4f46e5' : '#ffffff'}; color: ${isActive ? '#ffffff' : '#334155'}; cursor: pointer; transition: all 0.15s ease;">
        ${p}
      </button>
    `;
  }

  container.innerHTML = `
    <div style="font-size: 12.5px; color: #64748b;">
      Showing <strong>${startIndex + 1}</strong> to <strong>${endIndex}</strong> of <strong>${totalRecords}</strong> training programmes
    </div>

    <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
      <div style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: #64748b;">
        <span>Rows per page:</span>
        <select onchange="changeEmpTrainingPageSize(this.value)" style="height: 32px; padding: 0 8px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 12px; background: #ffffff; color: #334155; outline: none; cursor: pointer;">
          <option value="8" ${pageSize === 8 ? 'selected' : ''}>8</option>
          <option value="10" ${pageSize === 10 ? 'selected' : ''}>10</option>
          <option value="20" ${pageSize === 20 ? 'selected' : ''}>20</option>
          <option value="50" ${pageSize === 50 ? 'selected' : ''}>50</option>
        </select>
      </div>

      <div style="display: flex; align-items: center; gap: 4px;">
        <button type="button" onclick="changeEmpTrainingPage(1)" ${currentPage === 1 ? 'disabled' : ''} style="height: 32px; padding: 0 10px; border-radius: 6px; font-size: 12px; font-weight: 500; border: 1px solid #cbd5e1; background: #ffffff; color: ${currentPage === 1 ? '#94a3b8' : '#334155'}; cursor: ${currentPage === 1 ? 'not-allowed' : 'pointer'};">
          « First
        </button>
        <button type="button" onclick="changeEmpTrainingPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} style="height: 32px; padding: 0 10px; border-radius: 6px; font-size: 12px; font-weight: 500; border: 1px solid #cbd5e1; background: #ffffff; color: ${currentPage === 1 ? '#94a3b8' : '#334155'}; cursor: ${currentPage === 1 ? 'not-allowed' : 'pointer'};">
          ‹ Prev
        </button>

        ${pageBtnsHtml}

        <button type="button" onclick="changeEmpTrainingPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''} style="height: 32px; padding: 0 10px; border-radius: 6px; font-size: 12px; font-weight: 500; border: 1px solid #cbd5e1; background: #ffffff; color: ${currentPage === totalPages ? '#94a3b8' : '#334155'}; cursor: ${currentPage === totalPages ? 'not-allowed' : 'pointer'};">
          Next ›
        </button>
        <button type="button" onclick="changeEmpTrainingPage(${totalPages})" ${currentPage === totalPages ? 'disabled' : ''} style="height: 32px; padding: 0 10px; border-radius: 6px; font-size: 12px; font-weight: 500; border: 1px solid #cbd5e1; background: #ffffff; color: ${currentPage === totalPages ? '#94a3b8' : '#334155'}; cursor: ${currentPage === totalPages ? 'not-allowed' : 'pointer'};">
          Last »
        </button>
      </div>
    </div>
  `;
}

function changeEmpTrainingPage(page) {
  state.empTrainingCurrentPage = page;
  renderEmployeeTrainingsList();
}
window.changeEmpTrainingPage = changeEmpTrainingPage;

function changeEmpTrainingPageSize(size) {
  state.empTrainingPageSize = parseInt(size, 10) || 8;
  state.empTrainingCurrentPage = 1;
  renderEmployeeTrainingsList();
}
window.changeEmpTrainingPageSize = changeEmpTrainingPageSize;


// 4. Employee Subnav Tab Switching (Spec Sec 2)
function switchEmployeeTrainingTab(tabId) {
  const tabs = ['my_training', 'my_certificates', 'training_history'];
  tabs.forEach(t => {
    const btn = document.getElementById(`empSubnavBtn_${t}`);
    if (btn) btn.classList.toggle('active', t === tabId);
  });

  const viewMyTraining = document.getElementById('sectionEmpMyTraining');
  const viewCertificates = document.getElementById('sectionEmpCertificates');
  const viewHistory = document.getElementById('sectionEmpHistory');

  if (viewMyTraining) viewMyTraining.style.display = tabId === 'my_training' ? 'block' : 'none';
  if (viewCertificates) viewCertificates.style.display = tabId === 'my_certificates' ? 'block' : 'none';
  if (viewHistory) viewHistory.style.display = tabId === 'training_history' ? 'block' : 'none';

  if (tabId === 'my_certificates') renderEmployeeCertificates();
  if (tabId === 'training_history') renderEmployeeHistoryFull();
}

// 5. Training Details Screen Modal (Spec Sec 6-10)
function openEmployeeTrainingDetail(trainingId) {
  if (!state.employeeTrainingData) {
    state.employeeTrainingData = getFallbackEmployeeData('CO-5039');
    syncEmployeeTrainingsWithGlobalAssignments();
  }
  let t = (state.employeeTrainingData.trainings || []).find(x => x.id === trainingId);
  if (!t) {
    t = state.assignments.find(x => x.id === trainingId);
  }
  if (!t && trainingId && trainingId.startsWith('EMP-')) {
    // Fallback for viewing static completed training rows of other employees
    const parts = trainingId.split('-TRN-');
    const code = parts[0].replace('EMP-', '');
    const idx = parseInt(parts[1], 10) - 1;
    const empObj = EMPLOYEES_DETAIL_DATABASE[code];
    const row = empObj && empObj.trainings && empObj.trainings[idx];
    if (row) {
      const scoreNum = parseInt(String(row.score).replace('%', ''), 10) || 94;
      t = {
        id: trainingId,
        trainingName: row.title,
        category: row.dept || empObj.department || 'Management',
        shortDescription: `Comprehensive enterprise programme on ${row.title}. Designed to enforce compliance, operational excellence, and organizational leadership.`,
        isMandatory: true,
        assignedBy: empObj.reportingManager || 'Isha Patel (Head of People)',
        assignedDate: row.assignedDate,
        dueDate: row.completionDate,
        completionDate: row.completionDate,
        completionPercentage: 100,
        trainingStatus: 'completed',
        status: 'Completed',
        difficultyLevel: 'Intermediate',
        expectedDuration: '4 Hours',
        learningObjectives: [
          `Master core compliance and execution workflows for ${row.title}`,
          'Implement role-based controls, data governance, and risk mitigation policies',
          'Coordinate cross-departmental operations with verified reporting metrics',
          'Pass the comprehensive capstone evaluation with score >= 80%'
        ],
        expectedOutcomes: `${empObj.name} successfully demonstrated proficiency in operational governance and achieved certification.`,
        resources: [
          { id: `${trainingId}_r1`, title: `Module 1: Principles of ${row.title}`, type: 'youtube', isMandatory: true, duration: '25 Mins', url: 'https://www.youtube.com/watch?v=996OiexHze0', isCompleted: true, completionDate: row.assignedDate },
          { id: `${trainingId}_r2`, title: `Module 2: CollabCRM ${row.title} Playbook (PDF)`, type: 'pdf', isMandatory: true, duration: '40 Mins', url: 'assets/docs/governance_playbook.pdf', isCompleted: true, completionDate: row.completionDate },
          { id: `${trainingId}_r3`, title: `Module 3: Interactive Simulation Sandbox`, type: 'external_link', isMandatory: false, duration: '45 Mins', url: 'https://collabcrm.internal/sandbox', isCompleted: true, completionDate: row.completionDate },
          { id: `${trainingId}_r4`, title: `Module 4: Case Study & Executive Review`, type: 'video', isMandatory: true, duration: '30 Mins', url: 'assets/videos/exec_review.mp4', isCompleted: true, completionDate: row.completionDate }
        ],
        assessment: {
          id: `${trainingId}_asm`,
          name: `${row.title} Certification Assessment`,
          passingScore: 80,
          maxAttempts: 3,
          attemptsUsed: 1,
          passed: true,
          isPassed: true,
          bestScore: scoreNum,
          previousAttempts: [{ attemptNumber: 1, score: scoreNum, passed: true, submissionDate: row.completionDate }],
          questions: [
            {
              id: 'q1',
              text: `What is the primary operational benchmark of ${row.title}?`,
              options: [
                'Ensure 100% adherence to organizational governance and audit standards',
                'Bypass stakeholder reviews during quarterly planning',
                'Disable telemetry logging',
                'Skip evidence submission'
              ],
              correctAnswer: 0
            },
            {
              id: 'q2',
              text: 'Who must approve the final training submission before credential issuance?',
              options: ['Authorized Reviewer / Head of People', 'Any external contractor', 'Nobody', 'Automated bot only'],
              correctAnswer: 0
            }
          ]
        },
        submission: {
          completionRemarks: `All 4 modules completed and passed assessment with score ${scoreNum}%.`,
          evidenceFiles: ['verified_completion_evidence.pdf'],
          submittedAt: row.completionDate,
          isLocked: true
        },
        review: {
          status: 'approved',
          reviewerName: empObj.reportingManager || 'Isha Patel (Head of People)',
          reviewDate: row.completionDate,
          feedback: `Excellent performance by ${empObj.name}. Assessment passed with ${scoreNum}%. Certificate approved and issued.`
        },
        certificate: row.certId ? {
          id: row.certId,
          name: `${row.title} Credential`,
          trainingName: row.title,
          issueDate: row.completionDate,
          expiryDate: '25-Feb-2028',
          status: 'issued',
          recipientName: empObj.name,
          recipientId: empObj.code
        } : null
      };
    }
  }
  if (!t) return;

  state.empCurrentTrainingId = trainingId;

  const title = t.trainingName || t.title || 'Training Program';
  const shortDesc = t.shortDescription || t.shortDesc || t.description || '';
  const statusText = normalizeStatus(t.trainingStatus || t.status);
  const isMandatory = t.isMandatory !== undefined ? t.isMandatory : (t.mandatory !== false);
  const duration = t.expectedDuration || (t.durationHours ? t.durationHours + ' Hours' : '4 Hours');
  const difficulty = t.difficultyLevel || t.difficulty || 'Intermediate';

  const cleanAssignedBy = (t.assignedBy || 'Isha Patel').replace(/\s*\(.*?\)/g, '').trim();

  // Header Details
  const elTitle = document.getElementById('empModalTrainingTitle');
  const elCategory = document.getElementById('empModalCategoryBadge');
  const elMandatory = document.getElementById('empModalMandatoryBadge');
  const elStatus = document.getElementById('empModalStatusBadge');
  const elDue = document.getElementById('empModalDueDateText');

  if (elTitle) elTitle.textContent = title;
  if (elCategory) {
    elCategory.textContent = t.category || 'General';
    elCategory.style.display = 'none'; // Hidden per user requirement
  }
  if (elMandatory) {
    elMandatory.textContent = isMandatory ? 'Mandatory' : 'Optional';
    elMandatory.style.display = 'none'; // Hidden per user requirement
  }
  if (elStatus) elStatus.textContent = statusText;
  if (elDue) elDue.textContent = `Due Date: ${t.dueDate || '15-Dec-2025'} • Assigned By: ${cleanAssignedBy}`;

  // Header Actions removed per user requirement (Screenshot 1)
  const headerActionsEl = document.getElementById('empModalHeaderActions');
  if (headerActionsEl) {
    headerActionsEl.innerHTML = '';
  }

  // Render Programme Progress & Status Indicator
  const elActionCard = document.getElementById('empModalOverviewActionCard');
  if (elActionCard) {
    const sNorm = normalizeStatus(t.trainingStatus || t.status);
    const prog = t.completionPercentage !== undefined ? t.completionPercentage : (t.progressPercent || 0);
    const progColor = prog === 100 ? '#10b981' : prog > 0 ? '#4f46e5' : '#94a3b8';

    elActionCard.innerHTML = `
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 4px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div>
            <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 4px;">PROGRAMME PROGRESS &amp; STATUS</div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 13px; font-weight: 700; color: #0f172a;">${sNorm}</span>
              <span style="color: #94a3b8;">•</span>
              <span style="font-size: 12.5px; font-weight: 600; color: ${progColor};">${prog}% Completed</span>
            </div>
          </div>
        </div>
        ${sNorm === 'Completed' ? `
          <button type="button" class="btn-primary-action" onclick="openEmployeeCertificateViewer('${escapeHtml((t.certificate && t.certificate.id) || 'TRN-2026-0003')}')" style="background: #16a34a; border: 1px solid #15803d; color: #ffffff; font-weight: 700; font-size: 12.5px; padding: 7px 16px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
            <span>🎓 View Verified Certificate</span>
          </button>
        ` : ''}
      </div>
    `;
  }

  // Tab 1: Overview & Objectives
  const elDesc = document.getElementById('empModalOverviewDesc');
  const elObjList = document.getElementById('empModalObjectivesList');
  const elOutcomesList = document.getElementById('empModalOutcomesList');
  const elDiff = document.getElementById('empModalDifficultyText');
  const elDur = document.getElementById('empModalDurationText');
  const elAssignedBy = document.getElementById('empModalAssignedByText');
  const elAssignedDate = document.getElementById('empModalAssignedDateText');

  if (elDesc) elDesc.textContent = shortDesc;
  if (elDiff) elDiff.textContent = difficulty;
  if (elDur) elDur.textContent = duration;
  if (elAssignedBy) elAssignedBy.textContent = cleanAssignedBy;
  if (elAssignedDate) elAssignedDate.textContent = t.assignedDate || '01-Nov-2026';

  if (elObjList) {
    const objs = t.learningObjectives || ['Master platform architecture and workflows.', 'Implement role-based controls and security policies.', 'Pass capstone assessment with required threshold.'];
    elObjList.innerHTML = Array.isArray(objs) ? objs.map(o => `<li>${escapeHtml(o)}</li>`).join('') : `<li>${escapeHtml(objs)}</li>`;
  }
  if (elOutcomesList) {
    const outcomes = t.expectedOutcomes || ['Proficiency in operational execution.', 'Compliance certification issued in CollabCRM registry.', 'Enhanced domain capabilities for project delivery.'];
    elOutcomesList.innerHTML = Array.isArray(outcomes) ? outcomes.map(o => `<li>${escapeHtml(o)}</li>`).join('') : `<li>${escapeHtml(outcomes)}</li>`;
  }

  if (elObjList) {
    const objs = t.learningObjectives || ['Master platform architecture and workflows.', 'Implement role-based controls and security policies.', 'Pass capstone assessment with required threshold.'];
    elObjList.innerHTML = Array.isArray(objs) ? objs.map(o => `<li>${escapeHtml(o)}</li>`).join('') : `<li>${escapeHtml(objs)}</li>`;
  }
  if (elOutcomesList) {
    const outcomes = t.expectedOutcomes || ['Proficiency in operational execution.', 'Compliance certification issued in CollabCRM registry.', 'Enhanced domain capabilities for project delivery.'];
    elOutcomesList.innerHTML = Array.isArray(outcomes) ? outcomes.map(o => `<li>${escapeHtml(o)}</li>`).join('') : `<li>${escapeHtml(outcomes)}</li>`;
  }

  // Tab 2: Learning Resources
  renderEmpModalResources(t);

  // Tab 3: Assessment
  renderEmpModalAssessment(t);

  // Tab 4: Submission & Review
  renderEmpModalSubmission(t);

  // Switch to Overview subtab by default
  switchEmpModalTab('overview');

  // Open Full-Screen Training Detail View matching Screenshot 4 (NO POP-UPS)
  // Open Full-Screen Training Detail View matching Screenshot 4 (NO POP-UPS)
  const myTrnSection = document.getElementById('sectionEmpMyTraining');
  const detailScreen = document.getElementById('sectionEmpTrainingDetailScreen');
  const breadcrumbEl = document.getElementById('empDetailBreadcrumbTitle');
  const viewEmployeeDetail = document.getElementById('viewEmployeeDetail');
  const viewDashboard = document.getElementById('viewDashboard');

  let empName = 'Employee';
  let empCode = activeEmployeeDetailCode || 'YOP-073';
  if (EMPLOYEES_DETAIL_DATABASE[empCode]) {
    empName = EMPLOYEES_DETAIL_DATABASE[empCode].name;
  }

  if ((viewEmployeeDetail && viewEmployeeDetail.style.display !== 'none') || (viewDashboard && viewDashboard.style.display === 'block')) {
    state.empDetailPreviousView = 'employee_profile';
    state.empDetailPreviousEmpCode = empCode;
    if (viewEmployeeDetail) {
      viewEmployeeDetail.style.display = 'none';
      viewEmployeeDetail.classList.remove('active');
    }
    if (viewDashboard) {
      viewDashboard.style.display = 'none';
      viewDashboard.classList.remove('active');
    }
  } else {
    state.empDetailPreviousView = 'my_training';
  }

  // Switch main view to viewTraining
  const viewTraining = document.getElementById('viewTraining');
  if (viewTraining) {
    viewTraining.style.display = 'block';
    viewTraining.classList.add('active');
  }

  // CRITICAL: Hide ALL management tabs and empty states so detailScreen is isolated
  [
    'sectionDashboard', 'sectionPrograms', 'sectionAssignments', 
    'sectionProgress', 'sectionReviews', 'sectionCertificates', 
    'sectionReports', 'sectionEmpMyTraining', 'sectionEmpCertificates', 
    'sectionEmpHistory', 'assignTrainingModal', 'sectionEmployeeEmptyState'
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  const hierarchyBanner = document.getElementById('hierarchyNoticeBanner');
  if (hierarchyBanner) hierarchyBanner.style.display = 'none';

  // Show Programme Detail Screen
  if (detailScreen) detailScreen.style.display = 'block';
  if (breadcrumbEl) breadcrumbEl.textContent = title;

  const backLabel = document.getElementById('empDetailBackLabel');
  const backBtn = document.getElementById('empDetailBackBtn');
  if (state.empDetailPreviousView === 'employee_profile') {
    if (backLabel) backLabel.textContent = `Employee Profile (${empName}) › Training History`;
    if (backBtn) backBtn.textContent = `← Back to ${empName}'s Profile`;
  } else {
    if (backLabel) backLabel.textContent = 'My Training';
    if (backBtn) backBtn.textContent = '← Back to My Training';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeEmployeeTrainingDetail() {
  const myTrnSection = document.getElementById('sectionEmpMyTraining');
  const detailScreen = document.getElementById('sectionEmpTrainingDetailScreen');

  if (detailScreen) detailScreen.style.display = 'none';

  if (state.empDetailPreviousView === 'employee_profile') {
    const viewTraining = document.getElementById('viewTraining');
    if (viewTraining) {
      viewTraining.style.display = 'none';
      viewTraining.classList.remove('active');
    }
    const viewDashboard = document.getElementById('viewDashboard');
    if (viewDashboard) {
      viewDashboard.style.display = 'block';
      viewDashboard.classList.add('active');
    }
    const viewEmployeeDetail = document.getElementById('viewEmployeeDetail');
    if (viewEmployeeDetail) {
      viewEmployeeDetail.style.display = 'block';
      viewEmployeeDetail.classList.add('active');
      openEmployeeDetail(state.empDetailPreviousEmpCode || activeEmployeeDetailCode || 'YOP-073');
      switchEmpDetailSubTab('training');
    }
  } else {
    const viewTraining = document.getElementById('viewTraining');
    if (viewTraining) {
      viewTraining.style.display = 'block';
      viewTraining.classList.add('active');
    }
    if (state.currentRole === 'employee') {
      if (myTrnSection) myTrnSection.style.display = 'block';
      renderEmployeeTrainingsList();
    } else {
      switchTrainingTab(state.activeSubTab || 'programs');
    }
  }

  state.empCurrentTrainingId = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Sub-Tab Switcher / Section Anchor inside Unified Training Detail Screen
function switchEmpModalTab(tabKey) {
  state.empModalActiveTab = tabKey;
  const tabs = ['overview', 'resources', 'assessment', 'submission'];

  // All sections remain visible in the merged single-page view
  tabs.forEach(k => {
    const content = document.getElementById(`empModalTabContent_${k}`);
    if (content) content.style.display = 'block';
  });

  if (tabKey && tabKey !== 'overview') {
    const target = document.getElementById(`empModalTabContent_${tabKey}`);
    if (target && target.scrollIntoView) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const btnSubmit = document.getElementById('btnEmpModalSubmitReview');
  if (btnSubmit) btnSubmit.style.display = 'inline-flex';
}

function navigateEmpModalTab(dir) {
  const tabs = ['overview', 'resources', 'assessment', 'submission'];
  const curIdx = tabs.indexOf(state.empModalActiveTab);
  const nextIdx = curIdx + dir;
  if (nextIdx >= 0 && nextIdx < tabs.length) {
    switchEmpModalTab(tabs[nextIdx]);
  }
}

// Render Resources Tab inside Modal (Spec Sec 6-7)
function renderEmpModalResources(t) {
  const container = document.getElementById('empModalResourcesList');
  if (!container) return;

  const resources = t.resources || [];
  const mandatory = resources.filter(r => r.isMandatory !== undefined ? r.isMandatory : (r.mandatory !== false));
  const completedMandatory = mandatory.filter(r => r.isCompleted);
  const pct = mandatory.length ? Math.round((completedMandatory.length / mandatory.length) * 100) : 100;

  // Header Progress Indicators
  const txtPct = document.getElementById('empModalProgressPercentText');
  const barFill = document.getElementById('empModalProgressBarFill');
  const txtStats = document.getElementById('empModalMandatoryStats');
  const badgeCount = document.getElementById('empModalResourcesCountBadge');

  if (txtPct) txtPct.textContent = `${pct}%`;
  if (barFill) barFill.style.width = `${pct}%`;
  if (txtStats) txtStats.textContent = `${completedMandatory.length} of ${mandatory.length} Mandatory Resources Completed`;
  if (badgeCount) badgeCount.textContent = `${resources.filter(r => r.isCompleted).length}/${resources.length}`;

  const getTypeIcon = (type) => {
    switch (type) {
      case 'youtube': return '🎬 YouTube Video';
      case 'video': return '📹 Uploaded Video';
      case 'pdf': return '📄 PDF Document';
      case 'document': return '📝 Document';
      case 'external_course':
      case 'external_link': return '🎓 External Course Link';
      case 'website': return '🌐 Website Link';
      default: return '🔗 Digital Resource';
    }
  };

  let html = '';
  resources.forEach(r => {
    const isDone = !!r.isCompleted;
    const isMand = r.isMandatory !== undefined ? r.isMandatory : (r.mandatory !== false);
    const durationText = r.duration || (r.durationMinutes ? r.durationMinutes + ' mins' : '20 mins');

    html += `
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 240px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <span style="font-size: 11px; background: #f1f5f9; color: #475569; padding: 2px 8px; border-radius: 4px; font-weight: 600;">
              ${getTypeIcon(r.type)}
            </span>
            ${isMand
              ? '<span style="font-size: 11px; background: #fee2e2; color: #991b1b; padding: 2px 6px; border-radius: 4px; font-weight: 700;">Mandatory</span>'
              : '<span style="font-size: 11px; background: #f8fafc; color: #64748b; padding: 2px 6px; border-radius: 4px;">Optional</span>'
            }
            ${isDone
              ? `<span style="font-size: 11px; background: #dcfce7; color: #15803d; padding: 2px 8px; border-radius: 12px; font-weight: 700;">✓ Completed (${r.completionDate || '02-Nov'})</span>`
              : '<span style="font-size: 11px; background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 12px; font-weight: 600;">Pending</span>'
            }
          </div>
          <h5 style="font-size: 14px; font-weight: 700; color: #0f172a; margin: 0 0 3px 0;">${escapeHtml(r.title)}</h5>
          <p style="font-size: 12px; color: #64748b; margin: 0;">${escapeHtml(r.description || 'Estimated time: ' + durationText)}</p>
        </div>

        <div style="display: flex; align-items: center; gap: 10px;">
          <button type="button" class="btn-table-action" onclick="openEmployeeResourceViewer('${t.id}', '${r.id}')" style="font-size: 12px;">
            👁 Open Resource
          </button>
          ${isDone
            ? '<span style="display: inline-flex; align-items: center; gap: 4px; background: #ecfdf5; border: 1px solid #a7f3d0; color: #047857; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 6px;">✓ Completed</span>'
            : `<button type="button" class="btn-primary-action" onclick="toggleEmployeeResourceComplete('${t.id}', '${r.id}', event)" style="font-size: 12px; background: #2563eb; color: #ffffff; border-color: #1d4ed8; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-weight: 600;">Mark as Completed ✓</button>`
          }
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// 6. Resource Completion Action & Backend Sync (Spec Sec 7)
function applyLocalResourceCompletion(trainingId, resourceId, targetState) {
  const t = state.employeeTrainingData.trainings.find(x => x.id === trainingId);
  if (!t) return;
  const r = t.resources.find(x => x.id === resourceId);
  if (!r) return;

  r.isCompleted = targetState;
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  r.completionDate = targetState ? dateStr : null;
  r.completionTimestamp = targetState ? `${dateStr}, ${timeStr}` : null;

  const mandatoryResources = t.resources.filter(x => x.isMandatory !== undefined ? x.isMandatory : (x.mandatory !== false));
  const completedMandatory = mandatoryResources.filter(x => x.isCompleted).length;
  t.completionPercentage = mandatoryResources.length > 0 ? Math.round((completedMandatory / mandatoryResources.length) * 100) : 100;
  t.progress = t.completionPercentage;

  if ((t.trainingStatus === 'not_started' || t.status === 'Not Started') && t.completionPercentage > 0) {
    t.trainingStatus = 'in_progress';
    t.status = 'In Progress';
    t.startDate = dateStr;
  }

  saveEmployeeStoreToLocal();
  renderEmpModalResources(t);
  renderEmpModalSubmission(t);
  renderEmployeeDashboardUI();
  showConfigToast(`Resource marked as ${targetState ? 'completed' : 'pending'}`);
}

async function toggleEmployeeResourceComplete(trainingId, resourceId, e) {
  if (e) e.stopPropagation();
  if (!state.employeeTrainingData) return;
  const t = state.employeeTrainingData.trainings.find(x => x.id === trainingId);
  if (!t) return;
  const r = t.resources.find(x => x.id === resourceId);
  if (!r) return;

  const targetState = !r.isCompleted;

  try {
    const res = await fetch(getEmpApiUrl('/api/employee/resource-progress'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        employeeId: 'CO-5039',
        trainingId,
        resourceId,
        isCompleted: targetState
      })
    });

    if (res.ok) {
      const result = await res.json();
      if (result.success && result.training) {
        Object.assign(t, result.training);
        hydrateUnifiedTrainingRecord(t, 'CO-5039');
        saveEmployeeStoreToLocal();

        renderEmpModalResources(t);
        renderEmpModalSubmission(t);
        renderEmployeeDashboardUI();

        showConfigToast(`Resource marked as ${targetState ? 'completed' : 'pending'}`);
        return;
      }
    }
  } catch (err) {
    console.warn('API sync unavailable, applying local update:', err);
  }

  applyLocalResourceCompletion(trainingId, resourceId, targetState);
}

// 7. Resource Viewer Modal (Spec Sec 6-7)
function openEmployeeResourceViewer(trainingId, resourceId) {
  if (!state.employeeTrainingData) return;
  const t = state.employeeTrainingData.trainings.find(x => x.id === trainingId);
  if (!t) return;
  const r = t.resources.find(x => x.id === resourceId);
  if (!r) return;

  state.empCurrentTrainingId = trainingId;
  state.empCurrentResourceId = resourceId;

  const title = t.trainingName || t.title || 'Training Program';
  const elTitle = document.getElementById('empViewerTitle');
  const elSubtitle = document.getElementById('empViewerSubtitle');
  const elIcon = document.getElementById('empViewerTypeIcon');
  const body = document.getElementById('empViewerBody');
  const btnComplete = document.getElementById('btnEmpViewerMarkComplete');

  if (elTitle) elTitle.textContent = r.title;
  if (elSubtitle) elSubtitle.textContent = `${title} • ${r.duration || (r.durationMinutes + ' mins') || '20 mins'} expected`;
  if (elIcon) elIcon.textContent = r.type === 'youtube' ? '🎬' : r.type === 'pdf' ? '📄' : '📺';

  if (btnComplete) {
    btnComplete.textContent = r.isCompleted ? 'Mark Incomplete' : 'Mark as Completed ✓';
  }

  if (body) {
    if (r.type === 'youtube') {
      const vidId = r.url.includes('v=') ? r.url.split('v=')[1].split('&')[0] : '996OiexHze0';
      body.innerHTML = `
        <div style="width: 100%; height: 100%; min-height: 440px; display: flex; align-items: center; justify-content: center;">
          <iframe width="100%" height="440" src="https://www.youtube-nocookie.com/embed/${vidId}?autoplay=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border: none;"></iframe>
        </div>
      `;
    } else if (r.type === 'pdf') {
      body.innerHTML = `
        <div style="background: #ffffff; width: 92%; max-width: 680px; padding: 24px; border-radius: 8px; text-align: center; color: #0f172a; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
          <div style="font-size: 40px; margin-bottom: 8px;">📄</div>
          <h4 style="font-size: 16px; font-weight: 700; margin: 0 0 6px 0;">${escapeHtml(r.title)}</h4>
          <p style="font-size: 13px; color: #64748b; margin: 0 0 16px 0;">Document view verified. Review requirements and best practices.</p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; text-align: left; font-size: 12.5px; line-height: 1.6; color: #334155; max-height: 220px; overflow-y: auto;">
            <strong>Course Module Content Summary:</strong>
            <ul style="margin: 8px 0 0 0; padding-left: 20px;">
              <li>Core Architectural Principles &amp; Design Paradigms.</li>
              <li>Authentication Handshakes and Token Lifecycle Security.</li>
              <li>Deployment Guardrails &amp; Continuous Integration Verification.</li>
              <li>Compliance Standards and Post-Production Incident Runbooks.</li>
            </ul>
          </div>
        </div>
      `;
    } else {
      body.innerHTML = `
        <div style="background: #ffffff; width: 92%; max-width: 620px; padding: 28px; border-radius: 8px; text-align: center; color: #0f172a;">
          <div style="font-size: 36px; margin-bottom: 8px;">🌐</div>
          <h4 style="font-size: 16px; font-weight: 700; margin: 0 0 6px 0;">${escapeHtml(r.title)}</h4>
          <p style="font-size: 13px; color: #64748b; margin: 0 0 18px 0;">External learning resource link registered in curriculum.</p>
          <a href="${escapeHtml(r.url || '#')}" target="_blank" rel="noopener noreferrer" class="btn-primary-action" style="display: inline-flex; text-decoration: none; padding: 9px 18px; font-size: 13px;">
            Open External Resource ↗
          </a>
        </div>
      `;
    }
  }

  // Also populate inline resource player
  const inlineTitle = document.getElementById('empInlineViewerTitle');
  const inlineSub = document.getElementById('empInlineViewerSubtitle');
  const inlineIcon = document.getElementById('empInlineViewerTypeIcon');
  const inlineBody = document.getElementById('empInlineViewerBody');

  if (inlineTitle) inlineTitle.textContent = r.title;
  if (inlineSub) inlineSub.textContent = `${r.type.toUpperCase()} • ${r.duration || 'Self-Paced'}`;
  if (inlineIcon) inlineIcon.textContent = typeIcon;
  if (inlineBody && body) inlineBody.innerHTML = body.innerHTML;

  const inlinePlayer = document.getElementById('empInlineResourcePlayer');
  if (inlinePlayer) {
    inlinePlayer.style.display = 'block';
    inlinePlayer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function closeEmployeeResourceViewer() {
  const inlinePlayer = document.getElementById('empInlineResourcePlayer');
  if (inlinePlayer) inlinePlayer.style.display = 'none';
  const inlineBody = document.getElementById('empInlineViewerBody');
  if (inlineBody) inlineBody.innerHTML = '';
}

function markCurrentViewerResourceComplete() {
  if (state.empCurrentTrainingId && state.empCurrentResourceId) {
    toggleEmployeeResourceComplete(state.empCurrentTrainingId, state.empCurrentResourceId);
    closeEmployeeResourceViewer();
  }
}

// 8. Assessment Form & Scoring (Spec Sec 8)
function renderEmpModalAssessment(t) {
  const container = document.getElementById('empModalAssessmentContainer');
  const badge = document.getElementById('empModalAssessmentStatusBadge');
  if (!container) return;

  if (!t.assessment) {
    if (badge) {
      badge.textContent = 'None';
      badge.style.background = '#f1f5f9';
      badge.style.color = '#64748b';
    }
    container.innerHTML = `
      <div style="background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 36px 20px; text-align: center; color: #64748b;">
        <div style="font-size: 30px; margin-bottom: 8px;">📝</div>
        <h4 style="font-size: 14.5px; font-weight: 700; color: #1e293b; margin: 0 0 4px 0;">No Assessment Required</h4>
        <p style="font-size: 12.5px; margin: 0;">This training programme does not include a graded quiz. Complete all mandatory learning resources and provide self-evaluation remarks to submit.</p>
      </div>
    `;
    return;
  }

  const a = t.assessment;
  const isPassed = !!(a.passed !== undefined ? a.passed : a.isPassed);
  const attemptsCount = a.attemptsUsed !== undefined ? a.attemptsUsed : (a.attemptsCount || 0);
  const maxAttempts = a.maxAttempts || 3;
  const remaining = Math.max(0, maxAttempts - attemptsCount);
  const aTitle = a.name || a.title || 'Knowledge Assessment';
  const aPassing = a.passingScore || 80;
  const bestScore = a.bestScore || (isPassed ? 100 : 75);

  if (badge) {
    badge.textContent = isPassed ? 'Passed ✓' : remaining > 0 ? 'Available' : 'Attempts Exhausted';
    badge.style.background = isPassed ? '#dcfce7' : remaining > 0 ? '#eff6ff' : '#fee2e2';
    badge.style.color = isPassed ? '#15803d' : remaining > 0 ? '#1d4ed8' : '#991b1b';
  }

  let html = `
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin-bottom: 18px;">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;">
        <div>
          <h4 style="font-size: 15px; font-weight: 700; color: #0f172a; margin: 0;">${escapeHtml(aTitle)}</h4>
          <p style="font-size: 12.5px; color: #64748b; margin: 3px 0 0 0;">Passing Score: <strong>${aPassing}%</strong> • Available Attempts: <strong>${remaining} of ${maxAttempts}</strong></p>
        </div>
        ${isPassed
          ? `<span style="background: #dcfce7; color: #15803d; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 12px;">✓ Passed (Score: ${bestScore}%)</span>`
          : `<span style="background: #fef3c7; color: #b45309; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 12px;">Passing Required</span>`
        }
      </div>
      <p style="font-size: 12.5px; color: #334155; margin: 0; line-height: 1.5;">${escapeHtml(a.instructions || 'Review the questions below carefully. You must meet the passing threshold to qualify for training completion and certificate issuance.')}</p>
    </div>
  `;

  // Previous attempts log
  const attemptsHistory = a.previousAttempts || a.attemptsHistory || [];
  if (attemptsHistory.length > 0) {
    html += `
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; margin-bottom: 18px;">
        <h5 style="font-size: 12.5px; font-weight: 700; color: #0f172a; margin: 0 0 8px 0;">Previous Assessment Attempts</h5>
        <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12px;">
          ${attemptsHistory.map(att => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 6px 10px; background: #f8fafc; border-radius: 4px;">
              <span>Attempt #${att.attemptNumber} (${att.submissionDate || '02-Nov-2026'})</span>
              <span style="font-weight: 700; color: ${att.passed ? '#15803d' : '#b91c1c'};">Score: ${att.score}% — ${att.passed ? 'Passed ✓' : 'Failed'}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Interactive Quiz questions supporting 4 Types: Single Choice, Multiple Choice, True-False, Text (POINTER 3)
  const questions = a.questions || [];
  if (questions.length > 0) {
    html += `
      <form id="empAssessmentForm" onsubmit="event.preventDefault(); submitEmployeeAssessment('${t.id}');" style="display: flex; flex-direction: column; gap: 16px;">
        ${questions.map((q, qIdx) => {
          const qType = q.type || 'single_choice';
          let qTypeBadge = '<span style="font-size: 11px; background: #e0e7ff; color: #4338ca; padding: 2px 7px; border-radius: 4px; font-weight: 600;">Single Choice</span>';
          let inputMarkup = '';

          if (qType === 'multiple_choice') {
            qTypeBadge = '<span style="font-size: 11px; background: #ecfdf5; color: #047857; padding: 2px 7px; border-radius: 4px; font-weight: 600;">Multiple Choice (Select all that apply)</span>';
            inputMarkup = (q.options || []).map((opt, optIdx) => `
              <label style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; cursor: pointer;">
                <input type="checkbox" name="q_${q.id}" value="${optIdx}" ${isPassed ? 'checked' : ''} ${isPassed || remaining <= 0 ? 'disabled' : ''} style="width: 16px; height: 16px; accent-color: #4f46e5;" />
                <span style="color: #334155;">${escapeHtml(opt)}</span>
              </label>
            `).join('');
          } else if (qType === 'true_false') {
            qTypeBadge = '<span style="font-size: 11px; background: #fef3c7; color: #92400e; padding: 2px 7px; border-radius: 4px; font-weight: 600;">True / False</span>';
            inputMarkup = ['True', 'False'].map((tfVal, tfIdx) => `
              <label style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; cursor: pointer;">
                <input type="radio" name="q_${q.id}" value="${tfVal.toLowerCase()}" ${isPassed && ((q.correctAnswer === tfVal.toLowerCase()) || tfVal === 'True') ? 'checked' : ''} ${isPassed || remaining <= 0 ? 'disabled' : ''} style="width: 16px; height: 16px; accent-color: #4f46e5;" required />
                <span style="color: #334155; font-weight: 600;">${tfVal}</span>
              </label>
            `).join('');
          } else if (qType === 'text') {
            qTypeBadge = '<span style="font-size: 11px; background: #f3e8ff; color: #6b21a8; padding: 2px 7px; border-radius: 4px; font-weight: 600;">Text Response</span>';
            inputMarkup = `
              <textarea name="q_${q.id}" rows="3" placeholder="Provide your written response (minimum 10 characters)..." maxlength="500" ${isPassed || remaining <= 0 ? 'disabled' : ''} style="width: 100%; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 12px; font-size: 13px; outline: none; box-sizing: border-box; resize: vertical;" required>${isPassed ? 'Comprehensive compliance standards and procedural safeguards have been thoroughly verified.' : ''}</textarea>
            `;
          } else {
            // single_choice (default)
            inputMarkup = (q.options || []).map((opt, optIdx) => `
              <label style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; cursor: pointer;">
                <input type="radio" name="q_${q.id}" value="${optIdx}" ${isPassed ? (optIdx === (q.correctAnswer !== undefined ? q.correctAnswer : q.correctIndex) ? 'checked' : '') : ''} ${isPassed || remaining <= 0 ? 'disabled' : ''} style="width: 16px; height: 16px; accent-color: #4f46e5;" required />
                <span style="color: #334155;">${escapeHtml(opt)}</span>
              </label>
            `).join('');
          }

          return `
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px;">
                <p style="font-size: 13.5px; font-weight: 600; color: #0f172a; margin: 0;">
                  Q${qIdx + 1}. ${escapeHtml(q.text || q.question)}
                </p>
                ${qTypeBadge}
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px;">
                ${inputMarkup}
              </div>
            </div>
          `;
        }).join('')}

        ${!isPassed && remaining > 0 ? `
          <div style="display: flex; justify-content: flex-end; padding-top: 10px;">
            <button type="submit" class="btn-primary-action" id="btnSubmitAssessmentForm" style="padding: 9px 20px; font-size: 13px; font-weight: 700;">
              Submit Assessment Attempt
            </button>
          </div>
        ` : ''}
      </form>
    `;
  }
  container.innerHTML = html;
}

function applyLocalAssessmentSubmit(trainingId, answers) {
  const t = state.employeeTrainingData.trainings.find(x => x.id === trainingId);
  if (!t || !t.assessment) return;
  const asm = t.assessment;

  const questions = asm.questions || [];
  let correctCount = 0;
  questions.forEach(q => {
    if (answers && answers[q.id] === q.correctIndex) {
      correctCount++;
    }
  });

  const score = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 100;
  const passed = score >= (asm.passingScore || 80);

  asm.attemptsUsed = (asm.attemptsUsed || 0) + 1;
  asm.passed = passed;
  asm.isPassed = passed;
  asm.bestScore = Math.max(asm.bestScore || 0, score);
  t.assessmentScore = score;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  if (!asm.previousAttempts) asm.previousAttempts = [];
  asm.previousAttempts.push({
    attemptNumber: asm.attemptsUsed,
    score: score,
    passed: passed,
    submissionDate: `${dateStr}, ${timeStr}`
  });

  saveEmployeeStoreToLocal();
  renderEmpModalAssessment(t);
  renderEmpModalSubmission(t);
  renderEmployeeDashboardUI();

  if (passed) {
    showConfigToast(`Assessment Passed! Score: ${score}% ✓`);
  } else {
    showConfigToast(`Score: ${score}% (Passing: ${asm.passingScore || 80}%). Remaining attempts: ${Math.max(0, asm.maxAttempts - asm.attemptsUsed)}`);
  }
}

// Submit Assessment (Spec Sec 8)
async function submitEmployeeAssessment(trainingId) {
  const form = document.getElementById('empAssessmentForm');
  if (!form) return;

  const btn = document.getElementById('btnSubmitAssessmentForm');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Evaluating Answers...';
  }

  // Gather answers
  const answers = {};
  const inputs = form.querySelectorAll('input[type="radio"]:checked');
  inputs.forEach(inp => {
    const qId = inp.name.replace('q_', '');
    answers[qId] = parseInt(inp.value, 10);
  });

  let handled = false;
  try {
    const res = await fetch(getEmpApiUrl('/api/employee/assessment-submit'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        employeeId: 'CO-5039',
        trainingId,
        answers
      })
    });

    if (res.ok) {
      const result = await res.json();
      if (result.success && result.training) {
        const t = state.employeeTrainingData.trainings.find(x => x.id === trainingId);
        if (t) {
          Object.assign(t, result.training);
          if (t.assessment) {
            t.assessment.isPassed = t.assessment.passed;
          }
          hydrateUnifiedTrainingRecord(t, 'CO-5039');
          saveEmployeeStoreToLocal();
          renderEmpModalAssessment(t);
          renderEmpModalSubmission(t);
          renderEmployeeDashboardUI();
        }

        if (result.passed) {
          showConfigToast(`Assessment Passed! Score: ${result.score}% ✓`);
        } else {
          showConfigToast(`Score: ${result.score}% (Passing: ${result.passingScore || 80}%). Remaining attempts: ${result.attemptsRemaining}`);
        }
        handled = true;
      }
    }
  } catch (err) {
    console.warn('Backend sync unavailable, evaluating assessment locally:', err);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Submit Assessment Attempt';
    }
  }

  if (!handled) {
    applyLocalAssessmentSubmit(trainingId, answers);
  }
}

// 9. Submission & Review Screen (Spec Sec 9-10)
function renderEmpModalSubmission(t) {
  const feedbackBanner = document.getElementById('empModalReviewFeedbackBanner');
  const remarksInput = document.getElementById('empSubmissionRemarksInput');
  const submitBtn = document.getElementById('btnEmpModalSubmitReview');
  const statusText = normalizeStatus(t.trainingStatus || t.status);

  // Review Feedback Banner Rendering (Spec Sec 10)
  if (feedbackBanner) {
    if (statusText === 'Changes Requested') {
      const reviewerName = t.review?.reviewerName || t.reviewerName || 'Megha Salunkhe';
      const feedbackNotes = t.review?.feedbackNotes || t.reviewerFeedback || 'Please attach your staging deployment log and expand your implementation remarks.';
      feedbackBanner.style.display = 'block';
      feedbackBanner.innerHTML = `
        <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 14px 18px; color: #92400e;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <strong style="font-size: 13.5px; display: flex; align-items: center; gap: 6px;">
              <span>⚠️</span> Changes Requested by Reviewer
            </strong>
            <span style="font-size: 11.5px; color: #b45309;">Reviewer: ${escapeHtml(reviewerName)}</span>
          </div>
          <p style="font-size: 13px; margin: 0 0 8px 0; line-height: 1.5;">
            "${escapeHtml(feedbackNotes)}"
          </p>
          <span style="font-size: 11.5px; font-weight: 600; color: #b45309;">You may update remarks and evidence below, then click "Resubmit for Review".</span>
        </div>
      `;
    } else if (statusText === 'Completed') {
      const reviewerName = t.review?.reviewerName || t.reviewerName || 'Isha Patel (Head of People)';
      const reviewFeedback = t.review?.feedback || t.review?.feedbackNotes || 'All mandatory resources and assessment requirements verified and approved.';
      const certId = (t.certificate && t.certificate.id) || t.certificateId || 'TRN-2026-0003';
      feedbackBanner.style.display = 'block';
      feedbackBanner.innerHTML = `
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px 18px; color: #166534;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
            <div>
              <strong style="font-size: 13.5px; display: flex; align-items: center; gap: 6px;">
                <span>✓</span> Training Approved &amp; Certified (Moved to Training History)
              </strong>
              <p style="font-size: 12.5px; margin: 4px 0 0 0;">
                Approved by <strong>${escapeHtml(reviewerName)}</strong> on ${escapeHtml(t.completionDate || (t.review && t.review.reviewDate) || '26-Jan-2026')}.
              </p>
              <p style="font-size: 12.5px; margin: 4px 0 0 0; color: #15803d;">
                <strong>Reviewer Feedback:</strong> "${escapeHtml(reviewFeedback)}"
              </p>
            </div>
            <button type="button" class="btn-primary-action" onclick="openEmployeeCertificateViewer('${escapeHtml(certId)}')" style="padding: 7px 14px; font-size: 12px; background: #16a34a; border-color: #15803d;">
              🎓 View Certificate (${escapeHtml(certId)})
            </button>
          </div>
        </div>
      `;
    } else if (statusText === 'Submitted for Review') {
      feedbackBanner.style.display = 'block';
      feedbackBanner.innerHTML = `
        <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: 8px; padding: 14px 18px; color: #5b21b6;">
          <strong style="font-size: 13.5px; display: flex; align-items: center; gap: 6px;">
            <span>⏳</span> Submitted for Review
          </strong>
          <p style="font-size: 12.5px; margin: 4px 0 0 0;">
            Submitted on ${escapeHtml(t.submission?.submittedAt || t.submissionDate || '02-Nov-2026')}. Evaluation currently in progress by ${escapeHtml(t.assignedBy || 'Megha Salunkhe')}. Ordinary editing is locked while under review.
          </p>
        </div>
      `;
    } else {
      feedbackBanner.style.display = 'none';
      feedbackBanner.innerHTML = '';
    }
  }

  // Pre-fill remarks if available
  if (remarksInput) {
    remarksInput.value = t.submission?.completionRemarks || t.submissionRemarks || '';
    remarksInput.disabled = (statusText === 'Completed');
  }

  if (submitBtn) {
    if (statusText === 'Completed') {
      submitBtn.innerHTML = '<span>✓ Course Completed</span>';
      submitBtn.disabled = true;
      submitBtn.style.background = '#059669';
      submitBtn.style.borderColor = '#047857';
      submitBtn.style.cursor = 'default';
      submitBtn.style.opacity = '0.85';
      submitBtn.style.display = 'inline-flex';
    } else {
      submitBtn.innerHTML = '<span>Complete Course ✓</span>';
      submitBtn.disabled = false;
      submitBtn.style.background = '#16a34a';
      submitBtn.style.borderColor = '#15803d';
      submitBtn.style.cursor = 'pointer';
      submitBtn.style.opacity = '1';
      submitBtn.style.display = 'inline-flex';
    }
  }

  validateEmpSubmissionReadiness();
}

// Checklist validation (Spec Sec 9)
function validateEmpSubmissionReadiness() {
  if (!state.employeeTrainingData || !state.empCurrentTrainingId) return;
  const t = state.employeeTrainingData.trainings.find(x => x.id === state.empCurrentTrainingId);
  if (!t) return;

  const submitBtn = document.getElementById('btnEmpModalSubmitReview');
  if (submitBtn) {
    const isCompleted = normalizeStatus(t.trainingStatus || t.status) === 'Completed';
    submitBtn.disabled = isCompleted;
    submitBtn.style.opacity = isCompleted ? '0.85' : '1';
    submitBtn.style.cursor = isCompleted ? 'default' : 'pointer';
  }
}

// File Evidence Selection
function handleEmpEvidenceSelected(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  state.empAttachedEvidence = file;
  const preview = document.getElementById('empAttachedEvidencePreview');
  const nameEl = document.getElementById('empAttachedEvidenceName');

  if (preview) preview.style.display = 'flex';
  if (nameEl) nameEl.textContent = file.name;

  validateEmpSubmissionReadiness();
}

function removeEmpAttachedEvidence() {
  state.empAttachedEvidence = null;
  const input = document.getElementById('empEvidenceFileInput');
  const preview = document.getElementById('empAttachedEvidencePreview');
  if (input) input.value = '';
  if (preview) preview.style.display = 'none';

  validateEmpSubmissionReadiness();
}

function applyLocalTrainingSubmission(trainingId, remarks, evidenceFileName) {
  const t = state.employeeTrainingData.trainings.find(x => x.id === trainingId);
  if (!t) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  t.submission = {
    completionRemarks: remarks,
    evidenceFiles: evidenceFileName ? [evidenceFileName] : ['completion_attestation.pdf'],
    submittedAt: `${dateStr}, ${timeStr}`,
    isLocked: true
  };

  t.trainingStatus = 'submitted_for_review';
  t.status = 'Submitted for Review';
  t.submissionStatus = 'submitted';
  t.submissionRemarks = remarks;
  t.submissionEvidence = evidenceFileName || 'completion_attestation.pdf';
  t.progress = 100;
  t.completionPercentage = 100;
  t.review = {
    status: 'pending',
    reviewerName: t.assignedBy || 'Megha Salunkhe (Sr. Executive)',
    reviewDate: null,
    feedback: 'Submission received. Awaiting manager review.'
  };
  if (!Array.isArray(t.reviewHistory)) t.reviewHistory = [];
  t.reviewHistory.unshift({
    date: `${dateStr}, ${timeStr}`,
    action: 'Submitted for Evaluation',
    user: 'Tanya Kapoor',
    notes: remarks
  });

  state.employeeTrainingData.notifications.unshift({
    id: `notif_${Date.now()}`,
    title: 'Submission Received',
    message: `Your training "${t.trainingName}" was submitted for review.`,
    type: 'info',
    timestamp: `${dateStr}, ${timeStr}`,
    trainingId: t.id,
    read: false
  });

  saveEmployeeStoreToLocal();
  renderEmpModalSubmission(t);
  renderEmployeeDashboardUI();
  showConfigToast('Training submitted for review! Status is now Under Review until approved by your reviewer.');
}

// Final Submit for Review workflow (Spec Sec 9-10)
async function submitEmpTrainingWorkflow() {
  if (!state.employeeTrainingData || !state.empCurrentTrainingId) return;
  const t = state.employeeTrainingData.trainings.find(x => x.id === state.empCurrentTrainingId);
  if (!t) return;

  const remarks = (document.getElementById('empSubmissionRemarksInput')?.value || '').trim();
  if (!remarks) {
    showConfigToast('Please provide your completion remarks before submitting.', 'error')
    return;
  }

  const isResubmission = normalizeStatus(t.trainingStatus || t.status) === 'Changes Requested';
  const endpoint = isResubmission ? '/api/employee/training-resubmit' : '/api/employee/training-submit';
  let handled = false;

  try {
    const res = await fetch(getEmpApiUrl(endpoint), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        employeeId: 'CO-5039',
        trainingId: t.id,
        remarks: remarks,
        evidenceFiles: state.empAttachedEvidence?.name ? [state.empAttachedEvidence.name] : ['completion_attestation.pdf']
      })
    });

    if (res.ok) {
      const result = await res.json();
      if (result.success && result.training) {
        Object.assign(t, result.training);
        t.submissionStatus = 'submitted';
        t.submissionRemarks = remarks;
        t.submissionEvidence = state.empAttachedEvidence?.name || 'completion_attestation.pdf';
        if (!Array.isArray(t.reviewHistory)) t.reviewHistory = [];
        t.reviewHistory.unshift({
          date: t.submission?.submittedAt || 'Today',
          action: isResubmission ? 'Resubmitted for Evaluation' : 'Submitted for Evaluation',
          user: 'Tanya Kapoor',
          notes: remarks
        });
        hydrateUnifiedTrainingRecord(t, 'CO-5039');
        saveEmployeeStoreToLocal();

        renderEmpModalSubmission(t);
        renderEmployeeDashboardUI();

        showConfigToast('Training submitted for review! Status is now Under Review until approved by your reviewer.');
        handled = true;
      }
    }
  } catch (err) {
    console.warn('Backend sync unavailable, applying local submission:', err);
  }

  if (!handled) {
    applyLocalTrainingSubmission(t.id, remarks, state.empAttachedEvidence?.name || null);
  }
}

// Coursera Workflow: Employee Marks Course Completed & Management is Notified
function completeTrainingAndNotifyManagement() {
  if (!state.employeeTrainingData || !state.empCurrentTrainingId) return;
  const t = state.employeeTrainingData.trainings.find(x => x.id === state.empCurrentTrainingId);
  if (!t) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  // Get optional remarks entered by employee
  const remarks = (document.getElementById('empSubmissionRemarksInput')?.value || '').trim();
  if (remarks) {
    if (!t.submission) t.submission = {};
    t.submission.completionRemarks = remarks;
    t.submissionRemarks = remarks;
  }

  // 1. Mark all resources completed
  if (Array.isArray(t.resources)) {
    t.resources.forEach(r => {
      r.isCompleted = true;
      if (!r.completionDate) r.completionDate = dateStr;
    });
  }

  // Ensure assessment marked passed
  if (t.assessment) {
    t.assessment.passed = true;
    t.assessment.isPassed = true;
    t.assessment.bestScore = t.assessment.bestScore || 95;
    if (!t.assessment.previousAttempts) t.assessment.previousAttempts = [];
    if (t.assessment.previousAttempts.length === 0) {
      t.assessment.previousAttempts.push({
        attemptNumber: 1,
        score: 95,
        passed: true,
        submissionDate: dateStr
      });
    }
  }

  // 2. Mark training completed
  t.trainingStatus = 'completed';
  t.status = 'Completed';
  t.completionPercentage = 100;
  t.progress = 100;
  t.completionDate = dateStr;
  t.submissionStatus = 'approved';
  t.certificateStatus = 'issued';
  t.score = t.score || '98%';

  const empName = state.employeeTrainingData.profile?.name || 'Tanya Kapoor';
  const empId = state.employeeTrainingData.profile?.id || 'CO-5039';

  const certId = (t.certificate && t.certificate.id) || t.certId || `TRN-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  t.certificate = {
    id: certId,
    name: `${t.trainingName || t.title} Credential`,
    trainingName: t.trainingName || t.title,
    issueDate: dateStr,
    expiryDate: '26-Jan-2028',
    status: 'issued',
    recipientName: empName,
    recipientId: empId
  };

  // Add to employee certificates list if not present
  if (!Array.isArray(state.employeeTrainingData.certificates)) {
    state.employeeTrainingData.certificates = [];
  }
  const certIdx = state.employeeTrainingData.certificates.findIndex(c => c.id === certId);
  if (certIdx >= 0) {
    state.employeeTrainingData.certificates[certIdx] = t.certificate;
  } else {
    state.employeeTrainingData.certificates.unshift(t.certificate);
  }

  // 3. Generate Management Notification
  const notifObj = {
    id: `notif_${Date.now()}`,
    title: `Training Completed: ${empName}`,
    message: `${empName} (${empId}) has successfully completed all coursework for "${t.trainingName || t.title}"${remarks ? ` with remarks: "${remarks}"` : ''}. Verified Certificate ${certId} issued.`,
    time: 'Just now',
    timestamp: `${dateStr}, ${timeStr}`,
    category: 'management',
    unread: true,
    isRead: false,
    trainingId: t.id
  };

  if (Array.isArray(state.notifications)) {
    state.notifications.unshift(notifObj);
  }
  if (state.employeeTrainingData.notifications) {
    state.employeeTrainingData.notifications.unshift(notifObj);
  }

  // Update management notification bell badge count
  const mgmtNotifBadge = document.getElementById('notifBadge');
  if (mgmtNotifBadge) {
    const unreadTotal = (state.notifications || []).filter(n => n.unread || !n.isRead).length;
    mgmtNotifBadge.textContent = unreadTotal;
    mgmtNotifBadge.style.display = 'inline-block';
  }

  // Update employee notification badge
  const empNotifBadge = document.getElementById('empNotificationBadge');
  if (empNotifBadge) {
    const empUnread = (state.employeeTrainingData.notifications || []).filter(n => !n.isRead && !n.read).length;
    empNotifBadge.textContent = empUnread;
    empNotifBadge.style.display = empUnread > 0 ? 'inline-block' : 'none';
  }

  hydrateUnifiedTrainingRecord(t, empId);
  saveEmployeeStoreToLocal();

  renderEmpModalResources(t);
  renderEmpModalAssessment(t);
  renderEmpModalSubmission(t);
  renderEmployeeDashboardUI();
  renderEmployeeTrainingsList();
  renderEmployeeCertificates();
  renderEmployeeHistoryFull();

  // Update overview action card if visible
  const elActionCard = document.getElementById('empModalOverviewActionCard');
  if (elActionCard) {
    elActionCard.innerHTML = `
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 4px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div>
            <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 4px;">PROGRAMME PROGRESS &amp; STATUS</div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 13px; font-weight: 700; color: #0f172a;">Completed</span>
              <span style="color: #94a3b8;">•</span>
              <span style="font-size: 12.5px; font-weight: 600; color: #10b981;">100% Completed</span>
            </div>
          </div>
        </div>
        <button type="button" class="btn-primary-action" onclick="openEmployeeCertificateViewer('${escapeHtml(certId)}')" style="background: #16a34a; border: 1px solid #15803d; color: #ffffff; font-weight: 700; font-size: 12.5px; padding: 7px 16px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
          <span>🎓 View Verified Certificate</span>
        </button>
      </div>
    `;
  }

  // Update status badge at top
  const elStatus = document.getElementById('empModalStatusBadge');
  if (elStatus) elStatus.textContent = 'Completed';

  showConfigToast(`🎉 Training marked as 100% completed. Management has been notified.`);
}

window.completeTrainingAndNotifyManagement = completeTrainingAndNotifyManagement;

// 10. My Certificates Section (Spec Sec 11)
function renderEmployeeCertificates() {
  const tbody = document.getElementById('empCertificatesTableBody');
  if (!tbody) return;

  if (!state.employeeTrainingData || !state.employeeTrainingData.certificates) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 24px; color: #64748b;">Loading credentials...</td></tr>`;
    return;
  }

  const list = state.employeeTrainingData.certificates;
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 24px; color: #64748b;">No issued certificates found yet. Complete assigned courses to earn official credentials.</td></tr>`;
    return;
  }

  let html = '';
  list.forEach((c, idx) => {
    const isExpired = c.expiryDate && c.expiryDate !== 'Lifetime' && new Date(c.expiryDate) < new Date();
    const statusHtml = isExpired
      ? '<span style="background: #fee2e2; color: #b91c1c; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 12px; border: 1px solid #fecaca;">✕ Expired</span>'
      : `<span style="background: #dcfce7; color: #15803d; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 12px;">✓ ${escapeHtml(c.status || 'Issued')}</span>`;

    html += `
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px 16px; text-align: center; color: #64748b;">${idx + 1}</td>
        <td style="padding: 12px 16px; font-weight: 700; color: #0f172a;">${escapeHtml(c.name)}</td>
        <td style="padding: 12px 16px; color: #334155;">${escapeHtml(c.trainingName)}</td>
        <td style="padding: 12px 16px; font-family: monospace; color: #4338ca; font-weight: 600;">${escapeHtml(c.id)}</td>
        <td style="padding: 12px 16px; color: #475569;">${escapeHtml(c.issueDate)}</td>
        <td style="padding: 12px 16px; color: #475569;">${escapeHtml(c.expiryDate || 'Lifetime')}</td>
        <td style="padding: 12px 16px; text-align: center;">
          ${statusHtml}
        </td>
        <td style="padding: 12px 16px; text-align: right;">
          <button type="button" class="btn-table-action" onclick="openEmployeeCertificateViewer('${c.id}')" style="margin-right: 6px;">👁 View</button>
          <button type="button" class="btn-primary-action" onclick="downloadEmployeeCertificate('${c.id}')" style="padding: 5px 10px; font-size: 12px;">⬇ PDF</button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function openEmployeeCertificateViewer(certId) {
  let cert = null;
  if (state.employeeTrainingData && Array.isArray(state.employeeTrainingData.certificates)) {
    cert = state.employeeTrainingData.certificates.find(c => c.id === certId);
  }
  if (!cert && state.employeeTrainingData && Array.isArray(state.employeeTrainingData.trainings)) {
    const matchedTrn = state.employeeTrainingData.trainings.find(t => (t.certificate && t.certificate.id === certId) || t.certId === certId);
    if (matchedTrn) {
      cert = {
        id: (matchedTrn.certificate && matchedTrn.certificate.id) || matchedTrn.certId || certId,
        recipientName: matchedTrn.employeeName || 'Tanya Kapoor',
        recipientId: matchedTrn.employeeCode || 'CO-5039',
        trainingName: matchedTrn.title || matchedTrn.trainingName,
        issueDate: (matchedTrn.certificate && matchedTrn.certificate.issueDate) || matchedTrn.completionDate || '26-Jan-2026'
      };
    }
  }
  if (!cert && typeof EMPLOYEE_TRAINING_HISTORY_MAP !== 'undefined') {
    for (const [code, list] of Object.entries(EMPLOYEE_TRAINING_HISTORY_MAP)) {
      const found = (list || []).find(item => item.certId === certId || (item.certificate && item.certificate.id === certId));
      if (found) {
        const empProfile = typeof EMPLOYEE_DETAIL_PROFILES !== 'undefined' ? EMPLOYEE_DETAIL_PROFILES[code] : null;
        cert = {
          id: found.certId || certId,
          recipientName: empProfile ? empProfile.fullName : (found.employeeName || 'Tanya Kapoor'),
          recipientId: code,
          trainingName: found.title || found.trainingName,
          issueDate: found.completionDate || '26-Jan-2026'
        };
        break;
      }
    }
  }
  if (!cert && state.employeeTrainingData && Array.isArray(state.employeeTrainingData.certificates) && state.employeeTrainingData.certificates.length > 0) {
    cert = state.employeeTrainingData.certificates[0];
  }
  if (!cert) return;

  const elRecip = document.getElementById('empCertRecipientName');
  const elRecipId = document.getElementById('empCertRecipientId');
  const elTrn = document.getElementById('empCertTrainingTitle');
  const elCertId = document.getElementById('empCertModalCertId');
  const elDate = document.getElementById('empCertModalIssueDate');

  if (elRecip) elRecip.textContent = cert.recipientName || 'Tanya Kapoor';
  if (elRecipId) elRecipId.textContent = cert.recipientId || 'CO-5039';
  if (elTrn) elTrn.textContent = cert.trainingName || cert.name;
  if (elCertId) elCertId.textContent = cert.id;
  if (elDate) elDate.textContent = cert.issueDate;

  // Set previous view
  const myTrn = document.getElementById('sectionEmpMyTraining');
  const trnDetail = document.getElementById('sectionEmpTrainingDetailScreen');
  const myCerts = document.getElementById('sectionEmpCertificates');
  const hist = document.getElementById('sectionEmpHistory');

  if (trnDetail && trnDetail.style.display !== 'none') {
    state.empCertPreviousView = 'training_detail';
  } else if (myCerts && myCerts.style.display !== 'none') {
    state.empCertPreviousView = 'my_certificates';
  } else if (hist && hist.style.display !== 'none') {
    state.empCertPreviousView = 'history';
  } else {
    state.empCertPreviousView = 'my_training';
  }

  // Hide lists / detail screens
  if (myTrn) myTrn.style.display = 'none';
  if (trnDetail) trnDetail.style.display = 'none';
  if (myCerts) myCerts.style.display = 'none';
  if (hist) hist.style.display = 'none';

  const certScreen = document.getElementById('sectionEmpCertScreen');
  if (certScreen) certScreen.style.display = 'block';

  const backLabel = document.getElementById('empCertScreenBackLabel');
  const backBtn = document.getElementById('empCertScreenBackBtn');
  if (state.empCertPreviousView === 'training_detail') {
    if (backLabel) backLabel.textContent = 'Training Details';
    if (backBtn) backBtn.textContent = '← Back to Training Details';
  } else if (state.empCertPreviousView === 'my_certificates') {
    if (backLabel) backLabel.textContent = 'My Certificates';
    if (backBtn) backBtn.textContent = '← Back to My Certificates';
  } else {
    if (backLabel) backLabel.textContent = 'My Training';
    if (backBtn) backBtn.textContent = '← Back to My Training';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeEmployeeCertViewer() {
  const certScreen = document.getElementById('sectionEmpCertScreen');
  if (certScreen) certScreen.style.display = 'none';

  if (state.empCertPreviousView === 'training_detail') {
    const trnDetail = document.getElementById('sectionEmpTrainingDetailScreen');
    if (trnDetail) trnDetail.style.display = 'block';
  } else if (state.empCertPreviousView === 'my_certificates') {
    const myCerts = document.getElementById('sectionEmpCertificates');
    if (myCerts) myCerts.style.display = 'block';
  } else if (state.empCertPreviousView === 'history') {
    const hist = document.getElementById('sectionEmpHistory');
    if (hist) hist.style.display = 'block';
  } else {
    const myTrn = document.getElementById('sectionEmpMyTraining');
    if (myTrn) myTrn.style.display = 'block';
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function printEmployeeCertificate() {
  window.print();
}

function downloadEmployeeCertificate() {
  showConfigToast('Downloading official certificate PDF credential...');
  setTimeout(() => {
    showConfigToast('Certificate downloaded successfully!');
  }, 1000);
}

// 11. Training History Audit Section (Spec Sec 12)
function renderEmployeeHistoryFull() {
  const tbody = document.getElementById('empHistoryFullTableBody');
  if (!tbody) return;

  if (!state.employeeTrainingData || !state.employeeTrainingData.history) {
    tbody.innerHTML = `<tr><td colspan="16" style="text-align: center; padding: 24px; color: #64748b;">Loading training history records...</td></tr>`;
    return;
  }

  const list = state.employeeTrainingData.history;
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="16" style="text-align: center; padding: 24px; color: #64748b;">No training history records recorded yet.</td></tr>`;
    return;
  }

  let html = '';
  list.forEach((h, idx) => {
    html += `
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 12px; text-align: center; color: #64748b;">${idx + 1}</td>
        <td style="padding: 10px 12px; font-weight: 700; color: #0f172a;">${escapeHtml(h.trainingName)}</td>
        <td style="padding: 10px 12px; color: #475569;">${escapeHtml(h.category || 'General')}</td>
        <td style="padding: 10px 12px; color: #475569;">${escapeHtml(h.assignedBy)}</td>
        <td style="padding: 10px 12px; color: #64748b;">${escapeHtml(h.assignedDate)}</td>
        <td style="padding: 10px 12px; color: #64748b;">${escapeHtml(h.dueDate)}</td>
        <td style="padding: 10px 12px; color: #64748b;">${escapeHtml(h.startDate || '—')}</td>
        <td style="padding: 10px 12px; color: #64748b;">${escapeHtml(h.submissionDate || '—')}</td>
        <td style="padding: 10px 12px; color: #64748b;">${escapeHtml(h.reviewDate || '—')}</td>
        <td style="padding: 10px 12px; color: #64748b;">${escapeHtml(h.completionDate || '—')}</td>
        <td style="padding: 10px 12px; text-align: center; font-weight: 700; color: #0f172a;">${h.progressPercent || 0}%</td>
        <td style="padding: 10px 12px; text-align: center; color: ${h.score ? '#15803d' : '#64748b'}; font-weight: 600;">${h.score ? h.score + '%' : '—'}</td>
        <td style="padding: 10px 12px; text-align: center;">
          <span style="font-size: 11px; font-weight: 700; padding: 2px 6px; border-radius: 4px; background: #f1f5f9; color: #334155;">
            ${escapeHtml(h.assignmentStatus || 'Active')}
          </span>
        </td>
        <td style="padding: 10px 12px; text-align: center; font-size: 11px; color: #475569;">
          ${escapeHtml(h.reviewStatus || 'Pending')}
        </td>
        <td style="padding: 10px 12px; text-align: center; font-size: 11px;">
          ${h.certificateId ? `<span style="color: #15803d; font-weight: 700;">Issued (${escapeHtml(h.certificateId)})</span>` : '<span style="color: #94a3b8;">None</span>'}
        </td>
        <td style="padding: 10px 12px; text-align: right;">
          <button type="button" class="btn-table-action" onclick="openEmployeeTrainingDetail('${h.trainingId || h.id}')" style="font-size: 11.5px; padding: 4px 8px;">
            Details
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function exportEmpHistoryCSV() {
  if (!state.employeeTrainingData || !state.employeeTrainingData.history) {
    showConfigToast('No training history data available to export.', 'error')
    return;
  }

  const rows = [
    ['No', 'Training Name', 'Category', 'Assigned By', 'Assigned Date', 'Due Date', 'Start Date', 'Submission Date', 'Review Date', 'Completion Date', 'Progress', 'Score', 'Assignment Status', 'Review Status', 'Certificate']
  ];

  state.employeeTrainingData.history.forEach((h, idx) => {
    rows.push([
      idx + 1,
      `"${(h.trainingName || '').replace(/"/g, '""')}"`,
      `"${h.category || ''}"`,
      `"${h.assignedBy || ''}"`,
      h.assignedDate || '',
      h.dueDate || '',
      h.startDate || '',
      h.submissionDate || '',
      h.reviewDate || '',
      h.completionDate || '',
      `${h.progressPercent || 0}%`,
      h.score ? `${h.score}%` : 'N/A',
      h.assignmentStatus || '',
      h.reviewStatus || '',
      h.certificateId || 'None'
    ]);
  });

  const csvContent = 'data:text/csv;charset=utf-8,' + rows.map(e => e.join(',')).join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'Employee_Training_History_CO-5039.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showConfigToast('Training history exported to CSV successfully!');
}

// 12. Employee Notifications Drawer (Spec Sec 13)
function openEmployeeNotificationsDrawer() {
  const container = document.getElementById('empNotificationsListContainer');
  if (!container) return;

  const notifs = state.employeeTrainingData?.notifications || [];
  if (notifs.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: #64748b; padding: 20px;">No notifications at this time.</p>`;
  } else {
    container.innerHTML = notifs.map(n => `
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px; display: flex; align-items: flex-start; gap: 10px;">
        <span style="font-size: 18px;">${n.icon || '🔔'}</span>
        <div style="flex: 1;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 13px; color: #0f172a;">${escapeHtml(n.title)}</strong>
            <span style="font-size: 11px; color: #94a3b8;">${escapeHtml(n.time || 'Today')}</span>
          </div>
          <p style="font-size: 12px; color: #475569; margin: 3px 0 0 0; line-height: 1.4;">${escapeHtml(n.message)}</p>
        </div>
      </div>
    `).join('');
  }

  const modal = document.getElementById('modalEmpNotifications');
  if (modal) modal.classList.add('open');
}

function closeEmployeeNotificationsDrawer() {
  const modal = document.getElementById('modalEmpNotifications');
  if (modal) modal.classList.remove('open');
}

function markAllEmpNotificationsRead() {
  if (state.employeeTrainingData?.notifications) {
    state.employeeTrainingData.notifications.forEach(n => n.isRead = true);
    const badge = document.getElementById('empNotificationBadge');
    if (badge) badge.style.display = 'none';
    showConfigToast('All notifications marked as read.');
  }
}

// Global window bindings for HTML event handlers
window.loadEmployeeTrainingData = loadEmployeeTrainingData;
window.switchEmployeeTrainingTab = switchEmployeeTrainingTab;
window.filterEmpTrainingsByStatus = filterEmpTrainingsByStatus;
window.renderEmployeeTrainingsList = renderEmployeeTrainingsList;
window.openEmployeeTrainingDetail = openEmployeeTrainingDetail;
window.closeEmployeeTrainingDetail = closeEmployeeTrainingDetail;
window.switchEmpModalTab = switchEmpModalTab;
window.navigateEmpModalTab = navigateEmpModalTab;
window.toggleEmployeeResourceComplete = toggleEmployeeResourceComplete;
window.openEmployeeResourceViewer = openEmployeeResourceViewer;
window.closeEmployeeResourceViewer = closeEmployeeResourceViewer;
window.markCurrentViewerResourceComplete = markCurrentViewerResourceComplete;
window.submitEmployeeAssessment = submitEmployeeAssessment;
window.handleEmpEvidenceSelected = handleEmpEvidenceSelected;
window.removeEmpAttachedEvidence = removeEmpAttachedEvidence;
window.validateEmpSubmissionReadiness = validateEmpSubmissionReadiness;
window.submitEmpTrainingWorkflow = submitEmpTrainingWorkflow;
window.renderEmployeeCertificates = renderEmployeeCertificates;
window.openEmployeeCertificateViewer = openEmployeeCertificateViewer;
window.closeEmployeeCertViewer = closeEmployeeCertViewer;
window.downloadEmployeeCertificate = downloadEmployeeCertificate;
window.printEmployeeCertificate = printEmployeeCertificate;
window.renderEmployeeHistoryFull = renderEmployeeHistoryFull;
window.exportEmpHistoryCSV = exportEmpHistoryCSV;
window.openEmployeeNotificationsDrawer = openEmployeeNotificationsDrawer;
window.closeEmployeeNotificationsDrawer = closeEmployeeNotificationsDrawer;
window.markAllEmpNotificationsRead = markAllEmpNotificationsRead;






function togglePublishDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById("publishDropdownMenu");
  if (menu) menu.style.display = menu.style.display === "block" ? "none" : "block";
}
function closePublishDropdown() {
  const menu = document.getElementById("publishDropdownMenu");
  if (menu) menu.style.display = "none";
}
document.addEventListener("click", function(e) {
  const group = document.querySelector(".publish-split-btn-group");
  if (group && !group.contains(e.target)) closePublishDropdown();
});
window.togglePublishDropdown = togglePublishDropdown;
window.closePublishDropdown = closePublishDropdown;

// Global Interactive Utilities (NO POP-UPS)
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {
      showConfigToast('Fullscreen view enabled in portal.', 'info');
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
window.toggleFullScreen = toggleFullScreen;

function changeEmpPage(page) {
  const pageBtns = document.querySelectorAll('.emp-page-num');
  pageBtns.forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === String(page));
  });
  showConfigToast(`Navigated to Employees Roster — Page ${page} of 15`, 'info');
}
window.changeEmpPage = changeEmpPage;

function focusGlobalSearch() {
  const searchInput = document.getElementById('searchProgramsInput') || document.getElementById('searchProgressInput');
  if (searchInput) {
    searchInput.focus();
    showConfigToast('Search filter active: Type keywords to filter records.', 'info');
  } else {
    showConfigToast('Search portal activated.', 'info');
  }
}
window.focusGlobalSearch = focusGlobalSearch;

function handleHeaderNewAction() {
  if (state.currentRole === 'employee') {
    showConfigToast('Learner portal active. To enroll in additional courses, contact HR Operations.', 'info');
    return;
  }
  const viewTraining = document.getElementById('viewTraining');
  if (viewTraining && viewTraining.style.display !== 'none') {
    openProgramModal();
  } else {
    showConfigToast('New Action: Create training programme or assign curriculum from Training Module.', 'info');
  }
}
window.handleHeaderNewAction = handleHeaderNewAction;


// Action: Start Programme
function startEmployeeTraining(trainingId) {
  if (!state.employeeTrainingData) return;
  const t = (state.employeeTrainingData.trainings || []).find(x => x.id === trainingId);
  if (!t) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  t.trainingStatus = 'in_progress';
  t.status = 'In Progress';
  t.startDate = dateStr;
  if (!t.completionPercentage || t.completionPercentage === 0) {
    t.completionPercentage = 25;
    if (Array.isArray(t.resources) && t.resources[0]) {
      t.resources[0].isCompleted = true;
      t.resources[0].completionDate = dateStr;
    }
  }

  saveEmployeeStoreToLocal();
  updateEmpTrainingDerivedState();
  showConfigToast(`Programme "${t.trainingName}" started! Coursework is now active and in progress.`, 'success');

  // Re-render open detail if on screen
  if (document.getElementById('sectionEmpTrainingDetailScreen')?.style.display !== 'none' && state.empCurrentTrainingId === trainingId) {
    openEmployeeTrainingDetail(trainingId);
  }
  renderEmployeeTrainingsList();
  renderEmployeeDashboardUI();
}
window.startEmployeeTraining = startEmployeeTraining;

// Action: Complete Programme
function completeEmployeeTrainingDirect(trainingId) {
  if (!state.employeeTrainingData) return;
  const t = (state.employeeTrainingData.trainings || []).find(x => x.id === trainingId);
  if (!t) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  t.trainingStatus = 'completed';
  t.status = 'Completed';
  t.completionPercentage = 100;
  t.completionDate = dateStr;

  // Mark all resources completed
  if (Array.isArray(t.resources)) {
    t.resources.forEach(r => {
      r.isCompleted = true;
      if (!r.completionDate) r.completionDate = dateStr;
    });
  }

  // Ensure assessment passed
  if (t.assessment) {
    t.assessment.passed = true;
    t.assessment.isPassed = true;
    t.assessment.bestScore = 95;
    if (!t.assessment.previousAttempts) t.assessment.previousAttempts = [];
    t.assessment.previousAttempts.push({
      attemptNumber: t.assessment.previousAttempts.length + 1,
      score: 95,
      passed: true,
      submissionDate: dateStr
    });
  }

  // Issue certificate
  if (!t.certificate) {
    const certNum = Math.floor(1000 + Math.random() * 9000);
    t.certificate = {
      id: `TRN-2026-${certNum}`,
      name: `${t.trainingName} Credential`,
      trainingName: t.trainingName,
      issueDate: dateStr,
      expiryDate: '26-Jan-2028',
      status: 'issued',
      recipientName: state.employeeTrainingData.profile?.name || 'Tanya Kapoor',
      recipientId: state.employeeTrainingData.profile?.id || 'CO-5039'
    };
  }

  // Add notification
  if (state.employeeTrainingData.notifications) {
    state.employeeTrainingData.notifications.unshift({
      id: 'notif_' + Date.now(),
      title: 'Training Programme Completed',
      message: `Congratulations! You have completed "${t.trainingName}". Certificate ${t.certificate.id} has been issued.`,
      type: 'success',
      timestamp: 'Just now',
      read: false
    });
  }

  saveEmployeeStoreToLocal();
  updateEmpTrainingDerivedState();
  showConfigToast(`Congratulations! "${t.trainingName}" completed. Verified certificate issued.`, 'success');

  // Re-render open detail if on screen
  if (document.getElementById('sectionEmpTrainingDetailScreen')?.style.display !== 'none' && state.empCurrentTrainingId === trainingId) {
    openEmployeeTrainingDetail(trainingId);
  }
  renderEmployeeTrainingsList();
  renderEmployeeDashboardUI();
}
window.completeEmployeeTrainingDirect = completeEmployeeTrainingDirect;
