export interface ServiceDetail {
  slug: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  sections: {
    heading: string;
    body: string;
  }[];
  conditionsTreated: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    heroImage: "/images/service-physiotherapy.jpg",
    heroAlt: "Physiotherapist treating a patient on a treatment table",
    sections: [
      {
        heading: "What it is",
        body: "Physiotherapy at Prana Physio is a comprehensive approach to diagnosing, treating, and preventing musculoskeletal injuries. Rather than relying on temporary fixes, we focus on identifying the root cause of your pain. Through detailed assessment, we analyze your joint mobility, muscle strength, and movement patterns to develop a personalized treatment plan. Our goal is to restore normal function and empower you to manage your condition effectively.",
      },
      {
        heading: "Who it's for",
        body: "Our physiotherapy services are designed for anyone experiencing pain or restricted movement. Whether you are an office worker dealing with repetitive strain, a weekend warrior with a sports injury, or someone recovering from orthopaedic surgery, we have the expertise to help. If pain is preventing you from living a full, active life, our assessment-led care will guide your recovery.",
      },
      {
        heading: "What to expect in a session",
        body: "Your initial session begins with an in-depth conversation about your history and symptoms, followed by a physical examination to pinpoint the affected tissues. Treatment typically involves a combination of manual therapy techniques, such as joint mobilization and soft tissue release, alongside a prescribed exercise program. We ensure you leave with a clear understanding of your injury and a structured plan for recovery.",
      },
      {
        heading: "Pricing & booking",
        body: "Our Initial Physiotherapy Assessment is a 30-minute session priced at ₹499, making expert care accessible. Follow-up sessions are available as 30-minute (₹599) or 1-hour (₹999) appointments based on your treatment needs. We recommend booking your initial assessment online to start your journey toward pain-free movement.",
      },
    ],
    conditionsTreated: [
      "Lower back and neck pain",
      "Joint injuries (knee, shoulder, ankle)",
      "Post-surgical rehabilitation",
      "Tendinopathies and muscle strains",
    ],
  },
  {
    slug: "pilates",
    title: "Reformer & Mat Pilates",
    heroImage: "/images/service-pilates.jpg",
    heroAlt: "Client performing a lunge exercise with a ball during a Pilates class",
    sections: [
      {
        heading: "What it is",
        body: "Reformer and Mat Pilates offer a dynamic system of exercises focused on improving core strength, flexibility, and overall body alignment. By utilizing specialized equipment like the reformer, we can provide targeted resistance that challenges your muscles while supporting your joints. This method is particularly effective for correcting imbalances and building a resilient body that resists future injury.",
      },
      {
        heading: "Who it's for",
        body: "Pilates is adaptable for individuals of all fitness levels. It is highly recommended for patients transitioning from acute injury rehabilitation back to full activity, as well as those looking to improve their posture, balance, and athletic performance. Whether you are a beginner or an experienced athlete, our instructors tailor the exercises to meet your specific goals.",
      },
      {
        heading: "What to expect in a session",
        body: "In a one-on-one session, our expert physiotherapists will guide you through a series of precise movements, focusing on control and breath. We use the reformer to either assist or challenge your movements, ensuring proper form throughout. Each session builds upon the last, progressively increasing in difficulty to match your growing strength and confidence.",
      },
      {
        heading: "Pricing & booking",
        body: "We offer tailored Pilates sessions to fit your schedule and goals. A 1-on-1 Reformer Pilates session for 1 hour is ₹799, while a focused 30-minute session is available for ₹449. Experience the benefits of clinical Pilates by booking a session through our online portal.",
      },
    ],
    conditionsTreated: [
      "Chronic lower back pain",
      "Postural imbalances",
      "Core weakness post-pregnancy",
      "Recurrent sports injuries",
    ],
  },
  {
    slug: "acupuncture",
    title: "Acupuncture & Dry Needling",
    heroImage: "/images/service-acupuncture.jpg",
    heroAlt: "Acupuncturist placing fine needles on a patient's shoulder",
    sections: [
      {
        heading: "What it is",
        body: "Acupuncture and Dry Needling involve the insertion of very fine, sterile needles into specific points in the body. Dry needling specifically targets myofascial trigger points—knots in the muscle—to release tension and alleviate pain. This technique stimulates the nervous system, promotes local blood flow, and accelerates the body's natural healing processes.",
      },
      {
        heading: "Who it's for",
        body: "This treatment is excellent for individuals dealing with stubborn, chronic pain, muscular tightness, or acute muscle spasms that do not fully respond to traditional massage. It is often integrated into a broader physiotherapy plan for patients with tension headaches, sciatica, or severe myofascial pain syndromes.",
      },
      {
        heading: "What to expect in a session",
        body: "After a thorough assessment to identify the precise trigger points causing your pain, fine needles are gently inserted into the targeted muscles. You may feel a brief ache or a localized muscle twitch, which is a sign that the muscle is releasing. The needles are typically left in place for a short period while you rest comfortably, often bringing immediate relief.",
      },
      {
        heading: "Pricing & booking",
        body: "Acupuncture and Dry Needling can be booked as standalone sessions or combined with manual therapy. A 30-minute session is ₹549, and a comprehensive 1-hour session is ₹899. Book online to discover how this specialized technique can help manage your pain.",
      },
    ],
    conditionsTreated: [
      "Myofascial pain and trigger points",
      "Tension headaches and migraines",
      "Sciatica and nerve pain",
      "Chronic tendinopathies",
    ],
  },
  {
    slug: "massage",
    title: "Deep Tissue & Sports Massage",
    heroImage: "/images/service-massage.jpg",
    heroAlt: "Therapist treating tight back muscles during a sports massage",
    sections: [
      {
        heading: "What it is",
        body: "Deep Tissue and Sports Massage utilize firm pressure and slow strokes to reach deeper layers of muscle and fascia. This targeted approach is designed to break down scar tissue, relieve severe tension, and improve tissue elasticity. It is an essential tool for recovery, helping to flush out metabolic waste products after intense physical activity.",
      },
      {
        heading: "Who it's for",
        body: "This service is ideal for athletes requiring pre-event preparation or post-event recovery, as well as individuals suffering from chronic muscle tightness due to physical labor or prolonged sitting. If you regularly experience stiffness that limits your mobility, a deep tissue massage can provide significant relief.",
      },
      {
        heading: "What to expect in a session",
        body: "Your therapist will first discuss any specific areas of concern before applying specialized massage techniques. The pressure will be adjusted to your comfort level, though you may experience some 'good pain' as tight knots are released. The session focuses on specific problem areas rather than a full-body relaxation routine, ensuring maximum therapeutic benefit.",
      },
      {
        heading: "Pricing & booking",
        body: "Revitalize your body with our targeted massage therapies. A 30-minute focused Deep Tissue Massage is ₹549, while a full 1-hour session is ₹899. Secure your appointment today to aid your recovery and maintain peak performance.",
      },
    ],
    conditionsTreated: [
      "Delayed onset muscle soreness (DOMS)",
      "Chronic muscular tension",
      "Iliotibial (IT) band syndrome",
      "General stiffness and fatigue",
    ],
  },
  {
    slug: "running-assessment",
    title: "Running Assessment",
    heroImage: "/images/service-sports.jpg",
    heroAlt: "Runner on a trail being assessed",
    sections: [
      {
        heading: "What it is",
        body: "Our Running Assessment is a specialized evaluation combining slow-motion video gait analysis with a comprehensive strength and mobility profile. We analyze your running mechanics to identify biomechanical flaws, asymmetries, or weaknesses that may be contributing to injury or hindering your performance. This objective data forms the foundation of a targeted intervention plan.",
      },
      {
        heading: "Who it's for",
        body: "Whether you are a recreational jogger dealing with recurrent shin splints or a competitive marathoner looking to shave minutes off your personal best, this assessment is for you. It is particularly valuable for runners who frequently experience pain during or after their runs, as well as those transitioning to new footwear or training plans.",
      },
      {
        heading: "What to expect in a session",
        body: "You will run on a treadmill while we capture video from multiple angles. We will then review the footage with you frame-by-frame, explaining the findings in clear terms. Following the video analysis, we conduct functional strength tests to assess the capacity of your running-specific muscles. You will leave with actionable advice, including technique cues and a custom strengthening program.",
      },
      {
        heading: "Pricing & booking",
        body: "The comprehensive Running Assessment is priced at ₹1,299. This in-depth session provides invaluable insights to keep you running healthy and fast. Book your assessment online to take your running to the next level.",
      },
    ],
    conditionsTreated: [
      "Runner's knee (Patellofemoral pain)",
      "Achilles tendinopathy",
      "Plantar fasciitis",
      "Shin splints",
    ],
  },
  {
    slug: "cycling-assessment",
    title: "Cycling Assessment",
    heroImage: "/images/service-cycling.jpg",
    heroAlt: "Cyclist training on a road bike",
    sections: [
      {
        heading: "What it is",
        body: "The Cycling Assessment focuses on the critical interaction between the cyclist and their bicycle. We evaluate your on-bike posture, pedaling mechanics, and power output to ensure optimal alignment. By identifying areas of stress or inefficiency, we can make necessary adjustments to your setup and prescribe specific exercises to improve your riding comfort and efficiency.",
      },
      {
        heading: "Who it's for",
        body: "This service is tailored for cyclists of all disciplines—road, mountain, or commuter—who experience discomfort while riding. If you suffer from numb hands, lower back pain, or knee issues after long rides, or if you simply want to optimize your power transfer for better performance, a professional cycling assessment is essential.",
      },
      {
        heading: "What to expect in a session",
        body: "Bring your bicycle and cycling gear to the clinic. We will observe you riding on a stationary trainer, taking measurements of your joint angles and analyzing your technique. We may make minor adjustments to your saddle or handlebar position and will assess your physical flexibility and core strength to address any bodily limitations affecting your ride.",
      },
      {
        heading: "Pricing & booking",
        body: "Optimize your ride with our Cycling Assessment, available for ₹1,299. Ensure every kilometer is comfortable and efficient by booking your personalized assessment today.",
      },
    ],
    conditionsTreated: [
      "Lower back pain during rides",
      "Anterior knee pain",
      "Numbness in hands or feet",
      "Neck and shoulder stiffness",
    ],
  },
  {
    slug: "posture-programs",
    title: "Posture & Desk-Strain Programs",
    heroImage: "/images/service-posture.jpg",
    heroAlt: "Therapist's hands assessing a patient's lower back",
    sections: [
      {
        heading: "What it is",
        body: "Our Posture and Desk-Strain Programs are evidence-based interventions designed to combat the negative effects of prolonged sitting and poor ergonomics. We do not just tell you to 'sit up straight'; instead, we analyze your daily habits and work environment to identify the specific stressors on your body. The program combines ergonomic advice with targeted exercises to build endurance in postural muscles.",
      },
      {
        heading: "Who it's for",
        body: "These programs are ideal for IT professionals, office workers, and anyone who spends significant hours at a desk or in front of a screen. If you frequently end your workday with a stiff neck, aching shoulders, or a dull pain in your lower back, this program will provide the strategies you need to manage and prevent these issues.",
      },
      {
        heading: "What to expect in a session",
        body: "We start by discussing your work setup and daily routine. The physical assessment focuses on identifying muscle imbalances—typically tight chest and hip muscles paired with weak back and core muscles. Treatment includes manual therapy to relieve acute tension, followed by coaching on specific, manageable exercises you can perform at your desk or at home to maintain a healthy posture.",
      },
      {
        heading: "Pricing & booking",
        body: "Initial consultation and program setup for Posture & Desk-Strain is treated as a standard Initial Physiotherapy Assessment (₹499). Follow-up reviews are priced according to our standard therapy rates. Start building a stronger, pain-free workday by booking online.",
      },
    ],
    conditionsTreated: [
      "Cervicogenic headaches",
      "Upper cross syndrome (rounded shoulders)",
      "Lower back stiffness",
      "Repetitive strain injuries (RSI)",
    ],
  },
];
