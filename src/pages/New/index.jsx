import { useState } from 'react'
import { Container, Form } from './styles'

import { useNavigate } from 'react-router-dom'

import { ButtonText } from '../../components/ButtonText'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/Noteitem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { api } from '../../services/api'

export default function New() {
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')

  const [ links, setLinks ] = useState([])
  const [ newLink, setNewLink ] = useState('')

  const [ tags, setTags ] = useState([])
  const [ newTag, setNewTag ] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Título é obrigatório')
    }

    if (newTag) {
      return alert('Você deixou uma tag no campo para adicionar, mas não adicionou.')
    }

    if (newLink) {
      return alert('Você deixou um link no campo para adicionar, mas não adicionou.')
    }

    await api.post('/notes', {
      title,
      description,
      tags,
      links
    })

    alert('Nota criada com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText
              title="Voltar"
              onClick={handleBack}
            />
          </header>

          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem 
              placeholder="Novo link" 
              isNew
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            {
              tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <NoteItem
              placeholder="Novo marcador"
              isNew
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </Section>

          <Button 
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}