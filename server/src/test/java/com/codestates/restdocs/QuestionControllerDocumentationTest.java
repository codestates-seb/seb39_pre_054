package com.codestates.restdocs;

import com.codestates.api.v1.question.dto.QuestionDto;
import com.codestates.api.v1.question.entity.Question;
import com.codestates.api.v1.question.mapper.QuestionMapper;
import com.codestates.api.v1.question.service.QuestionService;
import com.codestates.helper.QuestionControllerTestHelper;
import com.codestates.helper.StubData;
import com.codestates.question.controller.QuestionController;
import com.codestates.question.entity.Question;
import com.codestates.question.mapper.QuestionMapper;
import com.codestates.question.service.QuestionService;
import com.jayway.jsonpath.JsonPath;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.List;

import static com.codestates.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.codestates.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.requestParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(QuestionController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class QuestionControllerDocumentationTest implements QuestionControllerTestHelper {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private QuestionService questionService;

    @MockBean
    private QuestionMapper mapper;

    @Test
    public void getQuestionsTest() throws Exception {
        // given
        String page = "1";
        String size = "10";

        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("page", page);
        queryParams.add("size", size);

        Page<Question> questions = StubData.MockQuestion.getMultiResultQuestion();
        List<QuestionDto.Response> responses = StubData.MockQuestion.getMultiResponseBody();

        // stubbing
        given(questionService.findQuestions(Mockito.anyInt(), Mockito.anyInt())).willReturn(questions);
        given(mapper.questionsToQuestionResponses(Mockito.anyList())).willReturn(responses);

        // when
        ResultActions actions = mockMvc.perform(getRequestBuilder(getUrl(), queryParams));

        // then
        MvcResult result = actions
                .andExpect(status().isOk())
                .andDo(
                        document(
                                "get-questions",
                                getRequestPreProcessor(),
                                getResponsePreProcessor(),
                                requestParameters(getDefaultRequestParameterDescriptors()),
                                responseFields(getFullPageResponseDescriptors(getDefaultResponseDescriptors(DataResponseType.LIST)))
                        ))
                .andReturn();

        List list = JsonPath.parse(result.getResponse().getContentAsString()).read("$.data");
        assertThat(list.size(), Matchers.is(2));
    }
}
