import { qs } from '@okiba/core/dom'
import Component from '@okiba/core/component'
import SizesCache from '@okiba/ui/sizes-cache'
import EventManager from '@okiba/ui/event-manager'
import SmoothScroll from '@okiba/ui/smooth-scroll'
import ScrollManager from '@okiba/ui/scroll-manager'
import Cursor from '@okiba/ui/cursor'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  TextureLoader,
  Geometry,
  Vector3,
  PointsMaterial,
  AdditiveBlending,
  Points
} from 'three'

class Scene3D extends Component {
  constructor({ el }) {
    super({ el })
    this.init()
    this.progress = 0
    ScrollManager.on('scroll', this.onScroll)
    EventManager.on('raf', this.onRaf)
    EventManager.on('resize', this.onResize)
    EventManager.emit('resize')
  }

  init() {
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(75, SizesCache.window.innerWidth / SizesCache.window.innerHeight, 0.1, 2000)

    this.renderer = new WebGLRenderer()
    this.renderer.setSize(SizesCache.window.innerWidth, SizesCache.window.innerHeight)

    document.body.appendChild(this.renderer.domElement)
    Object.assign(this.renderer.domElement.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      zIndex: '-1'
    })

    const textureLoader = new TextureLoader()
    const texture = textureLoader.load('./assets/cloud-particle.png')
    const starsGeometry = new Geometry()

    for (let i = 0; i < 2000; i ++) {
      const star = new Vector3()
      star.x = 1000 - Math.random() * 2000
      star.y = 1000 - Math.random() * 2000
      star.z = 1000 - Math.random() * 2000

      starsGeometry.vertices.push(star)
    }

    const starsMaterial = new PointsMaterial({
      size: 15.0,
      map: texture,
      color: 0x888888,
      blending: AdditiveBlending,
      depthTest: false,
      transparent: true
    })

    this.starField = new Points(starsGeometry, starsMaterial)

    this.scene.add(this.starField)
  }

  onRaf = () =>{
    this.camera.position.x = this.progress * 500
    this.camera.position.y = this.progress * 500
    this.starField.rotation.y += 0.001
    this.renderer.render(this.scene, this.camera)
  }

  onScroll = ({progress}) => {
    this.progress = progress
  }

  onResize = () => {
    this.renderer.setSize(SizesCache.window.width, SizesCache.window.height, false)
    this.camera.aspect = SizesCache.window.width /  SizesCache.window.height
    this.camera.updateProjectionMatrix()
  }
}

const app = new Component({
  el: qs('#app'),
  components: [
    {
      ghost: true,
      type: SmoothScroll
    },
    {
      ghost: true,
      type: Scene3D
    },
    {
      selector: '#cursor',
      type: Cursor,
      options: {
        inertia: .2
      }
    }
  ]
})
