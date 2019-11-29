import { qs } from '@okiba/dom'
import { hasTouch, hasPassiveEvents } from '@okiba/detect'

qs('#touch').innerText = hasTouch ? 'true' : 'false'
qs('#passive-events').innerText = hasPassiveEvents ? 'true' : 'false'
