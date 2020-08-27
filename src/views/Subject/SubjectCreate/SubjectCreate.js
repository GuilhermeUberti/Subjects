import React, { Component } from 'react';
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
} from 'reactstrap';
import { connect } from 'react-redux';
import { thunkCreateSubject } from './../../../actions/Subject/SubjectThunk';

class SubjectCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { subject: { name: '', description: '' } };

        this.handleChangeInput = this.handleChangeInput.bind(this);

        this.handleCreate = this.handleCreate.bind(this);
    }

    handleChangeInput(event) {
        const { target } = event;
        const { value, name } = target;

        let { subject } = this.state;
        subject[name] = value;
        return this.setState({ subject });
    }

    handleCreate(subject) {
        this.props.createSubject(subject);
        this.state.subject = { name: '', description: '' };
        this.props.history.push('/subject/list');
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                                Criar novo Assunto
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="name">Nome:</Label>
                                        <Input type="text" name="name" placeholder="Entre com o nome do Assunto" onChange={this.handleChangeInput}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="description">Descrição:</Label>
                                        <Input type="textarea" name="description" placeholder="Entre com a descrição do Assunto" onChange={this.handleChangeInput}></Input>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button type="button" color="primary" onClick={() => this.handleCreate(this.state.subject)}>Criar</Button>
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
        subject: state.subjectStore.newSubject
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createSubject: (subject) => dispatch(thunkCreateSubject(subject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectCreate)