import http from 'http';

// Helper: Parse JSON Body
function parseJsonBody(req) {
  return new Promise((resolve) => {
    if (req.body) {
      return resolve(typeof req.body === 'string' ? JSON.parse(req.body) : req.body);
    }
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
// BACKEND IN-MEMORY TRAINING DATABASE FOR EMPLOYEES
// =============================================================================
const EMPLOYEE_TRAINING_STORE = {
  'CO-5039': {
    profile: {
      id: 'CO-5039',
      name: 'Tanya Kapoor',
      firstName: 'Tanya',
      lastName: 'Kapoor',
      designation: 'Executive',
      department: 'IT - Project',
      reportingManager: 'Megha Salunkhe (Sr. Executive)',
      reportingManagerId: 'CO-5038',
      email: 'calebnguyen@maildrop.cc',
      phone: '+1 9005048244',
      avatarInitials: 'AB',
      avatarBg: '#f59e0b',
      experience: '3Y 11M'
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
        trainingStatus: 'in_progress',
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
            completionTimestamp: '10-Jan-2026, 11:30 AM'
          },
          {
            id: 'res_102_2',
            title: 'Data Privacy Incident Reporting & Escalation Matrix',
            description: 'Step-by-step procedures to escalate suspected customer PII leaks.',
            type: 'pdf',
            isMandatory: true,
            duration: '20 Mins',
            url: 'assets/docs/escalation_matrix.pdf',
            isCompleted: true,
            completionDate: '12-Jan-2026',
            completionTimestamp: '12-Jan-2026, 04:15 PM'
          }
        ],
        assessment: {
          id: 'asm_102',
          name: 'GDPR Annual Compliance Test',
          instructions: 'Achieve 100% to receive verified accreditation.',
          passingScore: 100,
          maxAttempts: 3,
          attemptsUsed: 1,
          passed: true,
          previousAttempts: [
            {
              attemptNumber: 1,
              score: 100,
              passed: true,
              submissionDate: '15-Jan-2026, 02:20 PM'
            }
          ],
          questions: [
            {
              id: 'q102_1',
              text: 'Under GDPR, what is the maximum statutory timeframe to report a serious personal data breach to the supervisory authority?',
              options: ['24 Hours', '48 Hours', '72 Hours', '7 Days'],
              correctIndex: 2
            }
          ]
        },
        submission: {
          completionRemarks: 'All compliance materials thoroughly reviewed and validated against quarterly IT roadmap.',
          evidenceFiles: ['signed_compliance_attestation_2026.pdf'],
          submittedAt: '15-Jan-2026, 02:40 PM',
          isLocked: true
        },
        review: {
          status: 'approved',
          reviewerName: 'Isha Patel (Head of People)',
          reviewDate: '26-Jan-2026',
          feedback: 'Excellent work! Certified for the calendar year 2026.'
        },
        certificate: {
          id: 'TRN-2026-0003',
          trainingId: 'TRN-ASSIGN-102',
          issueDate: '26-Jan-2026',
          status: 'issued',
          recipientName: 'Tanya Kapoor',
          recipientId: 'CO-5039',
          issuerName: 'Isha Patel',
          issuerRole: 'Head of People & Compliance',
          pdfDownloadUrl: '#'
        }
      },
      {
        id: 'TRN-ASSIGN-103',
        trainingName: 'CollabCRM Platform Architecture Deep Dive',
        category: 'Technical Architecture',
        shortDescription: 'In-depth exploration of CollabCRM multi-tenant database partitioning, Redis caching topologies, and WebSocket streaming.',
        isMandatory: true,
        assignedBy: 'Kunal Barve (Principal Architect)',
        assignedDate: '01-Feb-2026',
        dueDate: '01-Apr-2026',
        startDate: '05-Feb-2026',
        completionPercentage: 80,
        trainingStatus: 'changes_requested',
        learningObjectives: [
          'Design resilient sharded PostgreSQL schemas with tenant-level connection pools',
          'Utilize Redis Pub/Sub for high-throughput CRM real-time notifications',
          'Deploy horizontal read replicas with sub-10ms replication lag'
        ],
        expectedOutcomes: 'Mastery in building resilient, enterprise-scale CRM backends.',
        difficultyLevel: 'Advanced',
        expectedDuration: '6 Hours',
        resources: [
          {
            id: 'res_103_1',
            title: 'Multi-Tenant Database Sharding Architecture (PDF)',
            description: 'Architecture diagram and query routing rules.',
            type: 'pdf',
            isMandatory: true,
            duration: '50 Mins',
            url: 'assets/docs/sharding_architecture.pdf',
            isCompleted: true,
            completionDate: '08-Feb-2026',
            completionTimestamp: '08-Feb-2026, 05:00 PM'
          },
          {
            id: 'res_103_2',
            title: 'Redis Cluster Caching Strategies Video',
            description: 'Cache invalidation design patterns and cache stampede protection.',
            type: 'youtube',
            isMandatory: true,
            duration: '22 Mins',
            url: 'https://www.youtube.com/watch?v=G1rOthIU-uo',
            isCompleted: true,
            completionDate: '12-Feb-2026',
            completionTimestamp: '12-Feb-2026, 06:10 PM'
          }
        ],
        assessment: {
          id: 'asm_103',
          name: 'Platform Architecture Qualification Assessment',
          instructions: 'Score at least 85% to pass.',
          passingScore: 85,
          maxAttempts: 2,
          attemptsUsed: 1,
          passed: true,
          previousAttempts: [
            {
              attemptNumber: 1,
              score: 90,
              passed: true,
              submissionDate: '25-Feb-2026, 03:00 PM'
            }
          ],
          questions: [
            {
              id: 'q103_1',
              text: 'Which Redis cache eviction policy is optimal for sliding-window CRM session tokens?',
              options: ['noeviction', 'allkeys-lru', 'volatile-ttl', 'allkeys-random'],
              correctIndex: 2
            }
          ]
        },
        submission: {
          completionRemarks: 'Submitted architecture proof-of-concept summary with benchmark charts.',
          evidenceFiles: ['cache_benchmark_report_v1.pdf'],
          submittedAt: '27-Feb-2026, 04:30 PM',
          isLocked: false
        },
        review: {
          status: 'changes_requested',
          reviewerName: 'Kunal Barve (Principal Architect)',
          reviewDate: '28-Feb-2026',
          feedback: 'Please include stress test benchmarks demonstrating failover behavior when the primary Redis shard goes offline.'
        },
        certificate: null
      },
      {
        id: 'TRN-ASSIGN-104',
        trainingName: 'Effective Cross-Functional Stakeholder Communication',
        category: 'Professional Skills',
        shortDescription: 'Practical frameworks for managing expectations across sales, engineering, product management, and executive leadership.',
        isMandatory: false,
        assignedBy: 'Megha Salunkhe (Sr. Executive)',
        assignedDate: '15-Feb-2026',
        dueDate: '30-Apr-2026',
        startDate: null,
        completionPercentage: 0,
        trainingStatus: 'not_started',
        learningObjectives: [
          'Translate deep technical engineering debt into business value for C-suite stakeholders',
          'Conduct blameless post-mortems and constructive conflict resolution',
          'Write crisp asynchronous product requirements documents (PRDs)'
        ],
        expectedOutcomes: 'Elevated cross-departmental alignment and faster product delivery.',
        difficultyLevel: 'Beginner',
        expectedDuration: '2.5 Hours',
        resources: [
          {
            id: 'res_104_1',
            title: 'The Art of Technical Executive Briefings',
            description: 'Guidance on structuring executive summary slides and metrics.',
            type: 'pdf',
            isMandatory: true,
            duration: '30 Mins',
            url: 'assets/docs/executive_briefings.pdf',
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
        trainingName: 'Q4 2025 Workplace Safety & POSH Re-Certification',
        category: 'Governance & Compliance',
        shortDescription: 'Mandatory workplace safety policies, POSH compliance, and employee grievance redressal mechanisms.',
        isMandatory: true,
        assignedBy: 'Isha Patel (Head of People)',
        assignedDate: '01-Nov-2025',
        dueDate: '15-Dec-2025',
        startDate: '10-Nov-2025',
        completionPercentage: 40,
        trainingStatus: 'overdue',
        learningObjectives: [
          'Recognize workplace harassment and understand Internal Complaints Committee (ICC) procedures',
          'Review health and physical safety protocols across office premises'
        ],
        expectedOutcomes: 'A respectful, safe, and fully compliant workplace environment.',
        difficultyLevel: 'Beginner',
        expectedDuration: '1.5 Hours',
        resources: [
          {
            id: 'res_105_1',
            title: 'Workplace Conduct & POSH Guidelines Handbook',
            description: 'Official corporate statutory policy document.',
            type: 'pdf',
            isMandatory: true,
            duration: '45 Mins',
            url: 'assets/docs/posh_handbook.pdf',
            isCompleted: true,
            completionDate: '12-Nov-2025',
            completionTimestamp: '12-Nov-2025, 02:00 PM'
          },
          {
            id: 'res_105_2',
            title: 'Employee Emergency Response Video',
            description: 'Building evacuation and fire drill instructions.',
            type: 'video',
            isMandatory: true,
            duration: '20 Mins',
            url: 'assets/videos/emergency_response.mp4',
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
  }
};

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

export default async function handler(req, res) {
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
  if (pathname === '/api/health' || pathname === '/api') {
    return sendJson(res, 200, {
      status: 'online',
      service: 'CollabCRM Training Module (Vercel Serverless)',
      timestamp: new Date().toISOString()
    });
  }

  // 2. GET Employee Training Data
  if (pathname === '/api/employee/training-data' && req.method === 'GET') {
    const empId = parsedUrl.searchParams.get('employeeId') || 'CO-5039';
    const store = EMPLOYEE_TRAINING_STORE[empId] || EMPLOYEE_TRAINING_STORE['CO-5039'];
    const stats = calculateEmployeeDashboardStats(store);
    return sendJson(res, 200, {
      success: true,
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

  // 6. POST Resubmit For Review
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

  // Unhandled API route
  return sendJson(res, 404, { success: false, message: `Route ${pathname} not found` });
}
