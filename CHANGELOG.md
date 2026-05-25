# Changelog

Todas as mudanças importantes do projecto EduMoz serão documentadas neste ficheiro.

---

# [0.2.0] - 2026-05-25

## ✨ Melhorias Gerais

- Melhor organização dos componentes do header
- Estrutura de autenticação refinada
- Melhor consistência visual entre componentes
- Melhorias de acessibilidade
- Melhor tipagem TypeScript
- Melhor reutilização de componentes
- Melhor organização de estados com Qwik Signals

---

## 🔐 Sistema de Utilizadores

### Adicionado

- Novo sistema de roles:
  - `student`
  - `parent`
  - `teacher`
  - `school`
  - `admin`

### Refactor

- Removido `CustomerType`
- Introduzido `UserRole`
- Padronização de todos os tipos de utilizador

### Novos tipos

```ts
User
StudentUser
ParentUser
TeacherUser
SchoolUser
AdminUser