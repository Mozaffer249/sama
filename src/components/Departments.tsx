import React from 'react';
import { 
  Building2, 
  Calculator, 
  Users2, 
  Headphones, 
  PieChart, 
  Settings,
  FileText,
  Zap
} from 'lucide-react';

const Departments: React.FC = () => {
  const departments = [
    {
      icon: Building2,
      title: 'الإدارة العامة',
      description: 'الإشراف العام على جميع العمليات والأنشطة المؤسسية',
      team: 'فريق الإدارة التنفيذية',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calculator,
      title: 'الشؤون المالية',
      description: 'إدارة الموارد المالية والميزانيات والتخطيط المالي',
      team: 'المحاسبون والمحللون الماليون',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users2,
      title: 'الموارد البشرية',
      description: 'إدارة شؤون الموظفين والتطوير والتدريب',
      team: 'أخصائيو الموارد البشرية',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Headphones,
      title: 'خدمة العملاء',
      description: 'تقديم الدعم والمساعدة وحل استفسارات العملاء',
      team: 'فريق خدمة العملاء',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: PieChart,
      title: 'التخطيط والتطوير',
      description: 'وضع الاستراتيجيات وخطط التطوير المؤسسي',
      team: 'المخططون الاستراتيجيون',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Settings,
      title: 'العمليات والجودة',
      description: 'ضمان جودة الخدمات وتحسين العمليات التشغيلية',
      team: 'أخصائيو الجودة والعمليات',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FileText,
      title: 'الشؤون القانونية',
      description: 'المراجعة القانونية والامتثال واللوائح',
      team: 'المستشارون القانونيون',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'التقنية والابتكار',
      description: 'تطوير الحلول التقنية ودعم الابتكار',
      team: 'المطورون والمهندسون',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="departments" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-arabic-serif text-primary-800 mb-6">
            أقسامنا وإداراتنا
          </h2>
          <p className="text-xl text-gray-600 font-arabic max-w-3xl mx-auto">
            فريق متخصص ومتنوع يعمل بتناغم لتحقيق أهداف المؤسسة وخدمة عملائنا بأفضل شكل ممكن
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative z-10 bg-gradient-to-r ${dept.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-arabic text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {dept.title}
                  </h3>
                  <p className="text-gray-600 font-arabic leading-relaxed mb-4">
                    {dept.description}
                  </p>
                  
                  {/* Team Info */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm font-arabic text-gray-500">
                      <strong>الفريق:</strong> {dept.team}
                    </p>
                  </div>
                </div>

                {/* Hover Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${dept.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right`}></div>
              </div>
            );
          })}
        </div>

        {/* Organizational Chart Note */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-arabic text-primary-800 mb-4">
              هيكل تنظيمي متكامل
            </h3>
            <p className="text-gray-700 font-arabic leading-relaxed">
              تعمل جميع الأقسام والإدارات بتنسيق تام لضمان تقديم أفضل الخدمات وتحقيق رضا العملاء. 
              كل قسم متخصص في مجاله ويساهم في تحقيق الأهداف الاستراتيجية للمؤسسة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;