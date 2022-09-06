package com.codestates.answer.repository;

import com.codestates.answer.entity.Answer;
import com.codestates.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
//    @Query(value = "select a.answerId as answerId from Answer a")
    List<AnswerIdMapping> findAllByQuestion(Question question);

}
