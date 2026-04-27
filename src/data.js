export const referenceData = [
  {
    "country": "United States",
    "summary": "A decentralized system with K-12 schooling, community colleges, colleges, and universities using associate, bachelor, master, and doctoral degree ladders.",
    "points": [
      "High school usually ends at grade 12.",
      "Community colleges commonly offer associate degrees and transfer pathways.",
      "A college may award bachelor degrees, while a university usually includes multiple schools and graduate programs.",
      "Common graduate sequence: bachelor -> master -> doctorate."
    ]
  },
  {
    "country": "Canada",
    "summary": "A provincially managed system with strong public colleges and universities, plus certificate, diploma, bachelor, postgraduate certificate, master, and doctoral routes.",
    "points": [
      "Secondary school typically runs to grade 12.",
      "Colleges often focus on applied learning, diplomas, advanced diplomas, and postgraduate certificates.",
      "Universities primarily award bachelor, master, and doctoral degrees."
    ]
  },
  {
    "country": "India",
    "summary": "A structured system with school education followed by undergraduate and postgraduate pathways through colleges, institutes, and universities.",
    "points": [
      "Senior secondary usually ends with Class 12.",
      "Many students enter bachelor's programs through affiliated colleges under a university.",
      "Common undergraduate awards include BA, BSc, BCom, BE, BTech."
    ]
  }
];

export const differenceData = [
  {
    "title": "College vs University",
    "body": "In the U.S., both may award bachelor degrees. In Canada, colleges lean applied and universities are the main degree route. In India, a college is often affiliated to a degree-awarding university."
  },
  {
    "title": "End of Schooling",
    "body": "U.S.: Grade 12. Canada: Grade 12 (varies by province). India: Class 10 and Class 12, or higher/senior secondary."
  },
  {
    "title": "Shorter Credentials",
    "body": "Associate degrees are crucial in the U.S. Diplomas and PG certificates are common in Canada. India relies heavily on Class 12, bachelor's, and university-affiliated colleges."
  }
];

export const miniGames = [
  {
    "id": "country-match",
    "badge": "Operation: Signal Scan",
    "title": "Identify The System",
    "description": "Scan applicant profile clues and determine the origin country. Speed and accuracy matter.",
    "emptyMessage": "Select the country that best matches the applicant's profile clues.",
    "completionMessage": "Signal Scan Complete. You successfully identified country-specific terminology.",
    "items": [
      {
        "category": "Terminology",
        "country": "India",
        "question": "Applicant mentions 'Higher Secondary', 'Class 12', and a 'BCom' through an affiliated college.",
        "context": "Identify the education system origin.",
        "options": [
          {
            "title": "United States",
            "detail": "Uses high school & community college."
          },
          {
            "title": "Canada",
            "detail": "Uses Grade 12 & Ontario college."
          },
          {
            "title": "India",
            "detail": "Class 12 & affiliated colleges are strong signals."
          }
        ],
        "answer": 2,
        "explanation": "Class 12, Higher Secondary, and affiliated college structures strongly point to India."
      },
      {
        "category": "Terminology",
        "country": "Canada",
        "question": "Candidate completed Grade 12, then a diploma at a public college, followed by a postgraduate certificate.",
        "context": "Which country does this pathway belong to?",
        "options": [
          {
            "title": "Canada",
            "detail": "College diplomas and postgraduate certificates are common."
          },
          {
            "title": "India",
            "detail": "More often references Class 12 and university affiliation."
          },
          {
            "title": "United States",
            "detail": "Would likely highlight associate degrees."
          }
        ],
        "answer": 0,
        "explanation": "Canadian colleges commonly offer diploma and postgraduate certificate pathways after Grade 12."
      },
      {
        "category": "Institution Type",
        "country": "United States",
        "question": "Profile shows a high school diploma, an Associate of Science from a community college, and a transfer to a university.",
        "context": "Determine the system match.",
        "options": [
          {
            "title": "India",
            "detail": "Transfer from community college is rare here."
          },
          {
            "title": "United States",
            "detail": "Classic U.S. community college transfer route."
          },
          {
            "title": "Canada",
            "detail": "Associate degrees are less central."
          }
        ],
        "answer": 1,
        "explanation": "Community college plus associate degree plus transfer is one of the clearest U.S. screening patterns."
      },
      {
        "category": "Terminology",
        "country": "India",
        "question": "Applicant lists 'SSC', 'HSC', and a 'BSc' from a local college.",
        "context": "Identify the education system origin.",
        "options": [
          {
            "title": "United States",
            "detail": "SSC and HSC are not standard terms."
          },
          {
            "title": "Canada",
            "detail": "Does not use SSC and HSC terminology."
          },
          {
            "title": "India",
            "detail": "Secondary and Higher Secondary Certificates are common."
          }
        ],
        "answer": 2,
        "explanation": "SSC (Secondary School Certificate) and HSC (Higher Secondary Certificate) are widely used in India."
      },
      {
        "category": "Institution Type",
        "country": "Canada",
        "question": "Candidate holds a 'College Diploma' followed by an 'Advanced Diploma'.",
        "context": "Which country matches these credentials?",
        "options": [
          {
            "title": "Canada",
            "detail": "Public colleges frequently offer these applied programs."
          },
          {
            "title": "United States",
            "detail": "Focuses more on associate degrees."
          },
          {
            "title": "India",
            "detail": "Focuses on bachelor degrees at colleges."
          }
        ],
        "answer": 0,
        "explanation": "Diplomas and Advanced Diplomas are staple credentials of the Canadian college system."
      },
      {
        "category": "Institution Type",
        "country": "United States",
        "question": "Profile includes 'State University' and a 'Master of Arts'.",
        "context": "Determine the system match.",
        "options": [
          {
            "title": "Canada",
            "detail": "Also has universities and master's."
          },
          {
            "title": "United States",
            "detail": "Common terminology alongside bachelor's and doctorates."
          },
          {
            "title": "India",
            "detail": "Uses universities and master's."
          }
        ],
        "answer": 1,
        "explanation": "While possible elsewhere, 'State University' is a very prominent indicator of the U.S. public university system."
      },
      {
        "category": "Terminology",
        "country": "India",
        "question": "Applicant has a 'BTech' degree and mentions 'JEE'.",
        "context": "Which country does this pathway belong to?",
        "options": [
          {
            "title": "United States",
            "detail": "JEE is not applicable."
          },
          {
            "title": "Canada",
            "detail": "Does not use JEE."
          },
          {
            "title": "India",
            "detail": "JEE is a major entrance exam for engineering."
          }
        ],
        "answer": 2,
        "explanation": "The Joint Entrance Examination (JEE) and BTech are distinctive Indian education markers."
      },
      {
        "category": "Terminology",
        "country": "Canada",
        "question": "Profile highlights 'CEGEP' before a university program.",
        "context": "Identify the education system origin.",
        "options": [
          {
            "title": "United States",
            "detail": "No equivalent to CEGEP."
          },
          {
            "title": "Canada",
            "detail": "CEGEP is specific to Quebec."
          },
          {
            "title": "India",
            "detail": "No equivalent to CEGEP."
          }
        ],
        "answer": 1,
        "explanation": "CEGEP is a unique pre-university and technical college system in the Canadian province of Quebec."
      },
      {
        "category": "Institution Type",
        "country": "United States",
        "question": "Candidate mentions 'Liberal Arts College' and a 'BA'.",
        "context": "Determine the system match.",
        "options": [
          {
            "title": "India",
            "detail": "Liberal arts colleges exist but are less common."
          },
          {
            "title": "United States",
            "detail": "A very common institutional category."
          },
          {
            "title": "Canada",
            "detail": "Universities are the primary degree granters."
          }
        ],
        "answer": 1,
        "explanation": "The 'Liberal Arts College' model is highly characteristic of the U.S. higher education landscape."
      },
      {
        "category": "Terminology",
        "country": "India",
        "question": "Applicant completed '10+2' and a 'BBA'.",
        "context": "Which country matches these credentials?",
        "options": [
          {
            "title": "United States",
            "detail": "Does not use '10+2'."
          },
          {
            "title": "Canada",
            "detail": "Does not use '10+2'."
          },
          {
            "title": "India",
            "detail": "'10+2' is the standard way to denote secondary completion."
          }
        ],
        "answer": 2,
        "explanation": "The '10+2' terminology is synonymous with the Indian school education system."
      },
      {
        "category": "Institution Type",
        "country": "Canada",
        "question": "Profile lists a 'Polytechnic Institute' offering bachelor's degrees and applied diplomas.",
        "context": "Identify the education system origin.",
        "options": [
          {
            "title": "Canada",
            "detail": "Polytechnics blend college and university offerings."
          },
          {
            "title": "United States",
            "detail": "Polytechnics exist but usually focus solely on degrees."
          },
          {
            "title": "India",
            "detail": "Polytechnics usually offer only diplomas."
          }
        ],
        "answer": 0,
        "explanation": "Canadian polytechnics uniquely offer both applied diplomas and bachelor's degrees."
      },
      {
        "category": "Terminology",
        "country": "United States",
        "question": "Candidate has a 'GED' certificate.",
        "context": "Determine the system match.",
        "options": [
          {
            "title": "United States",
            "detail": "GED is the standard high school equivalency."
          },
          {
            "title": "Canada",
            "detail": "Uses GED sometimes, but it originated and is most common in the US."
          },
          {
            "title": "India",
            "detail": "Uses open schooling (NIOS), not GED."
          }
        ],
        "answer": 0,
        "explanation": "The General Educational Development (GED) test is the primary high school equivalency credential in the U.S."
      },
      {
        "category": "Institution Type",
        "country": "India",
        "question": "Applicant studied at an 'Institute of National Importance'.",
        "context": "Which country does this terminology belong to?",
        "options": [
          {
            "title": "United States",
            "detail": "Does not use this designation."
          },
          {
            "title": "Canada",
            "detail": "Does not use this designation."
          },
          {
            "title": "India",
            "detail": "An official status conferred on premier institutions like IITs."
          }
        ],
        "answer": 2,
        "explanation": "'Institute of National Importance' is a specific legal status given to premier Indian higher education institutions."
      },
      {
        "category": "Terminology",
        "country": "Canada",
        "question": "Profile includes an 'Ontario Secondary School Diploma' (OSSD).",
        "context": "Identify the education system origin.",
        "options": [
          {
            "title": "Canada",
            "detail": "Specific to the province of Ontario."
          },
          {
            "title": "United States",
            "detail": "Diplomas are state-based but don't use 'Ontario'."
          },
          {
            "title": "India",
            "detail": "Does not apply."
          }
        ],
        "answer": 0,
        "explanation": "The OSSD is the standard high school diploma awarded in Ontario, Canada."
      },
      {
        "category": "Institution Type",
        "country": "United States",
        "question": "Candidate mentions a 'Junior College'.",
        "context": "Determine the system match.",
        "options": [
          {
            "title": "United States",
            "detail": "An older term, often synonymous with community college."
          },
          {
            "title": "Canada",
            "detail": "Rarely used."
          },
          {
            "title": "India",
            "detail": "Junior colleges exist in some states for 11th/12th grade."
          }
        ],
        "answer": 0,
        "explanation": "While India uses 'Junior College' for high school, in the context of post-secondary profiles, it strongly points to a U.S. 2-year institution."
      }
    ]
  },
  {
    "id": "degree-ladder",
    "badge": "Operation: Pathway Decode",
    "title": "Classify The Ladder",
    "description": "Recognize the correct academic ladder and spot credentials mixed across systems.",
    "emptyMessage": "Choose the option that correctly classifies the credential pathway.",
    "completionMessage": "Pathway Decode Complete. You correctly classified credential levels.",
    "items": [
      {
        "category": "Degree Level",
        "country": "United States",
        "question": "Which sequence best matches the common U.S. academic ladder?",
        "context": "Classify the overall degree progression.",
        "options": [
          {
            "title": "Associate -> Bachelor -> Master's -> Doctorate",
            "detail": "The standard academic progression."
          },
          {
            "title": "Bachelor -> Associate -> Doctorate -> Master's",
            "detail": "Reverses important hierarchical levels."
          },
          {
            "title": "Diploma -> PG Certificate -> Associate -> Doctorate",
            "detail": "Mixes multiple international systems."
          }
        ],
        "answer": 0,
        "explanation": "For most U.S. academic screening, the normal sequence is associate, bachelor, master's, then doctorate."
      },
      {
        "category": "Degree Level",
        "country": "Canada",
        "question": "Evaluate a Canadian profile listing a diploma, PG certificate, and later a master's degree.",
        "context": "Check if mixed credential types form a credible pathway.",
        "options": [
          {
            "title": "Valid Pathway",
            "detail": "College credentials and university degrees can co-exist."
          },
          {
            "title": "Invalid Pathway",
            "detail": "A PG certificate cannot precede a master's."
          },
          {
            "title": "System Mismatch",
            "detail": "Canada does not use diplomas."
          }
        ],
        "answer": 0,
        "explanation": "Canada often has mixed college and university pathways, so diploma and PG certificate credentials can appear before or alongside later degrees."
      },
      {
        "category": "School Level",
        "country": "India",
        "question": "An Indian profile states Class 12, then BSc, then MSc. Map the levels.",
        "context": "Place each stage at the correct screening level.",
        "options": [
          {
            "title": "School -> Bachelor's -> Master's",
            "detail": "Reflects a common India pathway."
          },
          {
            "title": "Associate -> Bachelor's -> PG Certificate",
            "detail": "Terms do not align."
          },
          {
            "title": "Secondary Diploma -> Doctorate -> Master's",
            "detail": "Sequence is inverted."
          }
        ],
        "answer": 0,
        "explanation": "Class 12 is school completion, BSc is a bachelor's degree, and MSc is a master's degree."
      },
      {
        "category": "Degree Level",
        "country": "United States",
        "question": "Profile lists High School -> Bachelor's -> Master's -> Doctorate.",
        "context": "Classify the progression.",
        "options": [
          {
            "title": "Valid Pathway",
            "detail": "A very standard progression."
          },
          {
            "title": "Invalid Pathway",
            "detail": "Missing associate degree."
          },
          {
            "title": "System Mismatch",
            "detail": "Requires A-levels."
          }
        ],
        "answer": 0,
        "explanation": "An associate degree is not required; going straight to a bachelor's is the most common path."
      },
      {
        "category": "Degree Level",
        "country": "Canada",
        "question": "Profile lists Grade 12 -> Diploma -> Advanced Diploma -> Bachelor's.",
        "context": "Classify the progression.",
        "options": [
          {
            "title": "Valid Pathway",
            "detail": "A common college-to-university transfer route."
          },
          {
            "title": "Invalid Pathway",
            "detail": "Advanced diplomas cannot lead to bachelor's."
          },
          {
            "title": "System Mismatch",
            "detail": "Requires Class 12."
          }
        ],
        "answer": 0,
        "explanation": "Many Canadian students start with a college diploma and transfer credits to complete a bachelor's."
      },
      {
        "category": "Degree Level",
        "country": "India",
        "question": "Profile lists Class 10 -> Class 12 -> Master's -> Bachelor's.",
        "context": "Classify the progression.",
        "options": [
          {
            "title": "Valid Pathway",
            "detail": "Acceptable in some fields."
          },
          {
            "title": "Invalid Pathway",
            "detail": "Master's cannot precede a Bachelor's."
          },
          {
            "title": "System Mismatch",
            "detail": "Terms don't match."
          }
        ],
        "answer": 1,
        "explanation": "A master's degree inherently requires a bachelor's degree first."
      },
      {
        "category": "Degree Level",
        "country": "United States",
        "question": "Profile lists Associate -> PG Certificate -> Master's.",
        "context": "Check if mixed credential types form a credible pathway.",
        "options": [
          {
            "title": "Valid Pathway",
            "detail": "Common in tech fields."
          },
          {
            "title": "Invalid Pathway",
            "detail": "PG Certificate requires a Bachelor's."
          },
          {
            "title": "System Mismatch",
            "detail": "PG Certificate is rare in the US; plus, it requires a bachelor's."
          }
        ],
        "answer": 2,
        "explanation": "Postgraduate certificates are more common in Canada/UK, and they typically require a bachelor's degree, not just an associate."
      },
      {
        "category": "Degree Level",
        "country": "Canada",
        "question": "Profile lists Grade 12 -> Bachelor's -> Master's -> Doctorate.",
        "context": "Classify the progression.",
        "options": [
          {
            "title": "Valid Pathway",
            "detail": "The standard university route."
          },
          {
            "title": "Invalid Pathway",
            "detail": "Must include a college diploma."
          },
          {
            "title": "System Mismatch",
            "detail": "Requires CEGEP."
          }
        ],
        "answer": 0,
        "explanation": "The direct university route (Bachelor -> Master -> Doc) is standard across Canada (except Quebec which requires CEGEP)."
      },
      {
        "category": "Degree Level",
        "country": "India",
        "question": "Profile lists Class 12 -> BTech -> MTech -> PhD.",
        "context": "Classify the progression.",
        "options": [
          {
            "title": "Valid Pathway",
            "detail": "The standard engineering route."
          },
          {
            "title": "Invalid Pathway",
            "detail": "Missing a diploma."
          },
          {
            "title": "System Mismatch",
            "detail": "BTech is not a bachelor's."
          }
        ],
        "answer": 0,
        "explanation": "BTech to MTech to PhD is the typical and valid progression for engineering in India."
      },
      {
        "category": "Degree Level",
        "country": "United States",
        "question": "Profile lists Bachelor's -> Associate -> Doctorate.",
        "context": "Classify the progression.",
        "options": [
          {
            "title": "Valid Pathway",
            "detail": "Can do associate after bachelor's."
          },
          {
            "title": "Invalid Pathway",
            "detail": "Doctorate usually requires a master's or specific bachelor's, and associate is out of order."
          },
          {
            "title": "System Mismatch",
            "detail": "Not US credentials."
          }
        ],
        "answer": 1,
        "explanation": "While one *can* get an associate after a bachelor's, jumping straight to a doctorate without explaining the gap or master's is a red flag requiring scrutiny."
      },
      {
        "category": "Degree Level",
        "country": "Canada",
        "question": "Profile lists Diploma -> PG Certificate -> Doctorate.",
        "context": "Classify the progression.",
        "options": [
          {
            "title": "Valid Pathway",
            "detail": "Accelerated path."
          },
          {
            "title": "Invalid Pathway",
            "detail": "Missing foundational Bachelor's/Master's."
          },
          {
            "title": "System Mismatch",
            "detail": "No such thing as PG Certificate."
          }
        ],
        "answer": 1,
        "explanation": "A doctorate almost universally requires a master's degree (or at least a bachelor's), which are missing here."
      },
      {
        "category": "Degree Level",
        "country": "India",
        "question": "Profile lists Class 10 -> BSc -> MSc.",
        "context": "Classify the progression.",
        "options": [
          {
            "title": "Valid Pathway",
            "detail": "Accelerated path."
          },
          {
            "title": "Invalid Pathway",
            "detail": "Missing Class 12 or equivalent diploma."
          },
          {
            "title": "System Mismatch",
            "detail": "BSc requires 14 years."
          }
        ],
        "answer": 1,
        "explanation": "Entry into a bachelor's program (BSc) in India strictly requires completion of Class 12 or an equivalent diploma."
      },
      {
        "category": "Degree Level",
        "country": "United States",
        "question": "Profile lists Community College -> University -> Master's.",
        "context": "Classify the progression.",
        "options": [
          {
            "title": "Valid Pathway",
            "detail": "The classic 2+2 transfer path."
          },
          {
            "title": "Invalid Pathway",
            "detail": "Must finish at community college."
          },
          {
            "title": "System Mismatch",
            "detail": "Terms are European."
          }
        ],
        "answer": 0,
        "explanation": "Transferring from a 2-year community college to a 4-year university for a bachelor's, then a master's, is very common."
      },
      {
        "category": "Degree Level",
        "country": "Canada",
        "question": "Profile lists Bachelor's -> PG Certificate -> Master's.",
        "context": "Classify the progression.",
        "options": [
          {
            "title": "Valid Pathway",
            "detail": "PG Certs are often taken between degrees."
          },
          {
            "title": "Invalid Pathway",
            "detail": "Cannot do a PG Cert before a Master's."
          },
          {
            "title": "System Mismatch",
            "detail": "Requires a Diploma first."
          }
        ],
        "answer": 0,
        "explanation": "Students often take a short, applied PG Certificate to gain practical skills before or after a Master's."
      },
      {
        "category": "Degree Level",
        "country": "India",
        "question": "Profile lists BCom -> MCom -> Class 12.",
        "context": "Classify the progression.",
        "options": [
          {
            "title": "Valid Pathway",
            "detail": "Adult education."
          },
          {
            "title": "Invalid Pathway",
            "detail": "Class 12 must come before bachelor's."
          },
          {
            "title": "System Mismatch",
            "detail": "MCom is not a degree."
          }
        ],
        "answer": 1,
        "explanation": "The chronological order is inverted. Class 12 is a prerequisite for a BCom."
      }
    ]
  },
  {
    "id": "verification-lab",
    "badge": "Operation: OSINT Analyst",
    "title": "Open Source Verification",
    "description": "Open a new tab and use your favorite search engine to verify the applicant's claims. Determine if institutions and campuses actually exist.",
    "emptyMessage": "Conduct web research to verify the claims in the casefile and select the correct status.",
    "completionMessage": "OSINT Desk Complete. You successfully verified real-world facts using external research.",
    "items": [
      {
        "category": "Campus Verification",
        "country": "Global",
        "question": "Applicant claims to have attended 'University of Toronto - Calgary Campus'.",
        "context": "Research Task: Verify if the University of Toronto has an official campus in Calgary.",
        "options": [
          {
            "title": "Verified",
            "detail": "Yes, they have a satellite campus there."
          },
          {
            "title": "Fraudulent Claim",
            "detail": "U of T is in Ontario and has no Calgary campus."
          },
          {
            "title": "Inconclusive",
            "detail": "Could be an affiliate program."
          }
        ],
        "answer": 1,
        "explanation": "A quick search reveals the University of Toronto only has campuses in Toronto, Mississauga, and Scarborough (all in Ontario)."
      },
      {
        "category": "Accreditation Check",
        "country": "Global",
        "question": "Profile lists a 'Bachelor of Arts' from 'Pacific Western University' in California.",
        "context": "Research Task: Search for 'Pacific Western University'. Is it a legitimate, accredited institution?",
        "options": [
          {
            "title": "Legitimate",
            "detail": "It's a small liberal arts college."
          },
          {
            "title": "Diploma Mill",
            "detail": "It is widely known and listed as an unaccredited diploma mill."
          },
          {
            "title": "Closed Down",
            "detail": "It was accredited but closed recently."
          }
        ],
        "answer": 1,
        "explanation": "Pacific Western University is well-documented online as a prominent unaccredited diploma mill."
      },
      {
        "category": "Institution Identity",
        "country": "Global",
        "question": "Applicant claims they completed a 4-year Bachelor's degree at 'Seneca College' in Toronto.",
        "context": "Research Task: Search Seneca College. Do they offer 4-year Bachelor's degrees?",
        "options": [
          {
            "title": "Verified",
            "detail": "Yes, Seneca is a polytechnic that offers specific Bachelor's degrees."
          },
          {
            "title": "False Claim",
            "detail": "Colleges in Ontario strictly offer diplomas."
          },
          {
            "title": "Partial Match",
            "detail": "They only offer associate degrees."
          }
        ],
        "answer": 0,
        "explanation": "Research confirms that Seneca (like several Ontario colleges) has evolved to offer full 4-year Honours Bachelor's degrees in specialized fields."
      },
      {
        "category": "Institution Identity",
        "country": "Global",
        "question": "Applicant from India lists a BTech from 'Indian Institute of Technology (IIT) Bangalore'.",
        "context": "Research Task: Verify the existence of 'IIT Bangalore'.",
        "options": [
          {
            "title": "Verified",
            "detail": "IIT Bangalore is one of the premier institutes."
          },
          {
            "title": "False Claim",
            "detail": "There is no IIT in Bangalore; there is IISc and IIIT, but no IIT."
          },
          {
            "title": "Name Change",
            "detail": "It was recently renamed."
          }
        ],
        "answer": 1,
        "explanation": "Bangalore is famous for IISc (Indian Institute of Science) and IIIT, but it does not have an IIT."
      },
      {
        "category": "Medical School Check",
        "country": "Global",
        "question": "Applicant claims to have an MD (Doctor of Medicine) from the 'University of Waterloo'.",
        "context": "Research Task: Does the University of Waterloo have a medical school?",
        "options": [
          {
            "title": "Verified",
            "detail": "Yes, they have a renowned medical program."
          },
          {
            "title": "False Claim",
            "detail": "Waterloo does not have a Faculty of Medicine."
          },
          {
            "title": "Undergraduate Only",
            "detail": "They offer pre-med but no MD."
          }
        ],
        "answer": 1,
        "explanation": "A search shows that the University of Waterloo is highly ranked for engineering and computer science, but does not have a medical school."
      },
      {
        "category": "Campus Verification",
        "country": "Global",
        "question": "Profile lists 'BSc in Computer Science' from 'Northeastern University, London'.",
        "context": "Research Task: Does Northeastern University (based in Boston) have a campus in London?",
        "options": [
          {
            "title": "Verified",
            "detail": "Yes, they acquired NCH which is now Northeastern University London."
          },
          {
            "title": "False Claim",
            "detail": "Northeastern only exists in the USA."
          },
          {
            "title": "Partner Program Only",
            "detail": "It's just a study abroad office, no degrees."
          }
        ],
        "answer": 0,
        "explanation": "Research confirms Northeastern University operates a full degree-granting campus in London."
      },
      {
        "category": "Location Check",
        "country": "Global",
        "question": "Profile shows 'Master of Science' from 'Massachusetts Institute of Technology (MIT)' located in Boston, MA.",
        "context": "Research Task: Where is MIT officially located?",
        "options": [
          {
            "title": "Verified",
            "detail": "MIT is located in Boston."
          },
          {
            "title": "Location Mismatch",
            "detail": "MIT is actually located in Cambridge, MA, not Boston."
          },
          {
            "title": "State Mismatch",
            "detail": "MIT is located in Michigan."
          }
        ],
        "answer": 1,
        "explanation": "While very close to Boston, MIT's official address and location is Cambridge, Massachusetts. A claim stating 'MIT, Boston' warrants careful verification."
      },
      {
        "category": "Institution Identity",
        "country": "Global",
        "question": "Candidate claims to hold an MBA from 'Stanford Community College'.",
        "context": "Research Task: Does 'Stanford Community College' exist?",
        "options": [
          {
            "title": "Verified",
            "detail": "It's an affiliate of Stanford University."
          },
          {
            "title": "False Claim",
            "detail": "There is no Stanford Community College."
          },
          {
            "title": "Name Change",
            "detail": "It was recently renamed to Foothill College."
          }
        ],
        "answer": 1,
        "explanation": "There is no 'Stanford Community College'. Scammers sometimes combine a prestigious name with a common institution type."
      },
      {
        "category": "Accreditation Check",
        "country": "Global",
        "question": "Candidate claims to have a degree from 'Breyer State University'.",
        "context": "Research Task: Investigate 'Breyer State University'. Is it accredited?",
        "options": [
          {
            "title": "Verified",
            "detail": "It is a legitimate state university."
          },
          {
            "title": "Diploma Mill",
            "detail": "It is a known unaccredited entity/diploma mill."
          },
          {
            "title": "Online Only",
            "detail": "It's fully accredited but entirely online."
          }
        ],
        "answer": 1,
        "explanation": "A web search quickly flags Breyer State University as an unaccredited diploma mill."
      },
      {
        "category": "Campus Verification",
        "country": "Global",
        "question": "Applicant lists an engineering degree from 'Birla Institute of Technology and Science (BITS), Pilani - Dubai Campus'.",
        "context": "Research Task: Does BITS Pilani operate an official campus in Dubai?",
        "options": [
          {
            "title": "Verified",
            "detail": "Yes, BITS Pilani has an international campus in Dubai."
          },
          {
            "title": "False Claim",
            "detail": "BITS only has campuses in India."
          },
          {
            "title": "Inconclusive",
            "detail": "It's a fake affiliate."
          }
        ],
        "answer": 0,
        "explanation": "Research confirms BITS Pilani, a premier Indian institute, does indeed operate a full campus in Dubai."
      },
      {
        "category": "Campus Verification",
        "country": "Global",
        "question": "Applicant lists a degree from 'Carnegie Mellon University in Qatar'.",
        "context": "Research Task: Verify if Carnegie Mellon University (CMU) has a campus in Qatar.",
        "options": [
          {
            "title": "Verified",
            "detail": "Yes, CMU operates a campus in Education City, Qatar."
          },
          {
            "title": "False Claim",
            "detail": "CMU is strictly based in Pennsylvania."
          },
          {
            "title": "Partner Program",
            "detail": "It's only an exchange program."
          }
        ],
        "answer": 0,
        "explanation": "CMU is one of several top US universities with official, degree-granting campuses in Qatar's Education City."
      },
      {
        "category": "Campus Verification",
        "country": "Global",
        "question": "Applicant claims to hold a 'Postgraduate Diploma' from 'Conestoga College' in Vancouver.",
        "context": "Research Task: Does Conestoga College have a campus in Vancouver, British Columbia?",
        "options": [
          {
            "title": "Verified",
            "detail": "Yes, they expanded to the west coast."
          },
          {
            "title": "False Claim",
            "detail": "Conestoga is located in Ontario and has no Vancouver campus."
          },
          {
            "title": "Online Only",
            "detail": "They only offer online courses in Vancouver."
          }
        ],
        "answer": 1,
        "explanation": "Conestoga College operates multiple campuses, but they are all located within the province of Ontario (Kitchener, Waterloo, Cambridge, etc.)."
      },
      {
        "category": "Institution Identity",
        "country": "Global",
        "question": "Candidate lists a degree from 'National Institute of Technology (NIT) Mumbai'.",
        "context": "Research Task: Is there an official NIT located in Mumbai?",
        "options": [
          {
            "title": "Verified",
            "detail": "Yes, NIT Mumbai is highly ranked."
          },
          {
            "title": "False Claim",
            "detail": "There is no NIT in Mumbai; the NIT for Maharashtra is VNIT in Nagpur."
          },
          {
            "title": "Name Change",
            "detail": "IIT Mumbai was renamed to NIT."
          }
        ],
        "answer": 1,
        "explanation": "While Mumbai has an IIT (IIT Bombay), the National Institute of Technology (NIT) for the state of Maharashtra is located in Nagpur (VNIT)."
      },
      {
        "category": "Degree Level",
        "country": "Global",
        "question": "Profile lists a 2-year Associate Degree from 'Princeton University'.",
        "context": "Research Task: Verify if Princeton University offers 2-year Associate degrees.",
        "options": [
          {
            "title": "Verified",
            "detail": "They offer them through an extension school."
          },
          {
            "title": "False Claim",
            "detail": "Princeton strictly offers Bachelor's, Master's, and Doctoral degrees."
          },
          {
            "title": "Online Only",
            "detail": "Only offered via distance learning."
          }
        ],
        "answer": 1,
        "explanation": "Ivy League institutions like Princeton do not grant 2-year Associate degrees. Associate degrees are typically issued by community colleges."
      },
      {
        "category": "Campus Verification",
        "country": "Global",
        "question": "Applicant claims to have graduated from 'University of California, Houston'.",
        "context": "Research Task: Verify the existence of 'UC Houston'.",
        "options": [
          {
            "title": "Verified",
            "detail": "It's the newest UC campus."
          },
          {
            "title": "False Claim",
            "detail": "The UC system is strictly in California; Houston is in Texas."
          },
          {
            "title": "Satellite Campus",
            "detail": "It's a satellite research center."
          }
        ],
        "answer": 1,
        "explanation": "The University of California (UC) system is a state public system operating entirely within California. Houston is in Texas."
      }
    ]
  }
];
