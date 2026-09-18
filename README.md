# Capão News - Documentação do WordPress

Este documento explica como o cliente vai inserir anúncios e parceiros no site usando plugins no WordPress, sem precisar mexer em código.

---

## 1. Objetivo

O site precisa ter duas áreas de conteúdo administráveis pelo painel do WordPress:

- Anúncios
- Parceiros

Esses itens serão exibidos automaticamente no layout do site, como na home e no rodapé.

A ideia é que o cliente consiga:

- criar novos anúncios
- criar novos parceiros
- inserir imagem ou logo
- adicionar link para o site ou página
- publicar e retirar itens sem depender de desenvolvedor

---

## 2. Plugins que serão usados

### 2.1 CPT UI

Plugin usado para criar tipos de conteúdo personalizados no WordPress.

Funciona assim:

- cria menus novos no painel administrativo
- permite criar itens como "Anúncios" e "Parceiros"
- deixa o cliente organizar o conteúdo do site com mais clareza

### 2.2 Advanced Custom Fields (ACF)

Plugin usado para criar campos personalizados em cada item.

Com ele, o cliente consegue preencher dados como:

- nome da marca
- imagem/logo
- link
- tipo de anúncio
- status ativo/inativo
- data final

---

## 3. O que precisa ser configurado no WordPress

### 3.1 Instalar os plugins

No painel do WordPress:

1. Vá em Plugins
2. Clique em Adicionar novo
3. Procure por: "Custom Post Type UI"
4. Instale e ative
5. Procure por: "Advanced Custom Fields"
6. Instale e ative

---

### 3.2 Criar o tipo de conteúdo "Anúncio"

No painel do WordPress:

1. Vá em CPT UI
2. Clique em Add/Edit Post Types
3. Clique em Add New
4. Preencha os campos:

- Post Type Slug: anuncio
- Plural Label: Anúncios
- Singular Label: Anúncio

5. Clique em Add Post Type

Isso cria um novo item no menu lateral do WordPress chamado "Anúncios".

---

### 3.3 Criar o tipo de conteúdo "Parceiro"

Faça o mesmo processo:

- Post Type Slug: parceiro
- Plural Label: Parceiros
- Singular Label: Parceiro

Clique em Add Post Type.

Isso cria um novo menu chamado "Parceiros".

---

### 3.4 Criar os campos personalizados

Agora vamos configurar os campos que serão usados dentro de cada item.

#### Para o tipo "Anúncio"

No painel do WordPress:

1. Vá em ACF
2. Clique em Grupos de campos
3. Clique em Adicionar novo
4. Nomeie o grupo: "Anúncio"
5. Adicione os campos abaixo:

Campo 1: Nome da marca
- Tipo: Texto
- Nome do campo: nome_da_marca

Campo 2: Link do anúncio
- Tipo: URL
- Nome do campo: link_do_anuncio

Campo 3: Imagem do anúncio
- Tipo: Imagem
- Nome do campo: imagem_do_anuncio

Campo 4: Tipo de anúncio
- Tipo: Seleção
- Nome do campo: tipo_de_anuncio
- Opções:
  - Patrocinador
  - Anúncio
  - Parceiro

Campo 5: Ativo
- Tipo: Caixa de seleção
- Nome do campo: ativo

Campo 6: Data final
- Tipo: Data
- Nome do campo: data_final

Depois configure a regra:

- Mostrar esse grupo quando o tipo de post for igual a Anúncio

Salve o grupo.

---

#### Para o tipo "Parceiro"

1. Vá em ACF
2. Clique em Grupos de campos
3. Clique em Adicionar novo
4. Nomeie o grupo: "Parceiro"
5. Adicione os seguintes campos:

Campo 1: Nome da empresa
- Tipo: Texto
- Nome do campo: nome_da_empresa

Campo 2: Link do parceiro
- Tipo: URL
- Nome do campo: link_do_parceiro

Campo 3: Logo do parceiro
- Tipo: Imagem
- Nome do campo: logo_do_parceiro

Campo 4: Ativo
- Tipo: Caixa de seleção
- Nome do campo: ativo

Configure a regra:

- Mostrar esse grupo quando o tipo de post for igual a Parceiro

Salve o grupo.

---

## 4. Como o cliente vai usar isso no painel

### 4.1 Inserir um anúncio

No painel do WordPress:

1. Vá em Anúncios
2. Clique em Adicionar novo
3. Preencha:
   - título do anúncio
   - nome da marca
   - link
   - imagem
   - tipo
   - status ativo
4. Clique em Publicar

Isso faz o anúncio aparecer no local do site em que ele foi programado para aparecer.

---

### 4.2 Inserir um parceiro

No painel do WordPress:

1. Vá em Parceiros
2. Clique em Adicionar novo
3. Preencha:
   - nome da empresa
   - logo
   - link
   - status ativo
4. Clique em Publicar

O parceiro aparece automaticamente no rodapé ou em outra área do layout, conforme a programação do tema.

---

## 5. Como o site exibe isso

Depois que o cliente publica os itens, o tema precisa buscar esses conteúdos e exibir na página.

O ideal é que o site leia automaticamente:

- anúncios ativos
- parceiros ativos
- imagem do anúncio/parceiro
- link da empresa
- tipo de mídia

Essa exibição pode acontecer em:

- home
- barra lateral
- rodapé
- bloco de apoiadores

---

## 6. Regras de uso recomendadas

### 6.1 Sempre manter os itens ativos

Para que apareçam no site, o campo "Ativo" deve estar marcado.

Se o cliente desmarcar esse campo, o item pode deixar de aparecer.

### 6.2 Usar imagens com boa qualidade

Para anúncios e parceiros, é importante usar arquivos nítidos e com boa proporção.

Recomendado:

- imagens em alta resolução
- sem distorção
- sem arquivos muito pesados

### 6.3 Usar links corretos

O campo de link deve apontar sempre para a página correta, por exemplo:

- site da empresa
- página de oferta
- página de campanha
- contato

---

## 7. Diferença entre anúncio e parceiro

### Anúncio

- usado para publicidade
- pode ter campanha, oferta ou destaque
- o conteúdo costuma ser mais comercial

### Parceiro

- usado para empresas ou instituições que apoiam o jornal
- geralmente tem logo + link
- visual mais institucional e discreto

---

## 8. Estrutura recomendada para o cliente

Para facilitar a gestão, o ideal é manter a seguinte organização:

- Anúncios
- Parceiros
- Apoiar o jornal

Assim, o cliente entende que:

- "Anúncios" = publicidade
- "Parceiros" = apoio institucional
- "Apoiar" = canal para quem quiser apoiar financeiramente ou por contato

---

## 9. Checklist final para o cliente

Antes de publicar, confirme:

- [ ] os plugins foram instalados
- [ ] os tipos de conteúdo foram criados
- [ ] os campos personalizados foram configurados
- [ ] o cliente sabe onde encontrar "Anúncios" e "Parceiros"
- [ ] imagens estão corretas
- [ ] links estão funcionando
- [ ] o item está marcado como ativo
- [ ] a publicação foi salva

---

## 10. Observação importante

A área de anúncios e parceiros só funciona corretamente quando:

- os tipos de conteúdo existem no WordPress
- os campos personalizados estão configurados
- o tema do site está lendo esses dados e exibindo no layout

Se os itens estiverem criados no painel, mas não aparecerem no site, normalmente o problema está na parte do tema que precisa renderizar esses dados.

---

## 11. Resumo simples

O cliente vai:

- instalar CPT UI e ACF
- criar os tipos "Anúncio" e "Parceiro"
- preencher imagem, link e categoria
- publicar no painel
- visualizar os blocos automaticamente na página

Isso torna o site fácil de manter e evita que o cliente precise depender de código para cada alteração.

---

## 12. Próximo passo

Depois desta configuração, o próximo passo é integrar esses dados ao tema para que eles apareçam automaticamente na home e no rodapé.

Se quiser, posso preparar também a segunda parte da documentação:

- código PHP do tema para mostrar os anúncios e parceiros
- exemplo de como o cliente vai usar cada tipo no painel
- instruções de manutenção mensal

