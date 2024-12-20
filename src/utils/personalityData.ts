interface PersonalityData {
  [key: string]: {
    title: string;
    description: string[];
    imageUrl: string[];
    careers: string[];
    relationships: {
      strengths: string[];
      challenges: string[];
      bestMatches: string[];
    };
    coreValues: string[];
    overview: {
      strengths: string[];
      weaknesses: string[];
      workStyle: string;
      communicationStyle: string;
      growthAreas: string[];
    };
  };
}

export const personalityData: PersonalityData = {
  "INTJ": {
    title: "The Architect",
    description: "Strategic thinkers who see the world as a chess game to be navigated with precision and foresight.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731350930424_7l3v_adld.jpeg?w=1024?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Strategic Planner",
      "Systems Architect",
      "Investment Banker",
      "Scientific Researcher",
      "Technology Director"
    ],
    relationships: {
      strengths: [
        "Intellectual depth",
        "Long-term commitment",
        "Direct communication"
      ],
      challenges: [
        "Emotional expression",
        "Spontaneity",
        "Small talk"
      ],
      bestMatches: ["ENFP", "ENTP", "INFJ"]
    },
    coreValues: [
      "Intellectual growth",
      "Competence",
      "Independence",
      "Vision",
      "Rationality"
    ],
    overview: {
      strengths: [
        "Strategic thinking",
        "Independent",
        "Innovative",
        "Analytical"
      ],
      weaknesses: [
        "Perfectionist",
        "Overly critical",
        "Dismissive of emotions"
      ],
      workStyle: "Prefers working independently on complex, theoretical problems with clear goals.",
      communicationStyle: "Direct, logical, and focused on efficiency rather than social niceties.",
      growthAreas: [
        "Emotional intelligence",
        "Social skills",
        "Patience with others"
      ]
    }
  },
  "INTP": {
    title: "The Logician",
    description: "Innovative inventors with an unquenchable thirst for knowledge.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/intp.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Software Developer",
      "Data Scientist",
      "Research Scientist",
      "Professor",
      "Game Designer"
    ],
    relationships: {
      strengths: [
        "Intellectual connection",
        "Independence",
        "Openness to ideas"
      ],
      challenges: [
        "Emotional awareness",
        "Commitment",
        "Regular communication"
      ],
      bestMatches: ["ENTJ", "ENFJ", "INTJ"]
    },
    coreValues: [
      "Knowledge",
      "Truth",
      "Understanding",
      "Innovation",
      "Logic"
    ],
    overview: {
      strengths: [
        "Analytical thinking",
        "Problem-solving",
        "Creativity",
        "Objectivity"
      ],
      weaknesses: [
        "Overthinking",
        "Social anxiety",
        "Procrastination"
      ],
      workStyle: "Thrives in environments that allow for independent research and exploration.",
      communicationStyle: "Precise, analytical, and focused on exchanging ideas.",
      growthAreas: [
        "Practical implementation",
        "Emotional expression",
        "Time management"
      ]
    }
  },
  "ENTJ": {
    title: "The Commander",
    description: "Natural-born leaders who see life as a strategic game of chess.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731306599996_gv5_7bren.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Executive Officer",
      "Management Consultant",
      "Entrepreneur",
      "Business Strategist",
      "Corporate Lawyer"
    ],
    relationships: {
      strengths: [
        "Leadership",
        "Loyalty",
        "Goal-oriented support"
      ],
      challenges: [
        "Emotional sensitivity",
        "Patience",
        "Controlling tendencies"
      ],
      bestMatches: ["INTP", "INFP", "ENTP"]
    },
    coreValues: [
      "Achievement",
      "Efficiency",
      "Leadership",
      "Knowledge",
      "Progress"
    ],
    overview: {
      strengths: [
        "Strategic planning",
        "Leadership",
        "Confidence",
        "Efficiency"
      ],
      weaknesses: [
        "Impatience",
        "Inflexibility",
        "Overwhelming to others"
      ],
      workStyle: "Takes charge naturally, excels in organizing resources and people.",
      communicationStyle: "Direct, assertive, and focused on results and efficiency.",
      growthAreas: [
        "Emotional intelligence",
        "Listening skills",
        "Flexibility"
      ]
    }
  },
  "ENTP": {
    title: "The Debater",
    description: "Smart and curious thinkers who cannot resist an intellectual challenge.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731343584671_wfhpe13ulf.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Entrepreneur",
      "Lawyer",
      "Creative Director",
      "Systems Analyst",
      "Consultant"
    ],
    relationships: {
      strengths: [
        "Intellectual stimulation",
        "Adaptability",
        "Enthusiasm"
      ],
      challenges: [
        "Following through",
        "Emotional sensitivity",
        "Routine"
      ],
      bestMatches: ["INFJ", "INTJ", "ENFJ"]
    },
    coreValues: [
      "Innovation",
      "Knowledge",
      "Debate",
      "Freedom",
      "Creativity"
    ],
    overview: {
      strengths: [
        "Quick thinking",
        "Charismatic",
        "Energetic",
        "Innovative"
      ],
      weaknesses: [
        "Argumentative",
        "Insensitive",
        "Unfocused"
      ],
      workStyle: "Thrives on challenges and new ideas, prefers flexible environments.",
      communicationStyle: "Enthusiastic, direct, and enjoys intellectual debates.",
      growthAreas: [
        "Follow-through",
        "Emotional awareness",
        "Organization"
      ]
    }
  },
  "INFJ": {
    title: "The Advocate",
    description: "Quiet yet idealistic, driven by a deep sense of principle and vision.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1730505479228_gsp9ruv6_.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Counselor",
      "Writer",
      "Non-profit Director",
      "HR Manager",
      "Life Coach"
    ],
    relationships: {
      strengths: [
        "Deep connections",
        "Empathy",
        "Idealism"
      ],
      challenges: [
        "Perfectionism",
        "Privacy needs",
        "Burnout"
      ],
      bestMatches: ["ENTP", "ENFP", "INTJ"]
    },
    coreValues: [
      "Authenticity",
      "Growth",
      "Harmony",
      "Purpose",
      "Creativity"
    ],
    overview: {
      strengths: [
        "Insightful",
        "Creative",
        "Principled",
        "Passionate"
      ],
      weaknesses: [
        "Perfectionist",
        "Private",
        "Sensitive"
      ],
      workStyle: "Works best in quiet, organized environments with meaningful goals.",
      communicationStyle: "Warm yet private, prefers deep one-on-one conversations.",
      growthAreas: [
        "Setting boundaries",
        "Self-care",
        "Practical matters"
      ]
    }
  },
  "INFP": {
    title: "The Mediator",
    description: "Poetic, kind and altruistic people, always eager to help a good cause.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731337981902_hg6lndepe.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Writer",
      "Psychologist",
      "Artist",
      "Teacher",
      "Social Worker"
    ],
    relationships: {
      strengths: [
        "Empathy",
        "Creativity",
        "Dedication"
      ],
      challenges: [
        "Criticism handling",
        "Practical matters",
        "Opening up"
      ],
      bestMatches: ["ENFJ", "ENTJ", "INFJ"]
    },
    coreValues: [
      "Authenticity",
      "Harmony",
      "Creativity",
      "Idealism",
      "Growth"
    ],
    overview: {
      strengths: [
        "Empathetic",
        "Creative",
        "Passionate",
        "Idealistic"
      ],
      weaknesses: [
        "Overly idealistic",
        "Self-critical",
        "Impractical"
      ],
      workStyle: "Prefers working independently on creative or meaningful projects.",
      communicationStyle: "Gentle, non-confrontational, and focused on understanding others.",
      growthAreas: [
        "Self-confidence",
        "Practical skills",
        "Handling criticism"
      ]
    }
  },
  "ENFP": {
    title: "The Campaigner",
    description: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731306389782_foxwichsd.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Journalist",
      "Actor",
      "Consultant",
      "Psychologist",
      "Designer"
    ],
    relationships: {
      strengths: [
        "Enthusiasm",
        "Emotional support",
        "Creativity"
      ],
      challenges: [
        "Focus",
        "Follow-through",
        "Organization"
      ],
      bestMatches: ["INTJ", "INFJ", "ENFJ"]
    },
    coreValues: [
      "Freedom",
      "Creativity",
      "Connection",
      "Growth",
      "Joy"
    ],
    overview: {
      strengths: [
        "Enthusiastic",
        "Creative",
        "Social",
        "Adaptable"
      ],
      weaknesses: [
        "Unfocused",
        "Disorganized",
        "People-pleasing"
      ],
      workStyle: "Thrives in dynamic environments with variety and human interaction.",
      communicationStyle: "Warm, enthusiastic, and focused on possibilities.",
      growthAreas: [
        "Focus",
        "Organization",
        "Following through"
      ]
    }
  },
  "ENFJ": {
    title: "The Protagonist",
    description: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731306001113_5zarc65tq-1.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Teacher",
      "HR Director",
      "Life Coach",
      "Sales Manager",
      "Marketing Director"
    ],
    relationships: {
      strengths: [
        "Leadership",
        "Empathy",
        "Reliability"
      ],
      challenges: [
        "Overcommitment",
        "Approval seeking",
        "Self-care"
      ],
      bestMatches: ["INFP", "ISFP", "INTP"]
    },
    coreValues: [
      "Connection",
      "Growth",
      "Harmony",
      "Leadership",
      "Impact"
    ],
    overview: {
      strengths: [
        "Charismatic",
        "Empathetic",
        "Natural leader",
        "Reliable"
      ],
      weaknesses: [
        "Overly idealistic",
        "Approval seeking",
        "Self-sacrificing"
      ],
      workStyle: "Excels in collaborative environments focused on people development.",
      communicationStyle: "Warm, persuasive, and focused on growth and harmony.",
      growthAreas: [
        "Setting boundaries",
        "Self-care",
        "Accepting criticism"
      ]
    }
  },
  "ISTJ": {
    title: "The Logistician",
    description: "Practical and fact-minded individuals, whose reliability cannot be doubted.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731343199617_zxykbdgp8.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Accountant",
      "Project Manager",
      "Military Officer",
      "Judge",
      "Financial Analyst"
    ],
    relationships: {
      strengths: [
        "Reliability",
        "Honesty",
        "Dedication"
      ],
      challenges: [
        "Emotional expression",
        "Change adaptation",
        "Spontaneity"
      ],
      bestMatches: ["ESFP", "ESTP", "ISTJ"]
    },
    coreValues: [
      "Tradition",
      "Stability",
      "Integrity",
      "Duty",
      "Order"
    ],
    overview: {
      strengths: [
        "Organized",
        "Reliable",
        "Practical",
        "Honest"
      ],
      weaknesses: [
        "Inflexible",
        "Resistant to change",
        "Judgmental"
      ],
      workStyle: "Prefers structured environments with clear expectations and procedures.",
      communicationStyle: "Direct, honest, and focused on facts and details.",
      growthAreas: [
        "Adaptability",
        "Emotional awareness",
        "Innovation"
      ]
    }
  },
  "ISFJ": {
    title: "The Defender",
    description: "Very dedicated and warm protectors, always ready to defend their loved ones.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731307735192_9o1ezdapg-1.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Nurse",
      "Elementary Teacher",
      "Social Worker",
      "Administrator",
      "Librarian"
    ],
    relationships: {
      strengths: [
        "Loyalty",
        "Consideration",
        "Reliability"
      ],
      challenges: [
        "Self-expression",
        "Change",
        "Saying no"
      ],
      bestMatches: ["ESFP", "ESTJ", "ISFP"]
    },
    coreValues: [
      "Service",
      "Loyalty",
      "Kindness",
      "Tradition",
      "Security"
    ],
    overview: {
      strengths: [
        "Supportive",
        "Reliable",
        "Patient",
        "Detail-oriented"
      ],
      weaknesses: [
        "Overworked",
        "Self-sacrificing",
        "Change-averse"
      ],
      workStyle: "Excels in structured environments where they can help others.",
      communicationStyle: "Warm, considerate, and focused on others' needs.",
      growthAreas: [
        "Setting boundaries",
        "Self-advocacy",
        "Embracing change"
      ]
    }
  },
  "ESTJ": {
    title: "The Executive",
    description: "Excellent administrators, unsurpassed at managing things or people.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731306540893_lvy4nw0ipn-1.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Business Manager",
      "Police Officer",
      "Judge",
      "Financial Officer",
      "Military Officer"
    ],
    relationships: {
      strengths: [
        "Organization",
        "Dedication",
        "Honesty"
      ],
      challenges: [
        "Flexibility",
        "Emotional sensitivity",
        "Innovation"
      ],
      bestMatches: ["ISFP", "ISTP", "ESTJ"]
    },
    coreValues: [
      "Tradition",
      "Security",
      "Order",
      "Efficiency",
      "Stability"
    ],
    overview: {
      strengths: [
        "Organized",
        "Leadership",
        "Dedicated",
        "Direct"
      ],
      weaknesses: [
        "Inflexible",
        "Judgmental",
        "Too focused on rules"
      ],
      workStyle: "Thrives in structured environments with clear hierarchies.",
      communicationStyle: "Direct, clear, and focused on practical outcomes.",
      growthAreas: [
        "Emotional intelligence",
        "Flexibility",
        "Innovation"
      ]
    }
  },
  "ESFJ": {
    title: "The Consul",
    description: "Extraordinarily caring, social and popular people, always eager to help.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731351857305_wwdbcqlor.jpeg?w=1024?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Healthcare Worker",
      "Office Manager",
      "Teacher",
      "Sales Representative",
      "Event Planner"
    ],
    relationships: {
      strengths: [
        "Supportive",
        "Reliable",
        "Organized"
      ],
      challenges: [
        "Criticism handling",
        "Conflict avoidance",
        "Need for approval"
      ],
      bestMatches: ["ISFP", "ISTP", "ESFP"]
    },
    coreValues: [
      "Harmony",
      "Service",
      "Community",
      "Tradition",
      "Connection"
    ],
    overview: {
      strengths: [
        "Cooperative",
        "Loyal",
        "Warm",
        "Organized"
      ],
      weaknesses: [
        "Needy",
        "Inflexible",
        "Self-sacrificing"
      ],
      workStyle: "Excels in environments focused on teamwork and helping others.",
      communicationStyle: "Warm, supportive, and focused on maintaining harmony.",
      growthAreas: [
        "Independence",
        "Handling criticism",
        "Self-care"
      ]
    }
  },
  "ISTP": {
    title: "The Virtuoso",
    description: "Bold and practical experimenters, masters of all kinds of tools.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731307484369_vxtfybvvj.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Engineer",
      "Mechanic",
      "Pilot",
      "Data Analyst",
      "Forensic Scientist"
    ],
    relationships: {
      strengths: [
        "Independence",
        "Adaptability",
        "Problem-solving"
      ],
      challenges: [
        "Emotional expression",
        "Commitment",
        "Planning ahead"
      ],
      bestMatches: ["ESTJ", "ENTJ", "ISFJ"]
    },
    coreValues: [
      "Freedom",
      "Efficiency",
      "Logic",
      "Action",
      "Skill"
    ],
    overview: {
      strengths: [
        "Practical",
        "Logical",
        "Adaptable",
        "Action-oriented"
      ],
      weaknesses: [
        "Reserved",
        "Insensitive",
        "Risk-prone"
      ],
      workStyle: "Prefers hands-on work with tangible results.",
      communicationStyle: "Straightforward, minimal, and focused on solutions.",
      growthAreas: [
        "Emotional awareness",
        "Long-term planning",
        "Relationship building"
      ]
    }
  },
  "ISFP": {
    title: "The Adventurer",
    description: "Flexible and charming artists, always ready to explore and experience something new.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731307217353_td8qvh6ao.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Artist",
      "Designer",
      "Musician",
      "Chef",
      "Veterinarian"
    ],
    relationships: {
      strengths: [
        "Creativity",
        "Adaptability",
        "Sensitivity"
      ],
      challenges: [
        "Long-term planning",
        "Criticism handling",
        "Assertiveness"
      ],
      bestMatches: ["ENFJ", "ESFJ", "ISFJ"]
    },
    coreValues: [
      "Freedom",
      "Beauty",
      "Authenticity",
      "Adventure",
      "Harmony"
    ],
    overview: {
      strengths: [
        "Creative",
        "Adaptable",
        "Artistic",
        "Sensitive"
      ],
      weaknesses: [
        "Unpredictable",
        "Easily stressed",
        "Overly competitive"
      ],
      workStyle: "Thrives in flexible environments that allow for creativity.",
      communicationStyle: "Gentle, artistic, and focused on authenticity.",
      growthAreas: [
        "Planning",
        "Assertiveness",
        "Structure"
      ]
    }
  },
  "ESTP": {
    title: "The Entrepreneur",
    description: "Smart, energetic and very perceptive people, who truly enjoy living on the edge.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731306476418_cqaxikkqx.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Entrepreneur",
      "Sales Executive",
      "Marketing Director",
      "Athletic Coach",
      "Detective"
    ],
    relationships: {
      strengths: [
        "Charisma",
        "Adaptability",
        "Action-oriented"
      ],
      challenges: [
        "Commitment",
        "Planning",
        "Emotional depth"
      ],
      bestMatches: ["ISFJ", "ISTJ", "ESTP"]
    },
    coreValues: [
      "Freedom",
      "Action",
      "Variety",
      "Impact",
      "Excellence"
    ],
    overview: {
      strengths: [
        "Energetic",
        "Risk-taking",
        "Practical",
        "Observant"
      ],
      weaknesses: [
        "Impatient",
        "Risk-prone",
        "Unstructured"
      ],
      workStyle: "Thrives in dynamic environments with immediate challenges.",
      communicationStyle: "Direct, energetic, and focused on action.",
      growthAreas: [
        "Long-term planning",
        "Emotional awareness",
        "Follow-through"
      ]
    }
  },
  "ESFP": {
    title: "The Entertainer",
    description: "Spontaneous, energetic and enthusiastic people – life is never boring around them.",
    imageUrl: "https://celebgossipweb.wordpress.com/wp-content/uploads/2024/11/1731306297578_c2txcdyk7.jpeg?auto=format&fit=crop&w=800&q=80",
    careers: [
      "Event Planner",
      "Actor",
      "Sales Representative",
      "Flight Attendant",
      "Tour Guide"
    ],
    relationships: {
      strengths: [
        "Enthusiasm",
        "Charm",
        "Practicality"
      ],
      challenges: [
        "Focus",
        "Planning",
        "Serious discussions"
      ],
      bestMatches: ["ISFJ", "ISTJ", "ESFP"]
    },
    coreValues: [
      "Fun",
      "Beauty",
      "Freedom",
      "Experience",
      "Connection"
    ],
    overview: {
      strengths: [
        "Enthusiastic",
        "Practical",
        "Friendly",
        "Adaptable"
      ],
      weaknesses: [
        "Unfocused",
        "Attention-seeking",
        "Easily bored"
      ],
      workStyle: "Thrives in social, dynamic environments with variety.",
      communicationStyle: "Warm, enthusiastic, and focused on the present moment.",
      growthAreas: [
        "Organization",
        "Long-term planning",
        "Focus"
      ]
    }
  }
};

export const getPersonalityTypeUrl = (type: string): string => {
  return `/personality-types/${type.toLowerCase()}`;
};

export const getPersonalityData = (type: string) => {
  return personalityData[type] || null;
};

export const getCelebrities = (type: string): string[] => {
  const celebrityMap: { [key: string]: string[] } = {
    'INTJ': ['Elon Musk', 'Stephen Hawking', 'Michelle Obama'],
    'INTP': ['Albert Einstein', 'Bill Gates', 'Marie Curie'],
    'ENTJ': ['Steve Jobs', 'Margaret Thatcher', 'Franklin D. Roosevelt'],
    'ENTP': ['Mark Twain', 'Thomas Edison', 'Leonardo da Vinci'],
    'INFJ': ['Martin Luther King Jr.', 'Nelson Mandela', 'Plato'],
    'INFP': ['William Shakespeare', 'J.R.R. Tolkien', 'Vincent van Gogh'],
    'ENFP': ['Robin Williams', 'Walt Disney', 'Anne Frank'],
    'ENFJ': ['Barack Obama', 'Oprah Winfrey', 'Morgan Freeman'],
    'ISTJ': ['George Washington', 'Warren Buffett', 'Queen Elizabeth II'],
    'ISFJ': ['Mother Teresa', 'Rosa Parks', 'Kate Middleton'],
    'ESTJ': ['Henry Ford', 'Sheryl Sandberg', 'Judge Judy'],
    'ESFJ': ['Taylor Swift', 'Bill Clinton', 'Sally Field'],
    'ISTP': ['Michael Jordan', 'Tom Cruise', 'Clint Eastwood'],
    'ISFP': ['Bob Dylan', 'David Beckham', 'Michael Jackson'],
    'ESTP': ['Donald Trump', 'Madonna', 'Ernest Hemingway'],
    'ESFP': ['Marilyn Monroe', 'Elvis Presley', 'Jamie Oliver']
  };
  return celebrityMap[type] || [];
};

export const getHoroscope = (type: string): string => {
  const horoscopeMap: { [key: string]: string } = {
    'INTJ': 'Your analytical mind will lead to breakthrough insights this month.',
    'INTP': 'Your curiosity will open new doors of opportunity.',
    'ENTJ': 'Your leadership skills will be particularly valuable in upcoming challenges.',
    'ENTP': 'Your innovative ideas will spark positive change.',
    'INFJ': 'Your intuition will guide you to meaningful connections.',
    'INFP': 'Your creativity will help others see the world in new ways.',
    'ENFP': 'Your enthusiasm will inspire positive change in your community.',
    'ENFJ': 'Your natural leadership will help bring people together.',
    'ISTJ': 'Your attention to detail will solve a long-standing problem.',
    'ISFJ': 'Your caring nature will strengthen important relationships.',
    'ESTJ': 'Your organizational skills will lead to a major achievement.',
    'ESFJ': 'Your social connections will open new opportunities.',
    'ISTP': 'Your practical skills will prove invaluable in a new project.',
    'ISFP': 'Your artistic vision will receive recognition.',
    'ESTP': 'Your adaptability will help you seize an exciting opportunity.',
    'ESFP': 'Your enthusiasm will bring joy to those around you.'
  };
  return horoscopeMap[type] || 'Your journey of self-discovery continues.';
};