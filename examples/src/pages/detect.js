import { qs } from '@okiba/dom'
import { hasTouch, hasPassiveEvents } from '../../../packages/detect'

qs('#touch').innerText = hasTouch ? 'true' : 'false'
qs('#passive-events').innerText = hasPassiveEvents ? 'true' : 'false'
