package com.codestates.question.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class QuestionPostDto {
    @NotBlank
    private String title;

    @NotBlank
    private String body;

    @Positive
    private long memberId;
}
