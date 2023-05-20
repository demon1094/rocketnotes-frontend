import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function Header() {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  function handleSignOut() {
    navigation('/')
    signOut()
  }

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarURL} alt={user.name} />

        <div>
          <span>Bem vindo(a),</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}