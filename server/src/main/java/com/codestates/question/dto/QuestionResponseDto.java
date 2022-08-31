package com.codestates.question.dto;

import com.codestates.member.dto.MemberResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionResponseDto {
    private long questionId;
//    private long memberId;
    private MemberResponseDto member;
    private String title;
    private String body;
    private List<Integer> answerId;
    private LocalDateTime creationDate;
    private LocalDateTime lastEditDate;
}
