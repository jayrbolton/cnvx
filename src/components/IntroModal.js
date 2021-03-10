const { Component, h } = require('uzu')

const { Modal } = require('./Modal')

module.exports = { IntroModal }

function IntroModal () {
  const modal = Modal()
  return Component({
    modal,
    open () {
      this.modal.open()
      this._render()
    },
    view () {
      return h('div', [
        this.modal.view({
          title: 'Welcome to Polygram',
          content: content(),
          width: 48
        })
      ])
    }
  })
}

const EXAMPLES = [
  {
    name: 'Shimmering star',
    code: 'rl203XSTQh8EL1RbxiLCCpJCmob8e0eyHJxdF0Zz53E8ujrBAfg9IoMuna0DDt9a1FtgUJPYbKAGViBWFQMZEidogZ+gE+5JaQ28FdpJFvTaeOGV6YF7ux9Sb96arZwmtvIwlbXQqXxmsAtgp5rwHyjDBmanolghqR8Klhii4yVqaYe1bICXcX1Sz1ZKWiGpR72Xk+KD3nUCeMHAxc3iKJQRNWTS+FVugOAoEwRehe8WTvU5LhCxyG4z7/IZHfkKs3mmZrML4UM1njwuSZMB79J6RTefMtKoom/AxWFqfjFW/Zre/6c9uDmBF9kdddxky7F2xZpWrWiU6IPTCRyh8U7jZUJXeGD5Ga0Y4i+K6eGCYVocpZ0jnKvzHyNIru4=',
    imgSrc: 'images/shimmering-star.png'
  },
  {
    name: 'Polygon ripple',
    code: 'eJzNUk1Pg0AQ/SubMU1aJXVZCwduelAvXmriR0wPG1hk002XLNvU2vDfnWWBlqQmnIxceO8xX8ybA+wggXgRQQBFj/IK4QVjDHGK+GMVgHDvA+SQHKDg1b1UChJrtiJwdKktt1JvIMm5qrz2bI1ei4GyFrsBT7kSvkodQOlKVzJzneCGXJEnbot5rrQ2U1tNZ+SS0DnFJ0IkZ2RCFm4+XcomI6QU6ReiiA6TJbkmIXX5sQvZY8gixhCJJULayTn+0VJk+JFFUcsfjBD4T9SzO7XFaRlt6a0qC47h03Gzei10patmM02zpprnbbMTxTfsadsw7PirzCyaxpDjYl+EsRIX6hNQeNRGfuuN7SS37GMQzFkMrXoa2eqGZ5JvqibTOHPF2wl+R4yO4bRQarX/1BhZB394HWys85Ozzv9+HMcroMMb6Lk3pafdFYT/xlcanfe10Uf7mkqTKlxvvap/AEQ4PnU=',
    imgSrc: 'images/polygon-ripple.png'
  },
  {
    name: 'Light funnel',
    code: 'eJx9UstOwzAQ/JWwpwKhckIrqtzgAFy4FImHqh6sZkNWjZJiOyq06r+z67olqBHxwTuTHe9o7C2sIYOJUhBDeawKC9lMxbzmMSwE8I6yb6GAbAultvdUVZA502IscNo47aipO9SzM80Su8RCV3/wEnl6oSuLuxhWcrClXOaMeGyzIinZEjv64mKsosuIoosoEeb7hCnY0RRzyNS+fjCI7AfScfh5V7XoVQHfVqtSM6GGN8xYb9cfAE/alUNL9cDZwTmfr4ZKqYQLEpT6kPb9hyG9irRPEVz0Cq77BAeb/5tKjv2vlDu5y5EwHPELGkccvQ9GiMfG0Kap3YGSa/ltgsFEXVEY4LPzDV3RaYvROena7sPkTyh5Efgm1BG9B7QOFuXuJvL0kD5K1yH8SNYmoWRhwm9EkrafrTa4OYPdfPcDAn3HRQ==',
    imgSrc: 'images/light-funnel.png'
  },
  {
    name: 'Bending crystals',
    code: '',
    imgSrc: 'images/bending-crystals.png'
  },
  {
    name: 'Basic grid',
    code: 'eJxtkV9LwzAUxb9KuDDYZpxpXXD2TR/UF18m+IfRh9CmNCw0I82Yc+y7e9NktQUptPf8eu7N4eYEB8hWjFGo47dqIdswik9OofBiAwXQhLEcgfTgBBVkJ6hF+6S0hszZvaRero0TTplmgN6cNVsJWSV0G8lWHka6EFqGjjOFnZ/cqtIftMQAZqd8CSkHCt9YYBByRRSZEE7mJOEM+bHnr8LVi0obY6eK3BA+6z0VRl3LEp3TkWkSTPy/5hm+0yX+TTmPI56tlE04LpJHvZcj8KB3tUDCFkmXdE7YgnX5224ZXYrU7zroOHJAwshexoHJRX+o0uF1pahxl+/SOoU7DA0IXoxVP6ZxF+T3+2fCWHcQ6dAZuRWlEk0b9Irf3q889PcqP7txof7CGm/Lb0KLo7TXDM75+Red8qyA',
    imgSrc: 'images/basic-grid1.png'
  },
  {
    name: 'Spiral',
    code: 'eJx9kctqwzAQRX9FzCpuHVd2aijetYu2m25S6IPghbBlLCKsICmkqcm/d8ZW0hhCDH7cM9cjzVUPOygeOI+hDe/GQbGCHOJwlzFUhFZQQZxyXiKQBHpooOihFe5ZaQ2Ft1sZk1waL7wy3Rl699asJRSN0C6QtdxNdCW0HP84xLChzk7VtBAsMtxIZTZqUPc5R/lDX5yzW/YmfJtUxs0Uu2FJGuFztqCCitC3n/qc6i77GhxhKWt0K3bHcA0sZ3keKi9WShwHhqUJPOktbhYwjgAe9aYVRJIsZ3OGTcZ9umHwoXNG6Y469DsjY8OTDO3So/5UtccDylBjbh/SeoV5jT8geDVW/ZrOHxFl+W8CnnCaZMDn1mPBilqJjsL1bkbBIMdrKNFZyi8szVNK7Era0cn+PbVfDj0CPGcKVYu9tHMOh/LwB8AvuBU=',
    imgSrc: 'images/spiral1.png'
  },
  {
    name: 'Basic animation',
    code: 'eJzNkU9rhDAQxb/KMqe2ZJeJVFi8tYe25y30D4uHoBHDBpUkS7sVv3snGlcLFfZSKB6c90t4M5nXwgckW0QGZfgXFpI9MvpSBpkXe8iAccSUgPSghQKSFkphH5TWkDhzlMzLXe2EU3U1Q8/O1Ac5BwdJLQuhbdCZ0OG8Y9B4Y6ty3we2QBPUjfKCM/gkdItI8HSuChpgJ3PSPB71o5Gy+kHu9ZFaQBTHAdzpphREcOOJ7WcMNr3tQM5GMzZazVAw46N+VbmjbUJvTa99kcYpeiUkOICn2qivunIj8huYLkEEgc3v9dSIXInKr8bZq+vVzQo3iBhTseb+2K9fvvWmQ/1ONW3VP0KLkzRrhI79y/imbBbjm8ByfNFl8fE/jI//Gh9fju+y5CLo0u4bkU0eYA==',
    imgSrc: 'images/basic-rotation1.png'
  },
  {
    name: 'Sine wave',
    code: 'eJxdkU1PwzAMhv9K5dMGYbgdlVBucAAuXIbEh6YeojZVo0VtlWQao9p/x+4H61AP9fvYfmu7HRxA3iMKqMZ36UFuUdCTCchZbCEHESNmBDSDDkqQHVTKPxlrQQa314LlpgkqmKYGWSrrB/YWXLPTF2SnDxc6V1YPLicBLVt7U/CXYJ0ADdG0plc0A8lvipI0uo5MdBXFTI5E7hAJvapQrbypF8EvlpTGFSJy7cLcrpdM4pQ7Spp7owuQSb8yqWendc3OOOUf7V7PCh5sWymQsQDfb3RuH/RoMCODwZ/8b/BhikBHT0jTQd61C4YOMTQQeGmc+WnqMCE+0rkIaLMURjwvnRJOFUbVvu91/Fv05yz+ophuzQtbddTuBuGUnX4Bip6dGA==',
    imgSrc: 'images/sine.png'
  }
]

function content () {
  const examples = EXAMPLES.map(({ name, code, imgSrc }) => {
    return h('div.tc.pointer.grow.mb3.bg-black-50.pa2', {
      style: { width: '24%' },
    }, [
      h('div.mb1.b.white-80', name),
      h('img', { props: { src: imgSrc } })
    ])
  })
  return h('div', [
    h('p', 'Get started by loading a canvas below'),
    h('div.flex.justify-between.flex-wrap', examples)
  ])
}
