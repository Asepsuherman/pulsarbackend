'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      // Quiz Matematika Dasar (total_question: 10)
      {
        quiz_id: 1,
        question_text: 'Apa hasil dari 5 + 3?',
        correct_answer: '8',
        options: JSON.stringify(['7', '8', '9', '10']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 1,
        question_text: 'Apa hasil dari 12 - 4?',
        correct_answer: '8',
        options: JSON.stringify(['6', '8', '10', '12']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 1,
        question_text: 'Apa hasil dari 7 x 6?',
        correct_answer: '42',
        options: JSON.stringify(['36', '42', '48', '54']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 1,
        question_text: 'Apa hasil dari 81 / 9?',
        correct_answer: '9',
        options: JSON.stringify(['7', '8', '9', '10']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 1,
        question_text: 'Apa hasil dari 15 + 24?',
        correct_answer: '39',
        options: JSON.stringify(['35', '37', '39', '41']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 1,
        question_text: 'Apa hasil dari 50 - 22?',
        correct_answer: '28',
        options: JSON.stringify(['26', '28', '30', '32']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 1,
        question_text: 'Apa hasil dari 8 x 9?',
        correct_answer: '72',
        options: JSON.stringify(['64', '68', '72', '76']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 1,
        question_text: 'Apa hasil dari 100 / 4?',
        correct_answer: '25',
        options: JSON.stringify(['20', '22', '25', '28']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 1,
        question_text: 'Apa hasil dari 9 + 18?',
        correct_answer: '27',
        options: JSON.stringify(['24', '26', '27', '29']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 1,
        question_text: 'Apa hasil dari 36 / 6?',
        correct_answer: '6',
        options: JSON.stringify(['5', '6', '7', '8']),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Quiz Fisika Dasar (total_question: 15)
      {
        quiz_id: 2,
        question_text: 'Apa hukum Newton pertama?',
        correct_answer: 'Hukum Kelembaman',
        options: JSON.stringify(['Hukum Gravitasi', 'Hukum Aksi dan Reaksi', 'Hukum Kelembaman', 'Hukum Termodinamika']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa satuan dari gaya?',
        correct_answer: 'Newton',
        options: JSON.stringify(['Joule', 'Watt', 'Newton', 'Pascal']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa nama energi yang dimiliki oleh benda yang bergerak?',
        correct_answer: 'Energi Kinetik',
        options: JSON.stringify(['Energi Potensial', 'Energi Kinetik', 'Energi Termal', 'Energi Mekanik']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa nama hukum yang menjelaskan hubungan antara gaya dan percepatan?',
        correct_answer: 'Hukum Newton Kedua',
        options: JSON.stringify(['Hukum Newton Pertama', 'Hukum Newton Kedua', 'Hukum Newton Ketiga', 'Hukum Gravitasi']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa satuan dari energi?',
        correct_answer: 'Joule',
        options: JSON.stringify(['Newton', 'Watt', 'Joule', 'Pascal']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa yang dimaksud dengan gaya gesek?',
        correct_answer: 'Gaya yang melawan gerakan',
        options: JSON.stringify(['Gaya yang mempercepat gerakan', 'Gaya yang melawan gerakan', 'Gaya yang menghasilkan energi', 'Gaya yang meningkatkan kecepatan']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa hukum yang menjelaskan aksi dan reaksi?',
        correct_answer: 'Hukum Newton Ketiga',
        options: JSON.stringify(['Hukum Newton Pertama', 'Hukum Newton Kedua', 'Hukum Newton Ketiga', 'Hukum Gravitasi']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa nama energi yang disimpan dalam benda yang terangkat?',
        correct_answer: 'Energi Potensial',
        options: JSON.stringify(['Energi Kinetik', 'Energi Potensial', 'Energi Termal', 'Energi Mekanik']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa hukum yang menyatakan bahwa setiap aksi ada reaksi yang sama dan berlawanan?',
        correct_answer: 'Hukum Aksi dan Reaksi',
        options: JSON.stringify(['Hukum Gravitasi', 'Hukum Aksi dan Reaksi', 'Hukum Termodinamika', 'Hukum Kelembaman']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa satuan dari daya?',
        correct_answer: 'Watt',
        options: JSON.stringify(['Joule', 'Newton', 'Watt', 'Pascal']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa yang terjadi pada benda yang berada dalam keadaan keseimbangan?',
        correct_answer: 'Gaya yang bekerja pada benda sama besar dan berlawanan arah',
        options: JSON.stringify(['Benda bergerak dengan percepatan', 'Gaya yang bekerja pada benda sama besar dan berlawanan arah', 'Benda jatuh bebas', 'Benda terangkat']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa nama gaya yang bekerja pada benda yang mengapung di air?',
        correct_answer: 'Gaya Apung',
        options: JSON.stringify(['Gaya Gesek', 'Gaya Gravitasi', 'Gaya Apung', 'Gaya Magnet']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa yang dimaksud dengan hukum Gravitasi Universal?',
        correct_answer: 'Setiap massa saling tarik menarik',
        options: JSON.stringify(['Setiap massa saling tolak menolak', 'Setiap massa saling tarik menarik', 'Hukum yang menjelaskan gerakan planet', 'Hukum yang menjelaskan gaya gesek']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa yang dimaksud dengan momentum?',
        correct_answer: 'Massa dikalikan dengan kecepatan',
        options: JSON.stringify(['Massa dikalikan dengan gaya', 'Massa dikalikan dengan kecepatan', 'Energi dikalikan dengan waktu', 'Gaya dikalikan dengan jarak']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 2,
        question_text: 'Apa yang dimaksud dengan hukum Termodinamika?',
        correct_answer: 'Hukum yang menyatakan tentang energi dan panas',
        options: JSON.stringify(['Hukum yang menyatakan tentang gaya dan percepatan', 'Hukum yang menyatakan tentang energi dan panas', 'Hukum yang menjelaskan gravitasi', 'Hukum yang menjelaskan gerakan']),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Quiz Biologi Dasar (total_question: 20)
      {
        quiz_id: 3,
        question_text: 'Apa bagian sel yang berfungsi sebagai pusat kontrol?',
        correct_answer: 'Nukleus',
        options: JSON.stringify(['Mitokondria', 'Ribosom', 'Nukleus', 'Lisosome']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa fungsi dari mitokondria?',
        correct_answer: 'Menghasilkan energi',
        options: JSON.stringify(['Menghasilkan energi', 'Menyimpan gen', 'Sintesis protein', 'Transportasi bahan']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan osmosis?',
        correct_answer: 'Pergerakan air melalui membran semipermeabel',
        options: JSON.stringify(['Pergerakan ion melalui membran', 'Pergerakan air melalui membran semipermeabel', 'Difusi molekul', 'Pengangkutan aktif']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan fotosintesis?',
        correct_answer: 'Proses pembuatan makanan oleh tumbuhan',
        options: JSON.stringify(['Proses pembuatan makanan oleh tumbuhan', 'Proses pencernaan pada hewan', 'Proses pembelahan sel', 'Proses respirasi sel']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan DNA?',
        correct_answer: 'Materi genetik dalam sel',
        options: JSON.stringify(['Materi genetik dalam sel', 'Bagian dari ribosom', 'Penyusun membran sel', 'Proses fotosintesis']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan sel prokariotik?',
        correct_answer: 'Sel tanpa inti sel yang terdefinisi dengan jelas',
        options: JSON.stringify(['Sel tanpa inti sel yang terdefinisi dengan jelas', 'Sel dengan inti sel yang terdefinisi dengan jelas', 'Sel dengan dinding sel keras', 'Sel yang dapat bergerak']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan mitosis?',
        correct_answer: 'Proses pembelahan sel',
        options: JSON.stringify(['Proses pencernaan', 'Proses respirasi', 'Proses pembelahan sel', 'Proses fotosintesis']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan struktur ribosom?',
        correct_answer: 'Tempat sintesis protein',
        options: JSON.stringify(['Tempat sintesis protein', 'Tempat penyimpanan energi', 'Tempat pembentukan sel', 'Tempat fotosintesis']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan sel eukariotik?',
        correct_answer: 'Sel dengan inti sel yang terdefinisi dengan jelas',
        options: JSON.stringify(['Sel tanpa inti sel yang terdefinisi dengan jelas', 'Sel dengan inti sel yang terdefinisi dengan jelas', 'Sel dengan dinding sel keras', 'Sel yang dapat bergerak']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan transportasi aktif?',
        correct_answer: 'Pengangkutan zat melawan gradien konsentrasi menggunakan energi',
        options: JSON.stringify(['Pengangkutan zat melawan gradien konsentrasi menggunakan energi', 'Pengangkutan zat mengikuti gradien konsentrasi tanpa energi', 'Pengangkutan zat melalui membran semipermeabel', 'Pengangkutan zat melalui proses osmosis']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan lisosom?',
        correct_answer: 'Organela yang berfungsi untuk pencernaan seluler',
        options: JSON.stringify(['Organela yang berfungsi untuk pencernaan seluler', 'Organela yang menghasilkan energi', 'Organela yang menyimpan gen', 'Organela yang sintesis protein']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan vakuola?',
        correct_answer: 'Organela penyimpanan di sel tumbuhan',
        options: JSON.stringify(['Organela penyimpanan di sel tumbuhan', 'Organela penyimpanan di sel hewan', 'Tempat sintesis protein', 'Tempat pembuangan limbah']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan kloroplas?',
        correct_answer: 'Organela yang mengandung klorofil dan tempat fotosintesis',
        options: JSON.stringify(['Organela yang mengandung klorofil dan tempat fotosintesis', 'Tempat sintesis protein', 'Tempat pembuangan limbah', 'Tempat penyimpanan energi']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan sel darah merah?',
        correct_answer: 'Sel yang membawa oksigen ke seluruh tubuh',
        options: JSON.stringify(['Sel yang membawa oksigen ke seluruh tubuh', 'Sel yang melawan infeksi', 'Sel yang mengatur pH darah', 'Sel yang membantu pembekuan darah']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan sistem organ?',
        correct_answer: 'Sekelompok organ yang bekerja sama untuk fungsi tertentu',
        options: JSON.stringify(['Sekelompok organ yang bekerja sama untuk fungsi tertentu', 'Organ yang berfungsi sendiri', 'Sekelompok sel yang bekerja sama', 'Organ yang tidak berfungsi']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan homeostasis?',
        correct_answer: 'Keseimbangan internal tubuh',
        options: JSON.stringify(['Keseimbangan internal tubuh', 'Keseimbangan eksternal tubuh', 'Keseimbangan energi', 'Keseimbangan sel']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan jaringan epitel?',
        correct_answer: 'Jaringan yang menutupi permukaan tubuh dan organ',
        options: JSON.stringify(['Jaringan yang menutupi permukaan tubuh dan organ', 'Jaringan yang menyimpan energi', 'Jaringan yang mendukung struktur tubuh', 'Jaringan yang menghantarkan impuls']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan sistem pencernaan?',
        correct_answer: 'Sistem yang memecah makanan menjadi nutrisi',
        options: JSON.stringify(['Sistem yang memecah makanan menjadi nutrisi', 'Sistem yang mengatur pernapasan', 'Sistem yang mengontrol gerakan', 'Sistem yang menyaring darah']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 3,
        question_text: 'Apa yang dimaksud dengan seluler respirasi?',
        correct_answer: 'Proses pembakaran glukosa untuk menghasilkan energi',
        options: JSON.stringify(['Proses pembakaran glukosa untuk menghasilkan energi', 'Proses sintesis protein', 'Proses transportasi zat', 'Proses fotosintesis']),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Quiz Kimia Dasar (total_question: 12)
      {
        quiz_id: 4,
        question_text: 'Apa itu unsur?',
        correct_answer: 'Materi dasar yang tidak dapat diuraikan',
        options: JSON.stringify(['Materi dasar yang tidak dapat diuraikan', 'Campuran dari beberapa zat', 'Gabungan dari unsur-unsur', 'Bahan kimia kompleks']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 4,
        question_text: 'Apa nama reaksi yang menghasilkan gas dari asam dan logam?',
        correct_answer: 'Reaksi asam-logam',
        options: JSON.stringify(['Reaksi asam-logam', 'Reaksi pembakaran', 'Reaksi pengendapan', 'Reaksi redoks']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 4,
        question_text: 'Apa nama zat yang mengikat ion dalam larutan?',
        correct_answer: 'Asam',
        options: JSON.stringify(['Asam', 'Basa', 'Garam', 'Air']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 4,
        question_text: 'Apa yang dimaksud dengan pH?',
        correct_answer: 'Ukuran konsentrasi ion hidrogen',
        options: JSON.stringify(['Ukuran konsentrasi ion hidrogen', 'Ukuran suhu', 'Ukuran tekanan', 'Ukuran volume']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 4,
        question_text: 'Apa yang dimaksud dengan larutan?',
        correct_answer: 'Campuran homogen dari zat',
        options: JSON.stringify(['Campuran homogen dari zat', 'Campuran heterogen dari zat', 'Zat tunggal', 'Unsur murni']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 4,
        question_text: 'Apa nama proses perubahan cair menjadi gas?',
        correct_answer: 'Penguapan',
        options: JSON.stringify(['Penguapan', 'Pembekuan', 'Peleburan', 'Kondensasi']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 4,
        question_text: 'Apa itu molekul?',
        correct_answer: 'Gabungan dua atau lebih atom',
        options: JSON.stringify(['Gabungan dua atau lebih atom', 'Atom tunggal', 'Unsur tunggal', 'Campuran zat']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 4,
        question_text: 'Apa nama hukum yang menyatakan bahwa massa total zat tidak berubah dalam reaksi kimia?',
        correct_answer: 'Hukum Kekekalan Massa',
        options: JSON.stringify(['Hukum Kekekalan Massa', 'Hukum Aksi dan Reaksi', 'Hukum Perbandingan Tetap', 'Hukum Boyle']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 4,
        question_text: 'Apa yang dimaksud dengan katalis?',
        correct_answer: 'Zat yang mempercepat reaksi tanpa berubah',
        options: JSON.stringify(['Zat yang mempercepat reaksi tanpa berubah', 'Zat yang memperlambat reaksi', 'Zat yang mengubah hasil reaksi', 'Zat yang mengubah kondisi reaksi']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 4,
        question_text: 'Apa yang dimaksud dengan endothermic?',
        correct_answer: 'Reaksi yang menyerap energi',
        options: JSON.stringify(['Reaksi yang menyerap energi', 'Reaksi yang melepaskan energi', 'Reaksi yang tidak melibatkan energi', 'Reaksi yang menghasilkan gas']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 4,
        question_text: 'Apa nama senyawa yang terbentuk dari asam dan basa?',
        correct_answer: 'Garam',
        options: JSON.stringify(['Garam', 'Air', 'Asam', 'Basa']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 4,
        question_text: 'Apa yang dimaksud dengan larutan jenuh?',
        correct_answer: 'Larutan yang tidak bisa melarutkan zat lebih banyak',
        options: JSON.stringify(['Larutan yang tidak bisa melarutkan zat lebih banyak', 'Larutan yang mengandung sedikit zat terlarut', 'Larutan yang mengandung zat terlarut berlebih', 'Larutan yang mengandung zat terlarut kurang dari batas jenuh']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 5,
        question_text: 'What is the past tense of "go"?',
        correct_answer: 'Went',
        options: JSON.stringify(['Went', 'Gone', 'Goes', 'Going']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 5,
        question_text: 'What is the opposite of "hot"?',
        correct_answer: 'Cold',
        options: JSON.stringify(['Cold', 'Warm', 'Cool', 'Temperate']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 5,
        question_text: 'How do you say "thank you" in English?',
        correct_answer: 'Thank you',
        options: JSON.stringify(['Thank you', 'Please', 'Sorry', 'Excuse me']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 5,
        question_text: 'What is the English word for "apel"?',
        correct_answer: 'Apple',
        options: JSON.stringify(['Apple', 'Banana', 'Orange', 'Grape']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 5,
        question_text: 'Which word is a noun?',
        correct_answer: 'Book',
        options: JSON.stringify(['Book', 'Run', 'Quickly', 'Beautiful']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 5,
        question_text: 'What is the plural of "child"?',
        correct_answer: 'Children',
        options: JSON.stringify(['Children', 'Childs', 'Childes', 'Childer']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 5,
        question_text: 'What is the question form of "You are happy"?',
        correct_answer: 'Are you happy?',
        options: JSON.stringify(['Are you happy?', 'You are happy?', 'Happy you are?', 'Happy are you?']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quiz_id: 5,
        question_text: 'How do you say "selamat pagi" in English?',
        correct_answer: 'Good morning',
        options: JSON.stringify(['Good morning', 'Good night', 'Hello', 'Good evening']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
