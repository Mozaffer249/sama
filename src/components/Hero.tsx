import React from 'react';
import { ArrowDown, Target, Eye, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <div className="mb-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-arabic-serif text-primary-800 mb-4">
              مركز سما للبحوث والاستشارات
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-arabic-serif text-secondary-600">
              والخدمات والترجمة
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 font-arabic mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            مركز علمي سمته التميز في مجال الاستشارات التعليمية وتنسيق البحوث لنيل درجة البكالوريوس والماجستير والدكتوراه وخدمات الترجمة، 
            ويعمل المركز على الارتقاء وتعزيز القيم العلمية المهنية والخدمية
          </p>

          {/* Vision and Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Vision Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-in-right">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-4 rounded-full">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold font-arabic text-primary-800 mb-4">رؤيتنا</h3>
              <p className="text-gray-700 font-arabic leading-relaxed">
                أن يكون مركز سما رائداً ومتميزاً وموثوقاً به إقليمياً في تقديم حلول بحثية متكاملة، وخدمات ترجمة عالية الجودة، 
                واستشارات متخصصة تساهم في إثراء المعرفة ودعم اتخاذ القرار وتطوير المجتمعات في دولة قطر
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-in-left">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 p-4 rounded-full">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold font-arabic text-primary-800 mb-4">رسالتنا</h3>
              <p className="text-gray-700 font-arabic leading-relaxed"> 
                تقديم حلول بحثية دقيقة ومبتكرة وخدمات ترجمة دقيقة واحترافية ، بالإضافة إلى خدمات استشارية متخصصة، وذلك من خلال فريق عمل مؤهل ومتخصص، وباستخدام أحدث المنهجيات والأساليب والتقنيات، من أجل خدمة الأفراد والمؤسسات والقطاعات المختلفة، والمساهمة في سد الفجوات المعرفية، وتسهيل التواصل الثقافي والعلمي، ودعم التنمية المستدامة والرؤية الوطنية لدولة قطر 2030م .
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-arabic font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-bounce-gentle"
          >
            اكتشف خدماتنا
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-600" />
      </div>
    </section>
  );
};

export default Hero;