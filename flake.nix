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
      ];

      buildInputs = with pkgs; [
        nodejs_18
        postgresql_16
        bun
        nodejs-slim
        prisma-engines
      ];

      # Prisma environment variables (outside shellHook)
      PRISMA_SCHEMA_ENGINE_BINARY = "${pkgs.prisma-engines}/bin/schema-engine";
      PRISMA_QUERY_ENGINE_BINARY = "${pkgs.prisma-engines}/bin/query-engine";
      PRISMA_QUERY_ENGINE_LIBRARY = "${pkgs.prisma-engines}/lib/libquery_engine.node";
      PRISMA_FMT_BINARY = "${pkgs.prisma-engines}/bin/prisma-fmt";

      shellHook = with pkgs; ''
        echo "TurboDev version: $(turbo --version)"
      '';
    };

    });
}
