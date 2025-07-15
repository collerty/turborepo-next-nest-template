{ }:

let pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/f69ae4816bc1b501460ad2c0c63ed0cc4a9b876e.tar.gz") { overlays = [ (import (builtins.fetchTarball "https://github.com/railwayapp/nix-npm-overlay/archive/main.tar.gz")) ]; };
in with pkgs;
  let
    APPEND_LIBRARY_PATH = "${lib.makeLibraryPath [  ] }";
    myLibraries = writeText "libraries" ''
      export LD_LIBRARY_PATH="${APPEND_LIBRARY_PATH}:$LD_LIBRARY_PATH"
      
    '';
  in
    buildEnv {
      name = "f69ae4816bc1b501460ad2c0c63ed0cc4a9b876e-env";
      paths = [
        (runCommand "f69ae4816bc1b501460ad2c0c63ed0cc4a9b876e-env" { } ''
          mkdir -p $out/etc/profile.d
          cp ${myLibraries} $out/etc/profile.d/f69ae4816bc1b501460ad2c0c63ed0cc4a9b876e-env.sh
        '')
        bun nodejs_22 openssl
      ];
    }
