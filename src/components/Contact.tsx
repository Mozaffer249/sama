import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Globe,
  BookOpen
} from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      details: ['+249 12 498 6094', '+974 3033 3991'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['Info@srcst-edu.com', 'contact@sama-research.qa'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['الدوحة، قطر', 'مركز سما للبحوث والاستشارات والخدمات'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'أوقات العمل',
      details: ['الأحد - الخميس: 8:00 ص - 5:00 م', 'الجمعة - السبت: مغلق'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-arabic-serif text-primary-800 mb-6">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-600 font-arabic max-w-3xl mx-auto">
            نحن هنا لخدمتكم ومساعدتكم في جميع احتياجاتكم البحثية والاستشارية. تواصلوا معنا في أي وقت وسنكون سعداء بالرد على استفساراتكم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold font-arabic text-primary-800 mb-8">
              معلومات التواصل
            </h3>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className={`bg-gradient-to-r ${info.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold font-arabic text-gray-800 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 font-arabic mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* About Center */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/SamaLogo.Jpeg" className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold font-arabic text-gray-800 mb-2">
                    عن المركز
                  </h4>
                  <p className="text-gray-600 font-arabic leading-relaxed">
                    مركز سما للبحوث والاستشارات والخدمات والترجمة - مركز علمي متخصص في الخدمات البحثية والأكاديمية
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            {/* <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-bold font-arabic text-gray-800 mb-4">
                تابعونا على وسائل التواصل
              </h4>
              <div className="flex space-x-4 space-x-reverse">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <Globe className="h-5 w-5" />
                </button>
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <MessageCircle className="h-5 w-5" />
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold font-arabic text-primary-800 mb-8">
              أرسل استفسارك
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium font-arabic text-gray-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-arabic"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium font-arabic text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-arabic"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium font-arabic text-gray-700 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-arabic"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              <div>
                <label className="block text-sm font-medium font-arabic text-gray-700 mb-2">
                  نوع الخدمة المطلوبة
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-arabic">
                  <option value="">اختر نوع الخدمة</option>
                  <option value="research">البحوث الأكاديمية</option>
                  <option value="translation">خدمات الترجمة</option>
                  <option value="consultation">الاستشارات التعليمية</option>
                  <option value="content">كتابة المحتوى العلمي</option>
                  <option value="review">مراجعة وتدقيق البحوث</option>
                  <option value="statistics">التحليل الإحصائي</option>
                  <option value="training">التدريب الأكاديمي</option>
                  <option value="publishing">النشر العلمي</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium font-arabic text-gray-700 mb-2">
                  تفاصيل الاستفسار
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-arabic resize-none"
                  placeholder="أكتب تفاصيل استفسارك أو طلبك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-arabic font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Send className="h-5 w-5" />
                <span>إرسال الاستفسار</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;