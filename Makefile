WEBPKG  = packages/web

# Generic script command for package/jacana: make web-lint would lint the packages/jacana
pkg-%:
	(cd $(WEBPKG) && bun run $*)

pkg:
	(cd $(WEBPKG) && $(CMD))

# Add shadcn component: make scn NAME=""
scn:
	(cd $(WEBPKG) && bunx --bun shadcn@latest add $(NAME))

# Install npm packages to dependencies: make pkg-add PKGS=""
node-pkg-add:
	(cd $(WEBPKG) && bun add $(PKGS))

# Install npm packages to dev dependencies: make pkg-add PKGS=""
node-pkg-add-dev:
	(cd $(WEBPKG) && bun add $(PKGS) --dev)