subdomains = Tenant.pluck(:subdomain)
Rails.application.config.subdomains = subdomains
