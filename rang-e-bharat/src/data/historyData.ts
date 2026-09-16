import { HistoricalPeriod } from '../types/history';

export const INDIAN_HISTORICAL_PERIODS: HistoricalPeriod[] = [
  {
    id: 'indus-valley-civilization',
    order: 1,
    period: 'Indus Valley Civilization',
    hindiName: 'सिंधु घाटी सभ्यता (हड़प्पा संस्कृति)',
    category: 'ancient',
    approximateDates: 'c. 3300 BCE – c. 1300 BCE (Mature: 2600 – 1900 BCE)',
    tagline: 'Pioneers of Urban Planning, Metallurgy & Bronze Age Maritime Trade',
    shortSummary:
      'One of the world’s three earliest cradles of civilization, spanning the Indus-Saraswati river basins, famous for grid-based urban architecture, advanced sanitation systems, standardized weights, and maritime craft trade.',
    majorDevelopments: [
      'Engineered sophisticated rectilinear grid city planning with baked-brick construction and multi-story houses.',
      'Developed sophisticated drainage systems, private bathing areas, covered gutters, and community water-management structures.',
      'Standardized binary and decimal metrology (weights & measures) used across hundreds of settlements.',
      'Developed thriving maritime trade networks linking Gujarat ports with Mesopotamia (Meluhha), Oman, and Dilmun.',
      'Pioneered lost-wax copper/bronze casting, terracotta sculpting, bead-making from carnelian, and steatite intaglio seal engraving.'
    ],
    importantPlaces: [
      {
        name: 'Dholavira',
        location: 'Kutch, Gujarat',
        significance: 'UNESCO World Heritage site featuring stone fortifications, a grand cascading water reservoir complex, and a 10-character signboard.'
      },
      {
        name: 'Lothal',
        location: 'Ahmedabad district, Gujarat',
        significance: 'A major Harappan port settlement with a large basin, bead-making workshops, and evidence of maritime trade.'
      },
      {
        name: 'Rakhigarhi',
        location: 'Hisar, Haryana',
        significance: 'Largest known Harappan site spanning over 350 hectares, revealing mature urban drainage, granaries, and residential quarters.'
      },
      {
        name: 'Kalibangan',
        location: 'Hanumangarh, Rajasthan',
        significance: 'Revealed the earliest ploughed agricultural field furrow marks in archaeological history and dedicated fire altars.'
      },
      {
        name: 'Harappa & Mohenjo-daro',
        location: 'Indus Basin',
        significance: 'Type-sites of the civilization famous for the Great Bath, Granary complexes, citadel mounds, and Bronze Dancing Girl.'
      }
    ],
    importantFigures: [
      {
        name: 'Harappan Guild Masters & Civic Administrators',
        role: 'Urban Engineers & Maritime Merchants',
        description: 'While individual royal names remain undeciphered due to the Indus script, archaeological evidence points to merchant guilds, civic planners, and craft master collectivities overseeing standardized governance.'
      },
      {
        name: 'Daya Ram Sahni & R.D. Banerji',
        role: 'Archaeological Pioneers (1920s)',
        description: 'Indian archaeologists whose excavations at Harappa (1921) and Mohenjo-daro (1922) under John Marshall pushed Indian written history back by over 2,000 years.'
      }
    ],
    culturalContributions: [
      'Urban hygiene ethics and community water conservation architectures still studied by modern urban planners.',
      'Steatite seals portraying the "Pashupati" figure seated in yogic posture, humped zebu bulls, and the mythical unicorn motif.',
      'Iconic lost-wax bronze sculptures like the spirited "Dancing Girl" of Mohenjo-daro and the Priest-King limestone bust.',
      'Vibrant terracotta toys, wheeled carts, whistle figurines, and lapidary jewelry traded across western Asia.'
    ],
    keyArtifactsOrMonuments: [
      'The Great Bath & Granary complex (Mohenjo-daro)',
      'The Tidal Dockyard and Bead Factory (Lothal)',
      'Dholavira Water Reservoirs & Citadel Stone Signboard',
      'The Bronze Dancing Girl (National Museum, New Delhi)',
      'Pashupati Seal & Carnelian Beads'
    ],
    historicalNuance:
      'The decline of the Mature Harappan phase (c. 1900–1300 BCE) was not caused by sudden foreign invasion, but by gradual climate shifts, tectonic changes diverting rivers like the Saraswati/Ghaggar-Hakra system, and shifting trade networks leading to de-urbanization into rural farming settlements.',
    heroImage:
      'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Ancient brick structures and stone heritage reminiscent of early Bronze Age settlements.',
    relatedStateIds: ['gujarat', 'rajasthan', 'haryana', 'punjab'],
    keyThemes: ['Urban Planning', 'Maritime Trade', 'Hydraulic Engineering', 'Metallurgy']
  },
  {
    id: 'vedic-period',
    order: 2,
    period: 'Vedic Period',
    hindiName: 'वैदिक काल (ऋग्वैदिक एवं उत्तर-वैदिक युग)',
    category: 'ancient',
    approximateDates: 'c. 1500 BCE – c. 500 BCE',
    tagline: 'Composition of the Sacred Vedas, Upanishadic Philosophy & Social Evolution',
    shortSummary:
      'A foundational epoch characterized by the oral preservation of the four Vedas, the development of early Sanskrit grammar and Vedic philosophy, agrarian expansion across the Gangetic plains, and the profound metaphysical dialogues of the Upanishads.',
    majorDevelopments: [
      'Oral recitation and mnemonic preservation of the Rigveda, Samaveda, Yajurveda, and Atharvaveda with precise phonetic accents.',
      'Transition from pastoral pastoralism (Sapta-Sindhu) to settled agrarian economy using iron implements across the Gangetic valley (Kuru-Panchala).',
      'Evolution of political councils (Sabha, Samiti) into structured tribal kingdoms and early monarchical polities.',
      'Composition of the Aranyakas, Brahmanas, and philosophical Upanishads emphasizing Brahman (ultimate reality) and Atman (inner self).',
      'Establishment of foundational Sanskrit linguistic sciences (Vedangas): Shiksha (phonetics), Kalpa (rituals), Vyakarana (grammar), Nirukta (etymology), Chandas (meter), and Jyotisha (astronomy).'
    ],
    importantPlaces: [
      {
        name: 'Kurukshetra & Brahmavarta',
        location: 'Haryana / Upper Doab',
        significance: 'Core geographical center of the later Vedic Kuru-Panchala realm, celebrated in early literature as the hub of ritual and philosophy.'
      },
      {
        name: 'Hastinapur & Kausambi',
        location: 'Uttar Pradesh',
        significance: 'Early capital cities of the Kuru and Vatsa kingdoms, exhibiting Painted Grey Ware (PGW) and Northern Black Polished Ware (NBPW) levels.'
      },
      {
        name: 'Mithila / Videha',
        location: 'North Bihar',
        significance: 'Intellectual capital led by King Janaka where celebrated debates between sages like Yajnavalkya and Gargi Vachaknavi took place.'
      },
      {
        name: 'Ayodhya & Kashi',
        location: 'Uttar Pradesh',
        significance: 'Major sacred urban and spiritual centers along the holy Saryu and Ganga river basins.'
      }
    ],
    importantFigures: [
      {
        name: 'Sage Yajnavalkya',
        role: 'Vedic Philosopher & Sage',
        description: 'Key philosophical mind of the Brihadaranyaka Upanishad and author of the Shatapatha Brahmana, who expounded non-dual metaphysics.'
      },
      {
        name: 'Gargi Vachaknavi & Maitreyi',
        role: 'Vedic Women Philosophers (Brahmavadinis)',
        description: 'Celebrated scholars who participated in high-level intellectual royal assemblies and debated fundamental metaphysical questions on the nature of reality.'
      },
      {
        name: 'Panini (c. 6th/5th Century BCE)',
        role: 'Father of Linguistics',
        description: 'Authored the Astadhyayi, a seminal generative grammar of Sanskrit consisting of 3,959 rules that remains a milestone in formal linguistic science.'
      }
    ],
    culturalContributions: [
      'Composition of the foundational Vedic corpus and the philosophical Upanishads that seeded Indian philosophical systems (Darshanas).',
      'Concepts of Dharma (righteous duty), Karma (cause and consequence), Samsara (cycle of rebirth), and Moksha (spiritual liberation).',
      'The Guru-Shishya parampara (mentor-disciple oral lineage) ensuring exact phonetic transmission of texts over millennia.',
      'The foundational roots of Ayurveda (traditional medicine) in the Atharvaveda and Sulba Sutras (early geometry for altar construction).'
    ],
    keyArtifactsOrMonuments: [
      'Rigvedic Suktas (Oral chant heritage recognized by UNESCO)',
      'Painted Grey Ware (PGW) pottery and early iron smelting kilns',
      'Sulba Sutras (Earliest geometric manuals detailing Pythagorean triplets)',
      'Brihadaranyaka and Chandogya Upanishadic manuscripts'
    ],
    historicalNuance:
      'The Vedic era was not static; it transformed over a millennium from pastoral tribal clans (Janas) centered in the northwest to complex stratified sedentary territorial states (Janapadas) with thriving metallurgical crafts across the eastern Gangetic plains.',
    heroImage:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Ancient manuscripts and philosophical traditions transmitted through rigorous scholarly lineages.',
    relatedStateIds: ['haryana', 'uttar-pradesh', 'bihar', 'punjab'],
    keyThemes: ['Upanishads', 'Sanskrit Linguistics', 'Philosophical Darshanas', 'Vedic Chanting']
  },
  {
    id: 'mahajanapadas-shramana',
    order: 3,
    period: 'Mahajanapadas & Shramana Era',
    hindiName: 'महाजनपद एवं श्रमण परंपरा (बौद्ध एवं जैन धर्म का उदय)',
    category: 'ancient',
    approximateDates: 'c. 600 BCE – c. 345 BCE',
    tagline: 'Second Urbanization, 16 Great Republics & Monarchies, and the Rise of Buddhism and Jainism',
    shortSummary:
      'An era of intense intellectual ferment and "Second Urbanization" in the Gangetic basin, witnessing the emergence of 16 great territorial states (Mahajanapadas)—both republics (Ganasanghas) and monarchies—alongside the philosophical revolutions of Buddhism, Jainism, and Ajivika.',
    majorDevelopments: [
      'Formation of the 16 Mahajanapadas, including Magadha, Kosala, Vatsa, Avanti, and the republican confederacy of the Vajji (Licchavis).',
      'Emergence of early democratic and oligarchic republics (Gana-Sanghas) with elected assemblies, voting tokens, and collective debate.',
      'Second Urbanization fueled by deep iron-plough agriculture, monetized coinage (punch-marked silver/copper coins), and trans-regional highway trade (Uttarapatha and Dakshinapatha).',
      'Rise of Shramana movements rejecting animal sacrifices and rigid social barriers, advocating Ahimsa (non-violence), ethical conduct, and inner meditation.',
      'Ascendance of Magadha under the Haryanka and Shishunaga dynasties, establishing capital hubs at Rajgir and Pataliputra.'
    ],
    importantPlaces: [
      {
        name: 'Rajgir (Rajagriha) & Nalanda',
        location: 'Nalanda district, Bihar',
        significance: 'First capital of Magadha ringed by cyclopean stone walls, site of Buddha’s discourses at Gridhrakuta and the First Buddhist Council.'
      },
      {
        name: 'Bodh Gaya',
        location: 'Gaya district, Bihar',
        significance: 'The sacred Bodhi tree where Siddhartha Gautama attained Enlightenment, becoming the Buddha.'
      },
      {
        name: 'Vaishali',
        location: 'Vaishali district, Bihar',
        significance: 'Important centre of the Vajji confederacy, associated with early republican political traditions and the life of Mahavira.'
      },
      {
        name: 'Ujjain (Avantika)',
        location: 'Madhya Pradesh',
        significance: 'Capital of the Avanti kingdom and premier astronomic meridian city on the southern Dakshinapatha trade route.'
      },
      {
        name: 'Taxila (Takshashila)',
        location: 'Gandhara (Northwestern Gateway)',
        significance: 'Ancient center of higher education and learning attracting scholars in medicine, statecraft, and philosophy from across Asia.'
      }
    ],
    importantFigures: [
      {
        name: 'Gautama Buddha (c. 563 – 483 BCE)',
        role: 'Founder of Buddhism',
        description: 'Delivered the First Sermon at Sarnath (Dhammacakkappavattana), teaching the Four Noble Truths and the Noble Eightfold Path emphasizing the Middle Way.'
      },
      {
        name: 'Vardhamana Mahavira (c. 599 – 527 BCE)',
        role: '24th Tirthankara of Jainism',
        description: 'Systematized Jain philosophy based on Ahimsa (absolute non-injury), Anekantavada (multiplicity of viewpoints), and Aparigraha (non-possessiveness).'
      },
      {
        name: 'King Bimbisara & Ajatashatru',
        role: 'Magadhan Emperors',
        description: 'Statesmen who laid the infrastructural, diplomatic, and military foundation that transformed Magadha into India’s paramount imperial power.'
      }
    ],
    culturalContributions: [
      'Foundations of Buddhist and Jain canonical literature (Tripitaka, Jain Agamas), preserved in Prakrit and Pali languages accessible to common people.',
      'Introduction of Punch-Marked Coins (Puranas/Karshapanas), standardizing regional and international currency systems.',
      'Philosophy of Ahimsa (non-violence) that permanently transformed Indian ethics, diet, and spiritual outlook.',
      'Pioneering of early rock-cut monastic caves (Barabar caves) and assembly halls.'
    ],
    keyArtifactsOrMonuments: [
      'Mahabodhi Temple Complex (Bodh Gaya)',
      'Cyclopean Wall of Rajgir (Bihar)',
      'Punch-Marked Silver Coins with 5-symbol punches',
      'Ashokan Pillar and Lion Stupa at Kolhua (Vaishali)'
    ],
    historicalNuance:
      'Mahajanapadas were not all autocratic monarchies; states like the Vajji confederacy, Malla, and Shakya practiced representative republican decision-making through assemblies (Sansthagara) where state policies and judicial cases were openly debated.',
    heroImage:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Stupas and monastic monuments dedicated to mindfulness, peace, and non-violence.',
    relatedStateIds: ['bihar', 'uttar-pradesh', 'madhya-pradesh'],
    keyThemes: ['Second Urbanization', 'Buddhism & Jainism', 'Early Republics', 'Monetized Economy']
  },
  {
    id: 'mauryan-empire',
    order: 4,
    period: 'Mauryan Empire',
    hindiName: 'मौर्य साम्राज्य (चाणक्य, चंद्रगुप्त एवं अशोक महान का युग)',
    category: 'classical',
    approximateDates: 'c. 322 BCE – c. 185 BCE',
    tagline: 'First Pan-Indian Empire, Arthashastra Statecraft & Ashoka’s Dhamma',
    shortSummary:
      'India’s first continent-spanning empire founded by Chandragupta Maurya and his mentor Chanakya, reaching its moral and cultural zenith under Emperor Ashoka the Great, who unified the subcontinent and propagated the policy of Dhamma, non-violence, and moral governance through rock and pillar edicts.',
    majorDevelopments: [
      'Political unification of virtually the entire Indian subcontinent stretching from Afghanistan/Balochistan to Karnataka and Bengal.',
      'Establishment of an efficient bureaucratic administration, revenue taxation, espionage network, and municipal systems outlined in Chanakya’s Arthashastra.',
      'Emperor Ashoka’s transformation following the Kalinga War (261 BCE), renouncing conquest by sword (Bherighosha) in favor of conquest by moral righteousness (Dhammaghosha).',
      'Construction of the Grand Trunk road network, roadside wells, shade trees, hospitals for both humans and animals, and rest houses.',
      'Dispatch of diplomatic and Buddhist emissaries across Sri Lanka, Greece, Egypt, Syria, and Southeast Asia.'
    ],
    importantPlaces: [
      {
        name: 'Pataliputra (Patna)',
        location: 'Bihar',
        significance: 'Imperial capital described by Greek ambassador Megasthenes as a magnificent fortified metropolis along the confluence of the Ganga and Son.'
      },
      {
        name: 'Sarnath',
        location: 'Varanasi, Uttar Pradesh',
        significance: 'Site of the Ashoka Lion Capital—the official National Emblem of India—and the magnificent Dhamek Stupa.'
      },
      {
        name: 'Sanchi',
        location: 'Raisen district, Madhya Pradesh',
        significance: 'Home to the Great Sanchi Stupa and monumental Torana gateways commissioned originally by Ashoka.'
      },
      {
        name: 'Dhauli & Jaugada',
        location: 'Odisha',
        significance: 'Sites of the famous Kalinga Rock Edicts where Ashoka expressed deep remorse and proclaimed all subjects as his children.'
      },
      {
        name: 'Junagadh',
        location: 'Gujarat',
        significance: 'Location of Ashokan rock inscriptions and the ancient Sudarshana water reservoir engineered under Chandragupta Maurya.'
      }
    ],
    importantFigures: [
      {
        name: 'Chandragupta Maurya',
        role: 'Founder of the Mauryan Empire',
        description: 'Defeated the Nanda Dynasty and the Greek Seleucid forces, creating a unified subcontinent before peacefully retiring as a Jain ascetic at Shravanabelagola.'
      },
      {
        name: 'Chanakya (Kautilya / Vishnugupta)',
        role: 'Royal Mentor & Prime Minister',
        description: 'Legendary strategist and polymath who authored the Arthashastra, a pioneering treatise on political science, diplomacy (Mandala theory), and economics.'
      },
      {
        name: 'Ashoka the Great (Devanampriya Priyadasi)',
        role: 'Third Mauryan Emperor',
        description: 'Universal ruler renowned for inscribing moral edicts in Prakrit, Greek, and Aramaic across India, advocating religious tolerance and universal peace.'
      },
      {
        name: 'Megasthenes',
        role: 'Greek Ambassador & Historian',
        description: 'Ambassador of Seleucus I Nicator at Pataliputra, author of the Indica detailing Mauryan military, society, and municipal governance.'
      }
    ],
    culturalContributions: [
      'Creation of the Lion Capital of Ashoka with the Dharmachakra, adopted as the Emblem of India and the central chakra of the National Flag.',
      'Invention and spread of monumental polished stone sculpture (Mauryan polish) seen in monolithic pillars and the Didarganj Yakshi.',
      'Standardization and dissemination of the Brahmi and Kharosthi scripts, forming the ancestral mother script of nearly all modern Indian writing systems.',
      'Sponsoring the Third Buddhist Council at Pataliputra and dispatching Sanghamitta and Mahinda to Sri Lanka with a branch of the sacred Bodhi tree.'
    ],
    keyArtifactsOrMonuments: [
      'The Lion Capital of Ashoka (Sarnath Museum)',
      'The Great Stupa at Sanchi (UNESCO World Heritage)',
      'Major Rock Edicts (Girnar, Dhauli, Shahbazgarhi, Maski)',
      'Barabar Hill Rock-cut Caves (Oldest surviving rock-cut architecture in India)',
      'Didarganj Yakshi (Patna Museum)'
    ],
    historicalNuance:
      'Ashoka’s "Dhamma" was not a sectarian imposition of Buddhist religious dogma, but an inclusive civic ethic advocating truthfulness, filial piety, mercy to servants, moderation in spending, and harmonious tolerance among all religious sects (Concord is best: Samavaya eva sadhuh).',
    heroImage:
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The Great Stupa at Sanchi, an enduring architectural marvel commissioned by the Mauryan Empire.',
    relatedStateIds: ['bihar', 'madhya-pradesh', 'odisha', 'uttar-pradesh', 'gujarat', 'karnataka'],
    keyThemes: ['Arthashastra', 'Lion Capital', 'Brahmi Script', 'Ashokan Edicts', 'Moral Governance']
  },
  {
    id: 'gupta-period',
    order: 5,
    period: 'Gupta Period & Classical Age',
    hindiName: 'गुप्त साम्राज्य एवं शास्त्रीय स्वर्ण युग',
    category: 'classical',
    approximateDates: 'c. 320 CE – c. 550 CE',
    tagline: 'Golden Age of Mathematics, Astronomy, Classical Sanskrit Literature & Temple Architecture',
    shortSummary:
      'Widely celebrated as the Classical Golden Age of India, marked by monumental breakthroughs in zero and decimal place-value mathematics, planetary astronomy, Ayurvedic surgery, immortal Sanskrit literature by Kalidasa, and the crystallization of classical Hindu temple architecture.',
    majorDevelopments: [
      'Mathematical revolution: Invention of the decimal place-value numeral system, the algebraic concept and arithmetic operations of zero (Shunya).',
      'Astronomical discoveries by Aryabhata: Earth’s spherical shape, axial rotation explaining day/night, solar/lunar eclipse mechanics, and accurate value of Pi (3.1416).',
      'Flourishing of Nalanda Mahavihara as an international residential university attracting thousands of scholars from China, Korea, Tibet, and Central Asia.',
      'Consolidation of North and Central India under Samudragupta (Napoleon of India) and Chandragupta II Vikramaditya.',
      'Evolution of Hindu temple architecture from flat-roofed shrines to elevated shikhara towers (Dashavatara Temple, Deogarh).'
    ],
    importantPlaces: [
      {
        name: 'Nalanda University',
        location: 'Bihar',
        significance: 'Pre-eminent ancient seat of higher Buddhist and secular learning housing three vast multi-story libraries (Ratnasagara, Ratnodadhi, Ratnaranjaka).'
      },
      {
        name: 'Ajanta Caves (Later Phase)',
        location: 'Aurangabad district, Maharashtra',
        significance: 'World-renowned masterwork of Buddhist mural frescoes depicting Jataka tales under the patronage of the Vakatakas (allied with Guptas).'
      },
      {
        name: 'Prayagraj (Allahabad Pillar)',
        location: 'Uttar Pradesh',
        significance: 'Inscribed with the famous Sanskrit Prashasti composed by court poet Harishena detailing the military campaigns of Samudragupta.'
      },
      {
        name: 'Iron Pillar of Delhi',
        location: 'Mehrauli, New Delhi',
        significance: 'A 7-meter high metallurgical marvel inscribed for King Chandra, demonstrating rustless forge-welded iron resisting corrosion for 1,600 years.'
      },
      {
        name: 'Deogarh & Bhitargaon',
        location: 'Uttar Pradesh',
        significance: 'Pioneering surviving brick and stone temples with intricate Vishnu sculptures and stepped shikhara structures.'
      }
    ],
    importantFigures: [
      {
        name: 'Aryabhata (476 – 550 CE)',
        role: 'Mathematician & Astronomer',
        description: 'Penned the Aryabhatiya, calculating solar year length (365.258 days), proposing heliocentric nuances, sine tables, and quadratic equations.'
      },
      {
        name: 'Kalidasa',
        role: 'Immortal Classical Sanskrit Dramatist & Poet',
        description: 'Authored masterworks including Shakuntala (Abhijnanashakuntalam), Meghaduta (The Cloud Messenger), and Raghuvamsha.'
      },
      {
        name: 'Varahamihira (505 – 587 CE)',
        role: 'Polymath & Astronomer',
        description: 'Authored the Panchasiddhantika and Brihat Samhita, compiling comprehensive knowledge on planetary paths, gemology, seasons, and botany.'
      },
      {
        name: 'Samudragupta & Chandragupta II (Vikramaditya)',
        role: 'Gupta Emperors',
        description: 'Patrons of arts, sciences, and music; Samudragupta was depicted playing the veena on his gold coins, while Vikramaditya hosted the legendary Navaratnas (Nine Gems).'
      }
    ],
    culturalContributions: [
      'Formulation of the decimal place-value system and zero, later transmitted through the Arab world to Europe as Indo-Arabic numerals.',
      'Immortal Sanskrit epics, drama, and the fables of the Panchatantra by Vishnu Sharma translated into dozens of world languages.',
      'Sushruta Samhita and Charaka Samhita medical advancements in cataract surgery, plastic rhinoplasty, and herbal pharmacology.',
      'Refinement of classical Indian sculpture characterized by serene spiritual expressions, transparent drapery, and haloed aureoles.'
    ],
    keyArtifactsOrMonuments: [
      'Iron Pillar of Delhi (Mehrauli)',
      'Ajanta Caves Murals (Padmapani and Vajrapani Bodhisattvas)',
      'Dashavatara Temple (Deogarh, Lalitpur)',
      'Gold Dinars with high artistic portraiture and Sanskrit inscriptions',
      'The Seated Buddha of Sarnath'
    ],
    historicalNuance:
      'While often described as a purely northern empire, the classical cultural achievements of this era were a pan-Indian phenomenon, deeply enriched by southern and western contemporary dynasties like the Vakatakas, Kadambas, and Pallavas who shared in this artistic renaissance.',
    heroImage:
        'https://unsplash.com/photos/ZP039_CRf3M/download?force=true',
    imageCaption: 'Ajanta Cave frescoes and classical Indian rock-cut sculptures.',
    relatedStateIds: ['bihar', 'uttar-pradesh', 'madhya-pradesh', 'maharashtra'],
    keyThemes: ['Invention of Zero', 'Aryabhata', 'Kalidasa', 'Nalanda University', 'Classical Sanskrit']
  },
  {
    id: 'medieval-indian-kingdoms',
    order: 6,
    period: 'Medieval Indian Kingdoms',
    hindiName: 'मध्यकालीन भारतीय राजवंश (चोल, चालुक्य, राष्ट्रकूट, सल्तनत एवं विजयनगर)',
    category: 'medieval',
    approximateDates: 'c. 6th Century CE – c. 16th Century CE',
    tagline: 'Imperial Chola Maritime Power, Dravidian Architecture, Bhakti Movement & Vijayanagara Splendor',
    shortSummary:
      'A dynamic millennium marked by magnificent regional empires across the Deccan and South (Cholas, Chalukyas, Rashtrakutas, Hoysalas, Vijayanagara), the rise of the Delhi Sultanate in the North, the trans-oceanic Indian Ocean trade, and the egalitarian spiritual revolution of the Bhakti and Sufi traditions.',
    majorDevelopments: [
      'Imperial Chola naval expeditions across the Bay of Bengal, securing maritime trade routes to Srivijaya (Indonesia/Malaysia) and Song Dynasty China.',
      'Engineering the Great Living Chola Temples with towering granite vimanas and the world-famous bronze Nataraja lost-wax statues.',
      'Flourishing of the Bhakti movement led by Alvars, Nayanars, Basaveshwara, Sant Kabir, Guru Nanak, and Mirabai, democratizing devotion without caste barriers.',
      'Rise of the Delhi Sultanate (Mamluk, Khalji, Tughlaq, Sayyid, Lodi dynasties), introducing Indo-Islamic architecture, vaulted domes, paper manufacture, and Persian historiography.',
      'Zenith of the Vijayanagara Empire (1336–1646) as a bulwark of southern arts, Sanskrit and Telugu literature, and sprawling urban fortification at Hampi.'
    ],
    importantPlaces: [
      {
        name: 'Thanjavur & Gangaikonda Cholapuram',
        location: 'Tamil Nadu',
        significance: 'Capitals of the Imperial Cholas, site of the Brihadisvara Temple—a 216-foot high monolithic granite vimana built without binding mortar.'
      },
      {
        name: 'Hampi (Vijayanagara)',
        location: 'Vijayanagara district, Karnataka',
        significance: 'UNESCO World Heritage capital city on the Tungabhadra River, renowned for the stone chariot, Virupaksha Temple, and international diamond bazaars.'
      },
      {
        name: 'Ellora (Kailasa Temple - Cave 16)',
        location: 'Chhatrapati Sambhaji Nagar, Maharashtra',
        significance: 'World’s largest monolithic rock-cut monument carved top-down from a single basalt cliff under Rashtrakuta King Krishna I.'
      },
      {
        name: 'Khajuraho & Konark Sun Temple',
        location: 'Madhya Pradesh & Odisha',
        significance: 'Pinnacles of Nagara architectural style with intricate stone celestial dancers and chariot wheels symbolizing cosmic time.'
      },
      {
        name: 'Qutb Complex & Siri Fort',
        location: 'New Delhi',
        significance: 'Historic architectural complex featuring the 72.5m Qutb Minar, Alai Darwaza, and earliest true arches in northern India.'
      }
    ],
    importantFigures: [
      {
        name: 'Rajaraja Chola I & Rajendra Chola I',
        role: 'Imperial Chola Monarchs',
        description: 'Visionaries who commissioned the Brihadisvara Temple, surveyed agrarian land, decentralized village democracy (Uttiramerur inscriptions), and projected naval expeditions.'
      },
      {
        name: 'Krishnadevaraya (r. 1509 – 1529)',
        role: 'Emperor of Vijayanagara',
        description: 'Celebrated ruler, poet, and patron of the Ashtadiggajas (Eight Telugu Poets), author of the epic poem Amuktamalyada.'
      },
      {
        name: 'Adi Shankaracharya & Ramanuja',
        role: 'Philosophers and Reformers',
        description: 'Founders of Advaita (Non-dualism) and Vishishtadvaita (Qualified Non-dualism) who revitalized Indian philosophical debate across all four cardinal Mathas.'
      },
      {
        name: 'Sant Kabir, Guru Nanak & Mirabai',
        role: 'Bhakti Saints & Spiritual Pioneers',
        description: 'Revolutionary voices who composed devotional poetry in vernacular languages, preaching universal love, oneness of the divine, and moral simplicity.'
      }
    ],
    culturalContributions: [
      'Invention of the iconic Chola Bronze Nataraja (Cosmic Dancer), celebrated globally for harmonizing science, rhythm, and spirituality.',
      'Democratic village governance with secret ballot elections recorded on the stone walls of the Uttiramerur temple in Tamil Nadu.',
      'Indo-Islamic architectural fusion: Arcuated arches, fluted domes, geometric jali screens, and minarets.',
      'Evolution of classical Indian music into the distinct Hindustani (North) and Carnatic (South) classical traditions.'
    ],
    keyArtifactsOrMonuments: [
      'Brihadisvara Temple (Thanjavur)',
      'Kailasa Temple at Ellora (Rashtrakutas)',
      'Stone Chariot & Vitthala Temple (Hampi)',
      'Bronze Nataraja of the Chola Dynasty',
      'Sun Temple at Konark & Jagannath Temple at Puri',
      'Qutb Minar & Alai Darwaza (Delhi)'
    ],
    historicalNuance:
      'Medieval India was not a static confrontation of monolithic identities, but an intensely interconnected world of cultural synthesis, bustling trans-oceanic spice and textile trades, bilingual inscriptions, and mutual architectural assimilation between North, South, and Deccan realms.',
    heroImage:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The majestic granite towers and Dravidian stone artistry of South Indian temples.',
    relatedStateIds: ['tamil-nadu', 'karnataka', 'maharashtra', 'odisha', 'madhya-pradesh', 'delhi'],
    keyThemes: ['Chola Navy', 'Hampi & Vijayanagara', 'Bhakti Movement', 'Dravidian Architecture']
  },
  {
    id: 'mughal-period',
    order: 7,
    period: 'Mughal Period',
    hindiName: 'मुग़ल साम्राज्य (बाबर से औरंगज़ेब एवं उत्तर-मुग़ल युग)',
    category: 'early-modern',
    approximateDates: '1526 CE – 1857 CE (Imperial Zenith: 1556 – 1707 CE)',
    tagline: 'Ganga-Jamuni Tehzeeb, Architectural Wonders & Global Textile Empire',
    shortSummary:
      'An era that unified large swathes of the subcontinent under a centralized administrative framework, generating immense wealth through cotton and silk exports (producing roughly 25% of world GDP in 1700), while fostering the architectural splendor of the Taj Mahal and the syncretic Ganga-Jamuni cultural heritage.',
    majorDevelopments: [
      'Establishment of the empire following the First Battle of Panipat (1526) by Babur, and consolidation by Akbar through diplomatic alliances with Rajput states.',
      'Implementation of Raja Todar Mal’s Zabt and Dahsala land revenue assessment systems and the Mansabdari administrative hierarchy.',
      'Flourishing of manufacturing and maritime commerce; Indian calico, muslins, and spices dominated global trade networks from Surat to Europe.',
      'Peak of monumental marble and red sandstone architecture under Shah Jahan, resulting in world-famous monuments.',
      'Compilation of monumental Persian and translated Sanskrit texts (Razmnama / Mahabharata, Sirr-i-Akbar / Upanishads by Prince Dara Shikoh).'
    ],
    importantPlaces: [
      {
        name: 'Agra (Fort & Taj Mahal)',
        location: 'Uttar Pradesh',
        significance: 'Primary imperial capital housing the white marble Taj Mahal, Agra Fort, and the tomb of Itimad-ud-Daulah.'
      },
      {
        name: 'Fatehpur Sikri',
        location: 'Agra district, Uttar Pradesh',
        significance: 'Akbar’s planned ceremonial red sandstone city featuring the Buland Darwaza, Panch Mahal, and the tomb of Sufi saint Salim Chishti.'
      },
      {
        name: 'Delhi (Shahjahanabad & Red Fort)',
        location: 'Old Delhi',
        significance: 'Walled capital built by Shah Jahan with the Red Fort (Lal Qila), Jama Masjid, and the bustling Chandni Chowk avenue.'
      },
      {
        name: 'Lahore & Kashmir Gardens',
        location: 'Northern Frontier & Kashmir Valley',
        significance: 'Famed for terraced Persian Charbagh pleasure gardens like Shalimar Bagh and Nishat Bagh.'
      },
      {
        name: 'Surat & Murshidabad',
        location: 'Gujarat & Bengal',
        significance: 'Global financial and textile emporiums shipping fine cottons, silks, and indigo across Europe and Asia.'
      }
    ],
    importantFigures: [
      {
        name: 'Akbar the Great (r. 1556 – 1605)',
        role: 'Third Mughal Emperor',
        description: 'Statesman who abolished the pilgrim tax and Jizya, instituted Sulh-i-Kul (universal peace), and hosted interfaith debates at the Ibadat Khana with Hindu, Jain, Parsi, Christian, and Muslim scholars.'
      },
      {
        name: 'Shah Jahan (r. 1628 – 1658)',
        role: 'Fifth Mughal Emperor & Master Builder',
        description: 'Patron of peak classical Mughal architecture who commissioned the Taj Mahal in memory of Mumtaz Mahal, the Peacock Throne, and the Red Fort.'
      },
      {
        name: 'Dara Shikoh (1615 – 1659)',
        role: 'Crown Prince & Polymath Philosopher',
        description: 'Author of Majma-ul-Bahrain (Mingling of the Two Oceans), who translated 50 Upanishads into Persian, introducing Indian philosophy to the Western world.'
      },
      {
        name: 'Tansen & Birbal',
        role: 'Navaratnas (Court Luminaries)',
        description: 'Legendary musical maestro Tansen who enriched classical Hindustani Ragas (Miyan ki Todi, Darbari Kanada) and wise counselor Birbal.'
      }
    ],
    culturalContributions: [
      'Creation of the Taj Mahal, widely celebrated as a jewel of world heritage and symmetrical marble craftsmanship.',
      'Development of Mughal miniature painting and workshops fusing Persian, indigenous Rajasthani, and European techniques.',
      'Birth and refinement of Urdu poetry, Ghazals, and courtly etiquette (Tehzeeb) in Lucknow and Delhi.',
      'Introduction of Mughlai culinary traditions blending saffron, nuts, slow-cooked biryanis, kebabs, and tandoori techniques.',
      'Creation of the Charbagh geometric four-quadrant garden design mirroring paradise.'
    ],
    keyArtifactsOrMonuments: [
      'The Taj Mahal (Agra - UNESCO World Heritage)',
      'The Red Fort (Lal Qila, Delhi)',
      'Buland Darwaza & Jama Masjid (Fatehpur Sikri)',
      'Humayun’s Tomb (Delhi - Pioneer of the double dome)',
      'Padshahnama and Akbarnama illustrated manuscripts'
    ],
    historicalNuance:
      'The Mughal era witnessed internal tensions over religious policy and imperial overreach in the Deccan under Aurangzeb, triggering widespread economic friction, agrarian revolts (Jats, Satnamis), and the rise of resilient regional powers like the Maratha Confederacy and the Sikhs.',
    heroImage:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The iconic Taj Mahal in Agra, a masterpiece of symmetry and marble craftsmanship.',
    relatedStateIds: ['uttar-pradesh', 'delhi', 'rajasthan', 'jammu-and-kashmir', 'west-bengal'],
    keyThemes: ['Mughal Architecture', 'Ganga-Jamuni Tehzeeb', 'Sulh-i-Kul', 'Hindustani Classical Music']
  },
  {
    id: 'regional-kingdoms',
    order: 8,
    period: 'Regional Kingdoms & Empires',
    hindiName: 'क्षेत्रीय साम्राज्य एवं शक्तियाँ (मराठा, सिख, अहोम, राजपूत एवं त्रावणकोर)',
    category: 'early-modern',
    approximateDates: 'c. 17th Century – 19th Century CE',
    tagline: 'The Maratha Swarajya, Sikh Misl Sovereignty, Ahom Valley Defense & Princely Renaissance',
    shortSummary:
      'An era defined by fierce regional sovereignty and indigenous military genius: Chhatrapati Shivaji Maharaj founding the Maratha Empire, the Sikh Misls and Maharaja Ranjit Singh uniting Punjab, Lachit Borphukan defending Assam, Rajput chivalry, and the Travancore and Mysore kingdoms.',
    majorDevelopments: [
      'Foundation of Hindavi Swarajya by Chhatrapati Shivaji Maharaj through innovative Ganimi Kava (guerrilla naval and mountain warfare) in the Sahyadri mountains.',
      'Expansion of the Maratha Confederacy across Central and Northern India under Peshwa Baji Rao I, establishing control from Attock to Cuttack.',
      'Defense of Northeast India by Ahom general Lachit Borphukan at the Battle of Saraighat (1671), preserving Assamese indigenous sovereignty.',
      'Foundation of the Khalsa by Guru Gobind Singh (1699) and the establishment of the unified Sikh Empire under Maharaja Ranjit Singh (Sher-e-Punjab).',
      'Astronomical observatories (Jantar Mantar) built by Maharaja Sawai Jai Singh II of Jaipur, and the defeat of Dutch colonial forces by King Marthanda Varma of Travancore (Battle of Colachel, 1741).'
    ],
    importantPlaces: [
      {
        name: 'Raigad Fort & Pune (Shaniwar Wada)',
        location: 'Maharashtra',
        significance: 'Capital of Shivaji’s sovereign coronation (1674) and subsequent administrative headquarters of the Peshwas.'
      },
      {
        name: 'Amritsar & Lahore',
        location: 'Punjab',
        significance: 'Spiritual capital at Harmandir Sahib (Golden Temple) adorned with gold leaf by Maharaja Ranjit Singh, and imperial capital Lahore.'
      },
      {
        name: 'Jaipur & Udaipur',
        location: 'Rajasthan',
        significance: 'Pink City planned on Shilpa Shastra grid system by Vidyadhar Bhattacharya and City Palace on Lake Pichola.'
      },
      {
        name: 'Sivasagar & Saraighat',
        location: 'Assam',
        significance: 'Historic capital of the 600-year Ahom Kingdom renowned for massive Shiva dol temples and naval river defenses.'
      },
      {
        name: 'Srirangapatna & Padmanabhapuram',
        location: 'Karnataka & Kerala/Tamil Nadu',
        significance: 'Capitals of Hyder Ali/Tipu Sultan (pioneering Mysorean iron-cased rockets) and the Travancore Kingdom.'
      }
    ],
    importantFigures: [
      {
        name: 'Chhatrapati Shivaji Maharaj (1630 – 1680)',
        role: 'Founder of the Maratha Empire',
        description: 'Visionary strategist, naval pioneer (Father of the Indian Navy), and just administrator who codified Marathi administration and built sea forts like Sindhudurg.'
      },
      {
        name: 'Maharaja Ranjit Singh (1780 – 1839)',
        role: 'Emperor of the Sikh Empire',
        description: 'Famed as the Lion of Punjab, who created a modern secular army (Fauj-i-Khas), respected all faiths, and gilded the Harmandir Sahib.'
      },
      {
        name: 'Lachit Borphukan (1622 – 1672)',
        role: 'Ahom General & Assamese Hero',
        description: 'Celebrated commander who defeated superior Mughal forces at the naval Battle of Saraighat on the Brahmaputra River, prioritizing duty over kin.'
      },
      {
        name: 'Ahilyabai Holkar (1725 – 1795)',
        role: 'Queen of Malwa & Philanthropist',
        description: 'Enlightened ruler who rebuilt sacred temples, ghats, and pilgrim infrastructure across all four corners of India from Varanasi to Somnath and Rameshwaram.'
      }
    ],
    culturalContributions: [
      'Revitalization and rebuilding of ancient pilgrim ghats and temples destroyed during medieval conflicts across the subcontinent.',
      'Maratha hill-fort architecture (Murud-Janjira, Sindhudurg, Pratapgad) engineering coastal defense and natural contours.',
      'Sikh artistic traditions, Gurmukhi literature, and the egalitarian community kitchen (Langar) feeding all regardless of caste or creed.',
      'Planning of Jaipur as India’s first modern planned heritage city, equipped with stone equinoctial sundials at Jantar Mantar.'
    ],
    keyArtifactsOrMonuments: [
      'Raigad & Sindhudurg Forts (Maharashtra)',
      'Harmandir Sahib Golden Temple (Amritsar)',
      'Jantar Mantar Observatories (Jaipur & Delhi - UNESCO)',
      'Rang Ghar and Talatal Ghar (Sivasagar, Assam)',
      'Mysore Palace & Padmanabhaswamy Temple'
    ],
    historicalNuance:
      'The 18th century was once Eurocentrically described as an era of pure chaotic decline; modern historians recognize it as a vibrant period of regional military modernization, dynamic indigenous state formation, and decentralized commercial flourishing before European annexation.',
    heroImage:
      'https://images.unsplash.com/photo-1609137144822-49339e8039c3?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Hill forts and grand defensive citadels of the Maratha and Rajput eras.',
    relatedStateIds: ['maharashtra', 'punjab', 'rajasthan', 'assam', 'kerala', 'karnataka', 'madhya-pradesh'],
    keyThemes: ['Maratha Swarajya', 'Sikh Empire', 'Ahom Kingdom', 'Ahilyabai Holkar', 'Hill Forts']
  },
  {
    id: 'colonial-period',
    order: 9,
    period: 'Colonial Period & British Raj',
    hindiName: 'औपनिवेशिक काल (ईस्ट इंडिया कंपनी एवं ब्रिटिश राज)',
    category: 'colonial',
    approximateDates: '1757 CE – 1947 CE',
    tagline: 'Company Annexation, Economic Deindustrialization & The Battle for Reclamation',
    shortSummary:
      'A transformative and tragic two centuries beginning with the East India Company’s victory at the Battle of Plassey (1757), transforming into direct British Crown rule after 1857, characterized by economic drain of wealth, devastating famines, railway modernization for resource extraction, and early socio-religious reform movements.',
    majorDevelopments: [
      'Battle of Plassey (1757) and Battle of Buxar (1764) granting the East India Company Diwani (revenue collecting) rights over Bengal, Bihar, and Odisha.',
      'Enactment of the Permanent Settlement (1793), Subsidiary Alliance, and the Doctrine of Lapse to systematically annex princely states.',
      'Severe economic drain and deindustrialization of India’s traditional handicraft and handloom textile industries, turning India from an exporter of finished goods into an exporter of raw materials.',
      'The Great Revolt of 1857 (First War of Indian Independence) leading to the dissolution of the East India Company and direct governance by the British Crown.',
      'Construction of the Indian Railways, telegraph lines, postal network, modern universities (Calcutta, Bombay, Madras, 1857), and civil services primarily designed to consolidate colonial control and extract resources.'
    ],
    importantPlaces: [
      {
        name: 'Kolkata (Calcutta)',
        location: 'West Bengal',
        significance: 'Capital of the British Indian Empire until 1911, center of the Bengal Renaissance, Fort William, and Victoria Memorial.'
      },
      {
        name: 'Meerut & Jhansi',
        location: 'Uttar Pradesh',
        significance: 'Epicenters of the 1857 uprising led by sepoys and the legendary warrior Queen Rani Lakshmibai of Jhansi.'
      },
      {
        name: 'Mumbai (Victoria Terminus / CSMT)',
        location: 'Maharashtra',
        significance: 'First passenger railway route (Bombay to Thane, 1853) and maritime hub for raw cotton export during the American Civil War.'
      },
      {
        name: 'Chennai (Fort St. George)',
        location: 'Tamil Nadu',
        significance: 'First fortified English settlement in India (1644) and administrative seat of the Madras Presidency.'
      },
      {
        name: 'New Delhi (Lutyens’ Delhi)',
        location: 'Delhi',
        significance: 'New imperial capital inaugurated in 1931 featuring the Rashtrapati Bhavan (Viceroy’s House) and Parliament House.'
      }
    ],
    importantFigures: [
      {
        name: 'Rani Lakshmibai of Jhansi (1828 – 1858)',
        role: 'Leader of the 1857 Uprising',
        description: 'The valorous queen who fought British forces under Hugh Rose to defend Jhansi, becoming an immortal symbol of Indian resistance.'
      },
      {
        name: 'Raja Ram Mohan Roy (1772 – 1833)',
        role: 'Father of Modern Indian Renaissance',
        description: 'Social reformer who founded the Brahmo Samaj, campaigned successfully to ban Sati (1829), and championed modern rational education alongside Indian languages.'
      },
      {
        name: 'Dadabhai Naoroji (1825 – 1917)',
        role: 'The Grand Old Man of India & Economist',
        description: 'First Indian elected to the British Parliament; authored Poverty and Un-British Rule in India, proving the catastrophic "Drain of Wealth" theory.'
      },
      {
        name: 'Swami Vivekananda (1863 – 1902)',
        role: 'Spiritual Ambassador & Reformer',
        description: 'Delivered his historic 1893 address at the Parliament of Religions in Chicago, introducing Vedanta and Yoga to the West while revitalizing self-confidence in India.'
      }
    ],
    culturalContributions: [
      'The 19th-century Indian Renaissance sparking socio-religious reforms (abolition of Sati, widow remarriage acts, female literacy drives).',
      'Establishment of the Archaeological Survey of India (ASI) under Alexander Cunningham, conserving historic monuments like Sanchi and Ajanta.',
      'Indo-Saracenic architectural style blending Gothic revivals with Mughal domes and Rajput chhatris (e.g., Gateway of India, CSMT).',
      'Birth of the modern Indian press and bilingual journalism fostering nationwide public discourse and political awakening.'
    ],
    keyArtifactsOrMonuments: [
      'Chhatrapati Shivaji Maharaj Terminus (formerly Victoria Terminus, Mumbai)',
      'Victoria Memorial (Kolkata)',
      'Gateway of India (Mumbai)',
      'Rashtrapati Bhavan & India Gate (New Delhi)',
      'Early steam locomotives and postal stamps (Scinde Dawk)'
    ],
    historicalNuance:
      'Colonial administrative modernizations (railways, legal codes, English education) were primarily implemented to facilitate military control, resource extraction, and raw material export rather than humanitarian philanthropy, and were accompanied by repeated catastrophic famines (1770, 1876, 1899, 1943).',
    heroImage:
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Indo-Saracenic architectural monuments built during the late colonial era.',
    relatedStateIds: ['west-bengal', 'maharashtra', 'uttar-pradesh', 'tamil-nadu', 'delhi'],
    keyThemes: ['1857 Revolt', 'Drain of Wealth', 'Bengal Renaissance', 'Swami Vivekananda']
  },
  {
    id: 'independence-movement',
    order: 10,
    period: 'Indian Independence Movement',
    hindiName: 'भारतीय स्वतंत्रता संग्राम (गांधी, बोस, भगत सिंह एवं जन-आंदोलन)',
    category: 'colonial',
    approximateDates: '1885 CE – 1947 CE',
    tagline: 'Satyagraha, Ahimsa, Revolutionary Sacrifice & The Mass Struggle for Purna Swaraj',
    shortSummary:
      'A multi-stream mass movement that mobilized hundreds of millions of Indians across all religions, regions, and social strata, combining Mahatma Gandhi’s non-violent Satyagraha campaigns, the revolutionary fervor of Bhagat Singh and Chandrashekhar Azad, and Netaji Subhas Chandra Bose’s Indian National Army.',
    majorDevelopments: [
      'Foundation of the Indian National Congress (1885) and the Swadeshi Movement (1905) protesting the Partition of Bengal.',
      'Mahatma Gandhi’s return to India (1915) and his grassroots Champaran, Kheda, and Ahmedabad Satyagrahas empowering peasants and workers.',
      'Outrage over the Jallianwala Bagh Massacre (1919) catalyzing the nationwide Non-Cooperation Movement (1920–22) and Khilafat alliance.',
      'Adoption of the historic Purna Swaraj (Complete Independence) resolution at Lahore (1929) and the Salt Satyagraha (Dandi March, 1930).',
      'The 1942 Quit India Movement ("Do or Die") and Netaji Subhas Chandra Bose leading the Azad Hind Fauj (INA) to liberate India militarily.'
    ],
    importantPlaces: [
      {
        name: 'Sabarmati & Dandi',
        location: 'Gujarat',
        significance: 'Gandhi’s ashram headquarters and destination of the 241-mile Salt March that broke the colonial salt tax monopoly.'
      },
      {
        name: 'Jallianwala Bagh',
        location: 'Amritsar, Punjab',
        significance: 'Sacred memorial where hundreds of unarmed peaceful civilians were massacred by Brigadier-General Dyer on Baisakhi in 1919.'
      },
      {
        name: 'Cellular Jail (Kala Pani)',
        location: 'Port Blair, Andaman & Nicobar Islands',
        significance: 'Notorious colonial penal settlement where thousands of Indian freedom fighters endured solitary confinement and hard labor.'
      },
      {
        name: 'Bardoli & Champaran',
        location: 'Gujarat & Bihar',
        significance: 'Key agrarian peasant satyagrahas led by Sardar Vallabhbhai Patel (earning the title "Sardar") and Mahatma Gandhi.'
      },
      {
        name: 'Moirang',
        location: 'Bishnupur district, Manipur',
        significance: 'Historic site where the Indian National Army (INA) under Netaji hoisted the Indian tricolor on Indian soil for the first time in April 1944.'
      }
    ],
    importantFigures: [
      {
        name: 'Mahatma Gandhi (Mohandas Karamchand Gandhi)',
        role: 'Father of the Nation',
        description: 'Pioneered Satyagraha (soul-force / truthful non-violent resistance), mobilizing peasants, women, and the working classes while leading the Salt March and Quit India.'
      },
      {
        name: 'Netaji Subhas Chandra Bose',
        role: 'Supreme Commander, Azad Hind Fauj (INA)',
        description: 'Visionary leader who formed the Provisional Government of Free India (Azad Hind) and rallied the INA with the call "Give me blood, and I will give you freedom!"'
      },
      {
        name: 'Bhagat Singh, Sukhdev & Rajguru',
        role: 'Revolutionary Martyrs',
        description: 'Young patriots of the Hindustan Socialist Republican Association (HSRA) who embraced martyrdom with the slogan "Inquilab Zindabad!" (Long Live the Revolution).'
      },
      {
        name: 'Sardar Vallabhbhai Patel',
        role: 'The Iron Man of India',
        description: 'Master organizer of peasant satyagrahas who later integrated over 565 princely states into a unified independent Indian Union.'
      },
      {
        name: 'Sarojini Naidu, Aruna Asaf Ali & Matangini Hazra',
        role: 'Women Leaders of the Movement',
        description: 'Trailblazers who led mass protest marches, hoisted the National Flag during Quit India, and broke gender barriers.'
      }
    ],
    culturalContributions: [
      'Popularization of the Charkha (spinning wheel) and Khadi as symbols of self-reliance (Swavalamban) and national dignity.',
      'Composition of immortal patriotic anthems like Rabindranath Tagore’s Jana Gana Mana and Bankim Chandra Chattopadhyay’s Vande Mataram.',
      'Massive participation of women in the public political sphere, permanently altering the trajectory of Indian social reform.',
      'Inspiration for anti-colonial movements across Africa, Asia, and the American Civil Rights Movement led by Martin Luther King Jr.'
    ],
    keyArtifactsOrMonuments: [
      'Sabarmati Ashram & Hriday Kunj (Ahmedabad)',
      'Jallianwala Bagh Memorial (Amritsar)',
      'Cellular Jail National Memorial (Port Blair)',
      'INA Memorial Complex (Moirang, Manipur)',
      'August Kranti Maidan (Mumbai)'
    ],
    historicalNuance:
      'The Indian Independence Movement was not a single monolithic campaign, but a confluence of complementary strategies: mass non-violent civil disobedience, revolutionary armed resistance, labor and peasant unions, mutinies in the Royal Indian Navy (1946), and international diplomatic pressures.',
    heroImage:
      'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The National Flag of India and sacred memorials honoring the martyrs of freedom.',
    relatedStateIds: ['gujarat', 'punjab', 'bihar', 'maharashtra', 'west-bengal', 'andaman-and-nicobar-islands', 'manipur'],
    keyThemes: ['Satyagraha & Ahimsa', 'Purna Swaraj', 'Netaji & INA', 'Bhagat Singh', 'Sardar Patel']
  },
  {
    id: 'independence-and-republic',
    order: 11,
    period: 'Independence & The Republic of India',
    hindiName: 'स्वतंत्रता, संविधान एवं भारतीय गणतंत्र का निर्माण',
    category: 'modern',
    approximateDates: '1947 CE – 1991 CE',
    tagline: 'Integration of 565 Princely States, Dr. Ambedkar’s Constitution & Democratic Foundation',
    shortSummary:
      'The momentous founding era beginning with the "Tryst with Destiny" on 15 August 1947, overcoming the tragedy of Partition, integrating 565 princely states into one Union, adopting the world’s longest written democratic Constitution drafted by Dr. B.R. Ambedkar, and achieving food security through the Green and White Revolutions.',
    majorDevelopments: [
      'Independence from British colonial rule on 15 August 1947, accompanied by the trauma and resettlement of millions during Partition.',
      'Diplomatic integration of 565+ princely states into the Indian Union orchestrated by Deputy Prime Minister Sardar Vallabhbhai Patel and V.P. Menon.',
      'Adoption of the Constitution of India on 26 November 1949 and its enactment on 26 January 1950, establishing India as a sovereign democratic Republic.',
      'Conducting the first universal adult franchise general elections (1951–52) with over 173 million eligible voters, establishing India as the world’s largest democracy.',
      'Establishment of premier scientific and industrial institutions: IITs, IIMs, AIIMS, ISRO (under Dr. Vikram Sarabhai), BARC (under Dr. Homi Bhabha), and the Green (Dr. M.S. Swaminathan) & White (Dr. Verghese Kurien) Revolutions.'
    ],
    importantPlaces: [
      {
        name: 'Parliament House & Kartavya Path',
        location: 'New Delhi',
        significance: 'Heart of Indian constitutional democracy where the Constituent Assembly drafted the foundational charter of the Republic.'
      },
      {
        name: 'Bhakra Nangal Dam',
        location: 'Himachal Pradesh / Punjab',
        significance: 'One of independent India’s earliest monumental hydroelectric projects, famously hailed by Jawaharlal Nehru as the "Temple of Resurgent India."'
      },
      {
        name: 'Thumba & Sriharikota',
        location: 'Kerala & Andhra Pradesh',
        significance: 'Birthplaces of India’s indigenous space program where early sounding rockets evolved into the Satish Dhawan Space Centre.'
      },
      {
        name: 'Statue of Unity (Kevadia)',
        location: 'Narmada district, Gujarat',
        significance: 'World’s tallest statue (182 meters) dedicated to Sardar Vallabhbhai Patel commemorating the unification of India.'
      },
      {
        name: 'Chandigarh',
        location: 'Punjab / Haryana',
        significance: 'Independent India’s first modernist planned city designed by Le Corbusier, symbolizing forward-looking urban design.'
      }
    ],
    importantFigures: [
      {
        name: 'Dr. B.R. Ambedkar (Babasaheb)',
        role: 'Chief Architect of the Indian Constitution',
        description: 'Visionary jurist, social reformer, and first Law Minister who crafted a progressive Constitution guaranteeing fundamental rights, universal adult suffrage, and affirmative action.'
      },
      {
        name: 'Jawaharlal Nehru',
        role: 'First Prime Minister of India',
        description: 'Led the nation during its formative post-independence decades, establishing democratic traditions, non-alignment foreign policy, and premier scientific institutes.'
      },
      {
        name: 'Dr. Vikram Sarabhai & Dr. Homi Bhabha',
        role: 'Fathers of Indian Space and Nuclear Science',
        description: 'Scientific visionaries who laid the bedrock for ISRO, atomic research, and civilian technological self-reliance.'
      },
      {
        name: 'Dr. M.S. Swaminathan & Dr. Verghese Kurien',
        role: 'Pioneers of Green & White Revolutions',
        description: 'Agricultural scientists who transformed India from a famine-vulnerable, food-importing country into a self-sufficient grain producer and world’s largest milk producer.'
      }
    ],
    culturalContributions: [
      'Adoption of the Ashoka Lion Capital and the motto "Satyameva Jayate" (Truth Alone Triumphs) from the Mundaka Upanishad.',
      'Establishment of the Sahitya Akademi, Sangeet Natak Akademi, and Lalit Kala Akademi to preserve and foster India’s vast classical and folk arts.',
      'Creation of the world’s most linguistically diverse and legally resilient democratic institutional framework.',
      'Golden era of Indian parallel and popular cinema, with Satyajit Ray winning universal international acclaim with the Pather Panchali trilogy.'
    ],
    keyArtifactsOrMonuments: [
      'Original Calligraphed Constitution of India (Illustrated by Nandalal Bose)',
      'Statue of Unity (Gujarat)',
      'Bhakra Nangal & Hirakud Multipurpose Dams',
      'Aryabhata Satellite (India’s first satellite, 1975)',
      'National War Memorial (New Delhi)'
    ],
    historicalNuance:
      'Western commentators in the 1950s predicted that a poor, newly partitioned country with hundreds of languages and religions could never sustain universal democracy; India proved them wrong, cementing institutional secularism, civilian military oversight, and peaceful transfers of power through regular elections.',
    heroImage:
      'https://images.unsplash.com/photo-1596405835955-465de5c3dfb7?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The iconic Red Fort and Parliament of India, emblems of sovereign constitutional democracy.',
    relatedStateIds: ['delhi', 'gujarat', 'punjab', 'andhra-pradesh', 'kerala', 'maharashtra'],
    keyThemes: ['Indian Constitution', 'Dr. B.R. Ambedkar', 'Universal Suffrage', 'Green Revolution', 'ISRO']
  },
  {
    id: 'modern-india',
    order: 12,
    period: 'Modern India (21st Century Bharat)',
    hindiName: 'आधुनिक भारत (इक्कीसवीं सदी का आत्मनिर्भर भारत)',
    category: 'modern',
    approximateDates: '1991 CE – Present',
    tagline: 'Economic Liberalization, Digital Public Infrastructure, Space Odyssey & Global Leadership',
    shortSummary:
      'The contemporary era marked by the 1991 economic reforms transforming India into one of the world’s fastest-growing major economies, pioneering Digital Public Infrastructure (UPI, Aadhaar), landing Chandrayaan-3 on the lunar south pole, and asserting leadership as the voice of the Global South.',
    majorDevelopments: [
      '1991 Economic Liberalization dismantling the license raj, integrating India with the global marketplace, and giving rise to a world-class IT software industry.',
      'Revolutionary rollout of Digital Public Infrastructure (India Stack): Unified Payments Interface (UPI) processing over 10 billion transactions monthly, Aadhaar, and DigiLocker.',
      'Historic space triumphs by ISRO: Chandrayaan-3 becoming the first mission to land near the Moon’s south pole, Mangalyaan Mars Orbiter, and the Aditya-L1 solar observatory.',
      'Rapid infrastructure expansion: Vande Bharat Express trains, world-class expressways, renewable solar capacity expansion, and modern international airports.',
      'Assuming major global diplomatic leadership including the G20 Presidency (2023) under the theme "Vasudhaiva Kutumbakam" (One Earth, One Family, One Future).'
    ],
    importantPlaces: [
      {
        name: 'Bengaluru (Silicon Valley of India)',
        location: 'Karnataka',
        significance: 'Global IT hub, biotechnology capital, and startup epicenter home to over 40 Indian unicorn tech companies.'
      },
      {
        name: 'ISRO Telemetry & Launch Centres',
        location: 'Bengaluru & Sriharikota',
        significance: 'Mission operations centers for lunar, planetary, and satellite communication missions.'
      },
      {
        name: 'GIFT City & Mumbai',
        location: 'Gujarat & Maharashtra',
        significance: 'India’s premier financial hubs, international bullion exchanges, and headquarters of the Bombay Stock Exchange (BSE).'
      },
      {
        name: 'Hyderabad (Cyberabad) & Gurugram',
        location: 'Telangana & Haryana',
        significance: 'Key pharmaceutical, software engineering, and corporate innovation clusters.'
      },
      {
        name: 'Bharat Mandapam & Yashobhoomi',
        location: 'New Delhi',
        significance: 'State-of-the-art international convention centers that hosted the historic G20 New Delhi Summit.'
      }
    ],
    importantFigures: [
      {
        name: 'Dr. A.P.J. Abdul Kalam',
        role: 'Missile Man & 11th President of India',
        description: 'Beloved aerospace scientist and President who spearheaded indigenous missile and space launch vehicle technologies while inspiring millions of youth with India 2020.'
      },
      {
        name: 'P.V. Narasimha Rao & Dr. Manmohan Singh',
        role: 'Architects of 1991 Economic Reforms',
        description: 'Statesmen who opened the Indian economy to private enterprise, foreign investment, and modern trade deregulation.'
      },
      {
        name: 'ISRO Scientists & Chandrayaan-3 Team',
        role: 'Space Engineers & Explorers',
        description: 'Led by scientists and women directors who engineered cost-effective, world-record space explorations including landing on the lunar south pole.'
      },
      {
        name: 'Indian Tech Innovators & Startup Founders',
        role: 'Digital Builders',
        description: 'Entrepreneurs who built the world’s third-largest startup ecosystem, making digital financial services accessible even to the humblest street vendors.'
      }
    ],
    culturalContributions: [
      'Global celebration of the International Day of Yoga (June 21) adopted by the United Nations General Assembly.',
      'Global dissemination of Indian cinema, OTT storytelling, contemporary literature, and classical gastronomy across every continent.',
      'Conservation and revitalization of historic heritage corridors (Kashi Vishwanath Corridor, Mahakal Lok, Ayodhya Dham, Statue of Equality).',
      'Pioneering sustainable green initiatives: International Solar Alliance (ISA) and Mission LiFE (Lifestyle for Environment).'
    ],
    keyArtifactsOrMonuments: [
      'Chandrayaan-3 Vikram Lander & Pragyan Rover on the Moon',
      'Unified Payments Interface (UPI QR Code - Symbol of Digital Bharat)',
      'Vande Bharat Express Semi-High Speed Trains',
      'Statue of Equality (Hyderabad) & Statue of Oneness (Omkareshwar)',
      'New Parliament Building of India (Sengol installation)'
    ],
    historicalNuance:
      'Modern India navigates complex contemporary challenges—including climate resilience, demographic transitions, balanced regional development, and job creation—while dynamically leveraging its 5,000-year civilizational continuity and youthful demographic dividend.',
    heroImage:
        'https://unsplash.com/photos/xP_G9CP8VY4/download?force=true',
    imageCaption: 'Modern Indian infrastructure, space science, and vibrant 21st-century cities.',
    relatedStateIds: ['karnataka', 'telangana', 'delhi', 'gujarat', 'maharashtra', 'tamil-nadu'],
    keyThemes: ['Digital Public Infrastructure', 'Chandrayaan-3', 'Economic Growth', 'Vasudhaiva Kutumbakam']
  }
];

export const getHistoricalPeriodById = (id: string): HistoricalPeriod | undefined => {
  return INDIAN_HISTORICAL_PERIODS.find((p) => p.id === id);
};
