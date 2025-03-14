{
  description = "A prisma monorepo project";

  # Nixpkgs & flake-utils input references
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/master";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
      nodePackages = pkgs.nodePackages;  # Access nodePackages through pkgs
    in {
      devShell = pkgs.mkShell {
        nativeBuildInputs = [
          pkgs.bashInteractive
          nodePackages.prisma
          pkgs.prisma-engines
        ];

        buildInputs = with pkgs; [
          nodePackages.npm
          nodejs-slim
          prisma-engines  # Ensure prisma-engines are available
        ];

        # Export the Prisma environment variables
        shellHook = with pkgs; ''
          export PRISMA_SCHEMA_ENGINE_BINARY="${prisma-engines}/bin/schema-engine"
          export PRISMA_QUERY_ENGINE_BINARY="${prisma-engines}/bin/query-engine"
          export PRISMA_QUERY_ENGINE_LIBRARY="${prisma-engines}/lib/libquery_engine.node"
          export PRISMA_FMT_BINARY="${prisma-engines}/bin/prisma-fmt"
        '';
      };
    });
}
