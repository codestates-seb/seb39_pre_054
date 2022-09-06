package com.codestates.answer.dto;

import lombok.Getter;

@Getter
public class AnswerPatchDto {
    private long answerId;
    private String body;

    public void setAnswerId(long answerId) {
        this.answerId = answerId;
    }
}
