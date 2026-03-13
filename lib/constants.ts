// Car Makes and Models Database
export const carMakesAndModels: Record<string, string[]> = {
  'Hyundai': ['Creta', 'i20', 'i10', 'Verna', 'Elantra', 'Tucson', 'Kona'],
  'Honda': ['City', 'Accord', 'Civic', 'CR-V', 'Jazz'],
  'Maruti': ['Swift', 'Dzire', 'Vitara Brezza', 'Ertiga', 'Alto', 'WagonR', 'Celerio'],
  'Tata': ['Nexon', 'Harrier', 'Tigor', 'Indica', 'Safari'],
  'Mahindra': ['XUV500', 'XUV300', 'Bolero', 'Scorpio', 'Sonet'],
  'Datsun': ['GO', 'GO+', 'Redi-GO'],
  'Kia': ['Sonet', 'Seltos', 'Carens', 'EV6'],
  'Skoda': ['Rapid', 'Superb', 'Slavia'],
  'Volkswagen': ['Polo', 'Vento', 'Tiguan'],
  'Toyota': ['Fortuner', 'Innova', 'Crysta', 'Glanza'],
  'Nissan': ['Magnite', 'Datsun'],
  'MG': ['Hector', 'Comet', 'Astor', 'ZS EV'],
  'Renault': ['Kwid', 'Duster', 'Kiger'],
};

// Tamil Nadu Districts
export const tamilNaduDistricts: string[] = [
  'Ariyalur',
  'Chengalpattu',
  'Chennai',
  'Coimbatore',
  'Cuddalore',
  'Dharmapuri',
  'Dindigul',
  'Erode',
  'Kallakurichi',
  'Kancheepuram',
  'Kanniyakumari',
  'Karur',
  'Krishnagiri',
  'Madurai',
  'Mayiladuthurai',
  'Nagapattinam',
  'Namakkal',
  'Nilgiris',
  'Perambalur',
  'Pudukkottai',
  'Ramanathapuram',
  'Ranipet',
  'Salem',
  'Sivaganga',
  'Tenkasi',
  'Thanjavur',
  'Theni',
  'Thoothukudi',
  'Tiruchirappalli',
  'Tirukkannur',
  'Tirunelveli',
  'Tirupathur',
  'Tiruppur',
  'Tiruvallur',
  'Tiruvannamalai',
  'Tiruvarur',
  'Vellore',
  'Villupuram',
];

// Base car prices (in INR) - used for mock valuation
export const baseCarPrices: Record<string, number> = {
  'Hyundai-Creta': 1200000,
  'Hyundai-i20': 800000,
  'Hyundai-i10': 600000,
  'Hyundai-Verna': 900000,
  'Hyundai-Elantra': 1100000,
  'Hyundai-Tucson': 1500000,
  'Hyundai-Kona': 1800000,
  'Honda-City': 1000000,
  'Honda-Accord': 1600000,
  'Honda-Civic': 1400000,
  'Honda-CR-V': 1700000,
  'Honda-Jazz': 850000,
  'Maruti-Swift': 800000,
  'Maruti-Dzire': 700000,
  'Maruti-Vitara Brezza': 950000,
  'Maruti-Ertiga': 1100000,
  'Maruti-Alto': 500000,
  'Maruti-WagonR': 650000,
  'Maruti-Celerio': 700000,
  'Tata-Nexon': 1100000,
  'Tata-Harrier': 1400000,
  'Tata-Tigor': 750000,
  'Tata-Indica': 600000,
  'Tata-Safari': 1500000,
  'Mahindra-XUV500': 1400000,
  'Mahindra-XUV300': 1000000,
  'Mahindra-Bolero': 800000,
  'Mahindra-Scorpio': 1200000,
  'Mahindra-Sonet': 950000,
  'Datsun-GO': 500000,
  'Datsun-GO+': 650000,
  'Datsun-Redi-GO': 600000,
  'Kia-Sonet': 950000,
  'Kia-Seltos': 1100000,
  'Kia-Carens': 1200000,
  'Kia-EV6': 2200000,
  'Skoda-Rapid': 900000,
  'Skoda-Superb': 1500000,
  'Skoda-Slavia': 1000000,
  'Volkswagen-Polo': 850000,
  'Volkswagen-Vento': 950000,
  'Volkswagen-Tiguan': 1600000,
  'Toyota-Fortuner': 1600000,
  'Toyota-Innova': 1200000,
  'Toyota-Crysta': 1400000,
  'Toyota-Glanza': 800000,
  'Nissan-Magnite': 700000,
  'MG-Hector': 1200000,
  'MG-Comet': 700000,
  'MG-Astor': 1000000,
  'MG-ZS EV': 1500000,
  'Renault-Kwid': 550000,
  'Renault-Duster': 1000000,
  'Renault-Kiger': 750000,
};

// Testimonials
export const testimonials = [
  {
    id: '1',
    quote: 'TNAM made selling my car so easy! They came to my place, inspected everything thoroughly, and transferred the money within hours. Best experience I\'ve had selling a car.',
    author: 'Karthik S.',
    city: 'Coimbatore',
    carModel: 'Honda City 2018',
    verified: true,
    rating: 5,
  },
  {
    id: '2',
    quote: 'I was worried about the RC transfer process, but TNAM\'s team handled everything. The transparency and professionalism are unmatched.',
    author: 'Anjali R.',
    city: 'Chennai',
    carModel: 'Hyundai Creta 2016',
    verified: true,
    rating: 5,
  },
  {
    id: '3',
    quote: 'Got a fair price for my Swift, and the doorstep service was incredibly convenient. I recommend TNAM to everyone selling their car.',
    author: 'Selvam M.',
    city: 'Madurai',
    carModel: 'Maruti Swift 2019',
    verified: true,
    rating: 5,
  },
];

// FAQ Items
export const faqItems = [
  {
    id: '1',
    question: 'What if I have an active car loan or HP plan?',
    answer: 'TNAM handles everything! Our team coordinates with your finance company to obtain the NOC (No Objection Certificate) and complete the loan settlement directly. You don\'t need to worry about any paperwork. The settlement amount is paid to your finance company first, and the remaining balance is transferred to your account.',
  },
  {
    id: '2',
    question: 'What\'s my liability after selling the car to TNAM?',
    answer: 'Zero! Once you sign the handover document and our representative takes possession of the car, you have no legal or financial responsibility. We immediately start the RC transfer process and bear all liability. You\'re completely protected.',
  },
  {
    id: '3',
    question: 'My car\'s insurance is expired. Is that a problem?',
    answer: 'Not at all. Our inspection process includes a thorough check regardless of insurance status. We factor in the insurance validity during our assessment. If you have active insurance, we can work with your insurer for any necessary transfers or claims.',
  },
  {
    id: '4',
    question: 'How long does the RC transfer process take?',
    answer: 'Typically 30-45 days from the date of sale. We handle all communication with the RTA (Regional Transport Authority) and provide you with regular updates. You\'ll receive the transferred RC at your registered address without any additional effort.',
  },
  {
    id: '5',
    question: 'What happens during the doorstep inspection?',
    answer: 'Our certified inspectors conduct a comprehensive 45-point inspection: exterior condition, interior wear, engine health, transmission, suspension, electrical systems, and documentation verification. The inspection typically takes 30-45 minutes. We provide a detailed inspection report and our valuation within 24 hours.',
  },
];

// Trust Grid Items
export const trustGridItems = [
  {
    id: 'liability',
    icon: 'Shield',
    title: 'Zero Liability Guarantee',
    description: 'We take full legal and financial responsibility from the moment our representative signs the handover document. Sleep peacefully after selling.',
  },
  {
    id: 'settlement',
    icon: 'Zap',
    title: 'Instant Bank Settlement',
    description: 'Payment transferred to your account before the car leaves your sight. No waiting, no delays. No partial payments.',
  },
  {
    id: 'service',
    icon: 'MapPin',
    title: 'State-wide Doorstep Service',
    description: 'Coverage across all 38 districts of Tamil Nadu. We come to you. Zero travel hassle.',
  },
];

// Fuel Types
export const fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Electric'];

// Fuel adjustment factors for valuation
export const fuelAdjustmentFactors: Record<string, number> = {
  'Petrol': 1.0,
  'Diesel': 1.15,
  'CNG': 0.9,
  'Electric': 1.3,
};

// Current year for depreciation calculation
export const CURRENT_YEAR = new Date().getFullYear();

// Depreciation rate (6% per year)
export const DEPRECIATION_RATE = 0.94;

// WhatsApp number (with country code, no spaces)
export const WHATSAPP_NUMBER = '919876543210'; // Example - update with actual number
export const WHATSAPP_MESSAGE = 'Hi! I\'m interested in selling my car through TNAM. Could you help me with more details?';

// Contact information
export const CONTACT_EMAIL = 'hello@tnam.app';
export const CONTACT_PHONE = '+91 98765 43210'; // Example - update with actual number
