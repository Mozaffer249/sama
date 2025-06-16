import React from 'react';
import { BookOpen, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="text-right">
                <span className="text-lg font-bold font-arabic-serif block">
                  مركز سما
                </span>
                <span className="text-xs text-gray-300 font-arabic">
                  للبحوث والاستشارات والخدمات والترجمة
                </span>
              </div>
            </div>
            <p className="text-gray-300 font-arabic leading-relaxed">
              مركز علمي متخصص في تقديم الحلول البحثية المتكاملة وخدمات الترجمة عالية الجودة والاستشارات الأكاديمية المتخصصة.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-arabic">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary-400 font-arabic transition-colors duration-200">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 font-arabic transition-colors duration-200">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-400 font-arabic transition-colors duration-200">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#values" className="text-gray-300 hover:text-primary-400 font-arabic transition-colors duration-200">
                  قيمنا
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-400 font-arabic transition-colors duration-200">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-arabic">خدماتنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 font-arabic">البحوث الأكاديمية</li>
              <li className="text-gray-300 font-arabic">خدمات الترجمة</li>
              <li className="text-gray-300 font-arabic">الاستشارات التعليمية</li>
              <li className="text-gray-300 font-arabic">التحليل الإحصائي</li>
              <li className="text-gray-300 font-arabic">النشر العلمي</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-arabic">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300 font-arabic">+974 3033 3991</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300 font-arabic">info@sama-research.qa</span>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-primary-400 mt-1" />
                <span className="text-gray-300 font-arabic">
                  الدوحة، دولة قطر
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-arabic mb-4 md:mb-0">
              © 2024 مركز سما للبحوث والاستشارات والخدمات والترجمة. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center space-x-2 space-x-reverse text-gray-400 font-arabic">
              <span>صنع بـ</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>في دولة قطر</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;