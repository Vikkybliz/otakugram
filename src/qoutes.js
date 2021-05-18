import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Row, Col } from 'react-bootstrap'
import {projectFirestore, timestamp} from './firebase'

const Qoutes = () => {
    const [characterName, setCharacterName] = useState("");
    const [search, setSearch] = useState("")
    const [qoutes, setQoutes] = useState("");
    const [addQoutes, setAddQoutes] = useState([]);

    useEffect(() => {
        getQoutes()
    }, [])

    function getQoutes(){
        projectFirestore.collection('qoutes').orderBy('timestamp').onSnapshot(function (querySnapshot) {
            setAddQoutes(
                querySnapshot.docs.map((doc) => ({
                    characterName: doc.data().characterName,
                    qoutes: doc.data().qoutes,
                }))
            )
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (characterName && setQoutes) {
            const qoute = { id: new Date().getTime().toString(), characterName, qoutes }
            console.log(qoute)
            setAddQoutes((addQoutes) => {
                return [...addQoutes, qoute]
            })
            setCharacterName("")
            setQoutes("")
        } else {
            console.log('no')
        }

        projectFirestore.collection('qoutes').add({
            characterName: characterName,
            qoutes: qoutes,
            timestamp: timestamp,
        })
    }

    return (
        <div className="form">
            <Form onSubmit={handleSubmit} className='form1'>
                <Row>
                    <Col>
  <Form.Group controlId="formBasicEmail">
    <Form.Label htmlFor="characterName" className='label'>Character Name</Form.Label>
    <Form.Control type="text" id="characterName" placeholder='Enter anime character name...' name="characterName" value={characterName} onChange={(e) => (setCharacterName(e.target.value))} />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label htmlFor="qoutes" className='label'>Qoute</Form.Label>
    <Form.Control type="text" id="qoutes"  placeholder='Enter character qoute...' name="qoutes" value={qoutes} onChange={(e) => setQoutes(e.target.value)} />
  </Form.Group>
  <Button variant="primary" type="submit" className='submitbtn'>
    Submit
  </Button>
    </Col>
    <Col>
    <Form.Group controlId="formBasicEmail">
    <Form.Label htmlFor="" className='label'>Search qoute by Character Name</Form.Label>
    <Form.Control type="text" placeholder='Search Text...' onChange={(e) => setSearch(e.target.value)} />
  </Form.Group>
    </Col>
  </Row>
</Form>
            {addQoutes.filter((qoute) => {
                if (search === '') {
                    return qoute
                } else if (qoute.characterName.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                    return qoute
                }
            }).map((qoute) => {
                const { id, characterName, qoutes } = qoute
                return (
                    <div className="qoute text-center" key={id}>
                        <Container xs className='qoutes'>
                            <h4>{characterName}</h4>
                            <h5>{qoutes}</h5>
                        </Container>
                    </div>
                )
            })}
        </div>
    )
}

export default Qoutes
