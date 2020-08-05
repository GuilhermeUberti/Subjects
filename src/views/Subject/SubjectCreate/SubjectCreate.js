import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
import { connect } from 'react-redux'

class SubjectCreate extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                                Create new Subject
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="name">Nome:</Label>
                                        <Input type="text" name="name" placeholder="Entre com o nome do Assunto"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="description">Descrição:</Label>
                                        <Input type="textarea" name="description" placeholder="Entre com a descrição do Assunto"></Input>
                                    </FormGroup>
                                </Form>                                
                            </CardBody>
                            <CardFooter>
                                <Button type="button" color="primary">Criar</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectCreate)