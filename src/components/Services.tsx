import React from 'react';
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  Languages, 
  FileText, 
  Search,
  Award,
  Globe
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'البحوث الأكاديمية',
      description: 'تنسيق وإعداد البحوث العلمية لدرجات البكالوريوس والماجستير والدكتوراه',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Languages,
      title: 'خدمات الترجمة',
      description: 'ترجمة احترافية ودقيقة للنصوص الأكاديمية والعلمية والتجارية',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'الاستشارات التعليمية',
      description: 'استشارات متخصصة في المجال التعليمي والأكاديمي والبحثي',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'كتابة المحتوى العلمي',
      description: 'إعداد وكتابة المحتوى العلمي والأكاديمي بأعلى معايير الجودة',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Award,
      title: 'مراجعة وتدقيق البحوث',
      description: 'مراجعة وتدقيق البحوث العلمية لضمان الجودة والدقة',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: BookOpen,
      title: 'التحليل الإحصائي',
      description: 'تحليل البيانات الإحصائية للبحوث العلمية باستخدام أحدث البرامج',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: GraduationCap,
      title: 'التدريب الأكاديمي',
      description: 'برامج تدريبية متخصصة في منهجيات البحث العلمي',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Globe,
      title: 'النشر العلمي',
      description: 'مساعدة الباحثين في نشر أبحاثهم في المجلات العلمية المحكمة',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-arabic-serif text-primary-800 mb-6">
            خدماتنا المتخصصة
          </h2>
          <p className="text-xl text-gray-600 font-arabic max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات البحثية والاستشارية وخدمات الترجمة بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-arabic text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-arabic leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-arabic font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            تواصل معنا للحصول على استشارة مجانية
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;