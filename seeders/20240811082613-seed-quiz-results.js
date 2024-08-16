'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('QuizResults', [
      {
        user_id: 1,
        quiz_id: 1,
        correct_answers: 8,
        wrong_answers: 2,
        unanswered_questions: 0,
        average_answer_speed: 12.5, // (Total: 125 detik / 10 soal)
        total_points: 80,
        rating: 4.5,
        recording_time_to_answer_questions: JSON.stringify([10, 12, 13, 15, 14, 12, 13, 15, 11, 10]),
        total_recording_time_for_answering_questions: 125, // Total waktu dalam detik
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        quiz_id: 1,
        correct_answers: 7,
        wrong_answers: 2,
        unanswered_questions: 1,
        average_answer_speed: 10.0, // (Total: 90 detik / 9 soal)
        total_points: 70,
        rating: 4.0,
        recording_time_to_answer_questions: JSON.stringify([9, 10, 11, "", 15, 12, 13, 10, 10, 10]), // Soal ke-4 tidak dijawab
        total_recording_time_for_answering_questions: 90, // Total waktu dalam detik
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        quiz_id: 2,
        correct_answers: 10,
        wrong_answers: 0,
        unanswered_questions: 0,
        average_answer_speed: 12.0, // (Total: 180 detik / 15 soal)
        total_points: 100,
        rating: 4.7,
        recording_time_to_answer_questions: JSON.stringify([13, 12, 14, 11, 12, 13, 14, 12, 13, 14, 12, 13, 12, 14, 12]),
        total_recording_time_for_answering_questions: 180, // Total waktu dalam detik
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        quiz_id: 3,
        correct_answers: 9,
        wrong_answers: 1,
        unanswered_questions: 0,
        average_answer_speed: 14.0, // (Total: 280 detik / 20 soal)
        total_points: 90,
        rating: 4.6,
        recording_time_to_answer_questions: JSON.stringify([14, 13, 14, 15, 14, 13, 14, 15, 13, 14, 13, 15, 14, 13, 14, 15, 14, 13, 14, 15]),
        total_recording_time_for_answering_questions: 280, // Total waktu dalam detik
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 5,
        quiz_id: 4,
        correct_answers: 6,
        wrong_answers: 4,
        unanswered_questions: 2,
        average_answer_speed: 12.8, // (Total: 102 detik / 8 soal)
        total_points: 60,
        rating: 4.2,
        recording_time_to_answer_questions: JSON.stringify([12, 13, 15, "", "", 14, 13, 15, 15, 15, 12, 13]), // Soal ke-4 dan ke-5 tidak dijawab
        total_recording_time_for_answering_questions: 102, // Total waktu dalam detik
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 6,
        quiz_id: 2,
        correct_answers: 6,
        wrong_answers: 4,
        unanswered_questions: 5,
        average_answer_speed: 13.3, // (Total: 80 detik / 6 soal)
        total_points: 60,
        rating: 4.2,
        recording_time_to_answer_questions: JSON.stringify([14, "", "", "", "", 13, "", "", "", "", "", "", "", "", 12]), // Banyak soal tidak dijawab
        total_recording_time_for_answering_questions: 80, // Total waktu dalam detik
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('QuizResults', null, {});
  }
};
