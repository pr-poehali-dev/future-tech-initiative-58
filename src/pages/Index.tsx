import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "features", "how", "pricing", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.15 }
      );

      observers[id].observe(element);
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
              ЧистаяЖизнь
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">
              Методы
            </a>
            <a href="#how" className="text-muted-foreground hover:text-white transition-colors">
              Как это работает
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">
              Тарифы
            </a>
          </nav>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 text-sm font-medium border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all text-white"></button>
            <button className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent via-accent to-accent/80 text-black rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all font-semibold">начни сейчас</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/6f4c8e13-aa28-4adb-9d9c-390925fbae78/files/84a1161e-3f38-4160-b7c6-dd69a96b8733.jpg"
            alt="Свободная жизнь"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="mb-8 inline-block">
                <span className="text-xs font-medium tracking-widest text-accent/80 uppercase">
                  Программа избавления от вредных привычек
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-black leading-tight mb-8 tracking-tighter">
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-green-50">
                  Живи чисто.
                </span>
                <br />
                <span className="text-teal-300">Живи свободно.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
                Избавься от вредных привычек раз и навсегда. Наша система поддержки поможет тебе выстроить
                здоровый образ жизни — шаг за шагом, без срывов и стресса.
              </p>
              <div className="flex gap-4 mb-12 flex-col sm:flex-row">
                <button className="group px-8 py-4 from-accent to-accent/90 rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center text-[#000000] bg-[#ffffff]">
                  Начать путь
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white">
                  Узнать больше
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">25 000+</div>
                  <p className="text-sm text-white/60">Человек изменили жизнь</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">87%</div>
                  <p className="text-sm text-white/60">Сохраняют результат год</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">21 день</div>
                  <p className="text-sm text-white/60">До первых результатов</p>
                </div>
              </div>
            </div>

            <div
              className={`relative h-96 lg:h-[550px] transition-all duration-1000 flex items-center justify-center ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
              <div className="relative z-10 w-72 h-72 rounded-full border-2 border-accent/40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-7xl mb-4"></div>
                  <div className="text-accent font-bold text-xl">Новая версия тебя</div>
                  <div className="text-white/60 text-sm mt-2">начинается сегодня</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Методы</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Всё для твоего успеха
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Brain",
                title: "Психологическая поддержка",
                desc: "Работаем с корнем привычки, а не с симптомами. Когнитивные техники и медитации.",
              },
              {
                icon: "Heart",
                title: "Трекер прогресса",
                desc: "Фиксируй каждый день без срыва. Видь, как растёт твоя сила воли в цифрах.",
              },
              {
                icon: "TrendingUp",
                title: "Постепенный план",
                desc: "Программа адаптируется под тебя. Никаких резких изменений — только устойчивый рост.",
              },
              {
                icon: "Users",
                title: "Сообщество поддержки",
                desc: "Тысячи людей на одном пути. Делись успехами, получай поддержку в трудные моменты.",
              },
              {
                icon: "Bell",
                title: "Умные напоминания",
                desc: "Персональные уведомления в нужный момент, когда соблазн особенно силён.",
              },
              {
                icon: "Award",
                title: "Система наград",
                desc: "Награды за каждую веху. Мотивация, которая работает даже в самые сложные дни.",
              },
            ].map((item, i) => {
              const isVisible = visibleSections["features"];
              return (
                <div
                  key={i}
                  className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon name={item.icon} size={22} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Процесс</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Три шага к свободе
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Пройди диагностику",
                desc: "Ответь на несколько вопросов. Мы определим твои триггеры, слабые места и составим персональный план.",
              },
              {
                step: "02",
                title: "Следуй программе",
                desc: "Ежедневные задания, медитации и упражнения. Всё занимает 15–20 минут в день и встраивается в твою жизнь.",
              },
              {
                step: "03",
                title: "Наслаждайся результатом",
                desc: "Больше энергии, ясная голова, уверенность в себе. Привычки меняются — жизнь расцветает.",
              },
            ].map((item, i) => {
              const isVisible = visibleSections["how"];
              return (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="text-8xl font-black text-accent/10 mb-4 leading-none">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["pricing"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Тарифы</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Инвестиция в себя
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Старт",
                price: "Бесплатно",
                period: "",
                desc: "Для тех, кто делает первый шаг",
                features: [
                  "7-дневная программа",
                  "Базовый трекер привычек",
                  "Доступ к сообществу",
                  "3 медитации",
                ],
                cta: "Начать бесплатно",
                popular: false,
              },
              {
                name: "Прогресс",
                price: "990 ₽",
                period: "/ месяц",
                desc: "Полная программа избавления от привычек",
                features: [
                  "30-дневный курс",
                  "Персональный план",
                  "Умные напоминания",
                  "Безлимитные медитации",
                  "Поддержка куратора",
                ],
                cta: "Выбрать тариф",
                popular: true,
              },
              {
                name: "Трансформация",
                price: "2 490 ₽",
                period: "/ месяц",
                desc: "Для глубоких изменений с персональным коучем",
                features: [
                  "Всё из «Прогресс»",
                  "Личный коуч",
                  "Сессии 1 на 1",
                  "Индивидуальная программа",
                  "Поддержка 24/7",
                ],
                cta: "Записаться",
                popular: false,
              },
            ].map((plan, i) => {
              const isVisible = visibleSections["pricing"];
              return (
                <div
                  key={i}
                  className={`relative p-8 rounded-2xl border transition-all duration-700 ${plan.popular ? "border-accent bg-card scale-105" : "border-accent/10 bg-card/50"} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 bg-accent text-black text-xs font-bold rounded-full uppercase tracking-wider">
                        Популярный
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.desc}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-white/80">
                        <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-all ${plan.popular ? "bg-gradient-to-r from-accent to-accent/90 text-black hover:shadow-lg hover:shadow-accent/40" : "border border-accent/40 text-white hover:border-accent/70 hover:bg-accent/10"}`}
                  >
                    {plan.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="mb-6 text-6xl">🌿</div>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Твоя новая жизнь
              </span>
              <br />
              <span className="text-accent">начинается сегодня</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Каждый день без вредных привычек — это победа. Присоединяйся к тысячам людей, которые уже изменили свою жизнь к лучшему.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <button className="group px-10 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center">
                Начать путь к свободе
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="px-10 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white">
                Узнать о нас
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-accent/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-display font-bold text-xl bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
            ЧистаяЖизнь
          </div>
          <p className="text-muted-foreground text-sm">© 2024 ЧистаяЖизнь. Все права защищены.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;