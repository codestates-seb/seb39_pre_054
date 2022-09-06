package com.codestates.answer.mapper;

import com.codestates.answer.dto.AnswerPatchDto;
import com.codestates.answer.dto.AnswerPostDto;
import com.codestates.answer.dto.AnswerResponseDto;
import com.codestates.answer.entity.Answer;
import com.codestates.member.dto.MemberResponseDto;
import com.codestates.member.entity.Member;
import com.codestates.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        Answer answer = new Answer();
        Member member = new Member();
        Question question = new Question();

        member.setMemberId(answerPostDto.getMemberId());
        question.setQuestionId(answerPostDto.getQuestionId());

        answer.setMember(member);
        answer.setQuestion(question);
        answer.setBody(answerPostDto.getBody());

        return answer;
    }

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        Member member = answer.getMember();
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        if ( answer.getAnswerId() != null ) {
            answerResponseDto.setAnswerId( answer.getAnswerId() );
        }
        answerResponseDto.setBody( answer.getBody() );
        answerResponseDto.setCreationDate( answer.getCreationDate() );
        answerResponseDto.setLastEditDate( answer.getLastEditDate() );
        answerResponseDto.setQuestionId(answer.getQuestion().getQuestionId());
        answerResponseDto.setMember(memberToMemberResponseDto(member));

        return answerResponseDto;
    }

    MemberResponseDto memberToMemberResponseDto(Member member);

    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    List<AnswerResponseDto> answerToAnswerResponseDtos(List<Answer> answers);
}
