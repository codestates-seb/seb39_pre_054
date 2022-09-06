package com.codestates.answer.dto;

import com.codestates.member.dto.MemberResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private long answerId;
//    private long memberId;
    private MemberResponseDto member;
    private String body;
    private long questionId;
    private LocalDateTime creationDate;
    private LocalDateTime lastEditDate;
}
