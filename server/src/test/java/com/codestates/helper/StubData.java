package com.codestates.helper;

import com.codestates.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import java.util.List;

public class StubData {
    public static class MockQuestion {
        public static Page<Question> getMultiResultQuestion() {
            Question question1 = new Question("김코딩", "s4goodbye!", "m", "프로젝트스테이츠", 005, 001);
            Question question2 = new Question("정버그", "s4goodbye!", "f", "프로젝트캠퍼스", 002, 004);

            return new PageImpl<>(List.of(question1, question2),
                    PageRequest.of(0, 10, Sort.by("questionId").descending()), 2);
        }

        public static List<QuestionDto.Response> getMultiResponseBody() {
            return List.of(
                    new QuestionDto.Response(1L, "김코딩", "s4goodbye!", "m", "프로젝트스테이츠", 005, 001),
                    new QuestionDto.Response(2L, "정버그", "s4goodbye!", "f", "프로젝트캠퍼스", 002, 004)
            );
        }
    }
}
