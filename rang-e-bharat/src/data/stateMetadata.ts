/**
 * Auxiliary details for all 36 Indian States & Union Territories
 * Area, Formation Date, Famous For Highlights, and Motif themes.
 */

export interface StateAuxiliaryData {
  area: string;
  formation: string;
  famousFor: string[];
  themeColor: string;
}

export const STATE_AUXILIARY_MAP: Record<string, StateAuxiliaryData> = {
  rajasthan: {
    area: '342,239 km²',
    formation: '30 March 1949',
    famousFor: ['Royal Forts & Palaces', 'Thar Desert', 'Rich Folk Music & Ghoomar', 'Bandhani Textiles'],
    themeColor: 'from-amber-600 to-orange-700',
  },
  maharashtra: {
    area: '307,713 km²',
    formation: '1 May 1960',
    famousFor: ['Ajanta & Ellora Caves', 'Ganesh Chaturthi', 'Western Ghats', 'Bollywood & Financial Capital'],
    themeColor: 'from-orange-600 to-amber-700',
  },
  'uttar-pradesh': {
    area: '240,928 km²',
    formation: '24 January 1950',
    famousFor: ['Taj Mahal & Heritage', 'Varanasi Ghats', 'Ganga-Yamuna Doab', 'Kathak Dance'],
    themeColor: 'from-amber-600 to-amber-800',
  },
  'madhya-pradesh': {
    area: '308,252 km²',
    formation: '1 November 1956',
    famousFor: ['Khajuraho Temples', 'Sanchi Stupa', 'Tiger Reserves & Jungles', 'Gond Folk Art'],
    themeColor: 'from-purple-600 to-indigo-800',
  },
  gujarat: {
    area: '196,024 km²',
    formation: '1 May 1960',
    famousFor: ['Statue of Unity', 'Rann of Kutch', 'Navratri Garba', 'Gir Asiatic Lions'],
    themeColor: 'from-orange-500 to-red-600',
  },
  karnataka: {
    area: '191,791 km²',
    formation: '1 November 1956',
    famousFor: ['Hampi Ruins', 'Mysuru Dasara', 'Sandalwood & Silk', 'Western Ghats Bio-hotspot'],
    themeColor: 'from-yellow-600 to-amber-700',
  },
  'andhra-pradesh': {
    area: '162,975 km²',
    formation: '1 November 1956',
    famousFor: ['Tirupati Balaji Temple', 'Kuchipudi Dance', 'Kalamkari Art', 'Spicy Coastal Cuisine'],
    themeColor: 'from-red-600 to-orange-700',
  },
  odisha: {
    area: '155,707 km²',
    formation: '1 April 1936',
    famousFor: ['Konark Sun Temple', 'Jagannath Puri Ratha Yatra', 'Odissi Classical Dance', 'Pattachitra Art'],
    themeColor: 'from-cyan-600 to-blue-800',
  },
  'tamil-nadu': {
    area: '130,058 km²',
    formation: '26 January 1950',
    famousFor: ['Dravidian Gopurams', 'Bharatanatyam Dance', 'Carnatic Music', 'Kanchipuram Silk'],
    themeColor: 'from-emerald-600 to-teal-800',
  },
  telangana: {
    area: '112,077 km²',
    formation: '2 June 2014',
    famousFor: ['Charminar & Golconda', 'Hyderabadi Biryani', 'Bathukamma Festival', 'Pochampally Ikat'],
    themeColor: 'from-teal-600 to-cyan-800',
  },
  bihar: {
    area: '94,163 km²',
    formation: '22 March 1912',
    famousFor: ['Mahabodhi Temple', 'Ancient Nalanda University', 'Madhubani Painting', 'Chhath Puja'],
    themeColor: 'from-amber-700 to-yellow-800',
  },
  'west-bengal': {
    area: '88,752 km²',
    formation: '26 January 1950',
    famousFor: ['Durga Puja Grandeur', 'Sundarbans Mangroves', 'Rabindra Sangeet & Literature', 'Darjeeling Tea'],
    themeColor: 'from-rose-600 to-pink-800',
  },
  'arunachal-pradesh': {
    area: '83,743 km²',
    formation: '20 February 1987',
    famousFor: ['Land of Dawn-Lit Mountains', 'Tawang Monastery', 'Orchid Biodiversity', 'Tribal Handlooms'],
    themeColor: 'from-emerald-700 to-teal-900',
  },
  jharkhand: {
    area: '79,716 km²',
    formation: '15 November 2000',
    famousFor: ['Mineral Wealth', 'Tribal Sohrai Art', 'Sarhul Festival', 'Parasnath Hills'],
    themeColor: 'from-stone-700 to-amber-900',
  },
  assam: {
    area: '78,438 km²',
    formation: '26 January 1950',
    famousFor: ['One-Horned Rhinoceros', 'Assam Orthodox Tea', 'Bihu Folk Festival', 'Muga Golden Silk'],
    themeColor: 'from-emerald-600 to-green-800',
  },
  ladakh: {
    area: '59,146 km²',
    formation: '31 October 2019',
    famousFor: ['High Altitude Passes', 'Pangong Tso Lake', 'Tibetan Monasteries', 'Pashmina Wool'],
    themeColor: 'from-blue-700 to-indigo-950',
  },
  'himachal-pradesh': {
    area: '55,673 km²',
    formation: '25 January 1971',
    famousFor: ['Snowy Himalayan Peaks', 'Kullu Shawls & Apples', 'Toy Train Kalka-Shimla', 'Tibetan Heritage'],
    themeColor: 'from-cyan-700 to-blue-900',
  },
  uttarakhand: {
    area: '53,483 km²',
    formation: '9 November 2000',
    famousFor: ['Char Dham Pilgrimage', 'Valley of Flowers', 'Yoga Capital Rishikesh', 'Jim Corbett Park'],
    themeColor: 'from-emerald-700 to-teal-800',
  },
  punjab: {
    area: '50,362 km²',
    formation: '1 November 1966',
    famousFor: ['Golden Temple Amritsar', 'Bhangra & Gidda Dance', 'Fertile Green Revolution', 'Phulkari Embroidery'],
    themeColor: 'from-amber-500 to-yellow-600',
  },
  haryana: {
    area: '44,212 km²',
    formation: '1 November 1966',
    famousFor: ['Kurukshetra Mahabharata Heritage', 'Surajkund Crafts Fair', 'Sports Champions', 'Agriculture'],
    themeColor: 'from-amber-600 to-stone-700',
  },
  'jammu-and-kashmir': {
    area: '42,241 km²',
    formation: '31 October 2019',
    famousFor: ['Dal Lake Shikaras', 'Kashmiri Saffron & Apples', 'Pashmina Shawls', 'Mughal Gardens'],
    themeColor: 'from-indigo-600 to-blue-800',
  },
  kerala: {
    area: '38,863 km²',
    formation: '1 November 1956',
    famousFor: ["God's Own Country", 'Kathakali Dance', 'Alleppey Backwaters', 'Ayurvedic Wellness & Spices'],
    themeColor: 'from-emerald-600 to-teal-700',
  },
  meghalaya: {
    area: '22,429 km²',
    formation: '21 January 1972',
    famousFor: ['Living Root Bridges', 'Abode of Clouds', 'Mawsynram Wettest Place', 'Matrilineal Culture'],
    themeColor: 'from-teal-600 to-emerald-800',
  },
  manipur: {
    area: '22,327 km²',
    formation: '21 January 1972',
    famousFor: ['Loktak Floating Lake', 'Manipuri Classical Raas', 'Polo Origins', 'Sangai Brow-Antlered Deer'],
    themeColor: 'from-rose-600 to-pink-800',
  },
  mizoram: {
    area: '21,081 km²',
    formation: '20 February 1987',
    famousFor: ['Cheraw Bamboo Dance', 'Rolling Green Hills', 'Chapchar Kut Festival', 'Hand-woven Puan'],
    themeColor: 'from-pink-600 to-rose-800',
  },
  nagaland: {
    area: '16,579 km²',
    formation: '1 December 1963',
    famousFor: ['Hornbill Cultural Festival', 'Rich Tribal Attire', 'Dzukou Valley', 'Intricate Wood Carvings'],
    themeColor: 'from-orange-600 to-red-800',
  },
  tripura: {
    area: '10,491 km²',
    formation: '21 January 1972',
    famousFor: ['Ujjayanta Palace', 'Unakoti Rock Sculptures', 'Cane & Bamboo Crafts', 'Garia Dance'],
    themeColor: 'from-amber-600 to-orange-700',
  },
  'andaman-and-nicobar-islands': {
    area: '8,249 km²',
    formation: '1 November 1956',
    famousFor: ['Cellular Jail National Memorial', 'Radhanagar Coral Beach', 'Indigenous Tribes', 'Marine Life'],
    themeColor: 'from-cyan-600 to-teal-800',
  },
  sikkim: {
    area: '7,096 km²',
    formation: '16 May 1975',
    famousFor: ['Mount Kangchenjunga', '100% Organic State', 'Buddhist Monasteries', 'Tsokha Rhododendrons'],
    themeColor: 'from-emerald-600 to-teal-800',
  },
  goa: {
    area: '3,702 km²',
    formation: '30 May 1987',
    famousFor: ['UNESCO Portuguese Churches', 'Sun-Kissed Golden Beaches', 'Goan Carnival', 'Feni & Seafood'],
    themeColor: 'from-orange-500 to-amber-600',
  },
  delhi: {
    area: '1,484 km²',
    formation: '1 February 1992 (NCT)',
    famousFor: ['Historical Capital of Empires', 'Red Fort & Qutub Minar', 'Street Food Culture', 'India Gate'],
    themeColor: 'from-red-600 to-stone-800',
  },
  'dadra-and-nagar-haveli-and-daman-and-diu': {
    area: '603 km²',
    formation: '26 January 2020',
    famousFor: ['Portuguese Coastal Forts', 'Silvassa Tribal Art', 'Nani Daman Fort', 'Quiet Serene Beaches'],
    themeColor: 'from-teal-600 to-cyan-800',
  },
  puducherry: {
    area: '479 km²',
    formation: '1 November 1954',
    famousFor: ['French Colonial Quarter', 'Auroville International City', 'Sri Aurobindo Ashram', 'Promenade Beach'],
    themeColor: 'from-blue-600 to-indigo-700',
  },
  chandigarh: {
    area: '114 km²',
    formation: '1 November 1966',
    famousFor: ['Le Corbusier Architecture', 'Nek Chand Rock Garden', 'Sukhna Lake', 'Rose Garden'],
    themeColor: 'from-emerald-600 to-green-700',
  },
  lakshadweep: {
    area: '32 km²',
    formation: '1 November 1956',
    famousFor: ['Pristine Coral Atolls', 'Agatti Turquoise Lagoons', 'Scuba & Marine Life', 'Coir Handicrafts'],
    themeColor: 'from-teal-500 to-cyan-700',
  },
  chhattisgarh: {
    area: '135,192 km²',
    formation: '1 November 2000',
    famousFor: ['Chitrakote Niagara of India', 'Bastar Bell Metal Dhokra Art', 'Tribal Heritage', 'Ancient Temples'],
    themeColor: 'from-purple-600 to-amber-800',
  },
};

export function getStateAuxiliary(id: string): StateAuxiliaryData {
  const normId = (id || '').toLowerCase().trim();
  return (
    STATE_AUXILIARY_MAP[normId] || {
      area: 'Detailed geographical survey',
      formation: 'Established state/UT entity',
      famousFor: ['Unique Cultural Heritage', 'Regional Traditions', 'Scenic Landscapes', 'Historical Sites'],
      themeColor: 'from-amber-600 to-orange-700',
    }
  );
}
