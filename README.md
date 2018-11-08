# kitsunet-js
> The kitsunet js implementation


### What is this?

This is the `kitsunet` client implementation. This includes both the command line executable as well as the browser client. The command line executable can be used a an RPC bridge that pulls slices from an Ethereum client and pushed them over to the kitsunet pubsub network - see examples bellow that show how to run the client for different purposes.

### Command line api

```bash
Kitsunet cmd client

Options:
  --version                 Show version number                        [boolean]
  --libp2p-addrs, -a        list of libp2p multiaddrs to listen on       [array]
  --libp2p-bootstrap, -a    list of libp2p bootstrap nodes               [array]
  --eth-addrs, -e           list of Ethereum addresses to track          [array]
  --rpc-url, -r             bridge rpc url <http[s]://host:port>      [required]
  --rpc-poll-interval       rpc poll interval in milliseconds   [default: 10000]
  --rpc-enable-tracker, -t  enable block tracker to propagate over libp2p
                            multicast                 [boolean] [default: false]
  --slice-bridge, -b        enable bridge mode - read slices from the rpc
                                                      [boolean] [default: false]
  --slice-path, -p          slice path                        [array] [required]
  --slice-depth, -d         slice depth                                 [string]
  --slice-file, -f          slice depth
  --identity, -i            json peer info file, containing the private and
                            public keys
  --config, -c              path to config file
  --help, -h                Show help                                  [boolean]
```

### Cli examples

#### Example 1

Running a node in bridge (`-b`) mode for slices `8e99` (`-p`) and account (`-e`) `0x6810e776880C02933D47DB1b9fc05908e5386b96` against RPC endpoint `localhost:8546` (`-r`) and block tracker mode (`-t`) enabled

```
kitsunet -a /ip4/127.0.0.1/tcp/33005/ws -a /ip4/127.0.0.1/tcp/33006 -b -d 10 -p 8e99 -e 0x6810e776880C02933D47DB1b9fc05908e5386b96 -r http://localhost:8546 -t
```
