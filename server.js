import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = parseInt(process.env.PORT || process.argv[2] || '3000', 10);

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

// =============================================================================
// BACKEND IN-MEMORY TRAINING DATABASE FOR EMPLOYEES
// =============================================================================
const EMPLOYEE_TRAINING_STORE = {
  'CO-5039': {
    profile: {
      id: 'CO-5039',
      name: 'Tanya Kapoor',
      firstName: 'Tanya',
      lastName: 'Kapoor',
      designation: 'Business analyst',
      department: 'Business analyst',
      reportingManager: 'Megha Salunkhe (Sr. Executive)',
      reportingManagerId: 'CO-5038',
      email: 'calebnguyen@maildrop.cc',
      phone: '+1 9005048244',
      avatarInitials: 'AB',
      avatarBg: '#f59e0b',
      experience: '3Y 11M',
      status: 'active'
    },
    notifications: [
      {
        id: 'notif_1',
        title: 'Training Due Soon',
        message: 'Your mandatory training "API Security & OAuth2 Best Practices" is due on 15-Mar-2026.',
        type: 'warning',
        timestamp: '02-Mar-2026, 09:30 AM',
        trainingId: 'TRN-ASSIGN-101',
        read: false
      },
      {
        id: 'notif_2',
        title: 'Changes Requested on Submission',
        message: 'Reviewer Kunal Barve requested revisions for "CollabCRM Platform Architecture Deep Dive".',
        type: 'amber',
        timestamp: '28-Feb-2026, 11:45 AM',
        trainingId: 'TRN-ASSIGN-103',
        read: false
      },
      {
        id: 'notif_3',
        title: 'Certificate Issued',
        message: 'Congratulations! Certificate TRN-2026-0003 for "Security Awareness & GDPR Compliance 2026" has been issued.',
        type: 'success',
        timestamp: '26-Jan-2026, 05:15 PM',
        trainingId: 'TRN-ASSIGN-102',
        certId: 'TRN-2026-0003',
        read: true
      }
    ],
    trainings: [
      {
        id: 'TRN-ASSIGN-101',
        trainingName: 'API Security & OAuth2 Best Practices',
        category: 'Technical Architecture',
        shortDescription: 'Master token-based authentication, RBAC scopes, OAuth2 grant types, and API rate limiting in CollabCRM architecture.',
        isMandatory: true,
        assignedBy: 'Megha Salunkhe (Sr. Executive)',
        assignedDate: '12-Jan-2026',
        dueDate: '15-Mar-2026',
        startDate: '15-Jan-2026',
        completionPercentage: 67,
        trainingStatus: 'in_progress', // not_started | in_progress | submitted_for_review | changes_requested | completed | overdue
        learningObjectives: [
          'Understand OAuth2 authorization code and client credentials grant mechanisms',
          'Implement cryptographically verified JSON Web Token (JWT) validation and RBAC claims',
          'Prevent OWASP Top 10 API threats including Broken Object Level Authorization (BOLA)',
          'Configure distributed sliding-window rate limiting algorithms on mission-critical CRM gateways'
        ],
        expectedOutcomes: 'Engineers will be capable of authoring and auditing secure zero-trust APIs, safeguarding CRM customer data, and adhering to strict platform access policies.',
        difficultyLevel: 'Intermediate',
        expectedDuration: '4 Hours',
        resources: [
          {
            id: 'res_101_1',
            title: 'OAuth 2.0 & OpenID Connect Framework Deep Dive',
            description: 'Comprehensive video breakdown of modern token authorization flows and cryptographic signatures.',
            type: 'youtube',
            isMandatory: true,
            duration: '18 Mins',
            url: 'https://www.youtube.com/watch?v=996OiexHze0',
            isCompleted: true,
            completionDate: '15-Jan-2026',
            completionTimestamp: '15-Jan-2026, 10:20 AM'
          },
          {
            id: 'res_101_2',
            title: 'CollabCRM API Security Specifications & Token Policies (PDF)',
            description: 'Official corporate documentation outlining API gateway security contracts, header formats, and token lifecycle.',
            type: 'pdf',
            isMandatory: true,
            duration: '25 Mins',
            url: 'assets/docs/api_security_spec.pdf',
            isCompleted: true,
            completionDate: '18-Jan-2026',
            completionTimestamp: '18-Jan-2026, 03:45 PM'
          },
          {
            id: 'res_101_3',
            title: 'Interactive OWASP API Vulnerability Simulation Labs',
            description: 'External hands-on laboratory exercises simulating real-world API security vulnerability exploitation and mitigation.',
            type: 'external_link',
            isMandatory: false,
            duration: '45 Mins',
            url: 'https://owasp.org/www-project-api-security/',
            isCompleted: false,
            completionDate: null,
            completionTimestamp: null
          },
          {
            id: 'res_101_4',
            title: 'CollabCRM Gateway JWT Validation Middleware Demo',
            description: 'Video walk-through demonstrating custom middleware deployment and automated scope validation.',
            type: 'video',
            isMandatory: true,
            duration: '30 Mins',
            url: 'assets/videos/jwt_middleware_demo.mp4',
            isCompleted: false,
            completionDate: null,
            completionTimestamp: null
          }
        ],
        assessment: {
          id: 'asm_101',
          name: 'API Security & OAuth2 Certification Assessment',
          instructions: 'Answer all 4 questions carefully. You must achieve at least 80% to pass. Maximum 3 attempts allowed.',
          passingScore: 80,
          maxAttempts: 3,
          attemptsUsed: 1,
          passed: false,
          previousAttempts: [
            {
              attemptNumber: 1,
              score: 75,
              passed: false,
              submissionDate: '20-Jan-2026, 04:15 PM'
            }
          ],
          questions: [
            {
              id: 'q1',
              text: 'Which grant type is standardly recommended for Single Page Web Applications without client secrets?',
              options: [
                'Authorization Code Flow with PKCE (Proof Key for Code Exchange)',
                'Client Credentials Grant',
                'Implicit Grant with Bearer Token in URL Fragment',
                'Resource Owner Password Credentials Grant'
              ],
              correctIndex: 0
            },
            {
              id: 'q2',
              text: 'Where should sensitive tokens like long-lived Refresh Tokens NEVER be stored on the client?',
              options: [
                'HttpOnly, Secure SameSite Cookie',
                'Browser LocalStorage / SessionStorage',
                'Encrypted Backend Session Store',
                'Protected Server-Side Secure Enclave'
              ],
              correctIndex: 1
            },
            {
              id: 'q3',
              text: 'What critical security vulnerability is prevented by verifying JWT signatures on incoming API requests?',
              options: [
                'Cross-Site Scripting (XSS)',
                'Token Payload Tampering and Unauthorized Privilege Escalation',
                'SQL Query Injection in ORM layer',
                'DNS Cache Poisoning'
              ],
              correctIndex: 1
            },
            {
              id: 'q4',
              text: 'When a valid authenticated token lacks the required RBAC scope for an endpoint, which HTTP code must be returned?',
              options: [
                '401 Unauthorized',
                '403 Forbidden',
                '400 Bad Request',
                '404 Not Found'
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
        certificate: null
      },
      {
        id: 'TRN-ASSIGN-102',
        trainingName: 'Security Awareness & GDPR Compliance 2026',
        category: 'Governance & Compliance',
        shortDescription: 'Annual company-wide compliance covering European GDPR regulations, data subject rights, and breach escalation protocols.',
        isMandatory: true,
        assignedBy: 'Isha Patel (Head of People)',
        assignedDate: '05-Jan-2026',
        dueDate: '28-Jan-2026',
        startDate: '08-Jan-2026',
        completionPercentage: 100,
        trainingStatus: 'completed',
        learningObjectives: [
          'Understand European GDPR fundamentals and legal basis for CRM customer data retention',
          'Learn the statutory 72-hour security incident disclosure and notification timelines',
          'Execute customer Right to be Forgotten (Data Erasure) workflows securely'
        ],
        expectedOutcomes: 'Full compliance with global privacy regulations and secure data stewardship.',
        difficultyLevel: 'Beginner',
        expectedDuration: '2 Hours',
        resources: [
          {
            id: 'res_102_1',
            title: 'GDPR Regulations & Employee Responsibilities',
            description: 'Core overview of consumer data protection standards.',
            type: 'pdf',
            isMandatory: true,
            duration: '35 Mins',
            url: 'assets/docs/gdpr_compliance.pdf',
            isCompleted: true,
            completionDate: '10-Jan-2026',
            completionTimestamp: '10-Jan-2026, 11:00 AM'
          },
          {
            id: 'res_102_2',
            title: 'Data Breach Response & Escalation Protocol Drill',
            description: 'Scenario analysis of mandatory incident reporting procedures.',
            type: 'youtube',
            isMandatory: true,
            duration: '25 Mins',
            url: 'https://www.youtube.com/watch?v=996OiexHze0',
            isCompleted: true,
            completionDate: '14-Jan-2026',
            completionTimestamp: '14-Jan-2026, 04:30 PM'
          }
        ],
        assessment: {
          id: 'asm_102',
          name: 'GDPR Annual Compliance Examination',
          passingScore: 80,
          maxAttempts: 3,
          attemptsUsed: 1,
          passed: true,
          previousAttempts: [
            { attemptNumber: 1, score: 100, passed: true, submissionDate: '24-Jan-2026, 02:45 PM' }
          ],
          questions: []
        },
        submission: {
          completionRemarks: 'Completed all training modules. Reviewed our CRM export procedures to ensure no plaintext PII leakage.',
          evidenceFiles: ['signed_gdpr_acknowledgement_2026.pdf'],
          submittedAt: '25-Jan-2026, 03:10 PM',
          isLocked: true
        },
        review: {
          status: 'approved',
          reviewerName: 'Megha Salunkhe (Sr. Executive)',
          reviewDate: '26-Jan-2026, 05:10 PM',
          feedback: 'Excellent work. Assessment passed with 100% score and all compliance declarations verified. Certificate authorized and issued.'
        },
        certificate: {
          id: 'TRN-2026-0003',
          name: 'Certified GDPR & Data Security Practitioner',
          issueDate: '26-Jan-2026',
          expiryDate: '26-Jan-2027',
          status: 'issued',
          signatoryName: 'Isha Patel',
          signatoryTitle: 'Head of People & Org Development',
          downloadUrl: '#'
        }
      },
      {
        id: 'TRN-ASSIGN-103',
        trainingName: 'CollabCRM Platform Architecture Deep Dive',
        category: 'Product & Platform',
        shortDescription: 'In-depth engineering review of CRM microservices, event bus pub/sub pipelines, and caching patterns.',
        isMandatory: false,
        assignedBy: 'Kunal Barve (Team Leader)',
        assignedDate: '15-Feb-2026',
        dueDate: '10-Apr-2026',
        startDate: '18-Feb-2026',
        completionPercentage: 85,
        trainingStatus: 'changes_requested',
        learningObjectives: [
          'Master CollabCRM multi-tenant distributed schema isolation',
          'Implement Redis cluster read-through and write-behind cache strategies',
          'Design idempotent background workers for reliable webhook delivery'
        ],
        expectedOutcomes: 'Deep technical competence in deploying high-throughput CRM services.',
        difficultyLevel: 'Advanced',
        expectedDuration: '6 Hours',
        resources: [
          {
            id: 'res_103_1',
            title: 'Distributed System Topology & Microservices Map',
            description: 'Architecture diagram and service interaction blueprint.',
            type: 'pdf',
            isMandatory: true,
            duration: '40 Mins',
            url: 'assets/docs/crm_topology.pdf',
            isCompleted: true,
            completionDate: '20-Feb-2026',
            completionTimestamp: '20-Feb-2026, 02:00 PM'
          },
          {
            id: 'res_103_2',
            title: 'High-Throughput Redis Caching & Cache Invalidation',
            description: 'Live coding walkthrough of caching patterns.',
            type: 'video',
            isMandatory: true,
            duration: '35 Mins',
            url: 'assets/videos/redis_cache_patterns.mp4',
            isCompleted: true,
            completionDate: '24-Feb-2026',
            completionTimestamp: '24-Feb-2026, 06:15 PM'
          }
        ],
        assessment: {
          id: 'asm_103',
          name: 'Platform Architecture Capstone Evaluation',
          passingScore: 80,
          maxAttempts: 3,
          attemptsUsed: 1,
          passed: true,
          previousAttempts: [
            { attemptNumber: 1, score: 90, passed: true, submissionDate: '27-Feb-2026, 05:00 PM' }
          ],
          questions: []
        },
        submission: {
          completionRemarks: 'Completed all modules and implemented sample microservice integration on dev cluster.',
          evidenceFiles: ['architecture_diagram_v1.pdf'],
          submittedAt: '27-Feb-2026, 05:30 PM',
          isLocked: false // unlocked for revision
        },
        review: {
          status: 'changes_requested',
          reviewerName: 'Kunal Barve (Team Leader)',
          reviewDate: '28-Feb-2026, 11:45 AM',
          feedback: 'Solid implementation overall, but please update your supporting architecture diagram to clearly illustrate the cache invalidation flow between the order service and the reporting database before approval.',
          requiredCorrections: 'Update architecture diagram with cache invalidation flow and resubmit.'
        },
        certificate: null
      },
      {
        id: 'TRN-ASSIGN-104',
        trainingName: 'Cross-Border Data Transfer Policies',
        category: 'Governance & Compliance',
        shortDescription: 'Standard Contractual Clauses (SCCs) and regulatory data transfer safeguards for global CRM tenants.',
        isMandatory: true,
        assignedBy: 'Isha Patel (Head of People)',
        assignedDate: '01-Feb-2026',
        dueDate: '15-Feb-2026',
        startDate: '03-Feb-2026',
        completionPercentage: 20,
        trainingStatus: 'overdue',
        learningObjectives: [
          'Understand European Court of Justice Schrems II compliance rules',
          'Verify cross-border tenant isolation in automated backups'
        ],
        expectedOutcomes: 'Prevent compliance non-conformances during international audits.',
        difficultyLevel: 'Intermediate',
        expectedDuration: '2 Hours',
        resources: [
          {
            id: 'res_104_1',
            title: 'International Data Transfer Regulations Overview',
            description: 'Core legal frameworks and regional boundary rules.',
            type: 'pdf',
            isMandatory: true,
            duration: '30 Mins',
            url: 'assets/docs/cross_border_rules.pdf',
            isCompleted: true,
            completionDate: '03-Feb-2026',
            completionTimestamp: '03-Feb-2026, 11:30 AM'
          },
          {
            id: 'res_104_2',
            title: 'Cloud Storage Encryption & Regional Bucket Boundaries',
            description: 'Engineering policies for multi-region storage isolation.',
            type: 'video',
            isMandatory: true,
            duration: '45 Mins',
            url: 'assets/videos/bucket_boundaries.mp4',
            isCompleted: false,
            completionDate: null,
            completionTimestamp: null
          }
        ],
        assessment: null,
        submission: {
          completionRemarks: '',
          evidenceFiles: [],
          submittedAt: null,
          isLocked: false
        },
        review: null,
        certificate: null
      },
      {
        id: 'TRN-ASSIGN-105',
        trainingName: 'Advanced Async JavaScript & Event Loops',
        category: 'Technical Architecture',
        shortDescription: 'Master microtasks, macrotasks, unhandled promise rejections, and zero-latency asynchronous queues in Node.js & browser environments.',
        isMandatory: false,
        assignedBy: 'Kunal Barve (Team Leader)',
        assignedDate: '01-Mar-2026',
        dueDate: '30-Apr-2026',
        startDate: null,
        completionPercentage: 0,
        trainingStatus: 'not_started',
        learningObjectives: [
          'Analyze V8 event loop execution phases (timers, poll, check)',
          'Profile thread pool worker bottlenecks and optimize event loop lag'
        ],
        expectedOutcomes: 'Zero-latency UI rendering and performant server-side async handlers.',
        difficultyLevel: 'Advanced',
        expectedDuration: '3 Hours',
        resources: [
          {
            id: 'res_105_1',
            title: 'V8 Engine Event Loop Mechanics (Video)',
            description: 'In-depth explanation of execution queues and call stack scheduling.',
            type: 'youtube',
            isMandatory: true,
            duration: '35 Mins',
            url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
            isCompleted: false,
            completionDate: null,
            completionTimestamp: null
          }
        ],
        assessment: null,
        submission: {
          completionRemarks: '',
          evidenceFiles: [],
          submittedAt: null,
          isLocked: false
        },
        review: null,
        certificate: null
      },
      {
        id: 'TRN-ASSIGN-106',
        trainingName: 'Incident Response & SLA Management',
        category: 'Support & Operations',
        shortDescription: 'Operational response protocols for high-severity production outages, root cause analyses, and SLA commitments.',
        isMandatory: true,
        assignedBy: 'Megha Salunkhe (Sr. Executive)',
        assignedDate: '10-Feb-2026',
        dueDate: '20-Mar-2026',
        startDate: '12-Feb-2026',
        completionPercentage: 100,
        trainingStatus: 'submitted_for_review',
        learningObjectives: [
          'Understand P0-P3 incident classification and pager escalation hierarchies',
          'Draft customer-facing Post-Mortem and Root Cause Analysis (RCA) reports'
        ],
        expectedOutcomes: 'Speedy incident triage and 99.99% uptime compliance.',
        difficultyLevel: 'Intermediate',
        expectedDuration: '3 Hours',
        resources: [
          {
            id: 'res_106_1',
            title: 'Incident Management Operating Procedures',
            description: 'Incident Commander responsibilities and bridge coordination.',
            type: 'pdf',
            isMandatory: true,
            duration: '40 Mins',
            url: 'assets/docs/incident_sop.pdf',
            isCompleted: true,
            completionDate: '18-Feb-2026',
            completionTimestamp: '18-Feb-2026, 01:15 PM'
          }
        ],
        assessment: null,
        submission: {
          completionRemarks: 'Completed all incident drill simulations. Participated in mock P1 bridge drill and submitted post-mortem analysis.',
          evidenceFiles: ['mock_incident_post_mortem.pdf'],
          submittedAt: '27-Feb-2026, 06:15 PM',
          isLocked: true
        },
        review: {
          status: 'pending',
          reviewerName: 'Megha Salunkhe (Sr. Executive)',
          reviewDate: null,
          feedback: 'Under evaluation by manager.'
        },
        certificate: null
      }
    ]
  },
  'EMP-010': {
    profile: {
      id: 'EMP-010',
      name: 'Karan Johar',
      firstName: 'Karan',
      lastName: 'Johar',
      designation: 'Former Sales Lead',
      department: 'Sales & BD',
      reportingManager: 'Isha Patel (Head of People)',
      reportingManagerId: 'EMP-001',
      email: 'karan.j@collabcrm.com',
      phone: '+1 9005048299',
      avatarInitials: 'KJ',
      avatarBg: '#64748b',
      experience: '2Y 4M',
      status: 'inactive',
      exitDate: '15-Feb-2026'
    },
    notifications: [],
    trainings: [
      {
        id: 'TRN-ASSIGN-901',
        trainingName: 'Executive Leadership & Strategic Governance',
        category: 'Governance & Compliance',
        shortDescription: 'Core executive oversight and ethical corporate conduct.',
        isMandatory: true,
        assignedBy: 'Isha Patel (Head of People)',
        assignedDate: '10-Dec-2025',
        dueDate: '15-Jan-2026',
        startDate: '12-Dec-2025',
        completionPercentage: 100,
        trainingStatus: 'completed',
        resources: [],
        review: {
          status: 'approved',
          reviewerName: 'Isha Patel',
          reviewDate: '14-Jan-2026',
          feedback: 'Successfully finished before exit.'
        },
        certificate: {
          id: 'CERT-2026-099',
          name: 'Executive Leadership Credential',
          issueDate: '14-Jan-2026',
          expiryDate: '14-Jan-2028',
          status: 'issued'
        }
      }
    ]
  }
};

// Global in-memory training program registry for version tracking
const TRAINING_PROGRAMS_REGISTRY = {
  'TR-101': { id: 'TR-101', title: 'CollabCRM Recruitment & Client Portal Workflows', version: 1, versions: [], status: 'published' },
  'TR-102': { id: 'TR-102', title: 'Enterprise Cloud Architecture & Distributed Microservices', version: 1, versions: [], status: 'published' },
  'TR-103': { id: 'TR-103', title: 'Information Security, GDPR & Data Privacy 2026', version: 1, versions: [], status: 'published' },
  'TR-104': { id: 'TR-104', title: 'Executive Sales Leadership & High-Ticket Negotiation', version: 1, versions: [], status: 'published' }
};

// Helper: Calculate Dashboard Stats
function calculateEmployeeDashboardStats(store) {
  const trainings = store.trainings || [];
  return {
    totalAssigned: trainings.length,
    notStarted: trainings.filter(t => t.trainingStatus === 'not_started').length,
    inProgress: trainings.filter(t => t.trainingStatus === 'in_progress').length,
    submittedForReview: trainings.filter(t => t.trainingStatus === 'submitted_for_review').length,
    changesRequested: trainings.filter(t => t.trainingStatus === 'changes_requested').length,
    completed: trainings.filter(t => t.trainingStatus === 'completed').length,
    overdue: trainings.filter(t => t.trainingStatus === 'overdue').length,
    certificatesIssued: trainings.filter(t => t.certificate && t.certificate.status === 'issued').length
  };
}

// Helper: Parse JSON Body
function parseJsonBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch (e) {
        resolve({});
      }
    });
  });
}

// Helper: Send JSON response
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

// =============================================================================
// HTTP SERVER WITH REST APIS & STATIC SPA SERVING
// =============================================================================
const server = http.createServer(async (req, res) => {
  // CORS & Cache control
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // 1. Health check
  if (pathname === '/api/health') {
    return sendJson(res, 200, {
      status: 'online',
      service: 'CollabCRM Training Module',
      timestamp: new Date().toISOString()
    });
  }

  // 2. GET Employee Training Data
  if (pathname === '/api/employee/training-data' && req.method === 'GET') {
    const empId = parsedUrl.searchParams.get('employeeId') || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[empId] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const isInactive = store.profile && (store.profile.status === 'inactive' || store.profile.status === 'exited');
    const stats = calculateEmployeeDashboardStats(store);
    return sendJson(res, 200, {
      success: true,
      isBlocked: isInactive,
      employee: store.profile,
      stats: stats,
      trainings: store.trainings,
      notifications: store.notifications
    });
  }

  // 3. POST Resource Completion / Progress Tracking
  if (pathname === '/api/employee/resource-progress' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, trainingId, resourceId, isCompleted } = body;
    const store = EMPLOYEE_TRAINING_STORE[employeeId || 'CO-5039'] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === trainingId);

    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Training not found' });
    }

    const resource = training.resources.find(r => r.id === resourceId);
    if (!resource) {
      return sendJson(res, 404, { success: false, message: 'Resource not found' });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    resource.isCompleted = !!isCompleted;
    resource.completionDate = isCompleted ? dateStr : null;
    resource.completionTimestamp = isCompleted ? `${dateStr}, ${timeStr}` : null;

    // Calculate overall progress using mandatory resources
    const mandatoryResources = training.resources.filter(r => r.isMandatory);
    const completedMandatory = mandatoryResources.filter(r => r.isCompleted).length;
    const totalMandatory = mandatoryResources.length;

    const progress = totalMandatory > 0 ? Math.round((completedMandatory / totalMandatory) * 100) : 100;
    training.completionPercentage = progress;

    if (training.trainingStatus === 'not_started' && progress > 0) {
      training.trainingStatus = 'in_progress';
      training.startDate = dateStr;
    }

    return sendJson(res, 200, {
      success: true,
      message: isCompleted ? 'Resource marked as completed' : 'Resource marked as pending',
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 4. POST Assessment Submission
  if (pathname === '/api/employee/assessment-submit' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, trainingId, answers } = body;
    const store = EMPLOYEE_TRAINING_STORE[employeeId || 'CO-5039'] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === trainingId);

    if (!training || !training.assessment) {
      return sendJson(res, 404, { success: false, message: 'Assessment not found for this training' });
    }

    const asm = training.assessment;
    if (asm.attemptsUsed >= asm.maxAttempts && !asm.passed) {
      return sendJson(res, 400, {
        success: false,
        message: 'Maximum assessment attempts exceeded. Contact your reporting manager for a retake waiver.'
      });
    }

    // Grade answers
    const questions = asm.questions || [];
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (answers && answers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const score = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 100;
    const passed = score >= asm.passingScore;

    asm.attemptsUsed = (asm.attemptsUsed || 0) + 1;
    asm.passed = passed;
    asm.isPassed = passed;
    asm.bestScore = Math.max(asm.bestScore || 0, score);

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

    return sendJson(res, 200, {
      success: true,
      score: score,
      passed: passed,
      attemptNumber: asm.attemptsUsed,
      attemptsRemaining: Math.max(0, asm.maxAttempts - asm.attemptsUsed),
      submissionDate: `${dateStr}, ${timeStr}`,
      training: training
    });
  }

  // 5. POST Training Submission For Review
  if (pathname === '/api/employee/training-submit' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, trainingId, remarks, evidenceFiles } = body;
    const store = EMPLOYEE_TRAINING_STORE[employeeId || 'CO-5039'] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === trainingId);

    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Training not found' });
    }

    // Validation checks
    const mandatoryResources = training.resources.filter(r => r.isMandatory);
    const incompleteMandatory = mandatoryResources.some(r => !r.isCompleted);
    if (incompleteMandatory) {
      return sendJson(res, 400, {
        success: false,
        message: 'Cannot submit training. Please complete all mandatory learning resources first.'
      });
    }

    if (training.assessment && !training.assessment.passed) {
      return sendJson(res, 400, {
        success: false,
        message: 'Cannot submit training. You must pass the required certification assessment.'
      });
    }

    if (!remarks || remarks.trim().length < 5) {
      return sendJson(res, 400, {
        success: false,
        message: 'Please provide completion remarks describing your practical learnings and takeaways.'
      });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    training.submission = {
      completionRemarks: remarks.trim(),
      evidenceFiles: evidenceFiles || ['compliance_evidence_bundle.pdf'],
      submittedAt: `${dateStr}, ${timeStr}`,
      isLocked: true
    };

    training.trainingStatus = 'submitted_for_review';
    training.review = {
      status: 'pending',
      reviewerName: training.assignedBy,
      reviewDate: null,
      feedback: 'Awaiting manager evaluation.'
    };

    // Add confirmation notification
    store.notifications.unshift({
      id: `notif_${Date.now()}`,
      title: 'Submission Received',
      message: `Your training "${training.trainingName}" was submitted for review to ${training.assignedBy}.`,
      type: 'info',
      timestamp: `${dateStr}, ${timeStr}`,
      trainingId: training.id,
      read: false
    });

    return sendJson(res, 200, {
      success: true,
      message: 'Training successfully submitted for manager review.',
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 6. POST Resubmit For Review (When changes requested)
  if (pathname === '/api/employee/training-resubmit' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, trainingId, remarks, evidenceFiles } = body;
    const store = EMPLOYEE_TRAINING_STORE[employeeId || 'CO-5039'] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === trainingId);

    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Training not found' });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    training.submission.completionRemarks = remarks || training.submission.completionRemarks;
    if (evidenceFiles && evidenceFiles.length > 0) {
      training.submission.evidenceFiles = evidenceFiles;
    }
    training.submission.submittedAt = `${dateStr}, ${timeStr}`;
    training.submission.isLocked = true;

    training.trainingStatus = 'submitted_for_review';
    training.review.status = 'pending';
    training.review.feedback = 'Revisions submitted. Awaiting manager re-evaluation.';

    return sendJson(res, 200, {
      success: true,
      message: 'Training revisions successfully resubmitted for manager review.',
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 7. GET My Certificates
  if (pathname === '/api/employee/certificates' && req.method === 'GET') {
    const empId = parsedUrl.searchParams.get('employeeId') || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[empId] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const certs = store.trainings
      .filter(t => t.certificate && t.certificate.status === 'issued')
      .map(t => ({
        ...t.certificate,
        trainingName: t.trainingName,
        category: t.category,
        assignedBy: t.assignedBy
      }));

    return sendJson(res, 200, {
      success: true,
      certificates: certs
    });
  }

  // 8. GET Training History
  if (pathname === '/api/employee/history' && req.method === 'GET') {
    const empId = parsedUrl.searchParams.get('employeeId') || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[empId] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const history = store.trainings.map(t => {
      let scoreStr = '-';
      if (t.assessment && t.assessment.previousAttempts && t.assessment.previousAttempts.length > 0) {
        scoreStr = `${t.assessment.previousAttempts[t.assessment.previousAttempts.length - 1].score}%`;
      }
      return {
        id: t.id,
        trainingName: t.trainingName,
        category: t.category,
        assignedBy: t.assignedBy,
        assignedDate: t.assignedDate,
        dueDate: t.dueDate,
        startDate: t.startDate || '-',
        submissionDate: (t.submission && t.submission.submittedAt) ? t.submission.submittedAt : '-',
        reviewDate: (t.review && t.review.reviewDate) ? t.review.reviewDate : '-',
        completionDate: (t.trainingStatus === 'completed' && t.review) ? (t.review.reviewDate || t.dueDate) : '-',
        progress: t.completionPercentage,
        assessmentScore: scoreStr,
        assignmentStatus: t.trainingStatus,
        reviewStatus: t.review ? t.review.status : 'not_submitted',
        certificateStatus: (t.certificate && t.certificate.status === 'issued') ? 'Issued' : 'Not Issued'
      };
    });

    return sendJson(res, 200, {
      success: true,
      history: history
    });
  }

  // 9. POST Assign New Training to Employee Store (With Exit & Duplicate Active Validations)
  if (pathname === '/api/employee/assign' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, training } = body;
    const targetEmpId = employeeId || (training && training.employeeId) || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];

    if (!training || !training.id) {
      return sendJson(res, 400, { success: false, message: 'Invalid training assignment payload' });
    }

    // Validation 1: Prevent new assignments when employee is inactive or exited
    if (store.profile && (store.profile.status === 'inactive' || store.profile.status === 'exited')) {
      return sendJson(res, 400, {
        success: false,
        message: `Cannot assign training: Employee ${store.profile.name} (${store.profile.id}) is marked as inactive / exited.`
      });
    }

    // Validation 2: Prevent duplicate active assignments
    const isDuplicateActive = store.trainings.some(t => {
      const sameProg = (t.programId && training.programId && t.programId === training.programId) ||
                       (t.trainingName && training.trainingName && t.trainingName.trim().toLowerCase() === training.trainingName.trim().toLowerCase());
      const isActive = t.trainingStatus !== 'cancelled' && t.trainingStatus !== 'completed';
      return sameProg && isActive && t.id !== training.id;
    });

    if (isDuplicateActive) {
      return sendJson(res, 400, {
        success: false,
        message: `An active assignment for this training program already exists for ${store.profile.name}. Cancel or reassign the existing active record instead.`
      });
    }

    // Attach current program version if applicable
    const progMeta = training.programId ? TRAINING_PROGRAMS_REGISTRY[training.programId] : null;
    if (progMeta && !training.programVersion) {
      training.programVersion = progMeta.version || 1;
    }

    const existingIdx = store.trainings.findIndex(t => t.id === training.id);
    if (existingIdx !== -1) {
      Object.assign(store.trainings[existingIdx], training);
    } else {
      store.trainings.unshift(training);
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    store.notifications.unshift({
      id: `notif_${Date.now()}`,
      title: 'New Training Assigned',
      message: `"${training.trainingName || training.title}" has been assigned to you. Due Date: ${training.dueDate}.`,
      type: 'assignment',
      timestamp: `${dateStr}, ${timeStr}`,
      trainingId: training.id,
      read: false
    });

    return sendJson(res, 200, {
      success: true,
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 10. POST Reviewer Decision (In-place transition from My Training to Training History on Approval)
  if (pathname === '/api/employee/review-decision' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, trainingId, action, reviewerName, reviewerId, feedback, certificate, userRole } = body;
    const store = EMPLOYEE_TRAINING_STORE[employeeId || 'CO-5039'] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === trainingId || t.programId === body.programId);
    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Training assignment not found' });
    }

    // Security Check: Enforce authorized reviewer permissions
    const isAuthorizedAdmin = userRole === 'admin' || userRole === 'hr';
    const isDesignatedReviewer = training.reviewerId && reviewerId && training.reviewerId === reviewerId;
    const isDirectManager = store.profile && reviewerId && store.profile.reportingManagerId === reviewerId;
    const isDesignatedName = training.reviewerName && reviewerName && training.reviewerName.toLowerCase().includes(reviewerName.toLowerCase());

    if (!isAuthorizedAdmin && !isDesignatedReviewer && !isDirectManager && !isDesignatedName && userRole !== 'admin') {
      // Allow if reviewerName matches assigner or manager
      const assignerMatch = training.assignedBy && reviewerName && training.assignedBy.toLowerCase().includes(reviewerName.toLowerCase());
      if (!assignerMatch) {
        return sendJson(res, 403, {
          success: false,
          message: 'Permission Denied: You are not authorized to evaluate this submission. Only the assigned reviewer, reporting manager, or Admin can approve.'
        });
      }
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    if (action === 'approve') {
      training.trainingStatus = 'completed';
      training.status = 'Completed';
      training.completionPercentage = 100;
      training.completionDate = dateStr;
      training.review = {
        status: 'approved',
        reviewerName: reviewerName || training.reviewerName || training.assignedBy || 'Isha Patel (Admin)',
        reviewerId: reviewerId || training.reviewerId || null,
        reviewDate: `${dateStr}, ${timeStr}`,
        feedback: feedback || 'Submission approved. All mandatory resources and assessment requirements verified.'
      };
      if (certificate) {
        training.certificate = certificate;
      } else if (!training.certificate) {
        training.certificate = {
          id: `CERT-${new Date().getFullYear()}-${String(Math.floor(1000 + Math.random() * 9000))}`,
          name: `${training.trainingName} Credential`,
          trainingName: training.trainingName,
          issueDate: dateStr,
          expiryDate: new Date(Date.now() + 2 * 365 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
          status: 'issued',
          recipientName: store.profile.name,
          recipientId: store.profile.id || store.profile.employeeId,
          signatoryName: 'Isha Patel',
          signatoryTitle: 'Head of People & Org Development'
        };
      }
      store.notifications.unshift({
        id: `notif_${Date.now()}`,
        title: 'Training Approved & Completed',
        message: `Your submission for "${training.trainingName}" was approved by ${training.review.reviewerName}. Official certificate issued!`,
        type: 'certificate',
        timestamp: `${dateStr}, ${timeStr}`,
        trainingId: training.id,
        read: false
      });
    } else if (action === 'request_changes') {
      training.trainingStatus = 'changes_requested';
      training.status = 'Changes Requested';
      if (training.submission) training.submission.isLocked = false;
      training.review = {
        status: 'changes_requested',
        reviewerName: reviewerName || training.reviewerName || training.assignedBy || 'Isha Patel (Admin)',
        reviewerId: reviewerId || training.reviewerId || null,
        reviewDate: `${dateStr}, ${timeStr}`,
        feedback: feedback || 'Please revise your submission remarks and attach supporting evidence.'
      };
      store.notifications.unshift({
        id: `notif_${Date.now()}`,
        title: 'Changes Requested on Submission',
        message: `${training.review.reviewerName} requested updates on "${training.trainingName}": "${training.review.feedback}"`,
        type: 'warning',
        timestamp: `${dateStr}, ${timeStr}`,
        trainingId: training.id,
        read: false
      });
    } else if (action === 'reject') {
      training.trainingStatus = 'in_progress';
      training.status = 'In Progress';
      if (training.submission) training.submission.isLocked = false;
      training.review = {
        status: 'rejected',
        reviewerName: reviewerName || training.reviewerName || training.assignedBy || 'Isha Patel (Admin)',
        reviewerId: reviewerId || training.reviewerId || null,
        reviewDate: `${dateStr}, ${timeStr}`,
        feedback: feedback || 'Submission rejected.'
      };
    }

    return sendJson(res, 200, {
      success: true,
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 11. POST Cancel Assignment (Feature 1: Cancellation with reason, retains history & progress)
  if (pathname === '/api/training/cancel-assignment' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { assignmentId, employeeId, cancellationReason, cancelledBy } = body;
    const targetEmpId = employeeId || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === assignmentId);

    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Assignment not found.' });
    }

    if (!cancellationReason || cancellationReason.trim().length < 3) {
      return sendJson(res, 400, { success: false, message: 'Please provide a valid reason for cancellation.' });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    training.trainingStatus = 'cancelled';
    training.status = 'Cancelled';
    training.cancellationReason = cancellationReason.trim();
    training.cancelledBy = cancelledBy || 'Admin';
    training.cancelledAt = `${dateStr}, ${timeStr}`;

    if (!training.auditHistory) training.auditHistory = [];
    training.auditHistory.unshift({
      date: `${dateStr}, ${timeStr}`,
      action: 'Assignment Cancelled',
      user: cancelledBy || 'Admin',
      notes: `Cancelled. Reason: ${cancellationReason.trim()}`
    });

    store.notifications.unshift({
      id: `notif_${Date.now()}`,
      title: 'Training Assignment Cancelled',
      message: `Your training assignment for "${training.trainingName}" was cancelled by ${training.cancelledBy}. Reason: ${training.cancellationReason}`,
      type: 'warning',
      timestamp: `${dateStr}, ${timeStr}`,
      trainingId: training.id,
      read: false
    });

    return sendJson(res, 200, {
      success: true,
      message: 'Training assignment cancelled successfully. Past progress and history preserved.',
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 12. POST Reassign Training (Feature 1: Reassign with new due date, retains progress, checks duplicate)
  if (pathname === '/api/training/reassign' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { assignmentId, employeeId, newDueDate, reassignedBy, notes } = body;
    const targetEmpId = employeeId || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === assignmentId);

    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Assignment not found.' });
    }

    if (!newDueDate) {
      return sendJson(res, 400, { success: false, message: 'New due date is required for reassignment.' });
    }

    // Check if another active assignment exists
    const duplicate = store.trainings.find(t => {
      if (t.id === assignmentId) return false;
      const sameProg = (training.programId && t.programId && t.programId === training.programId) ||
                       (training.trainingName && t.trainingName && t.trainingName.trim().toLowerCase() === training.trainingName.trim().toLowerCase());
      const isActive = t.trainingStatus !== 'cancelled' && t.trainingStatus !== 'completed';
      return sameProg && isActive;
    });
    if (duplicate) {
      return sendJson(res, 400, {
        success: false,
        message: 'Cannot reassign: An active assignment already exists for this training program.'
      });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    training.dueDate = newDueDate;
    training.trainingStatus = (training.completionPercentage > 0) ? 'in_progress' : 'not_started';
    training.status = (training.completionPercentage > 0) ? 'In Progress' : 'Not Started';
    training.reassignedAt = `${dateStr}, ${timeStr}`;
    training.reassignedBy = reassignedBy || 'Admin';
    training.cancellationReason = null;

    if (!training.auditHistory) training.auditHistory = [];
    training.auditHistory.unshift({
      date: `${dateStr}, ${timeStr}`,
      action: 'Assignment Reassigned',
      user: reassignedBy || 'Admin',
      notes: `Reassigned with new due date ${newDueDate}. ${notes || ''}`
    });

    store.notifications.unshift({
      id: `notif_${Date.now()}`,
      title: 'Training Reassigned',
      message: `"${training.trainingName}" has been reassigned to you by ${reassignedBy || 'Admin'}. New Due Date: ${newDueDate}.`,
      type: 'assignment',
      timestamp: `${dateStr}, ${timeStr}`,
      trainingId: training.id,
      read: false
    });

    return sendJson(res, 200, {
      success: true,
      message: `Assignment successfully reassigned with new due date ${newDueDate}. Previous progress preserved.`,
      training: training,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 13. POST Delegate Reviewer (Feature 5: Assign and reassign reviewers, restrict submissions)
  if (pathname === '/api/training/delegate-reviewer' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { assignmentId, employeeId, reviewerId, reviewerName, delegatedBy, notes } = body;
    const targetEmpId = employeeId || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const training = store.trainings.find(t => t.id === assignmentId);

    if (!training) {
      return sendJson(res, 404, { success: false, message: 'Assignment not found.' });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    training.reviewerId = reviewerId;
    training.reviewerName = reviewerName;
    training.reviewerDelegatedBy = delegatedBy || 'Admin';
    training.reviewerDelegatedAt = `${dateStr}, ${timeStr}`;

    if (!training.auditHistory) training.auditHistory = [];
    training.auditHistory.unshift({
      date: `${dateStr}, ${timeStr}`,
      action: 'Reviewer Delegated',
      user: delegatedBy || 'Admin',
      notes: `Assigned evaluation authority to ${reviewerName}. ${notes || ''}`
    });

    return sendJson(res, 200, {
      success: true,
      message: `Reviewer successfully delegated to ${reviewerName}.`,
      training: training
    });
  }

  // 14. POST Send Certificate Expiry Reminder (Feature 2)
  if (pathname === '/api/training/certificate/send-reminder' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { certificateId, employeeId } = body;
    const targetEmpId = employeeId || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];

    const training = store.trainings.find(t => (t.certificate && t.certificate.id === certificateId) || t.id === body.assignmentId);
    const certName = (training && training.certificate && training.certificate.name) || (training && training.trainingName) || 'Certificate';
    const expiry = (training && training.certificate && training.certificate.expiryDate) || 'Expiring soon';

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    store.notifications.unshift({
      id: `notif_${Date.now()}`,
      title: 'Certificate Expiry Reminder',
      message: `Reminder: Your certification "${certName}" is scheduled to expire (${expiry}). Please complete refresher training to renew your credential.`,
      type: 'warning',
      timestamp: `${dateStr}, ${timeStr}`,
      read: false
    });

    return sendJson(res, 200, {
      success: true,
      message: `Expiry reminder dispatched to ${store.profile.name}.`
    });
  }

  // 15. POST Assign Refresher Training (Feature 2)
  if (pathname === '/api/training/certificate/assign-refresher' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { certificateId, employeeId, programId, assignedBy, dueDate } = body;
    const targetEmpId = employeeId || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];

    // Check employee active status
    if (store.profile && (store.profile.status === 'inactive' || store.profile.status === 'exited')) {
      return sendJson(res, 400, {
        success: false,
        message: 'Cannot assign refresher training: Employee profile is inactive / exited.'
      });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const defaultDue = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    const progMeta = programId ? TRAINING_PROGRAMS_REGISTRY[programId] : null;
    const progVersion = (progMeta && progMeta.version) || 1;

    const refresherAssignment = {
      id: `TRN-REFR-${Date.now().toString().slice(-4)}`,
      programId: programId || 'TR-101',
      programVersion: progVersion,
      trainingName: body.trainingName || 'Compliance Refresher',
      category: body.category || 'Governance & Compliance',
      shortDescription: `Refresher training for certificate renewal (${certificateId || 'Existing'}).`,
      isMandatory: true,
      isRefresher: true,
      refresherForCertId: certificateId,
      assignedBy: assignedBy || 'Isha Patel (Head of People)',
      assignedDate: dateStr,
      dueDate: dueDate || defaultDue,
      startDate: null,
      completionPercentage: 0,
      trainingStatus: 'not_started',
      status: 'Not Started',
      resources: [],
      assessment: null,
      submission: { completionRemarks: '', evidenceFiles: [], submittedAt: null, isLocked: false },
      review: null,
      certificate: null // New certificate only issued AFTER approval
    };

    store.trainings.unshift(refresherAssignment);
    store.notifications.unshift({
      id: `notif_${Date.now()}`,
      title: 'Refresher Training Assigned',
      message: `A certificate renewal refresher course has been assigned to you. Due Date: ${refresherAssignment.dueDate}.`,
      type: 'assignment',
      timestamp: `${dateStr}, ${timeStr}`,
      trainingId: refresherAssignment.id,
      read: false
    });

    return sendJson(res, 200, {
      success: true,
      message: 'Refresher training successfully assigned. Certificate will be renewed upon completion and approval.',
      assignment: refresherAssignment,
      stats: calculateEmployeeDashboardStats(store)
    });
  }

  // 16. POST Update Employee Status (Feature 3: Exit handling)
  if (pathname === '/api/employee/status' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { employeeId, status, exitDate, reason } = body;
    const targetEmpId = employeeId || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[targetEmpId] || EMPLOYEE_TRAINING_STORE['CO-5039'];

    if (!['active', 'inactive', 'exited'].includes(status)) {
      return sendJson(res, 400, { success: false, message: 'Invalid status. Must be active, inactive, or exited.' });
    }

    store.profile.status = status;
    if (exitDate) store.profile.exitDate = exitDate;
    if (reason) store.profile.exitReason = reason;

    return sendJson(res, 200, {
      success: true,
      message: `Employee status updated to ${status}. All historical training records and certificates preserved.`,
      employee: store.profile
    });
  }

  // 17. POST Training Program Update & Version Management (Feature 4)
  if (pathname === '/api/training/program-update' && req.method === 'POST') {
    const body = await parseJsonBody(req);
    const { programId, title, dept, difficulty, durationHours, passScore, status } = body;

    let prog = TRAINING_PROGRAMS_REGISTRY[programId];
    if (!prog) {
      prog = { id: programId, title, version: 1, versions: [], status: status || 'published' };
      TRAINING_PROGRAMS_REGISTRY[programId] = prog;
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    // If already published and updating, create new version snapshot
    if (prog.status === 'published' && status === 'published') {
      const { versions: _v, ...progSnapshot } = prog;
      prog.versions.push({
        version: prog.version,
        title: prog.title,
        updatedAt: dateStr,
        snapshot: JSON.parse(JSON.stringify(progSnapshot))
      });
      prog.version = (prog.version || 1) + 1;
    }

    Object.assign(prog, body);

    return sendJson(res, 200, {
      success: true,
      message: `Programme updated to version v${prog.version}. Existing employee assignments remain linked to their original version without progress reset.`,
      program: prog
    });
  }

  // ===========================================================================
  // STATIC ASSETS & SPA ROUTING
  // ===========================================================================
  let reqPath = pathname;
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  let filePath = path.join(__dirname, reqPath);

  // Fallback to index.html for SPA client-side routes
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(__dirname, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`Internal Server Error: ${err.code}`);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 CollabCRM Training Module running at http://localhost:${PORT}`);
});
