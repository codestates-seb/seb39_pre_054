package com.codestates.question.service;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.service.MemberService;
import com.codestates.question.entity.Question;
import com.codestates.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class QuestionService {
    private final MemberService memberService;
    private final QuestionRepository questionRepository;

    public QuestionService(MemberService memberService, QuestionRepository questionRepository) {
        this.memberService = memberService;
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {
        verifyQuestion(question);

        return saveQuestion(question);
    }

    private Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }

    private void verifyQuestion(Question question) {
        memberService.findVerifiedMember(question.getMember().getMemberId());
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle()).ifPresent(findQuestion::setTitle);
        Optional.ofNullable(question.getBody()).ifPresent(findQuestion::setBody);
        findQuestion.setLastEditDate(LocalDateTime.now());

        return saveQuestion(findQuestion);
    }

    private Question findVerifiedQuestion(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }

    public Question findQuestion(long questionId) {
        return findVerifiedQuestion(questionId);
    }
}
