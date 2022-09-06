package com.codestates.question.dto;

import lombok.Getter;

@Getter
public class QuestionPatchDto {
    private long questionId;
    private String title;
    private String body;

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }
}
