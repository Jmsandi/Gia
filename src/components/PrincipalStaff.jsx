// Import staff images
import KarankayKoroma from '../assets/staff/Karankay_Koroma.png?url';
import RaymondTholley from '../assets/staff/Raymond_Tholley.png?url';
import AaronKargbo from '../assets/staff/Aaron_Kargbo.png?url';
import AbubakarrKoroma from '../assets/staff/Abubakarr_koroma.png?url';
import AgnesMarah from '../assets/staff/Agnes_Marah.png?url';
import AjaraKalokoh from '../assets/staff/Ajara_Kalokoh.png?url';
import AlliamyKamara from '../assets/staff/Allimamy_Kamara.png?url';
import DavidKamara from '../assets/staff/David_Kamara.png?url';
import DollyKargbo from '../assets/staff/Dolly_Kargbo.png?url';
import ElizabethTarawalie from '../assets/staff/Elizabeth_Tarawalie.png?url';
import FortuneMensah from '../assets/staff/Fortune_Mensah.png?url';
import JaneKaruna from '../assets/staff/Jane_Karuna.png?url';
import MabintyKanu from '../assets/staff/Mabinty_kanu.png?url';
import MariamaKalokoh from '../assets/staff/Mariama_kalokoh.png?url';
import MartinBangura from '../assets/staff/Martin_Bangura.png?url';
import MohammedThullah from '../assets/staff/mohammed_thullah.png?url';
import MusaKoroma from '../assets/staff/Musa_koroma.png?url';
import MustaphaTholley from '../assets/staff/Mustapha_Tholley.png?url';
import SantigieKamara from '../assets/staff/Santigie_Kamara.png?url';
import TheresaLuseni from '../assets/staff/Theresa_Luseni.png?url';
import VictorMichael from '../assets/staff/Victor_Michael.png?url';

const PrincipalStaff = () => {
  const staffMembers = [
    { name: 'Aaron J. Kargbo', image: AaronKargbo, position: 'Teacher' },
    { name: 'Abubakarr Sidique Koroma', image: AbubakarrKoroma, position: 'Teacher' },
    { name: 'Agnes Marah', image: AgnesMarah, position: 'Teacher' },
    { name: 'Ajara Kalokoh', image: AjaraKalokoh, position: 'Teacher' },
    { name: 'Allimamy Today Kamara', image: AlliamyKamara, position: 'Teacher' },
    { name: 'David Kamara', image: DavidKamara, position: 'IT Specialist' },
    { name: 'Dolly Henry Kargbo', image: DollyKargbo, position: 'Teacher' },
    { name: 'Elizabeth W. Tarawalie', image: ElizabethTarawalie, position: 'Teacher' },
    { name: 'Fortune Todemey Mensah', image: FortuneMensah, position: 'Administrator & Counsellor' },
    { name: 'Jane Karuna', image: JaneKaruna, position: 'Teacher' },
    { name: 'Mabinty S. Kanu', image: MabintyKanu, position: 'Teacher' },
    { name: 'Mariama Kalokoh', image: MariamaKalokoh, position: 'Finance' },
    { name: 'Martin O. Bangura', image: MartinBangura, position: 'Teacher' },
    { name: 'Mohammed K. Thullah', image: MohammedThullah, position: 'Teacher' },
    { name: 'Musa Koroma', image: MusaKoroma, position: 'Teacher' },
    { name: 'Mustapha S. Tholley', image: MustaphaTholley, position: 'Teacher' },
    { name: 'Santigie A. Kamara', image: SantigieKamara, position: 'Teacher' },
    { name: 'Theresa Luseni', image: TheresaLuseni, position: 'Teacher' },
    { name: 'Victor Michael', image: VictorMichael, position: 'IT Specialist' },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2456] mb-4">
            Principal and Staff
          </h1>
          <div className="w-24 h-1 bg-[#00c853] mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg  p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold text-[#1a2456] mb-6">School Leadership</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our dedicated team of educational professionals is committed to providing excellence in education
            and creating a nurturing environment for all students.
          </p>

          {/* Principal Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#1a2456] mb-6">Principal</h3>
            <div className="p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-40 h-40 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src={KarankayKoroma}
                    alt="Karankay Koroma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a2456] text-xl mb-2">Karankay Koroma</h4>
                  <p className="text-sm text-gray-600 mb-3">Principal</p>
                  <p className="text-gray-700 leading-relaxed">
                    Leading our school with dedication and vision to provide quality education for all students.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vice Principal Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#1a2456] mb-6">Vice Principal</h3>
            <div className="p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-40 h-40 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src={RaymondTholley}
                    alt="Raymond Tholley"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a2456] text-xl mb-2">Raymond A. Tholley</h4>
                  <p className="text-sm text-gray-600 mb-3">Vice Principal</p>
                  <p className="text-gray-700 leading-relaxed">
                    Supporting our educational mission and ensuring excellence in all aspects of school operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Staff Grid */}
          <div>
            <h3 className="text-xl font-bold text-[#1a2456] mb-6">Our Teaching Staff</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {staffMembers.map((staff, index) => (
                <div key={index} className="p-4 rounded-lg text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-[#1a2456] mb-1">{staff.name}</h4>
                  <p className="text-xs text-gray-600">{staff.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalStaff;
