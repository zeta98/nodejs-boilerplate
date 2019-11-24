export const signIn = (req, res) => {
  const data = {
    token: 'fakeToken',
    session: 'fakeSession'
  }
  res.status(200).json(data).send()
}

export const signOut = async (req, res) => {
  res.status(204).send()
}
