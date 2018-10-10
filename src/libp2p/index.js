'use strict'

const pify = require('pify')

const PeerInfo = pify(require('peer-info'))
const PeerId = pify(require('peer-id'))
const Node = require('./node')

async function createNode ({ identity, addrs, options }) {
  let id = {}
  const privKey = identity && identity.privKey ? identity.privKey : null
  if (!privKey) {
    id = await PeerId.create()
  } else {
    id = await PeerId.createFromJSON(identity)
  }

  const peerInfo = await PeerInfo.create(id)
  const peerIdStr = peerInfo.id.toB58String()

  addrs = addrs || []
  addrs.forEach((a) => peerInfo.multiaddrs.add(a))

  const node = new Node(peerInfo, options)
  node.peerId = peerIdStr

  return node
}

module.exports = createNode