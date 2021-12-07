import React from 'react'
import {SupportWrapper,TagContainer,Tag,IssueWrapper,Description,IconWithButton} from './styles'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Tooltip from '@mui/material/Tooltip';

export default function Support() {
    return (
        <SupportWrapper>
            <TagContainer>
                <span>My product is broken. I need refund</span>
                <IssueWrapper>
                    <Tag label="okss"/>
                    <Tag label="okss" type="urgent"/>
                    <Description date>Oct 12, 2020</Description>
                    <Description >Website Problem</Description>
                    <IconWithButton aria-label="delete">
                        <Tooltip title="Open" placement="top">
                            <ChevronRightIcon style={{fontSize:40}} />

                        </Tooltip>
                    </IconWithButton>
                </IssueWrapper>
            </TagContainer>  
        </SupportWrapper>
    )
}
