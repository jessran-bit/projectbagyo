// Operation Bagyo - Game Data
// All game content: scenarios, WBS tiles, anomaly cards, scoring rules

const GAME_DATA = {
  scenarios: {
    A: {
      name: "Mission AURORA",
      subtitle: "Atmospheric Research & Climate Monitoring",
      description: "PhilSpace has been tasked by DOST to launch a climate monitoring satellite to track typhoon formation patterns in the Philippine Sea. The satellite must collect temperature, humidity, and wind data from the upper atmosphere.",
      budget: "PHP 2.8 Billion",
      budgetValue: 2800,
      timeline: "18 months",
      sponsor: "Department of Science and Technology (DOST)",
      priority: { cost: "C", time: "A", scope: "E" }, // C=Constrain, A=Acceptable, E=Enhance
      priorityNote: "Budget is fixed by government allocation. Scope can be expanded if needed.",
      mission_objective: "Deliver a fully operational climate monitoring satellite within budget"
    },
    B: {
      name: "Mission BAYANI",
      subtitle: "Broadband Access for Yonder Areas - National Internet",
      description: "PhilSpace is deploying a low-earth orbit communication satellite to bring internet connectivity to remote islands in Mindanao and the Visayas. The project is a public-private partnership with major telcos.",
      budget: "PHP 4.1 Billion",
      budgetValue: 4100,
      timeline: "24 months",
      sponsor: "National Telecommunications Commission (NTC)",
      priority: { cost: "A", time: "C", scope: "E" },
      priorityNote: "Launch window is fixed. Budget can flex slightly. Scope can grow.",
      mission_objective: "Launch comms satellite within the fixed 24-month window"
    },
    C: {
      name: "Mission CAYOS",
      subtitle: "Coastal Area Yield & Ocean Surveillance",
      description: "A maritime monitoring satellite to detect illegal fishing, oil spills, and ship movements in Philippine waters. The satellite feeds data to the Philippine Coast Guard and Bureau of Fisheries in real time.",
      budget: "PHP 1.9 Billion",
      budgetValue: 1900,
      timeline: "15 months",
      sponsor: "Philippine Coast Guard (PCG)",
      priority: { cost: "C", time: "C", scope: "A" },
      priorityNote: "Both budget and time are fixed by government mandate. Scope can be trimmed.",
      mission_objective: "Deliver maritime surveillance satellite on time and on budget"
    },
    D: {
      name: "Mission DIWATA",
      subtitle: "Disaster Intelligence & Weather Analysis Technology",
      description: "A multi-sensor earth observation satellite designed to support disaster risk reduction. It will provide real-time imagery during typhoons, flooding, and volcanic eruptions to NDRRMC and local governments.",
      budget: "PHP 3.4 Billion",
      budgetValue: 3400,
      timeline: "20 months",
      sponsor: "National Disaster Risk Reduction & Management Council (NDRRMC)",
      priority: { cost: "A", time: "E", scope: "C" },
      priorityNote: "Scope is fixed - all sensors must be included. Budget can flex. Delivery can be early.",
      mission_objective: "Deliver all required sensor systems within the approved scope"
    },
    E: {
      name: "Mission EPIKO",
      subtitle: "Earth Positioning & Imaging for Knowledge Operations",
      description: "A high-resolution imaging satellite supporting the Department of Agriculture and DENR for land use mapping, crop monitoring, and deforestation tracking across all 7,600+ Philippine islands.",
      budget: "PHP 2.2 Billion",
      budgetValue: 2200,
      timeline: "16 months",
      sponsor: "Department of Agriculture (DA) & DENR",
      priority: { cost: "E", time: "A", scope: "C" },
      priorityNote: "All imaging specs must be met. Timeline is flexible. Budget can be reduced.",
      mission_objective: "Meet all imaging resolution and coverage requirements"
    },
    F: {
      name: "Mission FLORES",
      subtitle: "Frequency & Low-Orbit Research for Emergency Systems",
      description: "A technology demonstration satellite to test new solar panel arrays and miniaturized thruster systems developed by Filipino engineers. Results will inform PhilSpace's next generation of satellites.",
      budget: "PHP 1.4 Billion",
      budgetValue: 1400,
      timeline: "12 months",
      sponsor: "Philippine Space Agency (PhilSA)",
      priority: { cost: "C", time: "E", scope: "A" },
      priorityNote: "Budget is strictly capped. Launch can be accelerated. Scope can be adjusted.",
      mission_objective: "Successfully test both new technologies within budget"
    }
  },

  wbsTiles: [
    // VALID tiles (8)
    {
      id: 1,
      name: "Payload Integration",
      costRange: "PHP 280M - 340M",
      costMin: 280, costMax: 340,
      valid: true,
      level: 2,
      levelName: "Work Package",
      category: "Satellite Assembly",
      why: "Specific technical task - assembling sensors/instruments into satellite body",
      whyLevel: "Work Package: defines HOW the satellite is built (specific activity)"
    },
    {
      id: 2,
      name: "Satellite Assembly",
      costRange: "PHP 600M - 750M",
      costMin: 600, costMax: 750,
      valid: true,
      level: 1,
      levelName: "Major Deliverable",
      category: "Satellite Assembly",
      why: "Top-level deliverable - the physical satellite that gets launched",
      whyLevel: "Major Deliverable: defines WHAT is produced (the complete satellite)"
    },
    {
      id: 3,
      name: "Ground Station Setup",
      costRange: "PHP 150M - 200M",
      costMin: 150, costMax: 200,
      valid: true,
      level: 1,
      levelName: "Major Deliverable",
      category: "Ground Operations",
      why: "Top-level deliverable - the infrastructure needed to control the satellite",
      whyLevel: "Major Deliverable: defines WHAT is produced (the ground control system)"
    },
    {
      id: 4,
      name: "Launch Preparation",
      costRange: "PHP 90M - 130M",
      costMin: 90, costMax: 130,
      valid: true,
      level: 2,
      levelName: "Work Package",
      category: "Launch Operations",
      why: "Specific activity - pre-launch checks, transport, and fueling operations",
      whyLevel: "Work Package: defines HOW launch is executed (specific activity)"
    },
    {
      id: 5,
      name: "Software Development",
      costRange: "PHP 200M - 270M",
      costMin: 200, costMax: 270,
      valid: true,
      level: 2,
      levelName: "Work Package",
      category: "Technology",
      why: "Specific deliverable - the onboard software controlling satellite operations",
      whyLevel: "Work Package: defines HOW the satellite operates (specific technical output)"
    },
    {
      id: 6,
      name: "Testing & Validation",
      costRange: "PHP 120M - 180M",
      costMin: 120, costMax: 180,
      valid: true,
      level: 2,
      levelName: "Work Package",
      category: "Quality Assurance",
      why: "Specific activity - all QA checks before the satellite can be cleared for launch",
      whyLevel: "Work Package: defines HOW quality is ensured (specific activity)"
    },
    {
      id: 7,
      name: "Mission Operations",
      costRange: "PHP 400M - 500M",
      costMin: 400, costMax: 500,
      valid: true,
      level: 1,
      levelName: "Major Deliverable",
      category: "Operations",
      why: "Top-level deliverable - the ongoing capability to operate and monitor the satellite",
      whyLevel: "Major Deliverable: defines WHAT is produced (the operations capability)"
    },
    {
      id: 8,
      name: "Antenna Installation",
      costRange: "PHP 60M - 90M",
      costMin: 60, costMax: 90,
      valid: true,
      level: 2,
      levelName: "Work Package",
      category: "Ground Operations",
      why: "Specific task - physical installation and alignment of communication antennas",
      whyLevel: "Work Package: defines HOW ground station is built (specific activity)"
    },
    // RED HERRING tiles (4) - look the same on front, cost is inflated
    {
      id: 9,
      name: "Team Lunch Budget",
      costRange: "PHP 150M - 300M",
      costMin: 150, costMax: 300,
      valid: false,
      level: null,
      category: "Administrative",
      why: "Not a project deliverable - this is a minor expense item, not a work component",
      whyLevel: "Not valid: Administrative costs are not WBS deliverables"
    },
    {
      id: 10,
      name: "Morale & Wellness Program",
      costRange: "PHP 200M - 400M",
      costMin: 200, costMax: 400,
      valid: false,
      level: null,
      category: "HR",
      why: "Not a project deliverable - HR programs are not part of the satellite mission scope",
      whyLevel: "Not valid: Support programs are not WBS scope items"
    },
    {
      id: 11,
      name: "Office Renovation",
      costRange: "PHP 120M - 250M",
      costMin: 120, costMax: 250,
      valid: false,
      level: null,
      category: "Facilities",
      why: "Not a project deliverable - facility upgrades are separate from the mission scope",
      whyLevel: "Not valid: Infrastructure not tied to satellite project scope"
    },
    {
      id: 12,
      name: "Social Media Campaign",
      costRange: "PHP 180M - 350M",
      costMin: 180, costMax: 350,
      valid: false,
      level: null,
      category: "Marketing",
      why: "Not a project deliverable - marketing is not a component of satellite development",
      whyLevel: "Not valid: Marketing activities are outside the WBS scope"
    }
  ],

  anomalyCards: [
    {
      id: 1,
      title: "Solar Panel Shortage",
      situation: "Your supplier just informed you that the solar panel components needed for the satellite's power system are out of stock globally. The earliest restock is in 4 months.",
      costImpact: "PHP 85M additional if you source from an alternative (more expensive) supplier",
      options: {
        accept: "Use alternative supplier (PHP 85M over budget, no delay)",
        reject: "Wait for original supplier (4-month delay, no extra cost)",
        negotiate: "Split order: partial alternative + wait for rest (PHP 40M extra, 2-month delay)"
      },
      scoring: {
        accept: { points: 2, reason: "Acceptable - maintains schedule but acknowledges cost impact" },
        reject: { points: 1, reason: "Risky - delay may cascade to other tasks" },
        negotiate: { points: 3, reason: "Best - balances cost and schedule impact" }
      }
    },
    {
      id: 2,
      title: "Key Engineer Resignation",
      situation: "Your lead payload engineer just submitted their resignation. They are the only person who understands the sensor integration specs. Their last day is in 2 weeks.",
      costImpact: "PHP 45M for emergency contractor hire, or PHP 120M for full re-staffing and knowledge transfer",
      options: {
        accept: "Hire emergency contractor immediately (PHP 45M, 3-week slowdown)",
        reject: "Reassign tasks to existing team members (no extra cost, major risk)",
        negotiate: "Offer retention bonus and new role (PHP 20M, keeps expertise)"
      },
      scoring: {
        accept: { points: 2, reason: "Acceptable - covers the gap but adds cost" },
        reject: { points: 1, reason: "High risk - existing team likely lacks specialized knowledge" },
        negotiate: { points: 3, reason: "Best - retains critical expertise at lowest cost" }
      }
    },
    {
      id: 3,
      title: "Weather Delay at Launch Site",
      situation: "Tropical Storm Obet is tracking toward your launch site in Bohol. The launch window is 10 days from now. Delaying the launch by 3 weeks means missing the optimal orbital insertion window.",
      costImpact: "PHP 200M to delay to next launch window (fuel, logistics, standby crew)",
      options: {
        accept: "Proceed with launch as planned and accept weather risk",
        reject: "Delay the entire launch to the next window (PHP 200M additional cost)",
        negotiate: "Move launch to backup site in Palawan (PHP 95M, 5-day delay only)"
      },
      scoring: {
        accept: { points: 1, reason: "High risk - launching in bad weather can destroy the satellite" },
        reject: { points: 2, reason: "Safe but very expensive - loses the optimal window" },
        negotiate: { points: 3, reason: "Best - limits cost and risk using backup site" }
      }
    },
    {
      id: 4,
      title: "Scope Creep Request",
      situation: "Your project sponsor calls and requests adding a new infrared sensor to the satellite design - not in the original scope. They say the NDRRMC 'really needs it' and are willing to fund it separately.",
      costImpact: "PHP 160M to add infrared sensor, but sponsor offers PHP 100M in additional funding",
      options: {
        accept: "Add the sensor as requested (PHP 60M net cost to project, 6-week delay)",
        reject: "Decline the addition and maintain original scope",
        negotiate: "Add sensor but require full funding from sponsor (PHP 0 net cost, still 6-week delay)"
      },
      scoring: {
        accept: { points: 1, reason: "Scope creep without full funding is poor project management" },
        reject: { points: 2, reason: "Protects scope but may damage sponsor relationship" },
        negotiate: { points: 3, reason: "Best - allows scope change only with proper funding" }
      }
    },
    {
      id: 5,
      title: "Software Bug Found in Testing",
      situation: "During final systems testing, the QA team discovers a critical bug in the attitude control software. The satellite could spin out of control if launched. Fixing it requires 3 weeks and re-testing.",
      costImpact: "PHP 55M for emergency software team overtime and extended testing window",
      options: {
        accept: "Fix the bug now (PHP 55M extra, 3-week delay)",
        reject: "Launch anyway and patch software remotely after launch (cheaper, but risky)",
        negotiate: "Deploy a workaround patch now, full fix in first software update post-launch (PHP 20M, 1-week delay)"
      },
      scoring: {
        accept: { points: 3, reason: "Best - safety must be addressed before launch" },
        reject: { points: 0, reason: "Unacceptable - critical safety issue cannot be deferred to post-launch" },
        negotiate: { points: 2, reason: "Acceptable if workaround is technically sound, but still carries risk" }
      }
    },
    {
      id: 6,
      title: "Foreign Parts Export Restriction",
      situation: "The US government has placed export restrictions on a key component made by an American firm. The part is used in your communication module and is already on order.",
      costImpact: "PHP 130M to source equivalent European component (longer lead time adds 5-week delay)",
      options: {
        accept: "Source European equivalent immediately (PHP 130M, 5-week delay)",
        reject: "File for export license exemption (free, but 3-6 month process - no guarantee)",
        negotiate: "Source European part AND file for license in parallel (PHP 130M, reduces risk of second delay)"
      },
      scoring: {
        accept: { points: 2, reason: "Acceptable - resolves issue but is expensive and slow" },
        reject: { points: 1, reason: "Risky - license process is slow and uncertain" },
        negotiate: { points: 3, reason: "Best - secures project while exploring cost recovery" }
      }
    },
    {
      id: 7,
      title: "Unexpected Ground Station Cost",
      situation: "Your ground station installation team has discovered that the site in Nueva Ecija requires additional civil works - the land is softer than expected and concrete foundations must be reinforced.",
      costImpact: "PHP 70M for foundation reinforcement and soil stabilization",
      options: {
        accept: "Approve the civil works (PHP 70M, 2-week delay)",
        reject: "Move the ground station to an alternate site in Pampanga (PHP 40M relocation cost, 4-week delay)",
        negotiate: "Negotiate with civil contractor for a fixed-price contract to cap exposure at PHP 50M"
      },
      scoring: {
        accept: { points: 2, reason: "Acceptable - but full cost is high for avoidable risk" },
        reject: { points: 1, reason: "Relocation is costly and still causes delay" },
        negotiate: { points: 3, reason: "Best - caps cost exposure and keeps contractor accountable" }
      }
    },
    {
      id: 8,
      title: "Data Privacy Compliance Issue",
      situation: "The National Privacy Commission notifies PhilSpace that the satellite's data downlink system must comply with new data localization rules. All raw imagery must be stored in Philippine servers before distribution.",
      costImpact: "PHP 95M to build a local data center; PHP 40M/year in ongoing operating costs",
      options: {
        accept: "Build the local data center as required (PHP 95M, 2-month delay)",
        reject: "Challenge the ruling in court (legal fees, uncertain timeline, may lose)",
        negotiate: "Request a 12-month compliance extension while building the data center in phases"
      },
      scoring: {
        accept: { points: 2, reason: "Compliant and safe, but expensive" },
        reject: { points: 0, reason: "Legal challenges against regulators are high risk and bad PR" },
        negotiate: { points: 3, reason: "Best - buys time for phased compliance without legal conflict" }
      }
    },
    {
      id: 9,
      title: "Launch Vehicle Provider Failure",
      situation: "Your contracted launch vehicle provider, a private rocket company, has announced it is going into receivership. Your launch slot and deposit of PHP 280M are at risk.",
      costImpact: "PHP 280M deposit potentially lost; new provider costs PHP 350M with 6-month wait",
      options: {
        accept: "Immediately book with a new provider (PHP 350M + potential PHP 280M loss = PHP 630M risk)",
        reject: "Wait to see if another company acquires the launch provider (PHP 0 now, but uncertain timeline)",
        negotiate: "File a claim as a creditor in receivership AND simultaneously book with new provider at reduced deposit"
      },
      scoring: {
        accept: { points: 1, reason: "Expensive and assumes deposit is lost - no recovery effort" },
        reject: { points: 1, reason: "Passive approach risks total project delay with no alternative secured" },
        negotiate: { points: 3, reason: "Best - pursues cost recovery while securing launch continuity" }
      }
    },
    {
      id: 10,
      title: "Political Pressure to Hire Locally",
      situation: "A senator has publicly demanded that PhilSpace replace three foreign technical advisors with Filipino engineers. The advisors hold specialized expertise that no current Filipino team member has.",
      costImpact: "PHP 60M to hire and train Filipino replacements to required expertise level over 8 months",
      options: {
        accept: "Replace foreign advisors with local hires immediately (PHP 60M, major knowledge risk)",
        reject: "Retain all foreign advisors and issue a public statement explaining the need",
        negotiate: "Create a co-mentorship structure: foreign advisors stay but train Filipino counterparts (PHP 25M, no delay)"
      },
      scoring: {
        accept: { points: 1, reason: "Politically expedient but puts project at risk due to knowledge gap" },
        reject: { points: 2, reason: "Protects project but invites political conflict" },
        negotiate: { points: 3, reason: "Best - builds local capacity while protecting expertise continuity" }
      }
    },
    {
      id: 11,
      title: "Battery System Overheating",
      situation: "During thermal vacuum testing, the battery system reaches temperatures 12 degrees above safety threshold. The current design must be changed before launch clearance can be granted.",
      costImpact: "PHP 110M for redesigned thermal management system; PHP 30M for repeat testing",
      options: {
        accept: "Implement full redesign (PHP 140M total, 5-week delay)",
        reject: "Apply for a waiver from the safety authority citing the testing environment was non-standard",
        negotiate: "Add passive cooling shields and retest (PHP 45M, 2-week delay) before committing to full redesign"
      },
      scoring: {
        accept: { points: 2, reason: "Safe but expensive - full redesign may be more than necessary" },
        reject: { points: 0, reason: "Safety waivers for overheating are unacceptable - critical risk" },
        negotiate: { points: 3, reason: "Best - validates cheaper fix first before spending on full redesign" }
      }
    },
    {
      id: 12,
      title: "Budget Cut Order",
      situation: "The DBM (Department of Budget & Management) has issued a 10% budget reduction order affecting all government-linked projects. Your remaining budget must be cut by PHP 280M.",
      costImpact: "Must identify PHP 280M in cuts from remaining project budget",
      options: {
        accept: "Accept the cut and reduce scope proportionally across all work packages",
        reject: "Appeal to the project sponsor to seek exemption or supplemental budget",
        negotiate: "Propose a hybrid: cut PHP 140M in non-critical scope and request PHP 140M in supplemental next fiscal year"
      },
      scoring: {
        accept: { points: 1, reason: "Compliant but proportional scope cuts may affect mission success" },
        reject: { points: 2, reason: "Worth trying but uncertain outcome - project is still at risk in the meantime" },
        negotiate: { points: 3, reason: "Best - minimizes immediate impact while pursuing full recovery" }
      }
    }
  ],

  scoring: {
    section1: {
      charter: {
        max: 3,
        criteria: [
          { points: 1, description: "WHAT field completed (mission objective written)" },
          { points: 1, description: "WHEN field completed (timeline from scenario card)" },
          { points: 1, description: "HOW MUCH field completed (budget from scenario card in PHP)" }
        ]
      },
      priority: {
        max: 2,
        criteria: [
          { points: 1, description: "All three Priority Matrix boxes marked (C, A, or E)" },
          { points: 1, description: "Marks match the scenario card values exactly" }
        ]
      }
    },
    section2a: {
      wbs: {
        max: 5,
        criteria: [
          { points: 5, description: "All 8 valid tiles in green zone, all 4 red herrings in trash zone" },
          { points: 4, description: "7 correct placements" },
          { points: 3, description: "6 correct placements" },
          { points: 2, description: "5 correct placements" },
          { points: 1, description: "4 correct placements" },
          { points: 0, description: "3 or fewer correct placements" }
        ]
      }
    },
    section2b: {
      budget: {
        max: 5,
        criteria: [
          { points: 5, description: "Budget total within 5% of optimal range (PHP 1,510M - 1,890M)" },
          { points: 3, description: "Budget total within 15% of optimal range" },
          { points: 1, description: "Budget total provided but outside 15% range" },
          { points: 0, description: "No budget total or incorrect tiles budgeted" }
        ]
      }
    },
    section3: {
      anomaly: {
        max: 4,
        criteria: [
          { points: 4, description: "NEGOTIATE chosen + PHP amount cited + at least one constraint mentioned" },
          { points: 3, description: "NEGOTIATE chosen + either PHP amount OR constraint mentioned" },
          { points: 2, description: "ACCEPT chosen with PHP amount cited" },
          { points: 1, description: "Any choice made but no justification given" },
          { points: 0, description: "No response" }
        ]
      }
    },
    feasibility: {
      max: 2,
      criteria: [
        { points: 1, description: "At least 2 feasibility checks marked" },
        { points: 1, description: "Chosen checks are consistent with scenario constraints" }
      ]
    },
    totalMax: 21
  },

  // Optimal budget range for Section 2B (sum of 8 valid tile min-max costs)
  // Min: 280+600+150+90+200+120+400+60 = 1,900 | Max: 340+750+200+130+270+180+500+90 = 2,460
  // "Optimal" means picking mid-range estimates: approximately PHP 1,900M - 2,200M
  budgetOptimal: { min: 1900, max: 2200, description: "PHP 1,900M - 2,200M" }
};

// Team configuration
const TEAMS = ['A', 'B', 'C', 'D', 'E', 'F'];
const TEAM_NAMES = {
  A: 'Alpha Squadron',
  B: 'Bravo Command',
  C: 'Charlie Unit',
  D: 'Delta Force',
  E: 'Echo Base',
  F: 'Foxtrot Division'
};

// Game state helpers
function getTeamScenario(team) {
  return GAME_DATA.scenarios[team];
}

function getAnomalyCard(cardNumber) {
  return GAME_DATA.anomalyCards.find(c => c.id === cardNumber) || GAME_DATA.anomalyCards[0];
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
