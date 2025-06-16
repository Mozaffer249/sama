import React from 'react';
import { 
  Shield, 
  Target, 
  Award, 
  Lightbulb, 
  Users, 
  Heart,
  Lock,
  CheckCircle
} from 'lucide-react';

const Values: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'النزاهة والمصداقية',
      description: 'نتحلى بأعلى معايير النزاهة والمصداقية في جميع أعمالنا وعلاقاتنا',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'الدقة والاحترافية',
      description: 'نضمن الدقة المتناهية في البحوث والترجمات، ونلتزم بالاحترافية في التعامل مع جميع الأطراف',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'الجودة والتميز',
      description: 'نلتزم بتقديم أعلى مستويات الجودة في جميع خدماتنا، ونسعى للتميز المستمر في الأداء والنتائج',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'الابتكار والتطوير',
      description: 'نشجع الابتكار في المنهجيات والحلول، ونسعى للتطوير المستمر لخدماتنا ومواكبة أحدث التطورات',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'التعاون والشراكة',
      description: 'نؤمن بأهمية التعاون مع العملاء والشركاء والمجتمعات لتحقيق الأهداف المشتركة',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Heart,
      title: 'المسؤولية الاجتماعية',
      description: 'نلتزم بمسؤوليتنا تجاه المجتمع، ونسعى للمساهمة في تقدمه وتطوره من خلال مخرجات أعمالنا',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Lock,
      title: 'السرية والموثوقية',
      description: 'نحافظ على سرية معلومات العملاء ونلتزم بأعلى معايير الموثوقية في كل ما نقدمه',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="values" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-arabic-serif text-primary-800 mb-6">
            قيمنا الأساسية
          </h2>
          <p className="text-xl text-gray-600 font-arabic max-w-3xl mx-auto">
            نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتحدد هويتنا المهنية والأخلاقية
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative z-10 bg-gradient-to-r ${value.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-arabic text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-arabic leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Hover Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-primary-600 ml-3" />
              <h3 className="text-2xl font-bold font-arabic text-primary-800">
                التزامنا بالتميز
              </h3>
            </div>
            <p className="text-gray-700 font-arabic leading-relaxed">
              هذه القيم ليست مجرد كلمات، بل هي المبادئ التي نعيش بها ونعمل من خلالها يومياً. 
              إنها الأساس الذي يضمن تقديم خدمات متميزة وبناء علاقات طويلة الأمد مع عملائنا وشركائنا.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;